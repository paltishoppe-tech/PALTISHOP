// PALTISHOP — Catálogo web | Día de la Mujer 💜
// ============================================================
const WHATSAPP_NUMBER = "51912640288";

function waMsg(texto){
  return `Hola PALTISHOP! 👋🌸\n\n${texto}\n\n¿Me puedes dar más información? ¡Gracias! 😊`;
}

const $  = (s, el=document) => el.querySelector(s);
const $$ = (s, el=document) => Array.from(el.querySelectorAll(s));

function escHtml(str=""){
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

// ============================================================
// PACKS
// Cambia el "img" por el nombre de tu foto ej: "pack1.jpg"
// ============================================================
const packs = [
  {
    img:     "pack-nochebuena.jpg",
    name:    "Pack Nochebuena Co'quette",
    price:   "S/ 79.90",
    desc:    "Combo súper romántico para sorprender en 8M 💝",
    badge:   "Más vendido"
  },
  {
    img:     "pack-tulipan.jpg",
    name:    "Pack Tulipán Deluxe",
    price:   "S/ 89.90",
    desc:    "Regalo elegante y minimal, perfecto para foto y sorpresa ✨",
    badge:   "Premium"
  },
  {
    img:     "pack-osito.jpg",
    name:    "Pack Osito + Detalle",
    price:   "S/ 59.90",
    desc:    "Hermoso y accesible — ideal para pedidos rápidos ✅",
    badge:   "Top"
  },
];

// ============================================================
// PRODUCTOS (categorías)
// ============================================================
const productos = [
  { img:"peluche.jpg",    name:"Peluches",        price:"Desde S/ 25", desc:"Ositos, capibaras, y más 🧸", filter:"peluches" },
  { img:"lampara.jpg",    name:"Lámparas",        price:"Desde S/ 35", desc:"Tulipanes, luna, y más 💡",   filter:"lamparas" },
  { img:"collar.jpg",     name:"Accesorios",      price:"Desde S/ 15", desc:"Collares, pulseras ✨",       filter:"accesorios" },
  { img:"pareja.jpg",     name:"Detalles Pareja", price:"Desde S/ 25", desc:"Regalos románticos 💞",       filter:"pareja" },
];

// ============================================================
// CATÁLOGO PÁGINAS
// ============================================================
const pages = Array.from({length: 22}, (_,i) => `page-${String(i+1).padStart(2,"0")}.webp`);

// ============================================================
// RENDER UI
// ============================================================
function cardHTML(item, type="pack"){
  const img = escHtml(item.img || "page-01.webp");
  const name = escHtml(item.name || "Producto");
  const price = escHtml(item.price || "");
  const desc = escHtml(item.desc || "");
  const badge = escHtml(item.badge || "");

  const msg = type === "pack"
    ? waMsg(`Hola! Quiero el *${item.name}* (${item.price}).`)
    : waMsg(`Hola! Quiero información del producto: *${item.name}* (${item.price}).`);

  const wa = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

  return `
    <article class="card" data-filter="${escHtml(item.filter || "all")}">
      <div class="card__img">
        <img src="${img}" alt="${name}" loading="lazy"
             onerror="this.src='page-01.webp'; this.style.opacity='.25'"/>
      </div>
      <div class="card__body">
        <div class="priceRow">
          <div class="price">${price}</div>
          ${badge ? `<div class="tag">${badge}</div>` : ``}
        </div>
        <div class="card__title">${name}</div>
        <p class="card__desc">${desc}</p>
        <div class="card__actions">
          <a class="btn-lite btn-wa" href="${wa}" target="_blank" rel="noopener">💬 Pedir</a>
          <a class="btn-lite" href="#catalogo" data-open-page="1">Ver catálogo</a>
        </div>
      </div>
    </article>
  `;
}

function renderPacks(){
  const el = $("#packsGrid");
  if(!el) return;
  el.innerHTML = packs.map(p => cardHTML(p,"pack")).join("");
}

function renderProducts(){
  const el = $("#productsGrid");
  if(!el) return;
  el.innerHTML = productos.map(p => cardHTML(p,"product")).join("");
}

function renderCatalog(){
  const el = $("#catalogGrid");
  if(!el) return;
  el.innerHTML = pages.map((src, idx) => `
    <button class="pageThumb" data-open-page="${idx+1}" aria-label="Abrir página ${idx+1}">
      <img src="${src}" alt="Página ${idx+1}" loading="lazy"/>
    </button>
  `).join("");
}

function bindFilters(){
  const chips = $$(".chip");
  if(!chips.length) return;
  chips.forEach(ch => {
    ch.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("is-active"));
      ch.classList.add("is-active");
      const f = ch.getAttribute("data-filter");
      $$("#productsGrid .card").forEach(card => {
        card.style.display = (f === "all" || card.getAttribute("data-filter") === f) ? "" : "none";
      });
    });
  });
}

