const LABELS = ['Retain', 'Condense', 'Reorder', 'Omit', 'Merge'];
const CLASSES = ['retain-bar', 'condense-bar', 'reorder-bar', 'omit-bar', 'merge-bar'];

const BOOKS = [
  { title: "A Christmas Carol", author: "Charles Dickens", year: 1843, genre: "Drama", Retain: 278, Condense: 216, Reorder: 141, Omit: 104, Merge: 81 },
  { title: "The Adventures of Tom Sawyer", author: "Mark Twain", year: 1876, genre: "Adventure", Retain: 225, Condense: 204, Reorder: 171, Omit: 132, Merge: 96 },
  { title: "The Jungle Book", author: "Rudyard Kipling", year: 1894, genre: "Adventure", Retain: 219, Condense: 279, Reorder: 159, Omit: 116, Merge: 87 },
  { title: "Crime and Punishment", author: "Fyodor Dostoevsky", year: 1866, genre: "Psychological", Retain: 214, Condense: 220, Reorder: 175, Omit: 134, Merge: 105 },
  { title: "The Picture of Dorian Gray", author: "Oscar Wilde", year: 1890, genre: "Gothic", Retain: 212, Condense: 205, Reorder: 199, Omit: 130, Merge: 103 },
  { title: "War and Peace", author: "Leo Tolstoy", year: 1869, genre: "Historical", Retain: 212, Condense: 295, Reorder: 168, Omit: 127, Merge: 91 },
  { title: "Adventures of Huckleberry Finn", author: "Mark Twain", year: 1884, genre: "Adventure", Retain: 211, Condense: 236, Reorder: 174, Omit: 152, Merge: 81 },
  { title: "Anna Karenina", author: "Leo Tolstoy", year: 1877, genre: "Romance", Retain: 208, Condense: 268, Reorder: 155, Omit: 149, Merge: 76 },
  { title: "A Tale of Two Cities", author: "Charles Dickens", year: 1859, genre: "Historical", Retain: 209, Condense: 270, Reorder: 156, Omit: 147, Merge: 81 },
  { title: "Little Women", author: "Louisa May Alcott", year: 1868, genre: "Drama", Retain: 206, Condense: 279, Reorder: 158, Omit: 132, Merge: 79 },
  { title: "The Adventures of Sherlock Holmes", author: "Arthur Conan Doyle", year: 1892, genre: "Mystery", Retain: 204, Condense: 264, Reorder: 182, Omit: 125, Merge: 79 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813, genre: "Romance", Retain: 190, Condense: 286, Reorder: 178, Omit: 125, Merge: 92 },
  { title: "Great Expectations", author: "Charles Dickens", year: 1861, genre: "Drama", Retain: 183, Condense: 273, Reorder: 173, Omit: 151, Merge: 75 },
  { title: "Treasure Island", author: "Robert Louis Stevenson", year: 1883, genre: "Adventure", Retain: 184, Condense: 291, Reorder: 151, Omit: 159, Merge: 72 },
  { title: "Dracula", author: "Bram Stoker", year: 1897, genre: "Horror", Retain: 184, Condense: 247, Reorder: 193, Omit: 127, Merge: 103 },
  { title: "Peter Pan", author: "J.M. Barrie", year: 1911, genre: "Fantasy", Retain: 178, Condense: 274, Reorder: 177, Omit: 119, Merge: 88 },
  { title: "The Time Machine", author: "H.G. Wells", year: 1895, genre: "SciFi", Retain: 177, Condense: 211, Reorder: 219, Omit: 129, Merge: 80 },
  { title: "The Count of Monte Cristo", author: "Alexandre Dumas", year: 1844, genre: "Adventure", Retain: 174, Condense: 287, Reorder: 182, Omit: 134, Merge: 73 },
  { title: "Great Expectations", author: "Charles Dickens", year: 1861, genre: "Drama", Retain: 183, Condense: 273, Reorder: 173, Omit: 151, Merge: 75 },
  { title: "The Wonderful Wizard of Oz", author: "L. Frank Baum", year: 1900, genre: "Fantasy", Retain: 134, Condense: 241, Reorder: 140, Omit: 111, Merge: 80 },
  { title: "Alice's Adventures in Wonderland", author: "Lewis Carroll", year: 1865, genre: "Fantasy", Retain: 42, Condense: 80, Reorder: 44, Omit: 41, Merge: 16 },
  { title: "The Strange Case of Dr. Jekyll and Mr. Hyde", author: "Robert Louis Stevenson", year: 1886, genre: "Horror", Retain: 106, Condense: 187, Reorder: 83, Omit: 105, Merge: 49 },
  { title: "Moby Dick", author: "Herman Melville", year: 1851, genre: "Adventure", Retain: 152, Condense: 268, Reorder: 181, Omit: 200, Merge: 83 },
  { title: "Frankenstein", author: "Mary Shelley", year: 1818, genre: "Gothic_SciFi", Retain: 168, Condense: 244, Reorder: 182, Omit: 150, Merge: 95 },
];

