#!/usr/bin/env python3
"""Build hourly NYC yellow taxi + weather workshop dataset for January 2026."""

from __future__ import annotations

import json
from pathlib import Path

import pandas as pd


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "data" / "nyc-taxi-weather-jan-2026"
RAW = OUT / "raw"
CURATED = OUT / "curated"

TAXI_FILE = RAW / "yellow_tripdata_2026-01.parquet"
WEATHER_FILE = RAW / "open_meteo_nyc_hourly_2026-01.json"


def weather_label(code: int | float | None) -> str:
    if pd.isna(code):
        return "unknown"
    code = int(code)
    if code == 0:
        return "clear"
    if code in {1, 2, 3}:
        return "cloudy"
    if code in {45, 48}:
        return "fog"
    if code in {51, 53, 55, 56, 57}:
        return "drizzle"
    if code in {61, 63, 65, 66, 67, 80, 81, 82}:
        return "rain"
    if code in {71, 73, 75, 77, 85, 86}:
        return "snow"
    if code in {95, 96, 99}:
        return "storm"
    return "other"


def load_weather() -> pd.DataFrame:
    payload = json.loads(WEATHER_FILE.read_text())
    hourly = pd.DataFrame(payload["hourly"])
    hourly["pickup_hour"] = pd.to_datetime(hourly["time"])
    hourly = hourly.drop(columns=["time"])
    hourly = hourly.rename(
        columns={
            "temperature_2m": "temperature_f",
            "precipitation": "precipitation_in",
            "rain": "rain_in",
            "snowfall": "snowfall_in",
            "wind_speed_10m": "wind_speed_mph",
        }
    )
    hourly["weather_label"] = hourly["weather_code"].map(weather_label)
    hourly["has_precipitation"] = hourly["precipitation_in"].fillna(0) > 0
    hourly["has_rain"] = hourly["rain_in"].fillna(0) > 0
    hourly["has_snow"] = hourly["snowfall_in"].fillna(0) > 0
    return hourly


def load_taxi() -> pd.DataFrame:
    columns = [
        "tpep_pickup_datetime",
        "tpep_dropoff_datetime",
        "passenger_count",
        "trip_distance",
        "PULocationID",
        "DOLocationID",
        "payment_type",
        "fare_amount",
        "tip_amount",
        "total_amount",
        "Airport_fee",
        "cbd_congestion_fee",
    ]
    df = pd.read_parquet(TAXI_FILE, columns=columns)
    df["pickup_at"] = pd.to_datetime(df["tpep_pickup_datetime"])
    df["dropoff_at"] = pd.to_datetime(df["tpep_dropoff_datetime"])
    start = pd.Timestamp("2026-01-01")
    end = pd.Timestamp("2026-02-01")
    df = df[(df["pickup_at"] >= start) & (df["pickup_at"] < end)].copy()
    df["pickup_hour"] = df["pickup_at"].dt.floor("h")
    df["trip_duration_min"] = (df["dropoff_at"] - df["pickup_at"]).dt.total_seconds() / 60
    df["is_valid_trip"] = (
        df["trip_duration_min"].between(1, 180, inclusive="both")
        & df["trip_distance"].between(0, 100, inclusive="both")
        & df["total_amount"].between(0, 1000, inclusive="both")
    )
    df["is_airport_fee_trip"] = df["Airport_fee"].fillna(0) > 0
    return df


