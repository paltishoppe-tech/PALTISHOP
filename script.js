// ============================================================
// PALTISHOP — Tienda Full (Carrito + WhatsApp Checkout)
// Edita productos aquí y la tienda se actualiza sola.
// ============================================================

const WHATSAPP_NUMBER = "51912640288";
const CURRENCY = "S/";
const DEFAULT_COUPON = {
  code: "8M",         // cupón
  type: "percent",    // "percent" | "fixed"
  value: 10           // 10% de descuento
};

// Catálogo páginas (si ya tienes page-01.webp ... page-22.webp)
const pages = Array.from({ length: 22 }, (_, i) => `page-${String(i + 1).padStart(2, "0")}.webp`);

// =========================
// PRODUCTOS (TODO EN 1 LUGAR)
// =========================
const products = [
  // Packs
  { id:"pack-coquette", name:"Pack Co'quette 8M", category:"Packs", price:79.90, img:"pack-01.jpg",
    desc:"Combo romántico: detalle + empaque bonito. Ideal 8M 💝", badges:["Más vendido","Stock limitado"], hot:true },
  { id:"pack-tulipan", name:"Pack Tulipán Deluxe", category:"Packs", price:89.90, img:"pack-02.jpg",
    desc:"Regalo elegante y minimal. Perfecto para sorprender ✨", badges:["Premium"], hot:true },
  { id:"pack-mini", name:"Pack Mini Sorpresa", category:"Packs", price:59.90, img:"pack-03.jpg",
    desc:"Hermoso y accesible — pedidos rápidos ✅", badges:["Top"], hot:false },

  // Peluches
  { id:"peluche-capibara", name:"Peluche Capibara", category:"Peluches", price:39.90, img:"peluche-01.jpg",
    desc:"Suave y tierno, el favorito del momento 🧸", badges:["Tendencia"], hot:true },
  { id:"peluche-osito", name:"Osito clásico", category:"Peluches", price:29.90, img:"peluche-02.jpg",
    desc:"El clásico que nunca falla 💞", badges:["Regalo seguro"], hot:false },

  // Lámparas
  { id:"lampara-tulipan", name:"Lámpara Tulipán", category:"Lámparas", price:49.90, img:"lampara-01.jpg",
    desc:"Decora y enamora. Luz cálida y bonita 🌷", badges:["Nuevo"], hot:true },
  { id:"lampara-luna", name:"Lámpara Luna", category:"Lámparas", price:44.90, img:"lampara-02.jpg",
    desc:"Luz suave estilo aesthetic 🌙", badges:[], hot:false },

  // Accesorios
  { id:"collar-tulipan", name:"Collar Tulipán", category:"Accesorios", price:24.90, img:"acc-01.jpg",
    desc:"Detalle delicado y elegante ✨", badges:["Top"], hot:false },
  { id:"pulsera-tulipan", name:"Pulsera Tulipán", category:"Accesorios", price:19.90, img:"acc-02.jpg",
    desc:"Sutil, bonita y combinable 💗", badges:[], hot:false },
  { id:"fotos-polaroid", name:"Fotos Polaroid (Pack)", category:"Accesorios", price:14.90, img:"acc-03.jpg",
    desc:"Recuerdos que se sienten. Ideal para añadir al regalo 📸", badges:["Recomendado"], hot:true },

  // Pareja
  { id:"detalle-pareja", name:"Detalle para Pareja", category:"Para pareja", price:34.90, img:"pareja-01.jpg",
    desc:"Una sorpresa romántica en minutos 💞", badges:["Romántico"], hot:false },
];

