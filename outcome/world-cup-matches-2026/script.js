const teams = [
  { team: "Netherlands", matches: 3, goals: 10, shots: 40, efficiency: 0.25, possession: 61.0, points: 7 },
  { team: "Japan", matches: 3, goals: 7, shots: 29, efficiency: 0.241, possession: 51.33, points: 5 },
  { team: "Argentina", matches: 3, goals: 8, shots: 34, efficiency: 0.235, possession: 58.33, points: 9 },
  { team: "Norway", matches: 3, goals: 8, shots: 35, efficiency: 0.229, possession: 48.67, points: 6 },
  { team: "Austria", matches: 3, goals: 6, shots: 27, efficiency: 0.222, possession: 48.0, points: 4 },
  { team: "France", matches: 3, goals: 10, shots: 48, efficiency: 0.208, possession: 55.67, points: 9 },
  { team: "Croatia", matches: 3, goals: 5, shots: 24, efficiency: 0.208, possession: 53.0, points: 6 },
  { team: "Germany", matches: 3, goals: 10, shots: 53, efficiency: 0.189, possession: 61.67, points: 6 },
  { team: "Bosnia & Herz.", matches: 3, goals: 5, shots: 27, efficiency: 0.185, possession: 44.0, points: 4 },
  { team: "United States", matches: 3, goals: 8, shots: 44, efficiency: 0.182, possession: 60.0, points: 6 },
  { team: "Sweden", matches: 3, goals: 7, shots: 40, efficiency: 0.175, possession: 48.67, points: 4 },
  { team: "Mexico", matches: 3, goals: 6, shots: 35, efficiency: 0.171, possession: 50.33, points: 9 },
  { team: "Brazil", matches: 3, goals: 7, shots: 41, efficiency: 0.171, possession: 54.0, points: 7 },
  { team: "Portugal", matches: 3, goals: 6, shots: 37, efficiency: 0.162, possession: 62.0, points: 5 },
  { team: "Senegal", matches: 3, goals: 8, shots: 50, efficiency: 0.16, possession: 57.67, points: 3 },
  { team: "Switzerland", matches: 3, goals: 7, shots: 45, efficiency: 0.156, possession: 61.67, points: 7 },
  { team: "Algeria", matches: 3, goals: 5, shots: 36, efficiency: 0.139, possession: 63.0, points: 4 },
  { team: "Canada", matches: 4, goals: 9, shots: 70, efficiency: 0.129, possession: 56.75, points: 7 },
  { team: "Cote d'Ivoire", matches: 3, goals: 4, shots: 31, efficiency: 0.129, possession: 50.67, points: 6 },
  { team: "New Zealand", matches: 3, goals: 4, shots: 31, efficiency: 0.129, possession: 47.0, points: 1 },
  { team: "Morocco", matches: 3, goals: 6, shots: 48, efficiency: 0.125, possession: 59.0, points: 7 },
  { team: "Ghana", matches: 3, goals: 2, shots: 16, efficiency: 0.125, possession: 35.33, points: 4 },
  { team: "Jordan", matches: 3, goals: 3, shots: 24, efficiency: 0.125, possession: 30.67, points: 0 },
  { team: "Congo DR", matches: 3, goals: 4, shots: 34, efficiency: 0.118, possession: 40.0, points: 4 },
  { team: "Qatar", matches: 3, goals: 2, shots: 18, efficiency: 0.111, possession: 33.0, points: 1 },
  { team: "Uzbekistan", matches: 3, goals: 2, shots: 18, efficiency: 0.111, possession: 38.33, points: 0 },
  { team: "Tunisia", matches: 3, goals: 2, shots: 18, efficiency: 0.111, possession: 39.33, points: 0 },
  { team: "Egypt", matches: 3, goals: 5, shots: 48, efficiency: 0.104, possession: 54.33, points: 5 },
  { team: "England", matches: 3, goals: 6, shots: 58, efficiency: 0.103, possession: 66.0, points: 7 },
  { team: "Spain", matches: 3, goals: 5, shots: 55, efficiency: 0.091, possession: 69.33, points: 7 },
  { team: "Paraguay", matches: 3, goals: 2, shots: 23, efficiency: 0.087, possession: 33.67, points: 4 },
  { team: "Belgium", matches: 3, goals: 6, shots: 73, efficiency: 0.082, possession: 59.67, points: 5 },
  { team: "IR Iran", matches: 3, goals: 3, shots: 37, efficiency: 0.081, possession: 39.0, points: 3 },
  { team: "Australia", matches: 3, goals: 2, shots: 26, efficiency: 0.077, possession: 40.67, points: 4 },
  { team: "Colombia", matches: 3, goals: 4, shots: 59, efficiency: 0.068, possession: 60.33, points: 7 },
  { team: "Haiti", matches: 3, goals: 2, shots: 31, efficiency: 0.065, possession: 42.67, points: 0 },
  { team: "Korea Republic", matches: 3, goals: 2, shots: 32, efficiency: 0.062, possession: 63.0, points: 3 },
  { team: "Cabo Verde", matches: 3, goals: 2, shots: 33, efficiency: 0.061, possession: 37.33, points: 3 },
  { team: "Uruguay", matches: 3, goals: 3, shots: 49, efficiency: 0.061, possession: 55.0, points: 2 },
  { team: "Saudi Arabia", matches: 3, goals: 1, shots: 17, efficiency: 0.059, possession: 38.33, points: 2 },
  { team: "Czechia", matches: 3, goals: 2, shots: 34, efficiency: 0.059, possession: 42.67, points: 1 },
  { team: "South Africa", matches: 4, goals: 2, shots: 39, efficiency: 0.051, possession: 48.0, points: 4 },
  { team: "Iraq", matches: 3, goals: 1, shots: 21, efficiency: 0.048, possession: 38.33, points: 0 },
  { team: "Ecuador", matches: 3, goals: 2, shots: 46, efficiency: 0.043, possession: 55.33, points: 4 },
  { team: "Turkiye", matches: 3, goals: 3, shots: 71, efficiency: 0.042, possession: 66.33, points: 3 },
  { team: "Scotland", matches: 3, goals: 1, shots: 29, efficiency: 0.034, possession: 44.33, points: 3 },
  { team: "Curacao", matches: 3, goals: 1, shots: 29, efficiency: 0.034, possession: 32.33, points: 1 },
  { team: "Panama", matches: 3, goals: 0, shots: 32, efficiency: 0.0, possession: 45.67, points: 0 }
];

