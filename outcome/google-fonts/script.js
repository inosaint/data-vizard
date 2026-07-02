const detailName = document.getElementById("detail-name");
const detailCount = document.getElementById("detail-count");
const detailContext = document.getElementById("detail-context");
const detailVariants = document.getElementById("detail-variants");
const detailCategory = document.getElementById("detail-category");
const detailSpread = document.getElementById("detail-spread");
const mixChart = document.getElementById("mix-chart");
const majorTier = document.getElementById("major-tier");
const middleTier = document.getElementById("middle-tier");
const tailTier = document.getElementById("tail-tier");
const notesDialog = document.getElementById("notes-dialog");
const openNotesButton = document.getElementById("open-notes");

const categoryOrder = [
  ["sansSerif", "sans-serif", "#b6402c"],
  ["serif", "serif", "#2750bf"],
  ["display", "display", "#bd8d2f"],
  ["handwriting", "handwriting", "#6f7e34"],
  ["monospace", "monospace", "#126c72"]
];

let lockedSubset = "vietnamese";
let coverageData;

function sentenceCaseSubset(subset) {
  return subset.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

function strongestCategory(entry) {
  return categoryOrder
    .map(([key, label]) => ({ label, count: entry.categoryMix[key] }))
    .sort((a, b) => b.count - a.count)[0];
}

function categorySpread(entry) {
  return Object.values(entry.categoryMix).filter((count) => count > 0).length;
}

function detailContextLabel(entry, stats) {
  if (entry.subset === "latin") return "Near-universal base";
  if (entry.subset === "latin-ext") return "Second broad tier";
  if (entry.subset === stats.thirdTierSubset) return "First major drop";
  if (entry.fontCount <= 2) return "Specialist sliver";
  if (entry.fontCount <= 10) return "Thin tail";
  return "Middle tier";
}

function tierColor(entry) {
  if (entry.fontCount > 1000) return "#b6402c";
  if (entry.fontCount > 200) return "#2750bf";
  if (entry.fontCount > 40) return "#bd8d2f";
  if (entry.fontCount > 10) return "#6f7e34";
  return "#126c72";
}

function tintColor(entry, alpha) {
  if (entry.fontCount > 1000) return `rgba(182, 64, 44, ${alpha})`;
  if (entry.fontCount > 200) return `rgba(39, 80, 191, ${alpha})`;
  if (entry.fontCount > 40) return `rgba(189, 141, 47, ${alpha})`;
  if (entry.fontCount > 10) return `rgba(111, 126, 52, ${alpha})`;
  return `rgba(18, 108, 114, ${alpha})`;
}

function renderMix(entry) {
  const max = Math.max(...categoryOrder.map(([key]) => entry.categoryMix[key]), 1);
  mixChart.innerHTML = "";

  categoryOrder.forEach(([key, label, color]) => {
    const row = document.createElement("div");
    row.className = "mix-row";

    const labelNode = document.createElement("span");
    labelNode.className = "mix-label";
    labelNode.textContent = label;

    const bar = document.createElement("div");
    bar.className = "mix-bar";

    const fill = document.createElement("span");
    fill.className = "mix-fill";
    fill.style.setProperty("--width", `${(entry.categoryMix[key] / max) * 100}%`);
    fill.style.setProperty("--fill", color);
    bar.appendChild(fill);

    const value = document.createElement("span");
    value.className = "mix-value";
    value.textContent = entry.categoryMix[key];

    row.append(labelNode, bar, value);
    mixChart.append(row);
  });
}

function updateDetail(entry, stats) {
  detailName.textContent = sentenceCaseSubset(entry.subset);
  detailCount.textContent = entry.fontCount.toLocaleString();
  detailContext.textContent = detailContextLabel(entry, stats);
  detailVariants.textContent = entry.avgVariantCount.toFixed(2);
  detailCategory.textContent = strongestCategory(entry).label;
  detailSpread.textContent = `${categorySpread(entry)} categories`;
  renderMix(entry);
}

function setActive(subset) {
  document.querySelectorAll("[data-subset]").forEach((node) => {
    const active = node.dataset.subset === subset;
    node.classList.toggle("is-active", active);
    if (node.classList.contains("tail-line")) {
      node.style.setProperty("--tail-active", active ? tintColor(coverageData.bySubset[subset], 0.16) : "transparent");
    }
  });
}

function bindFocus(node, entry, stats) {
  const focusEntry = () => updateDetail(entry, stats);

  node.addEventListener("mouseenter", focusEntry);
  node.addEventListener("focus", focusEntry);
  node.addEventListener("click", () => {
    lockedSubset = entry.subset;
    setActive(entry.subset);
    focusEntry();
  });
  node.addEventListener("mouseleave", () => {
    if (lockedSubset !== entry.subset) {
      updateDetail(coverageData.bySubset[lockedSubset], stats);
    }
  });
}

function buildMajorBand(entry, stats) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "subset-band";
  button.dataset.subset = entry.subset;
  button.style.setProperty("--band-color", tierColor(entry));
  button.style.setProperty("--band-tint", tintColor(entry, 0.24));
  button.style.setProperty("--band-tint-strong", tintColor(entry, 0.34));

  const name = document.createElement("p");
  name.className = "band-name";
  name.textContent = sentenceCaseSubset(entry.subset);

  const count = document.createElement("p");
  count.className = "subset-count";
  count.textContent = entry.fontCount.toLocaleString();

  button.append(name, count);
  bindFocus(button, entry, stats);
  return button;
}