// Testimonios (edítalos si quieres)
const testimonials = [
  { name:"Valeria", stars:"★★★★★", text:"Llegó rápido y el empaque estaba precioso. Mi mamá feliz 💖" },
  { name:"Anthony", stars:"★★★★★", text:"Pedí por WhatsApp, súper atentos. Me mandaron foto antes de enviar." },
  { name:"Carmen", stars:"★★★★★", text:"La lámpara tulipán es hermosa, se ve premium. Recomendado 100%." },
  { name:"Jorge", stars:"★★★★★", text:"El pack coquette fue un golazo. Llegó tal cual la foto." },
  { name:"Mariana", stars:"★★★★★", text:"Me ayudaron con la dedicatoria y quedó perfecto. Gracias 💕" },
  { name:"Lucía", stars:"★★★★★", text:"En provincia me llegó en 3 días. Todo bien protegido." },
];

// FAQ
const faqs = [
  { q:"¿Cómo hago mi pedido?", a:"Agrega productos al carrito y presiona “Finalizar por WhatsApp”. Te llegará un mensaje listo para enviar con el detalle." },
  { q:"¿Hacen delivery en Lima?", a:"Sí. Coordinamos por WhatsApp. El costo depende del distrito y el motorizado llama 30 min antes." },
  { q:"¿Envían a provincia?", a:"Sí, por agencia (Shalom u Olva). Te enviamos guía y confirmación." },
  { q:"¿Qué medios de pago aceptan?", a:"Yape / Plin / Transferencia. Te confirmamos el monto y datos al finalizar." },
  { q:"¿Puedo pedir para hoy?", a:"Sí, según stock y distrito. Escríbenos y te decimos la entrega más rápida." },
];

// =========================
// Helpers
// =========================
const $  = (s, el=document) => el.querySelector(s);
const $$ = (s, el=document) => Array.from(el.querySelectorAll(s));

const fmt = (n) => `${CURRENCY} ${Number(n).toFixed(2)}`;
const esc = (v="") => String(v)
  .replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;")
  .replaceAll('"',"&quot;").replaceAll("'","&#039;");

