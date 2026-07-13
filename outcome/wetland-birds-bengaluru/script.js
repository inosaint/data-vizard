const DATA_URLS = [
  "../../data/wetland-birds-bengaluru/curated/migration-pulse-evidence.json",
  "/data/wetland-birds-bengaluru/curated/migration-pulse-evidence.json",
];

const PHOTO_URLS = [
  "../../data/wetland-birds-bengaluru/curated/species-wikipedia.json",
  "/data/wetland-birds-bengaluru/curated/species-wikipedia.json",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const monthShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const chart = document.querySelector("#chart");
const readout = document.querySelector("#chartReadout");
const birdsPanelTitle = document.querySelector("#birdsPanelTitle");
const birdsPanelNote = document.querySelector("#birdsPanelNote");
const birdsList = document.querySelector("#birdsList");
const playButton = document.querySelector("#playButton");
const playButtonText = document.querySelector("#playButtonText");

let birdProfiles = [];
let monthSeries = [];
let monthButtons = new Map();
let selectedMonthIndex = 0;
let playTimer = null;

function phaseFor(month) {
  if ([10, 11, 12, 1, 2].includes(month)) return "higher-activity month";
  if ([6, 7].includes(month)) return "lower-record month";
  return "middle month";
}

function toneFor(month) {
  if ([10, 11, 12, 1, 2].includes(month)) return "winter";
  if ([6, 7].includes(month)) return "low";
  return "shoulder";
}

function monthLine(item) {
  if (item.rank === 1) return `${item.name}: highest selected-record month.`;
  if (item.isLow) return `${item.name}: lowest selected-record month.`;
  if (item.indexValue >= 75) return `${item.name}: part of the winter-leaning cluster.`;
  if (item.indexValue <= 45) return `${item.name}: below the winter cluster.`;
  return `${item.name}: middle of the yearly pattern.`;
}

function scoreStatus(score) {
  if (score === 100) return "At its monthly high.";
  if (score >= 90) return "Near its monthly high.";
  if (score >= 75) return "Close to its higher months.";
  return "Still among the closest matches here.";
}

function numberWord(value) {
  return ["Zero", "One", "Two", "Three", "Four"][value] || String(value);
}

async function loadJson(urls, label) {
  const errors = [];
  for (const url of urls) {
    try {
      const response = await fetch(url, { cache: "no-store" });
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
      return response.json();
    } catch (error) {
      errors.push(`${url}: ${error.message}`);
    }
  }
  throw new Error(`Could not load ${label}. Tried ${errors.join(" | ")}`);
}

async function loadOptionalJson(urls, label) {
  try {
    return await loadJson(urls, label);
  } catch (error) {
    console.warn(error);
    return [];
  }
}

function buildSeries(evidence) {
  const raw = evidence.aggregate_monthly_counts || {};
  const counts = months.map((name, index) => ({
    month: index + 1,
    name,
    shortName: monthShort[index],
    value: Number(raw[String(index + 1)] || 0),
  }));
  const peak = Math.max(1, ...counts.map((item) => item.value));
  const low = Math.min(...counts.map((item) => item.value));
  const rankedValues = [...counts].sort((a, b) => b.value - a.value);

  return counts.map((item) => ({
    ...item,
    indexValue: Math.round((item.value / peak) * 100),
    rank: rankedValues.findIndex((ranked) => ranked.month === item.month) + 1,
    isLow: item.value === low,
    phase: phaseFor(item.month),
    tone: toneFor(item.month),
  }));
}

function buildPhotoLookup(photoData) {
  return new Map(
    (photoData || [])
      .filter((item) => item.common_name && item.wikipedia?.image_url)
      .map((item) => [item.common_name.toLowerCase(), item])
  );
}

function buildBirdProfiles(evidence, photoData) {
  const photoLookup = buildPhotoLookup(photoData);

  return (evidence.selected_species || [])
    .map((species) => {
      const monthlyCounts = months.map((_, index) => Number(species.monthly_counts?.[String(index + 1)] || 0));
      const peak = Math.max(1, ...monthlyCounts);
      const peakMonths = monthlyCounts
        .map((value, index) => (value === peak ? months[index] : null))
        .filter(Boolean);
      const photo = photoLookup.get(species.common_name.toLowerCase());

      return {
        commonName: species.common_name,
        scientificName: species.scientific_name,
        photoUrl: photo?.wikipedia?.image_url || "",
        wikiUrl: photo?.wikipedia?.wikipedia_url || "",
        photoCredit: photo?.wikipedia?.image_author || "",
        photoLicense: photo?.wikipedia?.image_license || "",
        monthlyCounts,
        peak,
        peakMonths,
      };
    })
    .filter((species) => species.commonName && species.monthlyCounts.some((value) => value > 0));
}

function birdsForMonth(month) {
  return birdProfiles
    .map((species) => {
      const count = species.monthlyCounts[month - 1] || 0;
      const score = Math.round((count / species.peak) * 100);

      return {
        ...species,
        count,
        score,
      };
    })
    .sort((a, b) => b.score - a.score || b.count - a.count)
    .slice(0, 4);
}

function birdPanelNote(monthItem, birds) {
  if (!birds.length) return `No selected species have records for ${monthItem.name} in this dataset.`;

  const peakCount = birds.filter((bird) => bird.score === 100).length;
  if (peakCount > 0) {
    if (peakCount === 1) return "One selected species reaches its monthly high here.";
    return `${numberWord(peakCount)} selected species reach their monthly high here.`;
  }

  if (birds[0].score < 75) {
    return `${monthItem.name} sits below the winter cluster; these are the nearest species-level matches.`;
  }

  return `Species nearest to their own monthly high.`;
}

function renderBirdPanel(monthItem) {
  const birds = birdsForMonth(monthItem.month);

  birdsPanelTitle.textContent = `Closest to their own peak in ${monthItem.name}`;
  birdsPanelNote.textContent = birdPanelNote(monthItem, birds);

  if (!birds.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "No bird-level month records are available for this selection.";
    birdsList.replaceChildren(empty);
    return;
  }

  const cards = birds.map((bird) => {
    const card = document.createElement("article");
    const photo = bird.photoUrl ? document.createElement("img") : document.createElement("span");
    const copy = document.createElement("div");
    const name = bird.wikiUrl ? document.createElement("a") : document.createElement("span");
    const status = document.createElement("p");
    const peak = document.createElement("p");

    card.className = "bird-card";
    card.setAttribute(
      "aria-label",
      `${bird.commonName}. ${scoreStatus(bird.score)}`
    );
    if (bird.photoUrl) {
      photo.className = "bird-photo";
      photo.src = bird.photoUrl;
      photo.alt = bird.commonName;
      photo.loading = "lazy";
      photo.decoding = "async";
      photo.addEventListener("error", () => {
        const fallback = document.createElement("span");
        fallback.className = "bird-photo bird-photo-fallback";
        fallback.setAttribute("aria-hidden", "true");
        photo.replaceWith(fallback);
      });
    } else {
      photo.className = "bird-photo bird-photo-fallback";
      photo.setAttribute("aria-hidden", "true");
    }
    copy.className = "bird-copy";
    name.className = "bird-name";
    if (bird.wikiUrl) {
      name.href = bird.wikiUrl;
      name.target = "_blank";
      name.rel = "noreferrer";
    }
    name.textContent = bird.commonName;
    status.className = "bird-status";
    status.textContent = scoreStatus(bird.score);
    peak.className = "bird-peak";
    peak.textContent = `Highest month: ${bird.peakMonths.join(", ")}`;

    copy.append(name, status, peak);
    card.append(photo, copy);
    return card;
  });

  birdsList.replaceChildren(...cards);
}

function renderChart(series) {
  monthSeries = series;
  const chartGrid = document.createElement("div");
  chartGrid.className = "chart-grid";

  const axis = document.createElement("div");
  axis.className = "axis-labels";
  axis.innerHTML = `
    <span>More</span>
    <span></span>
    <span></span>
    <span>Fewer</span>
  `;

  const bars = document.createElement("div");
  bars.className = "bars";
  monthButtons = new Map();

  series.forEach((item) => {
    const column = document.createElement("button");
    const bar = document.createElement("span");
    const label = document.createElement("span");

    column.type = "button";
    column.className = `month-column is-${item.tone}`;
    const ariaValue = item.rank === 1 ? "reference month" : `relative index ${item.indexValue} where January is 100`;
    column.setAttribute("aria-label", `${item.name}: ${ariaValue}, ${item.phase}`);
    column.setAttribute("aria-pressed", "false");
    column.style.setProperty("--height", `${item.indexValue}%`);
    column.style.setProperty("--height-px", `${Math.max(26, Math.round(item.indexValue * 2.45))}px`);

    bar.className = "month-bar";
    label.className = "month-label";
    label.textContent = item.shortName;

    column.append(bar, label);
    column.addEventListener("click", () => setSelectedMonth(item));
    column.addEventListener("focus", () => setSelectedMonth(item));
    monthButtons.set(item.month, column);
    bars.append(column);
  });

  chartGrid.append(axis, bars);
  chart.replaceChildren(chartGrid);

  const peakMonth = series.find((item) => item.rank === 1);
  setSelectedMonth(peakMonth);
}

function setReadout(item) {
  readout.textContent = monthLine(item);
}

function setSelectedMonth(item) {
  if (!item) return;

  selectedMonthIndex = monthSeries.findIndex((monthItem) => monthItem.month === item.month);
  if (selectedMonthIndex < 0) selectedMonthIndex = 0;
  setReadout(item);
  monthButtons.forEach((button, month) => {
    const isSelected = month === item.month;
    button.classList.toggle("is-selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });
  renderBirdPanel(item);
}

function setPlaying(isPlaying) {
  if (!playButton || !playButtonText) return;

  playButton.setAttribute("aria-pressed", String(isPlaying));
  playButton.setAttribute("aria-label", isPlaying ? "Pause month animation" : "Play through the months");
  playButtonText.textContent = isPlaying ? "Pause" : "Play";
  playButton.classList.toggle("is-playing", isPlaying);
}

function stopPlayback() {
  if (playTimer !== null) {
    window.clearInterval(playTimer);
    playTimer = null;
  }
  setPlaying(false);
}

function advanceMonth() {
  if (!monthSeries.length) return;

  selectedMonthIndex = (selectedMonthIndex + 1) % monthSeries.length;
  setSelectedMonth(monthSeries[selectedMonthIndex]);
}

function startPlayback() {
  if (playTimer !== null || !monthSeries.length) return;

  advanceMonth();
  playTimer = window.setInterval(advanceMonth, 1700);
  setPlaying(true);
}

function togglePlayback(event) {
  event?.preventDefault();

  if (playTimer !== null) {
    stopPlayback();
  } else {
    startPlayback();
  }
}

async function init() {
  const [evidence, photoData] = await Promise.all([
    loadJson(DATA_URLS, "evidence JSON"),
    loadOptionalJson(PHOTO_URLS, "species photo metadata"),
  ]);
  birdProfiles = buildBirdProfiles(evidence, photoData);
  renderChart(buildSeries(evidence));
  playButton?.addEventListener("click", togglePlayback);
}

init().catch((error) => {
  chart.replaceChildren();
  const message = document.createElement("p");
  message.className = "load-error";
  message.textContent = "The evidence file could not be loaded. Refresh the page once, or run the preview from the repository root on port 8787.";
  chart.append(message);
  console.error(error);
});