def aggregate_hourly(taxi: pd.DataFrame, weather: pd.DataFrame) -> pd.DataFrame:
    raw = taxi.groupby("pickup_hour", as_index=False).agg(raw_trip_count=("pickup_at", "size"))
    valid = taxi[taxi["is_valid_trip"]].groupby("pickup_hour", as_index=False).agg(
        valid_trip_count=("pickup_at", "size"),
        avg_trip_distance_miles=("trip_distance", "mean"),
        median_trip_distance_miles=("trip_distance", "median"),
        avg_trip_duration_min=("trip_duration_min", "mean"),
        avg_fare_amount=("fare_amount", "mean"),
        avg_tip_amount=("tip_amount", "mean"),
        avg_total_amount=("total_amount", "mean"),
        airport_fee_trip_count=("is_airport_fee_trip", "sum"),
        card_payment_trip_count=("payment_type", lambda s: int((s == 1).sum())),
    )
    hourly = weather.merge(raw, on="pickup_hour", how="left").merge(valid, on="pickup_hour", how="left")
    count_cols = [
        "raw_trip_count",
        "valid_trip_count",
        "airport_fee_trip_count",
        "card_payment_trip_count",
    ]
    hourly[count_cols] = hourly[count_cols].fillna(0).astype(int)
    hourly["valid_trip_share"] = hourly["valid_trip_count"] / hourly["raw_trip_count"].where(
        hourly["raw_trip_count"] > 0
    )
    hourly["date"] = hourly["pickup_hour"].dt.date.astype(str)
    hourly["hour"] = hourly["pickup_hour"].dt.hour
    hourly["day_name"] = hourly["pickup_hour"].dt.day_name()
    hourly["is_weekend"] = hourly["day_name"].isin(["Saturday", "Sunday"])
    ordered = [
        "pickup_hour",
        "date",
        "hour",
        "day_name",
        "is_weekend",
        "raw_trip_count",
        "valid_trip_count",
        "valid_trip_share",
        "temperature_f",
        "precipitation_in",
        "rain_in",
        "snowfall_in",
        "wind_speed_mph",
        "weather_code",
        "weather_label",
        "has_precipitation",
        "has_rain",
        "has_snow",
        "avg_trip_distance_miles",
        "median_trip_distance_miles",
        "avg_trip_duration_min",
        "avg_fare_amount",
        "avg_tip_amount",
        "avg_total_amount",
        "airport_fee_trip_count",
        "card_payment_trip_count",
    ]
    return hourly[ordered]


def write_notes(hourly: pd.DataFrame, taxi: pd.DataFrame) -> None:
    notes = f"""# NYC Taxi + Weather Hourly Dataset

## Scope

- Yellow Taxi trip records: January 2026
- Weather source: Open-Meteo Historical Weather API for NYC coordinates
- Grain: one row per local NYC pickup hour
- Rows: {len(hourly)}

## Sources

- Taxi: https://www.nyc.gov/site/tlc/about/tlc-trip-record-data.page
- Weather: https://open-meteo.com/en/docs/historical-weather-api

## Curator Notes

- `raw_trip_count` counts all rows with pickup timestamps inside January 2026.
- `valid_trip_count` applies transparent quality filters: trip duration 1-180 minutes, trip distance 0-100 miles, and total amount 0-1000 USD.
- Weather values are reanalysis/model-derived Open-Meteo estimates for the requested NYC coordinate, not station observations.
- Payment tips can understate true tips because cash tips are not always captured the same way as card tips.

## Basic Counts

- Raw January pickup rows: {len(taxi)}
- Valid-trip rows: {int(taxi["is_valid_trip"].sum())}
- Hours covered: {hourly["pickup_hour"].min()} to {hourly["pickup_hour"].max()}
"""
    (CURATED / "README.md").write_text(notes)


def main() -> None:
    CURATED.mkdir(parents=True, exist_ok=True)
    weather = load_weather()
    taxi = load_taxi()
    hourly = aggregate_hourly(taxi, weather)
    hourly.to_csv(CURATED / "nyc_yellow_taxi_weather_hourly_2026-01.csv", index=False)
    hourly.to_parquet(CURATED / "nyc_yellow_taxi_weather_hourly_2026-01.parquet", index=False)
    write_notes(hourly, taxi)
    print(f"wrote {len(hourly)} hourly rows")
    print(CURATED / "nyc_yellow_taxi_weather_hourly_2026-01.csv")


if __name__ == "__main__":
    main()