function waLink(text){
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function waMessageFromCart(cart, total, discount, couponCode){
  const lines = [];
  lines.push("Hola PALTISHOP! 👋🌸");
  lines.push("");
  lines.push("Quiero hacer este pedido:");
  lines.push("");

  cart.forEach(item => {
    lines.push(`• ${item.qty} x ${item.name} — ${fmt(item.price)} c/u`);
  });

  lines.push("");
  if(couponCode){
    lines.push(`Cupón: ${couponCode} (desc: ${fmt(discount)})`);
  }
  lines.push(`TOTAL: ${fmt(total)}`);
  lines.push("");
  lines.push("Datos para coordinar:");
  lines.push("• Distrito/Ciudad:");
  lines.push("• Fecha de entrega:");
  lines.push("• Dedicatoria (opcional):");
  lines.push("");
  lines.push("Gracias 😊");
  return lines.join("\n");
}

// =========================
// State
// =========================
let activeCategory = "Todo";
let searchQuery = "";
let sortMode = "hot";

let cart = loadCart(); // [{id, name, price, img, qty}]
let appliedCoupon = null; // {code,type,value} or null

// For product modal
let modalProductId = null;
let modalQty = 1;

// Catalog modal
let catIndex = 0;

// =========================
// Render
// =========================
function categoriesFromProducts(){
  const cats = new Set(products.map(p => p.category));
  return ["Todo", ...Array.from(cats)];
}

function renderChips(){
  const chips = $("#chips");
  if(!chips) return;
  const cats = categoriesFromProducts();
  chips.innerHTML = cats.map(c => `
    <button class="chip ${c===activeCategory ? "is-active":""}" data-cat="${esc(c)}">${esc(c)}</button>
  `).join("");
}

function card(p){
  const badges = (p.badges||[]).slice(0,2).map(b => `<span class="tag">${esc(b)}</span>`).join("");
  const ok = `<span class="tag tag--ok">✅ En stock</span>`;
  return `
    <article class="card" data-id="${esc(p.id)}">
      <div class="card__img">
        ${p.hot ? `<div class="card__hot">🔥 HOT</div>` : ``}
        <img src="${esc(p.img)}" alt="${esc(p.name)}" loading="lazy"
             onerror="this.style.opacity='.18'; this.alt='Imagen no disponible';"/>
      </div>
      <div class="card__body">
        <div class="priceRow">
          <div class="price">${fmt(p.price)}</div>
          ${ok}
        </div>
        <h3 class="card__title">${esc(p.name)}</h3>
        <p class="card__desc">${esc(p.desc)}</p>
        <div class="badges">${badges}</div>
        <div class="card__actions">
          <button class="btnLite" data-view="${esc(p.id)}">Ver</button>
          <button class="btnLite btnLite--wa" data-add="${esc(p.id)}">Agregar</button>
        </div>
      </div>
    </article>
  `;
}

function filterSortProducts(){
  let list = products.slice();

  // category
  if(activeCategory !== "Todo"){
    list = list.filter(p => p.category === activeCategory);
  }

  // search
  const q = searchQuery.trim().toLowerCase();
  if(q){
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }

  // sort
  if(sortMode === "price_asc"){
    list.sort((a,b) => a.price - b.price);
  } else if(sortMode === "price_desc"){
    list.sort((a,b) => b.price - a.price);
  } else if(sortMode === "name"){
    list.sort((a,b) => a.name.localeCompare(b.name));
  } else {
    // hot first, then category packs first, then price asc (soft)
    list.sort((a,b) => (Number(!!b.hot) - Number(!!a.hot)) || (a.category === "Packs" ? -1 : 0) || (a.price - b.price));
  }

  return list;
}

function renderGrid(){
  const grid = $("#productGrid");
  if(!grid) return;
  const list = filterSortProducts();
  grid.innerHTML = list.map(card).join("") || `<div class="muted">No hay resultados 😅</div>`;
}

function renderPacks(){
  const el = $("#packsGrid");
  if(!el) return;
  const packList = products.filter(p => p.category === "Packs");
  el.innerHTML = packList.map(card).join("");
}

function renderDeals(){
  const el = $("#hotDeals");
  if(!el) return;
  const deals = products.filter(p => p.hot).slice(0, 4);
  el.innerHTML = deals.map(p => `
    <div class="deal">
      <div class="deal__l">
        <div class="deal__img"><img src="${esc(p.img)}" alt="${esc(p.name)}" loading="lazy"></div>
        <div>
          <div class="deal__name">${esc(p.name)}</div>
          <div class="muted">${esc(p.category)}</div>
        </div>
      </div>
      <div class="deal__price">${fmt(p.price)}</div>
    </div>
  `).join("");
}

function renderTestimonials(){
  const el = $("#testimonials");
  if(!el) return;
  el.innerHTML = testimonials.map(t => `
    <div class="tCard">
      <div class="tCard__top">
        <div class="tCard__name">${esc(t.name)}</div>
        <div class="tCard__stars">${esc(t.stars)}</div>
      </div>
      <p class="tCard__text">“${esc(t.text)}”</p>
    </div>
  `).join("");
}

function renderFAQ(){
  const el = $("#faqList");
  if(!el) return;
  el.innerHTML = faqs.map((f, idx) => `
    <div class="faqItem" data-faq="${idx}">
      <div class="faqQ">
        <div>${esc(f.q)}</div>
        <div>＋</div>
      </div>
      <div class="faqA">${esc(f.a)}</div>
    </div>
  `).join("");
}

// =========================
// Cart
// =========================
function saveCart(){
  localStorage.setItem("paltishop_cart", JSON.stringify(cart));
  updateCartUI();
}
function loadCart(){
  try{
    const raw = localStorage.getItem("paltishop_cart");
    return raw ? JSON.parse(raw) : [];
  }catch{ return []; }
}

function cartCount(){
  return cart.reduce((s, i) => s + i.qty, 0);
}

function cartSubtotal(){
  return cart.reduce((s, i) => s + i.qty * i.price, 0);
}

function calcDiscount(subtotal){
  if(!appliedCoupon) return 0;
  if(appliedCoupon.type === "percent"){
    return Math.max(0, subtotal * (appliedCoupon.value / 100));
  }
  if(appliedCoupon.type === "fixed"){
    return Math.max(0, appliedCoupon.value);
  }
  return 0;
}

function addToCart(productId, qty=1){
  const p = products.find(x => x.id === productId);
  if(!p) return;
  const existing = cart.find(x => x.id === productId);
  if(existing) existing.qty += qty;
  else cart.push({ id:p.id, name:p.name, price:p.price, img:p.img, qty });
  saveCart();
  openDrawer("cartDrawer");
}

function setQty(productId, qty){
  const item = cart.find(x => x.id === productId);
  if(!item) return;
  item.qty = Math.max(1, qty);
  saveCart();
}

function removeFromCart(productId){
  cart = cart.filter(x => x.id !== productId);
  saveCart();
}

function renderCart(){
  const list = $("#cartList");
  if(!list) return;
  if(cart.length === 0){
    list.innerHTML = `<div class="muted">Tu carrito está vacío. Agrega algo 💝</div>`;
    return;
  }
  list.innerHTML = cart.map(i => `
    <div class="cartItem">
      <div class="cartItem__img"><img src="${esc(i.img)}" alt="${esc(i.name)}"></div>
      <div class="cartItem__main">
        <div class="cartItem__name">${esc(i.name)}</div>
        <div class="cartItem__price">${fmt(i.price)} c/u</div>
        <div class="cartItem__qty">
          <button class="cartMiniBtn" data-cminus="${esc(i.id)}">−</button>
          <div class="cartMiniVal">${i.qty}</div>
          <button class="cartMiniBtn" data-cplus="${esc(i.id)}">+</button>
          <button class="cartMiniBtn cartItem__rm" data-crm="${esc(i.id)}">🗑</button>
        </div>
      </div>
    </div>
  `).join("");
}

function updateTotals(){
  const sub = cartSubtotal();
  const disc = calcDiscount(sub);
  const total = Math.max(0, sub - disc);

  $("#subtotal").textContent = fmt(sub);
  $("#discount").textContent = fmt(disc);
  $("#total").textContent = fmt(total);

  return { sub, disc, total };
}

function updateCartUI(){
  $("#cartCount").textContent = cartCount();
  renderCart();
  updateTotals();
}

// =========================
// Modals / Drawer
// =========================
function openModal(id){
  const m = document.getElementById(id);
  if(!m) return;
  m.classList.add("is-open");
  m.setAttribute("aria-hidden","false");
}
function closeModal(id){
  const m = document.getElementById(id);
  if(!m) return;
  m.classList.remove("is-open");
  m.setAttribute("aria-hidden","true");
}

function openDrawer(id){
  const d = document.getElementById(id);
  if(!d) return;
  d.classList.add("is-open");
  d.setAttribute("aria-hidden","false");
}
function closeDrawer(id){
  const d = document.getElementById(id);
  if(!d) return;
  d.classList.remove("is-open");
  d.setAttribute("aria-hidden","true");
}

function bindCloseButtons(){
  document.addEventListener("click", (e) => {
    const close = e.target.closest("[data-close]");
    if(!close) return;
    const id = close.getAttribute("data-close");
    if(id === "cartDrawer") closeDrawer(id);
    else closeModal(id);
  });

  // click outside panel closes modal/drawer
  $$(".modal").forEach(m => {
    m.addEventListener("click", (e) => {
      if(e.target === m) closeModal(m.id);
    });
  });
  $$(".drawer").forEach(d => {
    d.addEventListener("click", (e) => {
      if(e.target === d) closeDrawer(d.id);
    });
  });

  document.addEventListener("keydown", (e) => {
    if(e.key !== "Escape") return;
    $$(".modal.is-open").forEach(m => closeModal(m.id));
    $$(".drawer.is-open").forEach(d => closeDrawer(d.id));
  });
}

// =========================
// Product modal
// =========================
function openProductModal(productId){
  const p = products.find(x => x.id === productId);
  if(!p) return;

  modalProductId = productId;
  modalQty = 1;

  $("#pmTitle").textContent = p.name;
  $("#pmImg").src = p.img;
  $("#pmPrice").textContent = fmt(p.price);
  $("#pmDesc").textContent = p.desc;

  const badges = (p.badges||[]).map(b => `<span class="tag">${esc(b)}</span>`).join("");
  const hot = p.hot ? `<span class="tag">🔥 HOT</span>` : "";
  $("#pmBadges").innerHTML = hot + badges;

  $("#qtyVal").textContent = modalQty;
  openModal("productModal");
}

function bindProductModal(){
  $("#qtyMinus").addEventListener("click", () => {
    modalQty = Math.max(1, modalQty - 1);
    $("#qtyVal").textContent = modalQty;
  });
  $("#qtyPlus").addEventListener("click", () => {
    modalQty = Math.min(99, modalQty + 1);
    $("#qtyVal").textContent = modalQty;
  });

  $("#pmAdd").addEventListener("click", () => {
    if(!modalProductId) return;
    addToCart(modalProductId, modalQty);
    closeModal("productModal");
  });

  $("#pmBuyNow").addEventListener("click", () => {
    if(!modalProductId) return;
    addToCart(modalProductId, modalQty);
    closeModal("productModal");
    openDrawer("cartDrawer");
  });
}

// =========================
// Catalog modal
// =========================
function renderCatalog(){
  const src = pages[catIndex] || pages[0];
  $("#catImg").src = src;
  $("#catCap").textContent = `Página ${catIndex+1} / ${pages.length}`;
  $("#catOpen").href = src;
}
function openCatalog(){
  catIndex = 0;
  renderCatalog();
  openModal("catalogModal");
}
function bindCatalog(){
  $("#openCatalog").addEventListener("click", openCatalog);
  $("#catPrev").addEventListener("click", () => {
    catIndex = (catIndex - 1 + pages.length) % pages.length;
    renderCatalog();
  });
  $("#catNext").addEventListener("click", () => {
    catIndex = (catIndex + 1) % pages.length;
    renderCatalog();
  });
}

// =========================
// Checkout
// =========================
function checkoutWhatsApp(){
  if(cart.length === 0){
    openDrawer("cartDrawer");
    return;
  }
  const { total, disc } = updateTotals();
  const msg = waMessageFromCart(cart, total, disc, appliedCoupon?.code || "");
  window.open(waLink(msg), "_blank", "noopener");
}

// Coupon apply
function applyCoupon(){
  const input = $("#coupon");
  const code = (input.value || "").trim().toUpperCase();
  if(!code){
    appliedCoupon = null;
    updateCartUI();
    return;
  }
  if(code === DEFAULT_COUPON.code){
    appliedCoupon = { ...DEFAULT_COUPON };
  }else{
    appliedCoupon = null;
    alert("Cupón no válido 😅");
  }
  updateCartUI();
}

// =========================
// Events / Bindings
// =========================
function bindHeader(){
  const header = $("#header");
  const nav = $("#nav");
  const ham = $("#hamburger");

  const onScroll = () => {
    const y = window.scrollY || document.documentElement.scrollTop;
    header.style.boxShadow = y > 6 ? "0 14px 40px rgba(15,17,21,.08)" : "none";
  };
  window.addEventListener("scroll", onScroll, { passive:true });
  onScroll();

  ham.addEventListener("click", () => nav.classList.toggle("is-open"));

  document.addEventListener("click", (e) => {
    if(!nav.classList.contains("is-open")) return;
    const inside = nav.contains(e.target) || ham.contains(e.target);
    if(!inside) nav.classList.remove("is-open");
  });
}

function bindShopbar(){
  $("#chips").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-cat]");
    if(!btn) return;
    activeCategory = btn.getAttribute("data-cat");
    renderChips();
    renderGrid();
  });

  $("#sortSelect").addEventListener("change", (e) => {
    sortMode = e.target.value;
    renderGrid();
  });

  $("#openSearch").addEventListener("click", () => {
    openModal("searchModal");
    $("#searchInput").focus();
  });

  $("#searchInput").addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderGrid();
  });
}