const EVENTS = [
  { type: "Revelation", Retain: 1037, Condense: 711, Reorder: 371, Omit: 245, Merge: 161 },
  { type: "Confrontation", Retain: 974, Condense: 718, Reorder: 397, Omit: 266, Merge: 179 },
  { type: "Betrayal", Retain: 247, Condense: 346, Reorder: 303, Omit: 247, Merge: 165 },
  { type: "Conflict", Retain: 433, Condense: 745, Reorder: 460, Omit: 453, Merge: 219 },
  { type: "Discovery", Retain: 228, Condense: 326, Reorder: 301, Omit: 279, Merge: 150 },
  { type: "Journey", Retain: 232, Condense: 364, Reorder: 301, Omit: 268, Merge: 150 },
  { type: "Climax", Retain: 222, Condense: 362, Reorder: 322, Omit: 244, Merge: 150 },
  { type: "Arrival", Retain: 223, Condense: 387, Reorder: 306, Omit: 253, Merge: 176 },
  { type: "Romance", Retain: 317, Condense: 680, Reorder: 383, Omit: 375, Merge: 223 },
  { type: "Dialogue", Retain: 357, Condense: 986, Reorder: 597, Omit: 369, Merge: 292 },
];

// Deduplicate books by title, keep highest retain
const seen = new Set();
const BOOKS_DEDUPED = BOOKS.filter(b => {
  if (seen.has(b.title)) return false;
  seen.add(b.title);
  return true;
}).map(b => {
  const total = LABELS.reduce((s, l) => s + b[l], 0);
  const pct = {};
  LABELS.forEach(l => pct[l] = b[l] / total * 100);
  return { ...b, total, pct };
}).sort((a, b) => b.pct.Retain - a.pct.Retain);

const EVENTS_PROCESSED = EVENTS.map(e => {
  const total = LABELS.reduce((s, l) => s + e[l], 0);
  const pct = {};
  LABELS.forEach(l => pct[l] = e[l] / total * 100);
  return { ...e, total, pct };
});

// Tooltip
const tooltip = document.getElementById('tooltip');

function showTooltip(e, rows) {
  tooltip.innerHTML = rows.join('<br>');
  tooltip.classList.add('visible');
  moveTooltip(e);
}

function moveTooltip(e) {
  const x = e.clientX + 14;
  const y = e.clientY - 10;
  tooltip.style.left = Math.min(x, window.innerWidth - 240) + 'px';
  tooltip.style.top = y + 'px';
}

function hideTooltip() { tooltip.classList.remove('visible'); }

function buildBar(data, labelKey, isEvent = false) {
  const row = document.createElement('div');
  row.className = 'chart-row' + (isEvent ? ' event-row' : '');

  const labelEl = document.createElement('div');
  labelEl.className = 'chart-label';
  if (isEvent) {
    labelEl.textContent = data[labelKey];
  } else {
    const short = data.title.length > 28 ? data.title.slice(0, 26) + '…' : data.title;
    labelEl.innerHTML = `${short}<em>${data.author}, ${data.year}</em>`;
  }

  const barWrap = document.createElement('div');
  barWrap.className = 'bar-row-wrap';

  const track = document.createElement('div');
  track.className = 'bar-track';
  track.style.flex = '1';

  LABELS.forEach((label, i) => {
    const seg = document.createElement('div');
    seg.className = `bar-segment ${CLASSES[i]}`;
    seg.style.width = data.pct[label].toFixed(2) + '%';

    const count = data[label];
    const pct = data.pct[label].toFixed(1);
    seg.addEventListener('mousemove', e => {
      showTooltip(e, [
        `<strong>${isEvent ? data.type : data.title}</strong>`,
        `${label}: ${count} excerpts (${pct}%)`
      ]);
      moveTooltip(e);
    });
    seg.addEventListener('mouseleave', hideTooltip);

    track.appendChild(seg);
  });

  const pctLabel = document.createElement('span');
  pctLabel.className = 'chart-pct';
  pctLabel.textContent = data.pct.Retain.toFixed(0) + '% kept';

  barWrap.appendChild(track);
  barWrap.appendChild(pctLabel);

  row.appendChild(labelEl);
  row.appendChild(barWrap);
  return row;
}

function buildAxisRow(isEvent = false) {
  const row = document.createElement('div');
  row.className = 'axis-row' + (isEvent ? ' event-axis' : '');
  const empty = document.createElement('div');
  const labels = document.createElement('div');
  labels.className = 'axis-labels';
  labels.innerHTML = '<span>0%</span><span>50%</span><span>100%</span>';
  row.appendChild(empty);
  row.appendChild(labels);
  return row;
}

// Render books
const bookChart = document.getElementById('book-chart');
bookChart.appendChild(buildAxisRow(false));
BOOKS_DEDUPED.forEach(b => bookChart.appendChild(buildBar(b, 'title', false)));

// Render events
const eventChart = document.getElementById('event-chart');
eventChart.appendChild(buildAxisRow(true));
EVENTS_PROCESSED.forEach(e => eventChart.appendChild(buildBar(e, 'type', true)));
