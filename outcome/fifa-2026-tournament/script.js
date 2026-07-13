/* The Field — hand-rolled static SVG.
   Composition: rank-order curve. All 48 teams sorted by average possession,
   x = rank (1..48), y = possession — one coordinate grammar everywhere.
   Paraguay sits at rank 48; its five matches extend right of the curve's end
   as satellites at their true possession heights, in match order.
   Rationale for no D3: ~53 marks, one polyline, two linear scales. */

(function () {
  "use strict";

  // ---- data (embedded from data/fifa-2026-tournament/curated/) ----
  // [team, avg_possession, quarterfinalist]
  // Quarterfinalists = winners of the Round of 16 (data ends there).
  var TEAMS = [
    ["Algeria", 61.0, false],
    ["Argentina", 60.6, true],
    ["Australia", 41.0, false],
    ["Austria", 45.0, false],
    ["Belgium", 55.0, true],
    ["Bosnia–Herz", 46.0, false],
    ["Brazil", 53.0, false],
    ["Cabo Verde", 37.2, false],
    ["Canada", 54.4, false],
    ["Colombia", 57.8, false],
    ["Congo DR", 40.0, false],
    ["Croatia", 49.8, false],
    ["Curaçao", 32.3, false],
    ["Czechia", 42.7, false],
    ["Côte d'Ivoire", 49.8, false],
    ["Ecuador", 55.8, false],
    ["Egypt", 51.4, false],
    ["England", 58.2, true],
    ["France", 60.8, true],
    ["Germany", 65.0, false],
    ["Ghana", 36.2, false],
    ["Haiti", 42.7, false],
    ["IR Iran", 39.0, false],
    ["Iraq", 38.3, false],
    ["Japan", 46.2, false],
    ["Jordan", 30.7, false],
    ["Korea Republic", 63.0, false],
    ["Mexico", 52.2, false],
    ["Morocco", 60.4, true],
    ["Netherlands", 53.2, false],
    ["New Zealand", 47.0, false],
    ["Norway", 53.0, true],
    ["Panama", 45.7, false],
    ["Paraguay", 30.0, false],
    ["Portugal", 58.4, false],
    ["Qatar", 33.0, false],
    ["Saudi Arabia", 38.3, false],
    ["Scotland", 44.3, false],
    ["Senegal", 55.2, false],
    ["South Africa", 48.0, false],
    ["Spain", 65.8, true],
    ["Sweden", 46.2, false],
    ["Switzerland", 56.6, true],
    ["Tunisia", 39.3, false],
    ["Türkiye", 66.3, false],
    ["United States", 56.8, false],
    ["Uruguay", 55.0, false],
    ["Uzbekistan", 38.3, false]
  ];

  // Paraguay's five matches, in order. Labels are STORY.md-exact.
  var MATCHES = [
    { label: "USA 1–4 · 35%", poss: 35, shots: 9, sot: 1, inter: 9 },
    { label: "Türkiye 1–0 · 22%", poss: 22, shots: 7, sot: 2, inter: 9 },
    { label: "Australia 0–0 · 44%", poss: 44, shots: 7, sot: 2, inter: 8 },
    { label: "Germany 1–1, 4–3 pens · 25%", poss: 25, shots: 7, sot: 3, inter: 13, germany: true },
    { label: "France 0–1 · 24%", poss: 24, shots: 5, sot: 0, inter: 14 }
  ];

  var GERMANY_NOTE = "Out-shot 21–7. 13 interceptions. Through on penalties.";
  var QF_NOTE = ["The eight quarterfinalists — ringed —", "all averaged 53% possession or more."];
  var PAR_NOTE = "Paraguay · 30% — rank 48 of 48";

  var NS = "http://www.w3.org/2000/svg";
  function el(name, attrs, parent) {
    var n = document.createElementNS(NS, name);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }
  function txt(node, s) { node.textContent = s; return node; }

  function build() {
    var host = document.getElementById("field");
    host.textContent = "";

    // ---- geometry: viewBox matches the container 1:1 so SVG text renders
    //      at its declared pixel size at any viewport ----
    var box = host.getBoundingClientRect();
    var compact = (box.width || 360) < 560;
    var W = Math.max(320, Math.round(box.width || 360));
    // On small screens the poster flows (container height collapses); use a
    // fixed portrait height instead of the measured one.
    var H = box.height > 300 ? Math.round(box.height) : (compact ? 560 : 700);

    // reserve room for the two x-axis baselines, plus (compact only) a
    // numbered match list that decodes the satellite marks
    var LIST = compact ? 48 : 0;
    var TOP = 30, BOTTOM = H - 58 - LIST;
    var PMIN = 18, PMAX = 70; // possession domain
    var AX = compact ? 46 : 58;             // axis right edge
    var X0 = AX + (compact ? 12 : 28);      // curve start (rank 1)
    var XEND = W - (compact ? 20 : 56);     // right edge of drawing area
    // the curve takes the left share of the span; satellites take the rest
    // (compact screens give the satellites more room for their labels)
    var X1 = X0 + (XEND - X0) * (compact ? 0.45 : 0.62); // curve end (rank 48)
    var MX0 = X1 + (compact ? 16 : 48);     // first match mark
    var MX1 = XEND;                          // last match mark

    function y(p) {
      return TOP + ((PMAX - p) / (PMAX - PMIN)) * (BOTTOM - TOP);
    }

    var svg = el("svg", {
      viewBox: "0 0 " + W + " " + H,
      class: compact ? "compact" : "",
      role: "img",
      "aria-label": "All 48 teams sorted by average possession, rank 1 to 48. Paraguay is rank 48; its five matches extend to the right."
    });

    // ---- tiny possession axis (optional text authorized by STORY.md) ----
    var axis = el("g", { "aria-hidden": "true" }, svg);
    [60, 40, 20].forEach(function (p) {
      var yy = y(p);
      el("line", { x1: AX - 18, x2: AX, y1: yy, y2: yy, class: "axis-line" }, axis);
      txt(el("text", { x: AX - 22, y: yy + 3.5, "text-anchor": "end", class: "axis-tick" }, axis), p + "%");
    });

    // ---- the rank-order curve: 48 teams, sorted by average possession ----
    var sorted = TEAMS.slice().sort(function (a, b) { return b[1] - a[1]; });
    var n = sorted.length;
    var fieldG = el("g", {}, svg);
    var parPt = null;

    sorted.forEach(function (t, i) {
      var name = t[0], poss = t[1], qf = t[2];
      var x = X0 + (i / (n - 1)) * (X1 - X0);
      var yy = y(poss);
      if (name === "Paraguay") parPt = { x: x, y: yy };
      var g = el("g", {
        class: "dot" + (qf ? " qf" : "") + (name === "Paraguay" ? " paraguay" : ""),
        tabindex: "0",
        role: "img",
        "aria-label": name + ", rank " + (i + 1) + " of 48, average possession " + poss + " percent" + (qf ? ", quarterfinalist" : "")
      }, fieldG);
      txt(el("title", {}, g), name + " · " + poss + "%");
      if (qf) el("circle", { cx: x, cy: yy, r: compact ? 7 : 9, class: "ring" }, g);
      el("circle", { cx: x, cy: yy, r: qf ? 4.2 : (name === "Paraguay" ? 4.6 : 2.9), class: "mark" }, g);
      // hover/focus-only assistive label
      var s = name + " · " + poss + "%";
      var cw = compact ? 5.9 : 6.4;
      var bw = s.length * cw + 10;
      var anchor = x + 12 + bw > W - 8 ? "end" : "start";
      var lx = anchor === "end" ? x - 12 : x + 12;
      el("rect", {
        x: anchor === "end" ? lx - bw + 5 : lx - 5,
        y: yy - 21, width: bw, height: 17, class: "assist-bg"
      }, g);
      txt(el("text", { x: lx, y: yy - 8.5, "text-anchor": anchor, class: "assist" }, g), s);
    });

    // ---- two x-axis baselines: rank on the left zone, match order on the right ----
    var XAXIS_Y = H - 34 - LIST;
    var xaxis = el("g", { "aria-hidden": "true" }, svg);
    function baseline(xa, xb, caption, la, lb) {
      el("line", { x1: xa, x2: xb, y1: XAXIS_Y, y2: XAXIS_Y, class: "axis-line" }, xaxis);
      [xa, xb].forEach(function (x) {
        el("line", { x1: x, x2: x, y1: XAXIS_Y, y2: XAXIS_Y + 5, class: "axis-line" }, xaxis);
      });
      txt(el("text", { x: xa, y: XAXIS_Y + 16, "text-anchor": "start", class: "axis-tick" }, xaxis), la);
      txt(el("text", { x: xb, y: XAXIS_Y + 16, "text-anchor": "end", class: "axis-tick" }, xaxis), lb);
      txt(el("text", { x: (xa + xb) / 2, y: XAXIS_Y + 30, "text-anchor": "middle", class: "axis-caption" }, xaxis), caption);
    }
    baseline(X0, X1,
      compact ? "48 teams by avg possession" : "48 teams, ranked by average possession",
      "rank 1", "48");
    baseline(MX0, MX1,
      compact ? "5 matches, in order" : "Paraguay's five matches, in order",
      "1st", "5th");

    // compact: numbered decode list under the match-order axis
    if (compact) {
      var listG = el("g", { "aria-hidden": "true" }, svg);
      var col2x = X0 + (XEND - X0) * 0.45;
      MATCHES.forEach(function (m, i) {
        var col = i < 3 ? X0 : col2x;
        var row = i < 3 ? i : i - 3;
        txt(el("text", {
          x: col, y: XAXIS_Y + 46 + row * 13, "text-anchor": "start",
          class: "match-list" + (m.germany ? " germany-item" : "")
        }, listG), (i + 1) + " · " + m.label);
      });
    }

    // ---- annotations (orientation cues authorized by STORY.md) ----
    var noteG = el("g", { "aria-hidden": "true" }, svg);
    // quarterfinalist note near the top-left cluster
    var qx = X0 + (X1 - X0) * (compact ? 0.24 : 0.2);
    var qy = y(compact ? 64 : 65);
    QF_NOTE.forEach(function (line, i) {
      txt(el("text", { x: qx, y: qy + i * (compact ? 13 : 15), "text-anchor": "start", class: "chart-note" }, noteG), line);
    });
    // Paraguay note at the curve's end
    txt(el("text", {
      x: parPt.x, y: parPt.y + (compact ? 22 : 26), "text-anchor": compact ? "end" : "middle", class: "chart-note par-note"
    }, noteG), PAR_NOTE);

    // ---- Paraguay's five matches: satellites right of rank 48 ----
    var pts = MATCHES.map(function (m, i) {
      return { x: MX0 + (i / (MATCHES.length - 1)) * (MX1 - MX0), y: y(m.poss), m: m };
    });

    var constG = el("g", {}, svg);
    el("polyline", {
      points: [parPt.x + "," + parPt.y].concat(pts.map(function (p) { return p.x + "," + p.y; })).join(" "),
      class: "constellation-line",
      "aria-hidden": "true"
    }, constG);

    // per-mark label offsets, tuned to clear the line
    var OFF = compact ? [
      { dx: 0, dy: -28, anchor: "middle" },  // USA above (two-line)
      { dx: 0, dy: 18, anchor: "middle" },   // Türkiye below
      { dx: 0, dy: -28, anchor: "middle" },  // Australia above
      { dx: 0, dy: 18, anchor: "middle" },   // Germany below
      { dx: -6, dy: -28, anchor: "end" }     // France above-left
    ] : [
      { dx: 0, dy: -16, anchor: "middle" },  // USA (35)
      { dx: 0, dy: 24, anchor: "middle" },   // Türkiye (22)
      { dx: 0, dy: -16, anchor: "middle" },  // Australia (44)
      { dx: 0, dy: 28, anchor: "middle" },   // Germany (25)
      { dx: -8, dy: -16, anchor: "end" }     // France (24): above-left
    ];

    pts.forEach(function (p, i) {
      var m = p.m, o = OFF[i];
      var g = el("g", {
        class: "pmark" + (m.germany ? " germany" : ""),
        tabindex: "0",
        role: "img",
        "aria-label": "Paraguay match " + (i + 1) + ": " + m.label + ". " +
          m.shots + " shots, " + m.sot + " on target, " + m.inter + " interceptions."
      }, constG);
      txt(el("title", {}, g),
        m.shots + " shots · " + m.sot + " on target · " + m.inter + " interceptions");
      el("circle", { cx: p.x, cy: p.y, r: m.germany ? 7 : 5, class: "mark" }, g);
      if (compact) {
        // compact: a small numeral beside the mark; the axis list decodes it
        txt(el("text", {
          x: p.x, y: p.y - 12, "text-anchor": "middle", class: "match-num"
        }, g), String(i + 1));
      } else {
        var lx = p.x + o.dx;
        var lAnchor = o.anchor;
        // keep middle-anchored labels inside the viewBox on the right
        if (lAnchor === "middle" && lx + 90 > W - 6) { lAnchor = "end"; lx = p.x + 6; }
        txt(el("text", {
          x: lx, y: p.y + o.dy, "text-anchor": lAnchor, class: "match-label"
        }, g), m.label);
      }
      // assistive stat line (hover/focus only)
      var s = m.shots + " shots · " + m.sot + " on target · " + m.inter + " interceptions";
      var ay = m.germany ? p.y - 18 : p.y + (o.dy > 0 ? o.dy + 16 : o.dy - 14);
      var bw2 = s.length * (compact ? 5.7 : 6.2) + 10;
      var aAnchor = "end";
      var ax = Math.min(p.x + 6, W - 8);
      el("rect", {
        x: ax - bw2 + 5, y: ay - 11, width: bw2, height: 16, class: "assist-bg"
      }, g);
      txt(el("text", { x: ax, y: ay, "text-anchor": aAnchor, class: "assist" }, g), s);
      // The Germany note is optional text (STORY.md); hover/focus-only on
      // compact screens where it would collide with neighboring labels.
      if (m.germany && !compact) {
        txt(el("text", {
          x: p.x, y: p.y + o.dy + 17,
          "text-anchor": "middle", class: "germany-note"
        }, g), GERMANY_NOTE);
      }
    });

    host.appendChild(svg);
  }

  build();

  // Rebuild on resize/orientation change so the poster keeps filling its frame.
  var raf = null;
  window.addEventListener("resize", function () {
    if (raf) return;
    raf = window.requestAnimationFrame(function () { raf = null; build(); });
  });
})();
