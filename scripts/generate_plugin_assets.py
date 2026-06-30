#!/usr/bin/env python3
"""Generate Data Vizard plugin directory PNG assets."""

from __future__ import annotations

import argparse
from pathlib import Path
import shutil
import textwrap

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
ASSET_DIR = ROOT / "plugins" / "data-vizard" / "assets"
SOURCE_LOGO = ASSET_DIR / "wizard-chart-logo-source.png"

BLUE = "#2563EB"
INK = "#0F172A"
MINT = "#14B8A6"
AMBER = "#F59E0B"
ROSE = "#F43F5E"
WHITE = "#FFFFFF"
PAPER = "#F8FAFC"
LINE = "#CBD5E1"
SLATE = "#475569"


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    names = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/System/Library/Fonts/Supplemental/Helvetica.ttc",
        "/Library/Fonts/Arial.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ]
    for name in names:
        try:
            return ImageFont.truetype(name, size=size)
        except OSError:
            continue
    return ImageFont.load_default()


def text(draw: ImageDraw.ImageDraw, xy: tuple[int, int], value: str, size: int, fill: str, bold: bool = False) -> None:
    draw.text(xy, value, font=font(size, bold), fill=fill)


def centered_text(
    draw: ImageDraw.ImageDraw,
    box: tuple[int, int, int, int],
    value: str,
    size: int,
    fill: str,
    bold: bool = False,
) -> None:
    face = font(size, bold)
    bbox = draw.textbbox((0, 0), value, font=face)
    width = bbox[2] - bbox[0]
    height = bbox[3] - bbox[1]
    x = box[0] + (box[2] - box[0] - width) / 2
    y = box[1] + (box[3] - box[1] - height) / 2 - bbox[1]
    draw.text((x, y), value, font=face, fill=fill)


def multiline(
    draw: ImageDraw.ImageDraw,
    xy: tuple[int, int],
    value: str,
    size: int,
    fill: str,
    width: int,
    line_spacing: int = 8,
    bold: bool = False,
) -> None:
    face = font(size, bold)
    y = xy[1]
    for paragraph in value.split("\n"):
        for line in textwrap.wrap(paragraph, width=width):
            draw.text((xy[0], y), line, font=face, fill=fill)
            bbox = draw.textbbox((xy[0], y), line, font=face)
            y += bbox[3] - bbox[1] + line_spacing


def rounded(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], fill: str, outline: str | None = None, width: int = 1, radius: int = 22) -> None:
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def copy_source_logo(source: Path) -> None:
    ASSET_DIR.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(source, SOURCE_LOGO)


def source_logo(size: int, circular: bool = False) -> Image.Image:
    if not SOURCE_LOGO.exists():
        raise FileNotFoundError(
            f"Missing source logo at {SOURCE_LOGO}. "
            "Run scripts/generate_plugin_assets.py --source /path/to/logo.png once."
        )

    logo = Image.open(SOURCE_LOGO).convert("RGBA").resize((size, size), Image.Resampling.LANCZOS)
    if not circular:
        return logo

    mask = Image.new("L", (size, size), 0)
    mask_draw = ImageDraw.Draw(mask)
    inset = max(1, size // 72)
    mask_draw.ellipse((inset, inset, size - inset, size - inset), fill=255)
    logo.putalpha(mask)
    return logo


def make_icon() -> None:
    source_logo(512).convert("RGB").save(ASSET_DIR / "icon.png")


def make_logo() -> None:
    source_logo(512).convert("RGB").save(ASSET_DIR / "logo.png")


def make_logo_dark() -> None:
    img = Image.new("RGB", (512, 512), INK)
    mark = source_logo(444, circular=True)
    img.paste(mark, (34, 34), mark)
    img.save(ASSET_DIR / "logo-dark.png")


def card(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], heading: str, body: str, color: str) -> None:
    rounded(draw, box, WHITE, LINE, radius=20)
    draw.rounded_rectangle((box[0], box[1], box[2], box[1] + 12), radius=6, fill=color)
    text(draw, (box[0] + 28, box[1] + 34), heading, 32, INK, True)
    multiline(draw, (box[0] + 28, box[1] + 86), body, 21, SLATE, 24)