// ============================================================
// VIEWER MODAL
// ============================================================
let currentPage = 1;

function openViewer(page=1){
  currentPage = Math.max(1, Math.min(pages.length, page));
  const viewer = $("#viewer");
  const img = $("#viewerImg");
  const title = $("#viewerTitle");
  const wa = $("#viewerWa");
  const openImg = $("#openImg");

  if(!viewer || !img || !title || !wa || !openImg) return;

  const src = pages[currentPage-1];
  img.src = src;
  title.textContent = `Página ${currentPage} / ${pages.length}`;

  const msg = waMsg(`Quiero información de la *Página ${currentPage}* del catálogo.`);
  wa.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

  openImg.href = src;

  viewer.classList.add("is-open");
  viewer.setAttribute("aria-hidden","false");
}

function closeViewer(){
  const viewer = $("#viewer");
  if(!viewer) return;
  viewer.classList.remove("is-open");
  viewer.setAttribute("aria-hidden","true");
}

function bindViewer(){
  const viewer = $("#viewer");
  if(!viewer) return;

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-open-page]");
    if(btn){
      const p = parseInt(btn.getAttribute("data-open-page"), 10);
      openViewer(p);
    }
  });

  viewer.addEventListener("click", (e) => {
    if(e.target === viewer) closeViewer();
  });

  const closeBtn = viewer.querySelector("[data-close]");
  const prevBtn  = viewer.querySelector("[data-prev]");
  const nextBtn  = viewer.querySelector("[data-next]");

  closeBtn && closeBtn.addEventListener("click", closeViewer);
  prevBtn  && prevBtn.addEventListener("click", () => openViewer(currentPage - 1));
  nextBtn  && nextBtn.addEventListener("click", () => openViewer(currentPage + 1));

  document.addEventListener("keydown", (e) => {
    if(!viewer.classList.contains("is-open")) return;
    if(e.key === "Escape") closeViewer();
    if(e.key === "ArrowLeft") openViewer(currentPage - 1);
    if(e.key === "ArrowRight") openViewer(currentPage + 1);
  });
}

// ============================================================
// INIT
// ============================================================
function render(){
  renderPacks();
  renderProducts();
  renderCatalog();
  bindFilters();
  bindViewer();
  const y = $("#year");
  if(y) y.textContent = new Date().getFullYear();
}

function bindMobileMenu(){
  const btn = $("[data-hamburger]");
  const nav = $(".nav");
  if(!btn || !nav) return;

  btn.addEventListener("click", () => {
    nav.classList.toggle("is-open");
  });

  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => nav.classList.remove("is-open"));
  });

  document.addEventListener("click", (e) => {
    if(!nav.classList.contains("is-open")) return;
    const inside = nav.contains(e.target) || btn.contains(e.target);
    if(!inside) nav.classList.remove("is-open");
  });
}

function bindRevealOnScroll(){
  const els = $$(".reveal");
  if(!els.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if(en.isIntersecting){
        en.target.classList.add("show");
        obs.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => obs.observe(el));
}

function bindHeaderShadow(){
  const header = $(".header");
  if(!header) return;
  const onScroll = () => {
    const y = window.scrollY || document.documentElement.scrollTop;
    header.style.boxShadow = y > 6 ? "0 14px 40px rgba(16,17,20,.08)" : "none";
  };
  window.addEventListener("scroll", onScroll, { passive:true });
  onScroll();
}

function bindFloatingWhatsApp(){
  const a = $(".wa-float");
  if(!a) return;
  const msg = waMsg("Quiero hacer un pedido (Día de la Mujer).");
  a.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

render();
bindMobileMenu();
bindRevealOnScroll();
bindHeaderShadow();
bindFloatingWhatsApp();