function bindCards(){
  document.addEventListener("click", (e) => {
    const add = e.target.closest("[data-add]");
    if(add){
      addToCart(add.getAttribute("data-add"), 1);
      return;
    }
    const view = e.target.closest("[data-view]");
    if(view){
      openProductModal(view.getAttribute("data-view"));
      return;
    }
  });
}

function bindCart(){
  $("#openCart").addEventListener("click", () => openDrawer("cartDrawer"));
  $("#floatCart").addEventListener("click", () => openDrawer("cartDrawer"));
  $("#floatWa").addEventListener("click", () => {
    const msg = "Hola PALTISHOP! 👋🌸\n\nQuiero hacer un pedido (Día de la Mujer).";
    window.open(waLink(msg), "_blank", "noopener");
  });

  $("#checkoutBtn").addEventListener("click", checkoutWhatsApp);
  $("#checkoutNow").addEventListener("click", checkoutWhatsApp);
  $("#applyCoupon").addEventListener("click", applyCoupon);

  $("#cartList").addEventListener("click", (e) => {
    const minus = e.target.closest("[data-cminus]");
    const plus  = e.target.closest("[data-cplus]");
    const rm    = e.target.closest("[data-crm]");

    if(minus){
      const id = minus.getAttribute("data-cminus");
      const item = cart.find(x => x.id === id);
      if(item) setQty(id, item.qty - 1);
      return;
    }
    if(plus){
      const id = plus.getAttribute("data-cplus");
      const item = cart.find(x => x.id === id);
      if(item) setQty(id, item.qty + 1);
      return;
    }
    if(rm){
      removeFromCart(rm.getAttribute("data-crm"));
      return;
    }
  });
}