def make_workflow_screenshot() -> None:
    img = Image.new("RGB", (1600, 1000), PAPER)
    draw = ImageDraw.Draw(img)
    text(draw, (72, 58), "Data Vizard workflow", 56, INK, True)
    text(draw, (76, 132), "A staged path from raw data to a verified HTML story.", 28, SLATE)
    rounded(draw, (70, 205, 1530, 850), WHITE, LINE, radius=28)

    stages = [
        ("Intake", "Clarify audience, source, rights, and useful project shape.", BLUE),
        ("Curate", "Profile, clean, join, reshape, and document the data.", MINT),
        ("Analyze", "Find patterns, caveats, anomalies, and story options.", AMBER),
        ("Narrate", "Turn evidence into sections, titles, annotations, and caveats.", ROSE),
        ("Design", "Build and verify an accessible, polished HTML visualization.", "#7C3AED"),
    ]
    x = 110
    for title, body, color in stages:
        card(draw, (x, 260, x + 260, 515), title, body, color)
        x += 285

    rounded(draw, (115, 595, 720, 795), "#EFF6FF", "#BFDBFE", radius=22)
    text(draw, (150, 630), "Decision gates", 33, INK, True)
    multiline(draw, (150, 682), "No silent jumps: the user chooses the story direction, visual approach, and final scope.", 24, SLATE, 47)

    rounded(draw, (790, 595, 1485, 795), "#F8FAFC", LINE, radius=22)
    text(draw, (825, 630), "Project ledger", 33, INK, True)
    rows = [("Data", "Ready"), ("Analysis", "Needs choice"), ("Narrative", "Queued"), ("HTML", "Queued")]
    for i, (name, state) in enumerate(rows):
        y = 690 + i * 28
        draw.rectangle((828, y + 7, 966, y + 9), fill="#CBD5E1")
        text(draw, (990, y), name, 22, INK, True)
        text(draw, (1170, y), state, 22, MINT if state == "Ready" else SLATE)

    img.save(ASSET_DIR / "screenshot-workflow.png")


def make_output_screenshot() -> None:
    img = Image.new("RGB", (1600, 1000), "#F1F5F9")
    draw = ImageDraw.Draw(img)
    rounded(draw, (56, 52, 1544, 918), WHITE, LINE, radius=26)
    rounded(draw, (96, 96, 662, 842), "#0B1220", radius=22)
    text(draw, (135, 140), "Snow day demand", 49, WHITE, True)
    multiline(draw, (136, 220), "An HTML data story can combine copy, caveats, annotations, maps, and chart interaction in one verified artifact.", 25, "#CBD5E1", 36)
    draw.rounded_rectangle((136, 430, 560, 690), radius=16, fill="#111827", outline="#334155", width=2)
    for i, height in enumerate([90, 120, 160, 110, 210, 260, 150]):
        x = 170 + i * 52
        draw.rounded_rectangle((x, 650 - height, x + 28, 650), radius=10, fill=MINT if i < 4 else ROSE)
    text(draw, (136, 735), "Annotated and ready to share.", 27, WHITE, True)

    rounded(draw, (735, 112, 1488, 438), "#EFF6FF", "#BFDBFE", radius=22)
    text(draw, (780, 150), "Interactive chart surface", 36, INK, True)
    points = [(820, 350), (900, 290), (980, 318), (1060, 230), (1140, 255), (1220, 180), (1300, 205), (1380, 145)]
    draw.line(points, fill=BLUE, width=7, joint="curve")
    for x, y in points:
        draw.ellipse((x - 9, y - 9, x + 9, y + 9), fill=BLUE)
    text(draw, (790, 372), "Hover, focus, and selected states are planned before build.", 23, SLATE)

    rounded(draw, (735, 490, 1115, 825), "#F8FAFC", LINE, radius=22)
    text(draw, (775, 530), "Caveats", 32, INK, True)
    multiline(draw, (775, 590), "The story states what the data can and cannot prove, and keeps source notes close to claims.", 24, SLATE, 27)
    rounded(draw, (1160, 490, 1488, 825), "#ECFDF5", "#99F6E4", radius=22)
    text(draw, (1198, 530), "Artifact", 32, INK, True)
    centered_text(draw, (1190, 612, 1460, 720), "index.html", 44, "#065F46", True)
    text(draw, (1210, 746), "Self-contained output", 24, "#0F766E")

    img.save(ASSET_DIR / "screenshot-output.png")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Generate Data Vizard plugin directory PNG assets.")
    parser.add_argument(
        "--source",
        type=Path,
        help="Optional source logo image to copy into the plugin assets before generating variants.",
    )
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    ASSET_DIR.mkdir(parents=True, exist_ok=True)
    if args.source:
        copy_source_logo(args.source)
    make_icon()
    make_logo()
    make_logo_dark()
    make_workflow_screenshot()
    make_output_screenshot()
    print(f"Wrote plugin assets to {ASSET_DIR}")


if __name__ == "__main__":
    main()