const markLayer = document.getElementById("mark-layer");
const tooltip = document.getElementById("tooltip");
const tooltipCode = document.getElementById("tooltip-code");
const tooltipTeam = document.getElementById("tooltip-team");
const tooltipEfficiency = document.getElementById("tooltip-efficiency");
const tooltipShots = document.getElementById("tooltip-shots");
const tooltipGoals = document.getElementById("tooltip-goals");
const tooltipPossession = document.getElementById("tooltip-possession");
const notesDialog = document.getElementById("notes-dialog");
const openNotesButton = document.getElementById("open-notes");

const minShots = Math.min(...teams.map((team) => team.shots));
const maxShots = Math.max(...teams.map((team) => team.shots));
const minEfficiency = 0;
const maxEfficiency = 0.26;

const highlightedTeams = new Set([
  "Netherlands",
  "Japan",
  "Argentina",
  "France",
  "Turkiye",
  "Panama",
  "Belgium",
  "Spain"
]);

let activeMark = null;

function shortCode(team) {
  const normalized = team.replace(/[^A-Za-z ]/g, " ").trim();
  const words = normalized.split(/\s+/).filter(Boolean);
  if (words.length >= 2) {
    return words.slice(0, 3).map((word) => word[0]).join("").toUpperCase();
  }
  return normalized.slice(0, 3).toUpperCase();
}

function toneForTeam(team) {
  if (team.efficiency >= 0.21) return "var(--amber)";
  if (team.efficiency >= 0.16) return "var(--cyan)";
  if (team.efficiency <= 0.05) return "var(--hot)";
  if (team.shots >= 55) return "var(--blue)";
  return "var(--lime)";
}

function xPercent(shots) {
  return 12 + ((shots - minShots) / (maxShots - minShots)) * 76;
}

function yPercent(efficiency) {
  return 88 - ((efficiency - minEfficiency) / (maxEfficiency - minEfficiency)) * 76;
}

function sizePx(team) {
  return 10 + team.goals * 1.4;
}

function tooltipPosition(team) {
  const left = xPercent(team.shots);
  const top = yPercent(team.efficiency);
  return {
    left: `clamp(12px, calc(${left}% + 18px), calc(100% - 272px))`,
    top: `clamp(14px, calc(${top}% - 16px), calc(100% - 192px))`
  };
}

function updateTooltip(team) {
  const code = shortCode(team.team);
  const position = tooltipPosition(team);

  tooltip.hidden = false;
  tooltip.style.left = position.left;
  tooltip.style.top = position.top;
  tooltipCode.textContent = code;
  tooltipTeam.textContent = team.team;
  tooltipEfficiency.textContent = team.efficiency.toFixed(3).replace(/^0/, ".");
  tooltipShots.textContent = team.shots;
  tooltipGoals.textContent = team.goals;
  tooltipPossession.textContent = `${team.possession.toFixed(1).replace(/\.0$/, "")}%`;
}

function setActive(button, team) {
  if (activeMark && activeMark !== button) {
    activeMark.classList.remove("is-active");
  }
  activeMark = button;
  button.classList.add("is-active");
  updateTooltip(team);
}

function clearActive(button) {
  if (activeMark === button) {
    button.classList.remove("is-active");
    activeMark = null;
    tooltip.hidden = true;
  }
}

function buildMark(team) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "mark";
  button.style.left = `${xPercent(team.shots)}%`;
  button.style.top = `${yPercent(team.efficiency)}%`;
  button.style.setProperty("--size", `${sizePx(team)}px`);
  button.style.setProperty("--tone", toneForTeam(team));
  button.setAttribute(
    "aria-label",
    `${team.team}. Goals per shot ${team.efficiency.toFixed(3)}. ${team.goals} goals from ${team.shots} shots.`
  );

  const dot = document.createElement("span");
  dot.className = "mark-dot";

  button.append(dot);

  if (highlightedTeams.has(team.team)) {
    const code = document.createElement("span");
    code.className = "mark-code";
    code.textContent = team.team;
    button.append(code);
  }

  button.addEventListener("mouseenter", () => setActive(button, team));
  button.addEventListener("focus", () => setActive(button, team));
  button.addEventListener("mouseleave", () => {
    if (document.activeElement !== button) {
      clearActive(button);
    }
  });
  button.addEventListener("blur", () => clearActive(button));
  button.addEventListener("click", () => setActive(button, team));

  return button;
}

function render() {
  teams.forEach((team) => {
    markLayer.appendChild(buildMark(team));
  });
}

openNotesButton.addEventListener("click", () => notesDialog.showModal());

render();