function bindFAQ(){
  $("#faqList").addEventListener("click", (e) => {
    const item = e.target.closest(".faqItem");
    if(!item) return;
    item.classList.toggle("is-open");
  });
}

function bindMisc(){
  $("#openChat").addEventListener("click", () => {
    const msg = "Hola PALTISHOP! 👋🌸\n\nQuiero información para comprar.";
    window.open(waLink(msg), "_blank", "noopener");
  });
  $("#openChatTop").addEventListener("click", (e) => {
    e.preventDefault();
    const msg = "Hola PALTISHOP! 👋🌸\n\nQuiero información para comprar.";
    window.open(waLink(msg), "_blank", "noopener");
  });

  $("#scrollToPacks").addEventListener("click", () => {
    document.getElementById("packs").scrollIntoView({ behavior:"smooth" });
  });

  $("#checkoutNow").addEventListener("click", checkoutWhatsApp);
  $("#openCatalog").addEventListener("click", openCatalog);

  $("#year").textContent = new Date().getFullYear();
}

function bindReveal(){
  const els = $$(".reveal");
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

// =========================
// Init
// =========================
function init(){
  renderChips();
  renderDeals();
  renderGrid();
  renderPacks();
  renderTestimonials();
  renderFAQ();

  updateCartUI();
  bindCloseButtons();
  bindHeader();
  bindShopbar();
  bindCards();
  bindCart();
  bindProductModal();
  bindCatalog();
  bindFAQ();
  bindMisc();
  bindReveal();
}
init();
