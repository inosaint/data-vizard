(function () {
  const data = window.RACE_DATA;
  const d3 = window.d3;

  const storyRail = document.getElementById("story-rail");
  const titleEl = document.getElementById("stage-title");
  const yearEl = document.getElementById("stage-year");
  const stateStrip = document.getElementById("state-strip");
  const rankingBoard = document.getElementById("ranking-board");
  const tooltip = document.getElementById("tooltip");
  const hudSourceLink = document.getElementById("hud-source-link");
  const storyKicker = document.getElementById("story-kicker");
  const storyTitle = document.getElementById("story-title");
  const storyBody = document.getElementById("story-body");

  hudSourceLink.href = data.source.url;
  hudSourceLink.textContent = data.source.label;

  data.steps.forEach((step, index) => {
    const article = document.createElement("article");
    article.className = `story-step${index === 0 ? " is-active" : ""}`;
    article.dataset.step = String(index);
    article.setAttribute("aria-hidden", "true");
    storyRail.appendChild(article);
  });

  const steps = [...document.querySelectorAll(".story-step")];

  stateStrip.innerHTML = data.steps
    .map(
      (step, index) =>
        `<span class="state-chip${index === 0 ? " is-active" : ""}" data-state-chip="${index}">${step.title}</span>`
    )
    .join("");
  const stateChips = [...document.querySelectorAll("[data-state-chip]")];

  const svg = d3.select("#race-chart");
  const width = 1100;
  const margin = { top: 36, right: 58, bottom: 42, left: 176 };
  const laneGap = 52;
  const trackTop = margin.top + 10;
  const trackBottom = trackTop + laneGap * data.roles.length;
  const laneY = (laneIndex) => trackTop + laneGap * laneIndex + laneGap / 2;
  const x = d3
    .scaleLinear()
    .domain([25000, data.maxSalary + 10000])
    .range([margin.left + 36, width - margin.right]);

  const baseGroup = svg.append("g");
  const sceneGroup = svg.append("g");
  const runnerLayer = svg.append("g");
  const calloutGroup = svg.append("g");

  [30000, 50000, 70000, 90000, 110000].forEach((salary) => {
    baseGroup
      .append("line")
      .attr("class", "salary-grid")
      .attr("x1", x(salary))
      .attr("x2", x(salary))
      .attr("y1", trackTop - 18)
      .attr("y2", trackBottom + 8);

    baseGroup
      .append("text")
      .attr("class", "salary-label")
      .attr("x", x(salary))
      .attr("y", trackTop - 24)
      .attr("text-anchor", "middle")
      .text(`${Math.round(salary / 1000)}k`);
  });

  data.roles.forEach((role, index) => {
    baseGroup
      .append("line")
      .attr("class", "track-lane-line")
      .attr("x1", margin.left + 16)
      .attr("x2", width - margin.right)
      .attr("y1", trackTop + laneGap * index)
      .attr("y2", trackTop + laneGap * index);

    baseGroup
      .append("text")
      .attr("class", "lane-number")
      .attr("x", margin.left - 152)
      .attr("y", laneY(index) + 4)
      .text(String(index + 1).padStart(2, "0"));
  });

  baseGroup
    .append("line")
    .attr("class", "finish-line")
    .attr("x1", x(115000))
    .attr("x2", x(115000))
    .attr("y1", trackTop - 12)
    .attr("y2", trackBottom + 4);

  const laneGroups = runnerLayer
    .selectAll("g")
    .data(data.roles)
    .enter()
    .append("g")
    .attr("class", "lane-group")
    .attr("data-role", (d) => d.role);

  laneGroups
    .append("text")
    .attr("class", "lane-label")
    .attr("x", margin.left - 18)
    .attr("y", (d) => laneY(d.laneIndex) + 4)
    .attr("text-anchor", "end")
    .text((d) => d.role);

  const runnerGroups = laneGroups
    .append("g")
    .attr("class", "runner-sprite")
    .attr("transform", (d) => {
      const start = d.series.find((point) => point.years_experience === data.steps[0].year) || d.series[0];
      return `translate(${x(start.median)}, ${laneY(d.laneIndex)})`;
    })
    .on("pointerenter", function (event, role) {
      setHover(role.role, true);
      showTooltip(event, role);
    })
    .on("pointermove", function (event, role) {
      showTooltip(event, role);
    })
    .on("pointerleave", function () {
      setHover(null, false);
      tooltip.hidden = true;
    });

  runnerGroups
    .append("rect")
    .attr("class", "runner-shadow")
    .attr("x", -6)
    .attr("y", 10)
    .attr("width", 20)
    .attr("height", 4);

  const runnerFrames = runnerGroups.append("g").attr("class", "runner-frame");

  runnerFrames
    .append("rect")
    .attr("class", "runner-body runner-head")
    .attr("x", -4)
    .attr("y", -10)
    .attr("width", 6)
    .attr("height", 6)
    .attr("fill", "#f0c49a");

  runnerFrames
    .append("rect")
    .attr("class", "runner-body runner-torso")
    .attr("x", 0)
    .attr("y", -4)
    .attr("width", 7)
    .attr("height", 7)
    .attr("fill", (d) => d.color);

  runnerFrames
    .append("rect")
    .attr("class", "runner-body runner-hip")
    .attr("x", -2)
    .attr("y", 3)
    .attr("width", 5)
    .attr("height", 7)
    .attr("fill", "#f5f6fa");

  runnerFrames
    .append("rect")
    .attr("class", "runner-body runner-arm runner-arm-back")
    .attr("x", -6)
    .attr("y", 1)
    .attr("width", 4)
    .attr("height", 6)
    .attr("fill", "#f0c49a");

  runnerFrames
    .append("rect")
    .attr("class", "runner-body runner-arm runner-arm-front")
    .attr("x", 5)
    .attr("y", 4)
    .attr("width", 6)
    .attr("height", 4)
    .attr("fill", (d) => d.color);

  runnerFrames
    .append("rect")
    .attr("class", "runner-body runner-leg runner-leg-back")
    .attr("x", -5)
    .attr("y", 10)
    .attr("width", 5)
    .attr("height", 4)
    .attr("fill", "#f5f6fa");

  runnerFrames
    .append("rect")
    .attr("class", "runner-body runner-leg runner-leg-front")
    .attr("x", 8)
    .attr("y", 10)
    .attr("width", 6)
    .attr("height", 4)
    .attr("fill", "#f5f6fa");

  function snapshot(role, year) {
    return (
      role.series.find((point) => point.years_experience === year) ||
      role.series.filter((point) => point.years_experience <= year).at(-1) ||
      role.series[0]
    );
  }

  function setHover(roleName, active) {
    laneGroups.classed("is-dim", (d) => active && d.role !== roleName);
    laneGroups.classed("is-active", (d) => active && d.role === roleName);
  }

  function showTooltip(event, role) {
    const step = data.steps[currentStep];
    const point = snapshot(role, step.year);
    const gain = point.median - (role.y0 || point.median);
    tooltip.hidden = false;
    tooltip.innerHTML = `
      <p class="small">Hover state</p>
      <p><strong>${role.role}</strong></p>
      <p>Year ${point.years_experience} median: GBP ${Math.round(point.median / 1000)}k</p>
      <p>Gain from year 0: GBP ${Math.round(gain / 1000)}k</p>
    `;
    const bounds = svg.node().getBoundingClientRect();
    tooltip.style.left = `${event.clientX - bounds.left + 18}px`;
    tooltip.style.top = `${event.clientY - bounds.top - 18}px`;
  }

  function rankingHTML(step) {
    const sorted = data.roles
      .map((role) => ({ role, point: snapshot(role, step.year) }))
      .sort((a, b) => d3.descending(a.point.median, b.point.median));

    return [sorted.slice(0, 3), sorted.slice(3, 6), sorted.slice(6, 9)]
      .map(
        (column, columnIndex) => `
          <div class="ranking-column">
            <h3>${columnIndex * 3 + 1}-${columnIndex * 3 + 3}</h3>
            ${column
              .map(
                (entry, index) => `
                  <div class="ranking-line">
                    <span>${columnIndex * 3 + index + 1}</span>
                    <span class="name">${entry.role.role}</span>
                    <span class="value">${Math.round(entry.point.median / 1000)}k</span>
                  </div>
                `
              )
              .join("")}
          </div>
        `
      )
      .join("");
  }

  function shortRole(roleName) {
    return roleName
      .replace("Operations", "Ops")
      .replace("Management", "Mgmt")
      .replace("Corporate", "Corp")
      .replace("Engineer", "Eng.");
  }

  let currentStep = 0;

  function renderStep(stepIndex) {
    currentStep = stepIndex;
    const step = data.steps[stepIndex];
    titleEl.textContent = step.title;
    yearEl.textContent = step.year;
    rankingBoard.innerHTML = rankingHTML(step);
    storyKicker.textContent = `Step ${stepIndex + 1}`;
    storyTitle.textContent = step.title;
    storyBody.textContent = step.body;

    stateChips.forEach((chip, index) => chip.classList.toggle("is-active", index === stepIndex));
    steps.forEach((node, index) => node.classList.toggle("is-active", index === stepIndex));

    runnerGroups
      .transition()
      .duration(700)
      .ease(d3.easeCubicInOut)
      .on("start", function () {
        d3.select(this).classed("is-running", true);
      })
      .attr("transform", (role) => {
        const point = snapshot(role, step.year);
        return `translate(${x(point.median)}, ${laneY(role.laneIndex)})`;
      })
      .on("end interrupt", function () {
        d3.select(this).classed("is-running", false);
      });

    calloutGroup.selectAll("*").remove();
    sceneGroup.selectAll("*").remove();

    if (stepIndex === 0) {
      const positions = data.roles.map((role) => snapshot(role, step.year));
      const minX = d3.min(positions, (d) => x(d.median));
      const maxX = d3.max(positions, (d) => x(d.median));
      sceneGroup
        .append("rect")
        .attr("class", "zone-band")
        .attr("x", minX - 24)
        .attr("y", trackTop - 18)
        .attr("width", maxX - minX + 48)
        .attr("height", laneGap * data.roles.length - 12);
      sceneGroup
        .append("text")
        .attr("class", "scene-note")
        .attr("x", maxX + 22)
        .attr("y", trackTop + 18)
        .text("tight pack");
    } else if (stepIndex === 1) {
      const yTop = laneY(0) - 24;
      const yBottom = laneY(data.roles.length - 1) + 24;
      const xStart = x(42000);
      const xMid = x(65000);
      sceneGroup
        .append("path")
        .attr("class", "scene-fill")
        .attr(
          "d",
          `M ${xStart} ${yTop}
           C ${xStart + 40} ${yTop + 80}, ${xMid - 40} ${yBottom - 80}, ${xMid} ${yBottom}
           L ${xMid + 60} ${yBottom}
           C ${xMid + 20} ${yBottom - 90}, ${xStart + 100} ${yTop + 90}, ${xStart + 60} ${yTop}
           Z`
        );
      sceneGroup
        .append("text")
        .attr("class", "scene-note")
        .attr("x", xMid + 70)
        .attr("y", yTop + 28)
        .text("first bend");
    } else if (stepIndex === 2) {
      const leaders = step.callouts.slice(0, 3).map((roleName) => data.roles.find((item) => item.role === roleName));
      const xs = leaders.map((role) => x(snapshot(role, step.year).median));
      const ys = leaders.map((role) => laneY(role.laneIndex));
      sceneGroup
        .append("rect")
        .attr("class", "scene-box")
        .attr("x", d3.min(xs) - 26)
        .attr("y", d3.min(ys) - 28)
        .attr("width", d3.max(xs) - d3.min(xs) + 52)
        .attr("height", d3.max(ys) - d3.min(ys) + 56);
      sceneGroup
        .append("text")
        .attr("class", "scene-note")
        .attr("x", d3.max(xs) + 18)
        .attr("y", d3.min(ys) - 10)
        .text("breakaway group");
    } else if (stepIndex === 3) {
      sceneGroup
        .append("text")
        .attr("class", "scene-note")
        .attr("x", x(115000) + 18)
        .attr("y", trackTop + 10)
        .text("finish line");
    }

    step.callouts.forEach((roleName, idx) => {
      const role = data.roles.find((item) => item.role === roleName);
      const point = snapshot(role, step.year);
      const dx = idx % 2 === 0 ? 26 : -26;
      const anchor = dx > 0 ? "start" : "end";

      calloutGroup
        .append("text")
        .attr("class", "scene-note")
        .attr("x", x(point.median) + dx)
        .attr("y", laneY(role.laneIndex) - 18)
        .attr("text-anchor", anchor)
        .text(shortRole(role.role));
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        renderStep(Number(entry.target.dataset.step));
      });
    },
    { threshold: 0.56 }
  );

  steps.forEach((step) => observer.observe(step));
  renderStep(0);
})();
