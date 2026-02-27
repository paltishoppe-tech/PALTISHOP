// PALTISHOP — Catálogo web | Día de la Mujer 💜
// ============================================================
const WHATSAPP_NUMBER = "51912640288";

function waMsg(texto){
  return `Hola PALTISHOP! 👋🌸\n\n${texto}\n\n¿Me puedes dar más información? ¡Gracias! 😊`;
}

// ============================================================
// PACKS
// Cambia el "img" por el nombre de tu foto ej: "pack1.jpg"
// ============================================================
const packs = [
  {
    img:     "pack-nochebuena.jpg",      // 📸 PON AQUÍ LA FOTO DEL PACK NOCHEBUENA
    name:    "Pack Nochebuena Contigo",
    price:   119.90,
    desc:    "Incluye peluche corderito, tulipán y caja decorada. Perfecto para regalar.",
    tags:    ["peluche", "tulipán", "caja"],
    filter:  "packs",
    waExtra: "Quiero el *Pack Nochebuena Contigo* 🎁\nPrecio: S/ 119.90"
  },
  {
    img:     "pack-corderito.jpg",       // 📸 PON AQUÍ LA FOTO DEL PACK CORDERITO
    name:    "Pack Corderito + Tulipán",
    price:   109.90,
    desc:    "Corderito de peluche acompañado de un hermoso tulipán. Ideal para el Día de la Mujer.",
    tags:    ["corderito", "tulipán"],
    filter:  "packs",
    waExtra: "Quiero el *Pack Corderito + Tulipán* 🐑🌷\nPrecio: S/ 109.90"
  },
  {
    img:     "pack-girasol.jpg",         // 📸 PON AQUÍ LA FOTO DEL PACK PELUCHE + GIRASOL
    name:    "Pack Peluche + Girasol",
    price:   109.90,
    desc:    "Peluche tierno junto a un girasol decorativo. Un regalo que enamora.",
    tags:    ["peluche", "girasol"],
    filter:  "packs",
    waExtra: "Quiero el *Pack Peluche + Girasol* 🌻🧸\nPrecio: S/ 109.90"
  },
  {
    img:     "pack-polaroid.jpg",        // 📸 PON AQUÍ LA FOTO DEL PACK POLAROID + LLAVERO
    name:    "Pack Polaroid + Llavero",
    price:   99.90,
    desc:    "Foto polaroid personalizada más llavero de recuerdo. Detalle único y especial.",
    tags:    ["polaroid", "llavero"],
    filter:  "packs",
    waExtra: "Quiero el *Pack Polaroid + Llavero* 📸🔑\nPrecio: S/ 99.90"
  },
  {
    img:     "pack-lampara-peluche.jpg", // 📸 PON AQUÍ LA FOTO DEL PACK LÁMPARA + PELUCHE
    name:    "Pack Lámpara + Peluche",
    price:   99.90,
    desc:    "Lámpara decorativa de tulipán más peluche. Combo perfecto para decorar y regalar.",
    tags:    ["lámpara", "peluche"],
    filter:  "packs",
    waExtra: "Quiero el *Pack Lámpara + Peluche* 💡🧸\nPrecio: S/ 99.90"
  },
  {
    img:     "pack-collar-lampara.jpg",  // 📸 PON AQUÍ LA FOTO DEL PACK COLLAR + LÁMPARA
    name:    "Pack Collar + Lámpara",
    price:   119.90,
    desc:    "Collar elegante combinado con lámpara decorativa. El regalo más completo.",
    tags:    ["collar", "lámpara"],
    filter:  "packs",
    waExtra: "Quiero el *Pack Collar + Lámpara* 💍💡\nPrecio: S/ 119.90"
  },
  {
    img:     "pack-esencial.jpg",        // 📸 PON AQUÍ LA FOTO DEL PACK ESENCIAL
    name:    "Pack Esencial",
    price:   75.90,
    desc:    "Lo esencial para un regalo bonito: polaroid y llavero. Económico y con amor.",
    tags:    ["polaroid", "llavero"],
    filter:  "packs",
    waExtra: "Quiero el *Pack Esencial* 🎀\nPrecio: S/ 75.90"
  },
];

