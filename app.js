// Shared helpers and page logic. Requires dishes.js to be loaded first.

const SPICE_LABELS = ["Not spicy", "Mild", "Medium", "Very spicy"];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function spiceHtml(level) {
  const label = SPICE_LABELS[level];
  let chilies = "";
  for (let i = 0; i < 3; i++) {
    chilies += `<span class="chili${i < level ? " on" : ""}" aria-hidden="true">🌶️</span>`;
  }
  return `<span class="spice" role="img" aria-label="Spice level ${level} of 3: ${label}">${chilies}<span class="spice-label" aria-hidden="true">${label}</span></span>`;
}

function dishUrl(dish) {
  return `dish.html?id=${encodeURIComponent(dish.id)}`;
}

function cardHtml(dish) {
  return `
    <a class="card" href="${dishUrl(dish)}">
      <img src="${escapeHtml(dish.image)}" alt="${escapeHtml(dish.english)} (placeholder image)" loading="lazy" width="600" height="400">
      <div class="card-body">
        <span class="pill">${escapeHtml(dish.category)}</span>
        <h3>${escapeHtml(dish.english)}</h3>
        <p class="thai" lang="th">${escapeHtml(dish.thai)}</p>
        <p class="pron">${escapeHtml(dish.pronunciation)}</p>
        ${spiceHtml(dish.spice)}
      </div>
    </a>`;
}

// ---- Dishes and Home: search and filters ----
// With data-default="featured" on the grid (Home), featured Dishes show until a
// search or filter is used; then all Dishes are searched.
function initDishes() {
  const grid = document.getElementById("dish-grid");
  if (!grid) return;

  const searchInput = document.getElementById("search");
  const categoryBar = document.getElementById("category-filter");
  const spiceBar = document.getElementById("spice-filter");
  const count = document.getElementById("result-count");
  const empty = document.getElementById("no-results");
  const resetBtn = document.getElementById("reset-filters");

  const state = { query: "", category: "all", spice: "all" };

  function chip(value, label, group, pressed) {
    return `<button type="button" class="chip" data-group="${group}" data-value="${escapeHtml(value)}" aria-pressed="${pressed}">${escapeHtml(label)}</button>`;
  }

  categoryBar.innerHTML =
    chip("all", "All", "category", true) +
    CATEGORIES.map((c) => chip(c, c, "category", false)).join("");
  spiceBar.innerHTML =
    chip("all", "Any", "spice", true) +
    SPICE_LABELS.map((label, i) => chip(String(i), `${i} · ${label}`, "spice", false)).join("");

  function matches(dish) {
    if (state.category !== "all" && dish.category !== state.category) return false;
    if (state.spice !== "all" && dish.spice !== Number(state.spice)) return false;
    if (state.query) {
      const haystack = `${dish.english} ${dish.thai} ${dish.pronunciation}`.toLowerCase();
      if (!haystack.includes(state.query)) return false;
    }
    return true;
  }

  const featuredByDefault = grid.dataset.default === "featured";

  function render() {
    const filtering = state.query !== "" || state.category !== "all" || state.spice !== "all";
    const showFeatured = featuredByDefault && !filtering;
    const results = showFeatured ? DISHES.filter((d) => d.featured) : DISHES.filter(matches);
    grid.innerHTML = results.map(cardHtml).join("");
    count.textContent = showFeatured
      ? `Showing ${results.length} featured dishes`
      : `${results.length} of ${DISHES.length} dishes`;
    empty.hidden = results.length > 0;
    grid.hidden = results.length === 0;
  }

  function setPressed(bar, value) {
    bar.querySelectorAll(".chip").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.value === value));
    });
  }

  function onChipClick(event) {
    const btn = event.target.closest(".chip");
    if (!btn) return;
    const group = btn.dataset.group;
    state[group] = btn.dataset.value;
    setPressed(group === "category" ? categoryBar : spiceBar, btn.dataset.value);
    render();
  }

  categoryBar.addEventListener("click", onChipClick);
  spiceBar.addEventListener("click", onChipClick);
  searchInput.addEventListener("input", () => {
    state.query = searchInput.value.trim().toLowerCase();
    render();
  });
  resetBtn.addEventListener("click", () => {
    state.query = "";
    state.category = "all";
    state.spice = "all";
    searchInput.value = "";
    setPressed(categoryBar, "all");
    setPressed(spiceBar, "all");
    render();
  });

  render();
}

// ---- Dish detail ----
function initDish() {
  const root = document.getElementById("dish-detail");
  if (!root) return;

  const id = new URLSearchParams(window.location.search).get("id");
  const dish = DISHES.find((d) => d.id === id);

  if (!dish) {
    document.title = "Dish not found · Thai Food";
    root.innerHTML = `
      <div class="not-found">
        <h1>Dish not found</h1>
        <p>We couldn’t find a dish${id ? ` called “${escapeHtml(id)}”` : ""}.</p>
        <p><a class="button" href="dishes.html">Browse all dishes</a></p>
      </div>`;
    return;
  }

  document.title = `${dish.english} (${dish.thai}) · Thai Food`;
  root.innerHTML = `
    <p class="back"><a href="dishes.html">← All dishes</a></p>
    <div class="detail-head">
      <img src="${escapeHtml(dish.image)}" alt="${escapeHtml(dish.english)} (placeholder image)" width="600" height="400">
      <div>
        <span class="pill">${escapeHtml(dish.category)}</span>
        <h1>${escapeHtml(dish.english)}</h1>
        <p class="thai thai-large" lang="th">${escapeHtml(dish.thai)}</p>
        <p class="pron">Say it: <strong>${escapeHtml(dish.pronunciation)}</strong></p>
        ${spiceHtml(dish.spice)}
        <p class="spice-note">${escapeHtml(dish.spiceNote)}</p>
      </div>
    </div>
    <section class="detail-section">
      <h2>Taste</h2>
      <p>${escapeHtml(dish.taste)}</p>
    </section>
    <section class="detail-section">
      <h2>Main ingredients</h2>
      <ul class="tags">${dish.ingredients.map((i) => `<li>${escapeHtml(i)}</li>`).join("")}</ul>
    </section>
    <section class="detail-section">
      <h2>Culture</h2>
      <p>${escapeHtml(dish.culture)}</p>
    </section>
    <section class="detail-section">
      <h2>How to order and eat it</h2>
      <p>${escapeHtml(dish.howToOrder)}</p>
    </section>`;
}

initDishes();
initDish();
