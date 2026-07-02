const months = [
  { month: 1, label: "Jan", rain: 285.01, temp: 21.31, rainyDays: 358, peakDay: 32.0 },
  { month: 2, label: "Feb", rain: 298.68, temp: 23.51, rainyDays: 268, peakDay: 27.18 },
  { month: 3, label: "Mar", rain: 726.54, temp: 26.06, rainyDays: 386, peakDay: 31.93 },
  { month: 4, label: "Apr", rain: 1969.95, temp: 27.29, rainyDays: 789, peakDay: 81.31 },
  { month: 5, label: "May", rain: 5631.4, temp: 26.33, rainyDays: 1184, peakDay: 82.06 },
  { month: 6, label: "Jun", rain: 5129.51, temp: 24.3, rainyDays: 1327, peakDay: 50.63 },
  { month: 7, label: "Jul", rain: 6003.79, temp: 23.41, rainyDays: 1384, peakDay: 48.63 },
  { month: 8, label: "Aug", rain: 5837.58, temp: 23.17, rainyDays: 1370, peakDay: 70.93 },
  { month: 9, label: "Sep", rain: 5676.72, temp: 23.35, rainyDays: 1290, peakDay: 61.64 },
  { month: 10, label: "Oct", rain: 6276.4, temp: 23.03, rainyDays: 1181, peakDay: 70.62 },
  { month: 11, label: "Nov", rain: 3260.32, temp: 21.85, rainyDays: 886, peakDay: 121.99 },
  { month: 12, label: "Dec", rain: 1260.8, temp: 20.83, rainyDays: 615, peakDay: 48.98 }
];

const svg = document.getElementById("season-chart");
const gridLayer = document.getElementById("chart-grid");
const areaLayer = document.getElementById("chart-area");
const lineLayer = document.getElementById("chart-line");
const pointLayer = document.getElementById("chart-points");
const labelLayer = document.getElementById("chart-labels");
const detailCard = document.getElementById("detail-card");
const detailKicker = document.getElementById("detail-kicker");
const detailRain = document.getElementById("detail-rain");
const detailDays = document.getElementById("detail-days");
const detailTemp = document.getElementById("detail-temp");
const detailPeak = document.getElementById("detail-peak");
const notesDialog = document.getElementById("notes-dialog");
const openNotesButton = document.getElementById("open-notes");

const width = 1200;
const height = 620;
const margin = { top: 84, right: 120, bottom: 78, left: 90 };
const chartWidth = width - margin.left - margin.right;
const chartHeight = height - margin.top - margin.bottom;
const maxRain = 6500;

const HIGHLIGHT_MONTHS = new Set([5, 10]);

function xForIndex(index) {
  return margin.left + (chartWidth / (months.length - 1)) * index;
}

function yForRain(rain) {
  return margin.top + chartHeight - (rain / maxRain) * chartHeight;
}

function formatRain(rain) {
  return Math.round(rain).toLocaleString();
}

function createNode(name, attrs = {}) {
  const node = document.createElementNS("http://www.w3.org/2000/svg", name);
  Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
  return node;
}

function buildPath(points) {
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i += 1) {
    const p0 = points[i];
    const p1 = points[i + 1];
    const cx = (p0.x + p1.x) / 2;
    d += ` C ${cx} ${p0.y}, ${cx} ${p1.y}, ${p1.x} ${p1.y}`;
  }
  return d;
}

function renderGrid() {
  const levels = [
    { label: "0 mm", rain: 0 },
    { label: "2,000", rain: 2000 },
    { label: "4,000", rain: 4000 },
    { label: "6,000", rain: 6000 }
  ];

  levels.forEach((level) => {
    const y = yForRain(level.rain);
    const line = createNode("line", {
      x1: margin.left,
      x2: width - margin.right,
      y1: y,
      y2: y,
      class: "grid-line"
    });
    const label = createNode("text", {
      x: width - margin.right + 12,
      y: y + 4,
      class: "grid-label"
    });
    label.textContent = level.label;
    gridLayer.append(line, label);
  });
}

function renderChart() {
  const points = months.map((month, index) => ({
    ...month,
    x: xForIndex(index),
    y: yForRain(month.rain)
  }));

  renderGrid();

  const areaPoints = [
    { x: margin.left, y: margin.top + chartHeight },
    ...points,
    { x: width - margin.right, y: margin.top + chartHeight }
  ];
  const areaPath = createNode("path", {
    d: `${buildPath(areaPoints.slice(1, -1))} L ${width - margin.right} ${margin.top + chartHeight} L ${margin.left} ${margin.top + chartHeight} Z`,
    class: "rain-area"
  });
  areaLayer.append(areaPath);

  const linePath = createNode("path", {
    d: buildPath(points),
    class: "rain-line"
  });
  lineLayer.append(linePath);

  points.forEach((point) => {
    const pointNode = createNode("circle", {
      cx: point.x,
      cy: point.y,
      r: HIGHLIGHT_MONTHS.has(point.month) ? 10 : 7,
      class: HIGHLIGHT_MONTHS.has(point.month) ? "month-point is-highlight" : "month-point"
    });

    const hitNode = createNode("circle", {
      cx: point.x,
      cy: point.y,
      r: 24,
      class: "month-hit",
      tabindex: "0",
      role: "button",
      "aria-label": `${point.label}. ${formatRain(point.rain)} millimeters of long-run monthly rainfall.`
    });

    const label = createNode("text", {
      x: point.x,
      y: margin.top + chartHeight + 42,
      "text-anchor": "middle",
      class: "month-label"
    });
    label.textContent = point.label;

    const showDetail = () => {
      detailCard.hidden = false;
      detailCard.style.left = `clamp(12px, ${((point.x + 18) / width) * 100}%, calc(100% - 270px))`;
      detailCard.style.top = `clamp(120px, ${((point.y - 20) / height) * 100}%, calc(100% - 220px))`;
      detailKicker.textContent = point.label;
      detailRain.textContent = formatRain(point.rain);
      detailDays.textContent = point.rainyDays.toLocaleString();
      detailTemp.textContent = `${point.temp.toFixed(1)} C`;
      detailPeak.textContent = point.peakDay.toFixed(2);
    };

    const hideDetail = () => {
      if (document.activeElement !== hitNode) {
        detailCard.hidden = true;
      }
    };

    hitNode.addEventListener("mouseenter", showDetail);
    hitNode.addEventListener("focus", showDetail);
    hitNode.addEventListener("mouseleave", hideDetail);
    hitNode.addEventListener("blur", () => {
      detailCard.hidden = true;
    });
    hitNode.addEventListener("click", showDetail);

    pointLayer.append(pointNode, hitNode);
    labelLayer.append(label);
  });
}

openNotesButton.addEventListener("click", () => notesDialog.showModal());

renderChart();