// ============================================================
// PRODUCTOS
// Cambia el "img" por el nombre de tu foto ej: "lampara.jpg"
// ============================================================
const products = [
  {
    img:     "lampara-tulipan.jpg",      // 📸 PON AQUÍ LA FOTO DE LA LÁMPARA DE TULIPÁN
    name:    "Lámpara de Tulipán",
    price:   39.90,
    desc:    "Lámpara decorativa en forma de tulipán. Disponible en multicolor, lila y rosado.",
    tags:    ["multicolor", "lila", "rosado"],
    filter:  "lamparas",
    waExtra: "Quiero la *Lámpara de Tulipán* 🌷💡\nPrecio: S/ 39.90\n¿Qué colores tienen disponibles?"
  },
  {
    img:     "peluchitos-respiran.jpg",  // 📸 PON AQUÍ LA FOTO DE LOS PELUCHITOS QUE RESPIRAN
    name:    "Peluchitos que Respiran",
    price:   null,
    desc:    "Peluchitos animados que simulan respirar. Modelos: nutria, Hello Kitty, elefante y más.",
    tags:    ["nutria", "hello kitty", "elefante"],
    filter:  "peluches",
    waExtra: "Quiero info de los *Peluchitos que Respiran* 🧸💓\n¿Qué modelos y precio tienen?"
  },
  {
    img:     "peluches-varios.jpg",      // 📸 PON AQUÍ LA FOTO DE LOS PELUCHES VARIOS
    name:    "Peluches Varios Modelos",
    price:   39.90,
    desc:    "Gran variedad de peluches tiernos. Modelos: Hello Kitty, gatito, Snoopy y más.",
    tags:    ["hello kitty", "gatito", "snoopy"],
    filter:  "peluches",
    waExtra: "Quiero un *Peluche* 🧸\nPrecio: S/ 39.90\n¿Qué modelos tienen disponibles?"
  },
  {
    img:     "peluches-nuevos.jpg",      // 📸 PON AQUÍ LA FOTO DE LOS NUEVOS PELUCHES
    name:    "Nuevos Ingresos — Peluches",
    price:   39.90,
    desc:    "Los últimos peluches en llegar. Pingüino, ositos y más modelos nuevos.",
    tags:    ["pingüino", "ositos", "nuevo"],
    filter:  "peluches",
    waExtra: "Vi los *Nuevos Peluches* 🐧🐻\nPrecio: S/ 39.90\n¿Cuáles tienen disponibles?"
  },
  {
    img:     "esferas.jpg",             // 📸 PON AQUÍ LA FOTO DE LAS ESFERAS
    name:    "Esferas Decorativas",
    price:   39.90,
    desc:    "Esferas decorativas en 4 modelos distintos. Perfectas para regalar o decorar.",
    tags:    ["4 modelos"],
    filter:  "accesorios",
    waExtra: "Quiero las *Esferas Decorativas* ✨\nPrecio: S/ 39.90\n¿Qué modelos tienen?"
  },
  {
    img:     "anillos-girasol.jpg",     // 📸 PON AQUÍ LA FOTO DE LOS ANILLOS GIRASOL
    name:    "Anillos Girasol",
    price:   39.90,
    desc:    "Anillos con diseño de girasol. Disponibles en 3 modelos diferentes.",
    tags:    ["3 modelos", "girasol"],
    filter:  "accesorios",
    waExtra: "Quiero un *Anillo Girasol* 🌻💍\nPrecio: S/ 39.90\n¿Qué tallas y modelos tienen?"
  },
  {
    img:     "pulseras-tulipan.jpg",    // 📸 PON AQUÍ LA FOTO DE LAS PULSERAS TULIPÁN
    name:    "Pulseras Tulipán",
    price:   39.90,
    desc:    "Pulseras delicadas con diseño de tulipán. Disponibles en lila, rosado y blanco.",
    tags:    ["lila", "rosado", "blanco"],
    filter:  "accesorios",
    waExtra: "Quiero una *Pulsera Tulipán* 🌷\nPrecio: S/ 39.90\n¿Tienen en lila, rosado y blanco?"
  },
  {
    img:     "collares-mariposa.jpg",   // 📸 PON AQUÍ LA FOTO DE LOS COLLARES MARIPOSA
    name:    "Collares Mariposa",
    price:   39.90,
    desc:    "Collar fino con dije de mariposa. Disponible en lila, blanco y azul.",
    tags:    ["lila", "blanca", "azul"],
    filter:  "accesorios",
    waExtra: "Quiero un *Collar Mariposa* 🦋\nPrecio: S/ 39.90\n¿Qué colores tienen?"
  },
  {
    img:     "collares-tulipan.jpg",    // 📸 PON AQUÍ LA FOTO DE LOS COLLARES TULIPÁN
    name:    "Collares Tulipán",
    price:   39.90,
    desc:    "Collar elegante con dije de tulipán. Disponible en rojo, amarillo y blanco.",
    tags:    ["rojo", "amarillo", "blanco"],
    filter:  "accesorios",
    waExtra: "Quiero un *Collar Tulipán* 🌷\nPrecio: S/ 39.90\n¿Qué colores tienen?"
  },
  {
    img:     "collares-girasol.jpg",    // 📸 PON AQUÍ LA FOTO DE LOS COLLARES GIRASOL
    name:    "Collares Girasol",
    price:   39.90,
    desc:    "Collar con dije de girasol. Disponible en 5 modelos distintos.",
    tags:    ["5 modelos"],
    filter:  "accesorios",
    waExtra: "Quiero un *Collar Girasol* 🌻\nPrecio: S/ 39.90\n¿Qué modelos tienen?"
  },
  {
    img:     "set-dualidad.jpg",        // 📸 PON AQUÍ LA FOTO DEL SET DUALIDAD
    name:    "Set Dualidad — Pareja",
    price:   54.90,
    desc:    "Set para pareja con anillos y tarjeta de dedicatoria. Perfecto para el Día de la Mujer.",
    tags:    ["anillos", "dedicatoria", "pareja"],
    filter:  "pareja",
    waExtra: "Quiero el *Set Dualidad para Pareja* 💑💍\nPrecio: S/ 54.90"
  },
  {
    img:     "set-solmun.jpg",          // 📸 PON AQUÍ LA FOTO DEL SET SOLMÚN
    name:    "Set Solmún — Pareja",
    price:   89.90,
    desc:    "Set completo para pareja: anillos y collares a juego. El regalo más especial.",
    tags:    ["anillos", "collares", "pareja"],
    filter:  "pareja",
    waExtra: "Quiero el *Set Solmún para Pareja* 💑💍📿\nPrecio: S/ 89.90"
  },
  {
    img:     "set-corazon.jpg",         // 📸 PON AQUÍ LA FOTO DEL SET CORAZÓN PROTECTOR
    name:    "Set Corazón Protector",
    price:   59.90,
    desc:    "Set de collares para pareja con diseño de corazón protector. Amor que se lleva puesto.",
    tags:    ["collares", "pareja"],
    filter:  "pareja",
    waExtra: "Quiero el *Set Corazón Protector* 💜📿\nPrecio: S/ 59.90"
  },
  {
    img:     "set-primer-si.jpg",       // 📸 PON AQUÍ LA FOTO DEL SET NUESTRO PRIMER SÍ
    name:    'Set "Nuestro Primer Sí"',
    price:   59.90,
    desc:    "Anillos de pareja para celebrar ese primer sí. Con caja de presentación incluida.",
    tags:    ["anillos", "pareja"],
    filter:  "pareja",
    waExtra: 'Quiero el *Set "Nuestro Primer Sí"* 💍💍\nPrecio: S/ 59.90'
  },
];

