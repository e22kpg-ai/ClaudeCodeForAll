// Menu page: Dishes grouped by Category with a typical price in Thai baht.
// Requires dishes.js and app.js (escapeHtml, spiceHtml, dishUrl) to be loaded first.

// Typical price per serving in THB, keyed by Dish id. `unit` is shown when the
// price is not for one plate. These are rough guides, not quotes.
const PRICES = {
  "green-curry": { price: 120 },
  "massaman-curry": { price: 130 },
  "tom-yum-goong": { price: 180 },
  "tom-kha-gai": { price: 120 },
  "pad-kra-pao": { price: 70 },
  "cashew-chicken": { price: 100 },
  "som-tam": { price: 60 },
  "larb": { price: 90 },
  "pad-thai": { price: 80 },
  "khao-soi": { price: 90 },
  "khao-pad": { price: 70 },
  "khao-man-gai": { price: 60 },
  "mango-sticky-rice": { price: 100 },
  "moo-ping": { price: 15, unit: "per skewer" },
  "satay": { price: 80, unit: "per set" },
};

function priceHtml(entry) {
  const unit = entry.unit ? `<span class="menu-unit">${escapeHtml(entry.unit)}</span>` : "";
  return `<span class="menu-price">฿${entry.price}${unit}</span>`;
}

function menuRowHtml(dish, entry) {
  return `
    <li class="menu-row">
      <div class="menu-main">
        <a class="menu-name" href="${dishUrl(dish)}">${escapeHtml(dish.english)}</a>
        <span class="thai" lang="th">${escapeHtml(dish.thai)}</span>
        ${spiceHtml(dish.spice)}
      </div>
      <span class="menu-dots" aria-hidden="true"></span>
      ${priceHtml(entry)}
    </li>`;
}

function initMenu() {
  const menu = document.getElementById("menu");
  const jump = document.getElementById("menu-jump");
  if (!menu) return;

  const sections = CATEGORIES.map((category) => {
    const rows = DISHES.filter((d) => d.category === category && PRICES[d.id]);
    return { category, rows };
  }).filter((s) => s.rows.length > 0);

  jump.innerHTML = sections
    .map((s) => `<a href="#menu-${escapeHtml(s.category)}">${escapeHtml(s.category)}</a>`)
    .join("");

  menu.innerHTML = sections
    .map(
      (s) => `
    <section class="menu-section" aria-labelledby="menu-${escapeHtml(s.category)}">
      <h2 id="menu-${escapeHtml(s.category)}">${escapeHtml(s.category)}</h2>
      <ul class="menu-list">${s.rows.map((d) => menuRowHtml(d, PRICES[d.id])).join("")}</ul>
    </section>`
    )
    .join("");
}

initMenu();