function buildStep(entry, stats, maxCount) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "subset-step";
  button.dataset.subset = entry.subset;
  button.style.setProperty("--step-color", tierColor(entry));
  button.style.setProperty("--step-tint", tintColor(entry, 0.12));
  button.style.setProperty("--step-height", `${96 + Math.round((entry.fontCount / maxCount) * 132)}px`);

  const name = document.createElement("p");
  name.className = "step-name";
  name.textContent = sentenceCaseSubset(entry.subset);

  const count = document.createElement("p");
  count.className = "step-count";
  count.textContent = entry.fontCount.toLocaleString();

  button.append(name, count);
  bindFocus(button, entry, stats);
  return button;
}

function buildTail(entry, stats) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "tail-line";
  button.dataset.subset = entry.subset;

  const name = document.createElement("p");
  name.className = "tail-name";
  name.textContent = sentenceCaseSubset(entry.subset);

  const count = document.createElement("p");
  count.className = "tail-count";
  count.style.setProperty("color", tierColor(entry));
  count.textContent = entry.fontCount.toLocaleString();

  button.append(name, count);
  bindFocus(button, entry, stats);
  return button;
}

function render(data) {
  const entries = [...data.top, ...data.tail];
  data.bySubset = Object.fromEntries(entries.map((entry) => [entry.subset, entry]));
  coverageData = data;

  const majorEntries = data.top.slice(0, 2);
  const middleEntries = data.top.slice(2, 12);
  const tailEntries = [...data.top.slice(12), ...data.tail];

  majorEntries.forEach((entry) => majorTier.appendChild(buildMajorBand(entry, data.stats)));
  middleEntries.forEach((entry) => middleTier.appendChild(buildStep(entry, data.stats, middleEntries[0].fontCount)));
  tailEntries.forEach((entry) => tailTier.appendChild(buildTail(entry, data.stats)));

  const initial = data.bySubset[lockedSubset] || majorEntries[0];
  setActive(initial.subset);
  updateDetail(initial, data.stats);
}

async function init() {
  const response = await fetch("coverage-cabinet-data.json");
  const data = await response.json();
  render(data);
}

openNotesButton.addEventListener("click", () => notesDialog.showModal());

init().catch(() => {
  detailContext.textContent = "Data unavailable";
});