// ============================================================
// HELPERS
// ============================================================
const $ = (s, el=document) => el.querySelector(s);
const $$ = (s, el=document) => Array.from(el.querySelectorAll(s));

function money(v){
  if(v === null || v === undefined) return "Consultar precio";
  return "S/ " + v.toFixed(2);
}

function pageSrc(page){
  return `page-${String(page).padStart(2,'0')}.webp`;
}

function buildWaLink(extra){
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg(extra))}`;
}

function escHtml(str){
  return String(str).replace(/[&<>"']/g, m =>
    ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m])
  );
}

// ============================================================
// CARD HORIZONTAL: foto izquierda | info derecha
// ============================================================
function cardTemplate(item, kind="producto", idx=0){
  const tags = (item.tags||[]).map(t => `<span class="badge">${escHtml(t)}</span>`).join("");
  const p    = money(item.price);
  const wa   = buildWaLink(item.waExtra);
  const img  = escHtml(item.img);
  const num  = String(idx + 1).padStart(2, "0");

  return `
    <article class="card" data-filter="${escHtml(item.filter||'all')}">
      <div class="card__img">
        <span class="card__num">${num}</span>
        <img src="${img}" alt="${escHtml(item.name)}" loading="lazy"
             onerror="this.src='page-01.webp'; this.style.opacity='.25'"/>
      </div>
      <div class="card__body">
        <div class="card__title">${escHtml(item.name)}</div>
        <div class="card__desc">${escHtml(item.desc)}</div>
        <div class="badges">${tags}</div>
        <div class="card__footer">
          <div>
            <div class="price-label">Precio referencial</div>
            <div class="price">${p}</div>
          </div>
          <a class="btn btn--wa" href="${wa}" target="_blank" rel="noopener">💬 Pedir por WhatsApp</a>
        </div>
      </div>
    </article>
  `;
}

// ============================================================
// RENDER
// ============================================================
function render(){
  $("#year").textContent = new Date().getFullYear();
  $("#whatsBtn").href = buildWaLink("Hola, quiero hacer un pedido del catálogo PALTISHOP 😊🌷");

  $("#packsGrid").innerHTML    = packs.map((p,i) => cardTemplate(p, "pack", i)).join("");
  $("#productsGrid").innerHTML = products.map((p,i) => cardTemplate(p, "producto", i)).join("");

  const totalPages = 22;
  const thumbs = [];
  for(let i = 1; i <= totalPages; i++){
    thumbs.push(`
      <button class="pageThumb" data-open-page="${i}" title="Página ${i}">
        <span class="num">#${i}</span>
        <img src="${pageSrc(i)}" alt="Página ${i}" loading="lazy"/>
      </button>
    `);
  }
  $("#catalogGrid").innerHTML = thumbs.join("");

  bindOpeners();
  bindViewer(totalPages);
  bindFilters();
  bindMobileMenu();
}

// ============================================================
// VIEWER
// ============================================================
let viewerState = { page:1, total:22 };

function bindViewer(total){
  viewerState.total = total;
  $("#viewer").addEventListener("click", e => {
    if(e.target.matches("[data-close]") || e.target.closest("[data-close]")) closeViewer();
  });
  $("[data-prev]").addEventListener("click", () => go(-1));
  $("[data-next]").addEventListener("click", () => go(1));
  document.addEventListener("keydown", e => {
    if($("#viewer").getAttribute("aria-hidden") === "true") return;
    if(e.key === "Escape")     closeViewer();
    if(e.key === "ArrowLeft")  go(-1);
    if(e.key === "ArrowRight") go(1);
  });
}

function openViewer(page){
  viewerState.page = clamp(page, 1, viewerState.total);
  $("#viewer").setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
  paintViewer();
}
function closeViewer(){
  $("#viewer").setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}
function go(delta){
  viewerState.page = clamp(viewerState.page + delta, 1, viewerState.total);
  paintViewer();
}
function paintViewer(){
  const p = viewerState.page;
  $("#viewerTitle").textContent = `Página ${p} de ${viewerState.total}`;
  const src = pageSrc(p);
  $("#viewerImg").src = src;
  $("#openImg").href  = src;
  $("#viewerWa").href = buildWaLink(`Estoy viendo la *Página ${p}* del catálogo y quiero info de los productos 📖`);
}
function clamp(n,a,b){ return Math.max(a,Math.min(b,n)); }

function bindOpeners(){
  $$("[data-open-page]").forEach(el => {
    el.addEventListener("click", () => openViewer(Number(el.getAttribute("data-open-page"))));
  });
}

function bindFilters(){
  const chips = $$(".chip");
  chips.forEach(ch => {
    ch.addEventListener("click", () => {
      chips.forEach(x => x.classList.remove("is-active"));
      ch.classList.add("is-active");
      const f = ch.getAttribute("data-filter");
      $$("#productsGrid .card").forEach(card => {
        card.style.display = (f === "all" || card.getAttribute("data-filter") === f) ? "" : "none";
      });
    });
  });
}

function bindMobileMenu(){
  const btn = $("[data-hamburger]");
  const nav = $(".nav");
  if(!btn || !nav) return;
  btn.addEventListener("click", () => {
    const isOpen = nav.style.display === "flex";
    nav.style.display = isOpen ? "none" : "flex";
    if(!isOpen){
      Object.assign(nav.style, {
        position:"absolute", right:"4vw", top:"68px",
        background:"rgba(24,16,10,.97)",
        border:"1px solid rgba(181,128,74,.3)",
        borderRadius:"18px", padding:"14px",
        flexDirection:"column", gap:"14px",
        boxShadow:"0 20px 60px rgba(0,0,0,.7)",
        zIndex:"99"
      });
    }
  });
}

render();
