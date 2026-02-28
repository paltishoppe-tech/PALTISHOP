/* PALTISHOP — Clean GitHub Pages build
   - Single folder: index.html + styles.css + script.js + logo image
   - No bundlers. No external JS deps.
*/
(() => {
  'use strict';

  const WHATSAPP_PHONE = '51928314541'; // cambia tu número aquí

  const $ = (s, el=document) => el.querySelector(s);
  const $$ = (s, el=document) => Array.from(el.querySelectorAll(s)); 

  const fmt = (n) => `S/ ${Number(n||0).toFixed(2)}`;
  const esc = (str) => String(str ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  function openModal(id){ const m = document.getElementById(id); if(m) m.setAttribute('aria-hidden','false'); }
  function closeModal(id){ const m = document.getElementById(id); if(m) m.setAttribute('aria-hidden','true'); }

  // Close modal buttons + overlay click
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-close]');
    if(!b) return;
    closeModal(b.getAttribute('data-close'));
  });

  // ===== Data =====
const products = [
  // Packs
  { id:"pack-1", name:"Pack 1 (Corderito)", category:"Packs", price:119.90, img:"page-03.webp",
    desc:"Corderito + collar tulipán + lámpara tulipán + llavero + 3 fotos polaroid + dedicatoria.", badges:["⭐ Pack"], hot:true },
  { id:"pack-2", name:"Pack 2 (Corderito)", category:"Packs", price:109.90, img:"image (1).png",
    desc:"Corderito + lámpara tulipán + collar tulipán + dedicatoria.", badges:["⭐ Pack"], hot:true },
  { id:"pack-3", name:"Pack 3", category:"Packs", price:109.90, img:"image (2).png",
    desc:"Peluche que respira (modelo a elegir) + collar girasol + anillo girasol + dedicatoria.", badges:["⭐ Pack"], hot:false },
  { id:"pack-4", name:"Pack 4", category:"Packs", price:99.90, img:"image (3).png",
    desc:"Corderito + collar tulipán + 3 polaroids + llavero + dedicatoria.", badges:["⭐ Pack"], hot:false },
  { id:"pack-5", name:"Pack 5", category:"Packs", price:99.90, img:"image (4).png",
    desc:"Peluche que respira (modelo a elegir) + lámpara tulipán + dedicatoria.", badges:["⭐ Pack"], hot:true },
  { id:"pack-6", name:"Pack 6", category:"Packs", price:75.90, img:"image (5).png",
    desc:"Peluche que respira (modelo a elegir) + 3 polaroids + llavero + dedicatoria.", badges:["⭐ Pack"], hot:false },
  { id:"pack-7", name:"Pack 7", category:"Packs", price:119.90, img:"image (6).png",
    desc:"Peluche que respira + collar girasol + lámpara tulipán + llavero + 3 polaroids + dedicatoria.", badges:["⭐ Pack","🔥 HOT"], hot:true },

  // Lámparas / Espejos
  { id:"lampara-tulipan", name:"Lámpara de tulipán", category:"Lámparas", price:39.90, img:"image (7).png",
    desc:"Colores: Multicolor, Celeste, Lila, Rosado.", badges:["🌷 Aesthetic"], hot:true, size:"—", variants:"Multicolor, Celeste, Lila, Rosado" },

  // Peluches que respiran (por separado)
  { id:"peluche-respira", name:"Peluchito que respira (30 cm)", category:"Peluches", price:39.90, img:"c247fcba-aaae-4ec0-9163-8db3413f74b8.jpg",
    desc:"Modelos: Elefante, Hello Kitty, Nutria.", badges:["Tendencia","30 cm"], hot:true, size:"30 cm",
    variants:"Nutria (marrón/morado/rosado/plomo/azul/amarillo/celeste/beige), Hello Kitty, Elefante" },

  // Peluches (ya tenías)
  { id:"snoopy-tulipan", name:"Snoopy con tulipán (20 cm)", category:"Peluches", price:39.90, img:"Captura de pantalla 2026-02-27 174147.png",
    desc:"Tulipán: lila, amarillo y rojo.", badges:["20 cm"], hot:true, size:"20 cm", variants:"Lila, Amarillo, Rojo" },
  { id:"hello-kitty", name:"Hello Kitty (22 cm)", category:"Peluches", price:39.90, img:"Captura de pantalla 2026-02-27 174105.png",
    desc:"Tulipán lila y amarillo.", badges:["22 cm"], hot:true, size:"22 cm", variants:"Lila, Amarillo" },

  // ✅ Peluches (FALTANTES del catálogo)
  { id:"oso-rosa", name:"Oso con rosa (20 cm)", category:"Peluches", price:39.90, img:"Captura de pantalla 2026-02-27 174326.png",
    desc:"Oso con rosa (detalle ideal para regalo).", badges:["20 cm"], hot:true, size:"20 cm" },

  { id:"conejo-zanahoria", name:"Conejo zanahoria (24 cm)", category:"Peluches", price:39.90, img:"Captura de pantalla 2026-02-27 174314.png",
    desc:"Conejito con zanahoria.", badges:["24 cm"], hot:true, size:"24 cm" },

  { id:"oso-corbata", name:"Oso con corbata (20 cm)", category:"Peluches", price:39.90, img:"Captura de pantalla 2026-02-27 174259.png",
    desc:"Oso con corbata (clásico y elegante).", badges:["20 cm"], hot:false, size:"20 cm" },

  { id:"cinnamoroll", name:"Cinnamoroll (28 cm)", category:"Peluches", price:39.90, img:"Captura de pantalla 2026-02-27 174243.png",
    desc:"Cinnamoroll (suave y grande).", badges:["28 cm"], hot:true, size:"28 cm" },

  { id:"corderito-gorra", name:"Corderito con gorra (22 cm)", category:"Peluches", price:39.90, img:"Captura de pantalla 2026-02-27 174226.png",
    desc:"Corderito con gorrita.", badges:["22 cm"], hot:true, size:"22 cm" },

  { id:"pinguino-i-love-you", name:"Pingüino I ❤️ You (20 cm)", category:"Peluches", price:39.90, img:"Captura de pantalla 2026-02-27 174125.png",
    desc:"Disponible en azul.", badges:["20 cm"], hot:true, size:"20 cm", variants:"Azul" },

  { id:"mono", name:"Mono ⭐ (21 cm)", category:"Peluches", price:39.90, img:"Captura de pantalla 2026-02-27 174116.png",
    desc:"Parejita de monitos.", badges:["21 cm"], hot:true, size:"21 cm" },

  { id:"gatito-chino", name:"Gatito chino (22 cm)", category:"Peluches", price:39.90, img:"Captura de pantalla 2026-02-27 174055.png",
    desc:"Gatito estilo chino.", badges:["22 cm"], hot:true, size:"22 cm" },

  { id:"hello-kitty-girasol", name:"Hello Kitty girasol (20 cm)", category:"Peluches", price:39.90, img:"Captura de pantalla 2026-02-27 174038.png",
    desc:"Hello Kitty con girasol.", badges:["20 cm"], hot:true, size:"20 cm" },

  { id:"snoopy-pijama", name:"Snoopy pijama (21 cm)", category:"Peluches", price:39.90, img:"Captura de pantalla 2026-02-27 174010.png",
    desc:"Snoopy con pijamita.", badges:["21 cm"], hot:true, size:"21 cm" },

  { id:"cerdito-medalla", name:"Cerdito medalla (20 cm)", category:"Peluches", price:39.90, img:"Captura de pantalla 2026-02-27 173822.png",
    desc:"Cerdito con medallita.", badges:["20 cm"], hot:true, size:"20 cm" },

  { id:"cerdito-mochila", name:"Cerdito mochila (20 cm)", category:"Peluches", price:39.90, img:"Captura de pantalla 2026-02-27 173913.png",
    desc:"Cerdito con mochilita.", badges:["20 cm"], hot:true, size:"20 cm" },

  { id:"cerdito-unicornio", name:"Cerdito unicornio (23 cm)", category:"Peluches", price:39.90, img:"Captura de pantalla 2026-02-27 173804.png",
    desc:"Disponible en blanco y celeste.", badges:["23 cm"], hot:true, size:"23 cm", variants:"Blanco, Celeste" },

  { id:"cerdito-dino", name:"Cerdito dino (20 cm)", category:"Peluches", price:39.90, img:"Captura de pantalla 2026-02-27 173813.png",
    desc:"Cerdito disfraz dino.", badges:["20 cm"], hot:true, size:"20 cm" },

  { id:"erizo-lazo", name:"Erizo con lazo (20 cm)", category:"Peluches", price:39.90, img:"Captura de pantalla 2026-02-27 173753.png",
    desc:"Erizo con lazo.", badges:["20 cm"], hot:true, size:"20 cm" },

  { id:"pancito", name:"Pancito (20 cm)", category:"Peluches", price:39.90, img:"Captura de pantalla 2026-02-27 173740.png",
    desc:"Pancito (modelo tierno).", badges:["20 cm"], hot:false, size:"20 cm" },

  { id:"gatita", name:"Gatita (20 cm)", category:"Peluches", price:39.90, img:"Captura de pantalla 2026-02-27 173728.png",
    desc:"Gatita (modelo tierno).", badges:["20 cm"], hot:false, size:"20 cm" },

  { id:"pochaco-zanahoria", name:"Pochaco zanahoria (30 cm)", category:"Peluches", price:39.90, img:"Captura de pantalla 2026-02-27 173656.png",
    desc:"Pochaco con zanahoria.", badges:["30 cm"], hot:true, size:"30 cm" },

  { id:"pinguino-audifonos", name:"Pingüino con audífonos (25 cm)", category:"Peluches", price:39.90, img:"Captura de pantalla 2026-02-27 173643.png",
    desc:"Nuevo ingreso: pingüino con audífonos.", badges:["25 cm","Nuevo"], hot:true, size:"25 cm" },

  { id:"pinguino-dino", name:"Pingüino dino (22 cm)", category:"Peluches", price:39.90, img:"Captura de pantalla 2026-02-27 173632.png",
    desc:"Nuevo ingreso: pingüino dino.", badges:["22 cm","Nuevo"], hot:true, size:"22 cm" },

  { id:"pinguino", name:"Pingüino (20 cm)", category:"Peluches", price:39.90, img:"Captura de pantalla 2026-02-27 173619.png",
    desc:"Nuevo ingreso: pingüino.", badges:["20 cm","Nuevo"], hot:true, size:"20 cm" },

  { id:"ositos-carinocitos", name:"Ositos cariñositos", category:"Peluches", price:39.90, img:"Captura de pantalla 2026-02-27 173605.png",
    desc:"Modelos surtidos (consultar stock).", badges:["Nuevo"], hot:true, size:"—" },

  // Esferas
  { id:"esfera-1", name:"Esfera 1", category:"Esferas", price:39.90, img:"page-15.webp", desc:"Esfera decorativa (modelo 1).", badges:["🔮"], hot:false },
  { id:"esfera-2", name:"Esfera 2", category:"Esferas", price:39.90, img:"page-15.webp", desc:"Esfera decorativa (modelo 2).", badges:["🔮"], hot:false },
  { id:"esfera-3", name:"Esfera 3", category:"Esferas", price:39.90, img:"page-15.webp", desc:"Esfera decorativa (modelo 3).", badges:["🔮"], hot:true },
  { id:"esfera-4", name:"Esfera 4", category:"Esferas", price:39.90, img:"page-15.webp", desc:"Esfera decorativa (modelo 4).", badges:["🔮"], hot:false },

  // Accesorios
  { id:"collar-tulipan", name:"Collar tulipán", category:"Accesorios", price:39.90, img:"page-18.webp",
    desc:"Colores: rojo, rosado, lila, amarillo, blanco.", badges:["💐"], hot:true, variants:"Rojo, Rosado, Lila, Amarillo, Blanco" },
  { id:"collar-mariposa", name:"Collar mariposa", category:"Accesorios", price:39.90, img:"page-17.webp",
    desc:"Colores: lila, blanca, rosada, roja, azul.", badges:["🦋"], hot:true, variants:"Lila, Blanca, Rosada, Roja, Azul" },

  // Pareja
  { id:"set-solmun", name:"Set Solmún", category:"Para pareja", price:89.90, img:"page-20.webp",
    desc:"Par de anillos regulables + par de collares + dedicatoria/acta + chocolates. Presentación lista para regalar.", badges:["💑","Listo para regalo"], hot:true,
    includes:["Par de anillos (regulables)","Par de collares","Dedicatoria o acta de promesa","Chocolates","Presentación lista para regalar"],
    specs:{ "Ideal para":"Pareja", "Entrega":"Consultar envío", "Pago":"Contraentrega / Yape" } },

  { id:"set-dualidad", name:"Set Dualidad", category:"Para pareja", price:54.90, img:"page-20.webp",
    desc:"Par de anillos regulables + dedicatoria/acta + chocolates. Presentación lista para regalar.", badges:["💞 Pareja"], hot:true,
    includes:["Par de anillos (regulables)","Dedicatoria o acta de promesa","Chocolates","Presentación lista para regalar"],
    specs:{ "Incluye":"Anillos + dedicatoria + chocolates", "Pago":"Contraentrega / Yape" } },

  { id:"set-corazon-protector", name:"Set Corazón Protector", category:"Para pareja", price:59.90, img:"page-21.webp",
    desc:"Collares Corazón y Espada + chocolates + dedicatoria/acta. Presentación lista para regalar.", badges:["🗡️💗"], hot:true,
    includes:["Collares Corazón y Espada","Chocolates","Dedicatoria o acta de promesa","Presentación lista para regalar"],
    specs:{ "Ideal para":"Regalo romántico", "Pago":"Contraentrega / Yape" } },

  { id:"set-nuestro-primer-si", name:'Set "Nuestro Primer Sí"', category:"Para pareja", price:59.90, img:"page-22.webp",
    desc:"Par de anillos regulables + dedicatoria/acta + chocolates. Presentación lista para regalar.", badges:["💍"], hot:true,
    includes:["Par de anillos (regulables)","Dedicatoria o acta de promesa","Chocolates","Presentación lista para regalar"],
    specs:{ "Ideal para":"Promesa", "Pago":"Contraentrega / Yape" } },
];

// Each pack is different
const packConfigs = {
  "pack-1": { title:"Pack 1 (Corderito)", fields:["note","card","collar","extras14"],
    options:{ card:["N°1","N°2","N°3","N°4","N°5","N°6"], collar:["Tulipán","Mariposa","Girasol","Otro (escribir)"] } },

  "pack-nochebuena": { title:"Pack Nochebuena Contigo", fields:["note","card","peluche","espejo","collar","extras14"],
    options:{ card:["N°1","N°2","N°3","N°4","N°5","N°6"],
      peluche:["Peluche que respira — Nutria","Peluche que respira — Hello Kitty","Peluche que respira — Conejo","Peluche que respira — Elefante","Otro (escribir)"],
      espejo:["Tulipanes infinitos","Nube","Otro (escribir)"],
      collar:["Tulipán","Mariposa","Girasol","Otro (escribir)"]
    } },

  "pack-2": { title:"Pack 2 (Corderito)", fields:["note","card","collar","extras14"],
    options:{ card:["N°1","N°2","N°3","N°4","N°5","N°6"], collar:["Tulipán","Mariposa","Girasol","Otro (escribir)"] } },

  "pack-3": { title:"Pack 3", fields:["note","card","peluche","collar"],
    options:{ card:["N°1","N°2","N°3","N°4","N°5","N°6"],
      peluche:["Peluche que respira — Nutria","Peluche que respira — Hello Kitty","Peluche que respira — Conejo","Peluche que respira — Elefante","Otro (escribir)"],
      collar:["Girasol","Tulipán","Mariposa","Otro (escribir)"]
    } },

  "pack-4": { title:"Pack 4", fields:["note","card","collar","extras14"],
    options:{ card:["N°1","N°2","N°3","N°4","N°5","N°6"], collar:["Tulipán","Mariposa","Girasol","Otro (escribir)"] } },

  "pack-5": { title:"Pack 5", fields:["note","card","peluche","espejo"],
    options:{ card:["N°1","N°2","N°3","N°4","N°5","N°6"],
      peluche:["Peluche que respira — Nutria","Peluche que respira — Hello Kitty","Peluche que respira — Conejo","Peluche que respira — Elefante","Otro (escribir)"],
      espejo:["Lámpara tulipán","Nube","Tulipanes infinitos","Otro (escribir)"]
    } },

  "pack-6": { title:"Pack 6", fields:["note","card","peluche","extras14"],
    options:{ card:["N°1","N°2","N°3","N°4","N°5","N°6"],
      peluche:["Peluche que respira — Nutria","Peluche que respira — Hello Kitty","Peluche que respira — Conejo","Peluche que respira — Elefante","Otro (escribir)"]
    } },

  "pack-7": { title:"Pack 7", fields:["note","card","peluche","collar","espejo","extras14"],
    options:{ card:["N°1","N°2","N°3","N°4","N°5","N°6"],
      peluche:["Peluche que respira — Nutria","Peluche que respira — Hello Kitty","Peluche que respira — Conejo","Peluche que respira — Elefante","Otro (escribir)"],
      collar:["Girasol","Tulipán","Mariposa","Otro (escribir)"],
      espejo:["Lámpara tulipán","Nube","Tulipanes infinitos","Otro (escribir)"]
    } },
};
  const ADDON_PRICES = { extras14: 14.00 };

  // ===== State =====
  let activeCat = "Todos";
  let sortMode = "hot";
  let searchQuery = "";
  let modalProductId = null;
  let modalQty = 1;

  const cart = new Map(); // id -> qty

  const CART_KEY = "paltishop_cart_v1";

  function saveCart(){
    try{
      const data = Array.from(cart.entries());
      localStorage.setItem(CART_KEY, JSON.stringify(data));
    }catch(_){}
  }

  function loadCart(){
    try{
      const raw = localStorage.getItem(CART_KEY);
      if(!raw) return;
      const data = JSON.parse(raw);
      if(Array.isArray(data)){
        cart.clear();
        for(const [id, qty] of data){
          if(typeof id === "string" && Number(qty) > 0) cart.set(id, Number(qty));
        }
      }
    }catch(_){}
  }

  // ===== Utils =====
  const isOther = (v) => (String(v||"").toLowerCase().includes("otro"));

  function getById(id){ return products.find(p => p.id === id); }

  // ===== Rendering =====
  function card(p, mode="shop"){
    const tags = (p.badges||[]).map(b => `<span class="tag">${esc(b)}</span>`).join("");
    const hot = p.hot ? `<span class="tag">🔥 HOT</span>` : "";
    const img = esc(p.img || "");
    const imgTag = `<img src="${img}" alt="${esc(p.name)}" onerror="this.style.display='none'; this.parentElement.style.background='linear-gradient(135deg, rgba(224,160,64,.16), rgba(240,192,160,.10))'">`;
    return `
      <article class="card" data-id="${esc(p.id)}">
        <div class="card__img">${imgTag}</div>
        <div class="card__body">
          <div class="card__name">${esc(p.name)}</div>
          <div class="card__desc">${esc(p.desc || "")}</div>
          <div class="tags">${hot}${tags}</div>
          <div class="card__row">
            <div class="price">${fmt(p.price)}</div>
            <div class="muted">${esc(p.category)}</div>
          </div>
          <div class="card__actions">
            <button class="btn btn--ghost" data-view="${esc(p.id)}">Ver</button>
            ${p.category === "Packs"
              ? `<button class="btn" data-pack="${esc(p.id)}">Personalizar 💝</button>`
              : `<button class="btn" data-add="${esc(p.id)}">Agregar</button>`}
          </div>
        </div>
      </article>
    `;
  }

  function categories(){
    const base = ["Todos"];
    const cats = Array.from(new Set(products.filter(p=>p.category!=="Packs").map(p=>p.category))).sort();
    return base.concat(cats);
  }

  function packs(){
    return products.filter(p => p.category === "Packs");
  }

  function filteredProducts(){
    let list = products.filter(p => p.category !== "Packs");
    if(activeCat !== "Todos") list = list.filter(p => p.category === activeCat);

    const q = searchQuery.trim().toLowerCase();
    if(q){
      list = list.filter(p => (`${p.name} ${p.category} ${p.desc} ${(p.badges||[]).join(" ")}`.toLowerCase().includes(q)));
    }

    // sort
    if(sortMode === "price_asc") list.sort((a,b)=>a.price-b.price);
    else if(sortMode === "price_desc") list.sort((a,b)=>b.price-a.price);
    else if(sortMode === "az") list.sort((a,b)=>a.name.localeCompare(b.name));
    else list.sort((a,b)=> (b.hot?1:0)-(a.hot?1:0) || a.name.localeCompare(b.name));

    return list;
  }

  function renderChips(){
    const box = $("#catChips");
    if(!box) return;
    box.innerHTML = categories().map(c => `
      <button class="chipBtn" data-cat="${esc(c)}" aria-pressed="${c===activeCat}">${esc(c)}</button>
    `).join("");
  }

  function renderPackChips(){
    const box = $("#packChips");
    if(!box) return;
    box.innerHTML = `
      <button class="chipBtn" data-packcat="Todos" aria-pressed="true">Todos</button>
      <button class="chipBtn" data-packcat="HOT" aria-pressed="false">🔥 HOT</button>
      <button class="chipBtn" data-packcat="Económico" aria-pressed="false">💸 Económico</button>
    `;
  }

  let packFilter = "Todos";
  function renderPacks(){
    const box = $("#packGrid");
    if(!box) return;
    let list = packs();
    if(packFilter === "HOT") list = list.filter(p=>p.hot);
    if(packFilter === "Económico") list = list.filter(p=>p.price <= 99.90);
    box.innerHTML = list.map(p => card(p,"pack")).join("");
  }

  function renderGrid(){
    const box = $("#grid");
    if(!box) return;
    box.innerHTML = filteredProducts().map(p => card(p)).join("");
  }

  function renderHot(){
    const hot = products.filter(p=>p.hot).slice(0, 8);
    $("#hotGrid").innerHTML = hot.map(p => card(p)).join("");
    $("#hotList").innerHTML = hot.slice(0,4).map(p => `
      <div class="cartItem">
        <div class="cartItem__img"><img src="${esc(p.img||"")}" alt="${esc(p.name)}" onerror="this.style.display='none'"></div>
        <div class="cartItem__main">
          <div class="cartItem__name">${esc(p.name)}</div>
          <div class="cartItem__meta">${fmt(p.price)} · ${esc(p.category)}</div>
        </div>
        <button class="qtyBtn" data-view="${esc(p.id)}">Ver</button>
      </div>
    `).join("");
  }

  function renderTestimonials(){
    const t = [
      {name:"Valeria", text:"Llegó precioso 😭💖 la presentación 10/10."},
      {name:"Camila", text:"Me mandaron foto antes de enviar, todo seguro 🙌"},
      {name:"Renzo", text:"Compré pack y personalicé collar + dedicatoria. Quedó TOP 🔥"},
    ];
    $("#tGrid").innerHTML = t.map(x => `
      <div class="tCard"><b>${esc(x.name)}</b><p>${esc(x.text)}</p></div>
    `).join("");
  }

  function renderFAQ(){
    const items = [
      {q:"¿Cómo compro?", a:"Elige producto/pack, agrega o personaliza y finaliza por WhatsApp."},
      {q:"¿Puedo personalizar la dedicatoria?", a:"Sí. En Packs → Personalizar 💝 puedes escribir tu mensaje."},
      {q:"¿Envían a provincia?", a:"Sí, coordinamos por WhatsApp y te confirmamos courier/disponibilidad."},
    ];
    $("#faqBox").innerHTML = items.map(i => `
      <details class="tCard"><summary><b>${esc(i.q)}</b></summary><p>${esc(i.a)}</p></details>
    `).join("");
  }

  // ===== Search modal results =====
  function searchProducts(q){
    const s = (q||"").trim().toLowerCase();
    if(!s) return [];
    const scored = products.map(p => {
      const hay = `${p.name} ${p.category} ${p.desc} ${(p.badges||[]).join(" ")}`.toLowerCase();
      let score = 0;
      if(p.name.toLowerCase().includes(s)) score += 3;
      if(p.category.toLowerCase().includes(s)) score += 2;
      if(hay.includes(s)) score += 1;
      return {p, score};
    }).filter(x => x.score>0);
    scored.sort((a,b)=> b.score-a.score || a.p.name.localeCompare(b.p.name));
    return scored.map(x=>x.p);
  }

  function renderSearchResults(){
    const box = $("#searchResults");
    if(!box) return;
    const q = (searchQuery || "").trim();
    if(!q){
      box.innerHTML = `<div class="sEmpty">Escribe para buscar productos…</div>`;
      return;
    }
    const list = searchProducts(q).slice(0, 12);
    if(list.length === 0){
      box.innerHTML = `<div class="sEmpty">Sin resultados para “${esc(q)}”.</div>`;
      return;
    }
    box.innerHTML = list.map(p => `
      <div class="sResult" data-sopen="${esc(p.id)}" role="button" tabindex="0">
        <div class="sResult__img"><img src="${esc(p.img||"")}" alt="${esc(p.name)}" onerror="this.style.display='none'"></div>
        <div class="sResult__main">
          <div class="sResult__name">${esc(p.name)}</div>
          <div class="sResult__meta">
            <div class="sResult__price">${fmt(p.price)}</div>
            <div class="sResult__cat">${esc(p.category)}</div>
          </div>
        </div>
      </div>
    `).join("");
  }

  function bindSearchResults(){
    const box = $("#searchResults");
    if(!box) return;
    box.addEventListener("click", (e) => {
      const row = e.target.closest("[data-sopen]");
      if(!row) return;
      closeModal("searchModal");
      openProductModal(row.getAttribute("data-sopen"));
    });
  }

  // ===== Product modal =====
  let modalVariant = "";

  function openProductModal(id){
    const p = getById(id);
    if(!p) return;

    modalProductId = id;
    modalQty = 1;
    modalVariant = "";

    $("#pmTitle").textContent = p.name;

    // main image + thumbs
    const imgEl = $("#pmImg");
    imgEl.style.display = "block";
    imgEl.src = p.img || "";
    imgEl.onerror = () => { imgEl.style.display = "none"; };

    const thumbs = $("#pmThumbs");
    const gallery = (p.gallery && Array.isArray(p.gallery) && p.gallery.length) ? [p.img, ...p.gallery] : [p.img];
    thumbs.innerHTML = (gallery.filter(Boolean)).map((src, i) => `
      <button type="button" class="thumb" data-th="${i}" aria-label="Ver foto ${i+1}">
        <img src="${esc(src)}" alt="">
      </button>
    `).join("");

    thumbs.onclick = (e) => {
      const b = e.target.closest("[data-th]");
      if(!b) return;
      const i = Number(b.getAttribute("data-th"));
      const src = gallery[i];
      if(src){ imgEl.style.display = "block"; imgEl.src = src; }
    };

    // badges
    const badges = (p.badges||[]).map(b => `<span class="tag">${esc(b)}</span>`).join("");
    const hot = p.hot ? `<span class="tag">🔥 HOT</span>` : "";
    $("#pmBadges").innerHTML = hot + badges;

    // price + compare
    $("#pmPrice").textContent = fmt(p.price);
    const cmp = $("#pmCompare");
    if(p.compareAt && Number(p.compareAt) > Number(p.price)){
      cmp.textContent = fmt(p.compareAt);
      cmp.style.display = "block";
    } else {
      cmp.style.display = "none";
    }

    // desc
    $("#pmDesc").textContent = p.desc || "";

    // includes
    const inc = $("#pmIncludes");
    if(p.includes && p.includes.length){
      inc.innerHTML = `<h4>Incluye</h4><ul>${p.includes.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`;
    } else if(p.category === "Packs"){
      inc.innerHTML = `<h4>Incluye</h4><ul><li>Presentación lista para regalar</li><li>Dedicatoria personalizada (opcional)</li></ul>`;
    } else {
      inc.innerHTML = `<h4>Incluye</h4><ul><li>Producto + empaque</li></ul>`;
    }

    // specs
    const sp = $("#pmSpecs");
    if(p.specs && typeof p.specs === "object"){
      sp.innerHTML = `<h4>Detalles</h4>` + Object.entries(p.specs).map(([k,v]) => (
        `<div class="kv"><b>${esc(k)}</b><span>${esc(v)}</span></div>`
      )).join("");
    } else {
      sp.innerHTML = `<h4>Detalles</h4>
        <div class="kv"><b>Categoría</b><span>${esc(p.category)}</span></div>
        <div class="kv"><b>Disponibilidad</b><span>${p.stock === "out" ? "Agotado" : "Consultar stock"}</span></div>
      `;
    }

    // variants
    const vr = $("#pmVariantRow");
    const vs = $("#pmVariant");
    if(p.variants && Array.isArray(p.variants) && p.variants.length){
      vr.style.display = "block";
      vs.innerHTML = p.variants.map(v => `<option value="${esc(v)}">${esc(v)}</option>`).join("");
      modalVariant = p.variants[0];
      vs.value = modalVariant;
      vs.onchange = () => { modalVariant = vs.value; };
    } else {
      vr.style.display = "none";
      vs.innerHTML = "";
    }

    $("#qtyVal").textContent = String(modalQty);
    openModal("productModal");
  }

  function bindProductModal(){
    $("#qtyMinus").addEventListener("click", ()=>{ modalQty = Math.max(1, modalQty-1); $("#qtyVal").textContent = String(modalQty); });
    $("#qtyPlus").addEventListener("click", ()=>{ modalQty += 1; $("#qtyVal").textContent = String(modalQty); });

    $("#pmAdd").addEventListener("click", ()=>{
      if(!modalProductId) return;
      addToCart(modalProductId, modalQty);
      closeModal("productModal");
      openModal("cartModal");
    });

    $("#pmBuy").addEventListener("click", ()=>{
      if(!modalProductId) return;
      closeModal("productModal");
      openCheckout([{ id: modalProductId, qty: modalQty, variant: modalVariant || "" }], "product");
    });
  }


  // ===== Cart =====
  function cartCount(){
    let n=0; for(const q of cart.values()) n+=q; return n;
  }
  function cartTotal(){
    let t=0;
    for(const [id, qty] of cart.entries()){
      const p = getById(id);
      if(p) t += p.price * qty;
    }
    return t;
  }

  // ===== Checkout (Datos + WhatsApp) =====
  let checkoutContext = { items: [], source: "cart", fromModal: "cartModal" };

  function normalizePhone(pe){
    const digits = String(pe||"").replace(/\D+/g,"");
    // Allow 9 digits (Perú) or already with country code
    if(digits.length === 9) return "51" + digits;
    return digits.startsWith("51") ? digits : digits;
  }

  function checkoutTotal(items){
    let t = 0;
    for(const it of items){
      const p = getById(it.id);
      if(p) t += p.price * Number(it.qty||1);
    }
    return t;
  }

  function renderCheckout(items){
    const box = $("#coItems");
    box.innerHTML = items.map(it => {
      const p = getById(it.id);
      if(!p) return "";
      const v = it.variant ? ` · ${esc(it.variant)}` : "";
      return `
        <div class="sumItem">
          <img src="${esc(p.img||"")}" alt="${esc(p.name)}" onerror="this.style.display='none'">
          <div class="meta">
            <b>${esc(p.name)}</b>
            <small>${fmt(p.price)}${v}</small>
          </div>
          <div class="qty">x${Number(it.qty||1)}</div>
        </div>
      `;
    }).join("");
    $("#coTotal").textContent = fmt(checkoutTotal(items));
  }

  function openCheckout(items, source="cart"){
    checkoutContext = { items, source, fromModal: source==="cart" ? "cartModal" : "productModal" };
    renderCheckout(items);

    // reset minimal
    const f = $("#coForm");
    if(f) f.reset();

    openModal("checkoutModal");
  }

  function buildWhatsAppMessage(data){
    const lines = [];
    lines.push("💚 *PALTISHOP — Pedido* 💚");
    lines.push("");
    for(const it of data.items){
      const p = getById(it.id);
      if(!p) continue;
      const v = it.variant ? ` (${it.variant})` : "";
      lines.push(`• ${p.name}${v} x${it.qty} — ${fmt(p.price*it.qty)}`);
    }
    lines.push("");
    lines.push(`🧾 *Total:* ${fmt(checkoutTotal(data.items))}`);
    lines.push("");
    lines.push(`👤 *Nombre:* ${data.name}`);
    lines.push(`📱 *Celular:* ${data.phone}`);
    lines.push(`📍 *Ciudad / distrito:* ${data.city}`);
    lines.push(`🚚 *Entrega:* ${data.delivery}`);
    if(data.address) lines.push(`🏠 *Dirección:* ${data.address}`);
    if(data.ref) lines.push(`🧭 *Referencia:* ${data.ref}`);
    lines.push(`💳 *Pago:* ${data.pay}`);
    if(data.when) lines.push(`⏱️ *Para cuándo:* ${data.when}`);
    if(data.note) lines.push(`💌 *Dedicatoria:* ${data.note}`);
    lines.push("");
    lines.push("¿Me confirmas disponibilidad y tiempo de entrega? 🌸✨");
    return lines.join("\n");
  }

  function bindCheckout(){
    $("#coBack")?.addEventListener("click", ()=>{
      closeModal("checkoutModal");
      // return to cart modal by default
      if(checkoutContext.source === "cart") openModal("cartModal");
    });

    $("#coForm")?.addEventListener("submit", (e)=>{
      e.preventDefault();

      const name = ($("#coName").value || "").trim();
      const phoneRaw = ($("#coPhone").value || "").trim();
      const city = ($("#coCity").value || "").trim();
      const delivery = ($("#coDelivery").value || "").trim();
      const address = ($("#coAddress").value || "").trim();
      const ref = ($("#coRef").value || "").trim();
      const pay = ($("#coPay").value || "").trim();
      const when = ($("#coWhen").value || "").trim();
      const note = ($("#coNote").value || "").trim();

      if(!name || !phoneRaw || !city || !delivery){
        alert("Completa: Nombre, Celular, Ciudad/Distrito y Tipo de entrega 🙂");
        return;
      }

      const phone = normalizePhone(phoneRaw);
      const digits9 = String(phoneRaw).replace(/\D+/g,"");
      if(digits9.length < 9){
        alert("Tu celular parece incompleto. Escribe tus 9 dígitos 🙂");
        return;
      }

      const msg = buildWhatsAppMessage({
        items: checkoutContext.items,
        name,
        phone: phoneRaw,
        city,
        delivery,
        address,
        ref,
        pay,
        when,
        note
      });

      window.open("https://wa.me/" + WHATSAPP_PHONE + "?text=" + encodeURIComponent(msg), "_blank");
      closeModal("checkoutModal");
    });
  }
  function renderCart(){
    $("#cartCount").textContent = String(cartCount());
    const list = $("#cartList");
    if(cart.size === 0){
      list.innerHTML = `<div class="sEmpty">Tu carrito está vacío 🛒</div>`;
      $("#cartMeta").textContent = "Agrega productos para continuar.";
      $("#cartTotal").textContent = fmt(0);
      return;
    }
    list.innerHTML = Array.from(cart.entries()).map(([id, qty]) => {
      const p = getById(id);
      if(!p) return "";
      return `
        <div class="cartItem" data-cid="${esc(id)}">
          <div class="cartItem__img"><img src="${esc(p.img||"")}" alt="${esc(p.name)}" onerror="this.style.display='none'"></div>
          <div class="cartItem__main">
            <div class="cartItem__name">${esc(p.name)}</div>
            <div class="cartItem__meta">${fmt(p.price)} · ${esc(p.category)}</div>
          </div>
          <div class="cartItem__qty">
            <button class="qtyBtn" data-cminus="${esc(id)}">−</button>
            <b>${qty}</b>
            <button class="qtyBtn" data-cplus="${esc(id)}">+</button>
          </div>
        </div>
      `;
    }).join("");
    $("#cartMeta").textContent = `${cartCount()} item(s)`;
    $("#cartTotal").textContent = fmt(cartTotal());
  }

  function addToCart(id, qty){
    const cur = cart.get(id) || 0;
    cart.set(id, cur + qty);
    saveCart();
    renderCart();
  }
  function setQty(id, qty){
    if(qty <= 0) cart.delete(id);
    else cart.set(id, qty);
    saveCart();
    saveCart();
    renderCart();
  }

  function bindCart(){
    $("#openCart").addEventListener("click", ()=>{ renderCart(); openModal("cartModal"); });
    $("#clearCart").addEventListener("click", ()=>{ cart.clear(); saveCart(); renderCart(); });
    $("#checkoutBtn").addEventListener("click", ()=>{
      if(cart.size === 0) return;
      const items = Array.from(cart.entries()).map(([id, qty]) => ({ id, qty, variant:"" }));
      closeModal("cartModal");
      openCheckout(items, "cart");
    });

    $("#cartList").addEventListener("click", (e)=>{
      const m = e.target.closest("[data-cminus]");
      const p = e.target.closest("[data-cplus]");
      if(m){ const id=m.getAttribute("data-cminus"); setQty(id, (cart.get(id)||1)-1); }
      if(p){ const id=p.getAttribute("data-cplus"); setQty(id, (cart.get(id)||0)+1); }
    });
  }

  // ===== Pack customizer =====
  let currentPackId = null;
  let packState = {};

  function renderPackCustomizer(packId){
    const p = getById(packId);
    if(!p) return;
    const cfg = packConfigs[packId] || { title: p.name, fields:["note","card"], options:{ card:["N°1","N°2","N°3","N°4","N°5","N°6"] } };

    currentPackId = packId;
    packState = { note:"", card:"N°1", collar:"Tulipán", collar_other:"", peluche:"Peluche que respira — Nutria", peluche_other:"",
      espejo:"Nube", espejo_other:"", extras14:false };

    $("#packTitle").textContent = "Personalizar " + (cfg.title || p.name);

    const rows = [];
    const opt = (arr) => (arr||[]).map(x=>`<option>${esc(x)}</option>`).join("");

    if(cfg.fields.includes("note")){
      rows.push(`
        <div class="pfRow">
          <label>Dedicatoria 💌</label>
          <textarea id="pf_note" rows="2" placeholder="Escribe tu mensaje... (o déjalo vacío)"></textarea>
          <div class="pfSmall">Tip: corto y emocional vende más 💖</div>
        </div>
      `);
    }
    if(cfg.fields.includes("card")){
      rows.push(`
        <div class="pfRow">
          <label>Tarjetita 🎴</label>
          <select id="pf_card">${opt(cfg.options?.card || ["N°1","N°2","N°3","N°4","N°5","N°6"])}</select>
          <div class="pfSmall">Elige el modelo (N°1–N°6)</div>
        </div>
      `);
    }
    if(cfg.fields.includes("collar")){
      rows.push(`
        <div class="pfRow">
          <label>Collar 💐</label>
          <select id="pf_collar">${opt(cfg.options?.collar || ["Tulipán","Mariposa","Girasol","Otro (escribir)"])}</select>
          <input type="text" id="pf_collar_other" placeholder="Si elegiste 'Otro', escribe aquí" style="display:none">
        </div>
      `);
    }
    if(cfg.fields.includes("peluche")){
      rows.push(`
        <div class="pfRow">
          <label>Peluche 🧸 (incluye “que respira”)</label>
          <select id="pf_peluche">${opt(cfg.options?.peluche || ["Peluche que respira — Nutria","Peluche que respira — Hello Kitty","Peluche que respira — Conejo","Otro (escribir)"])}</select>
          <input type="text" id="pf_peluche_other" placeholder="Si elegiste 'Otro', escribe aquí" style="display:none">
        </div>
      `);
    }
    if(cfg.fields.includes("espejo")){
      rows.push(`
        <div class="pfRow">
          <label>Lámpara / Espejo 💡</label>
          <select id="pf_espejo">${opt(cfg.options?.espejo || ["Nube","Tulipanes infinitos","Lámpara tulipán","Otro (escribir)"])}</select>
          <input type="text" id="pf_espejo_other" placeholder="Si elegiste 'Otro', escribe aquí" style="display:none">
        </div>
      `);
    }
    if(cfg.fields.includes("extras14")){
      rows.push(`
        <label class="pfCheck">
          <input type="checkbox" id="pf_extras14">
          <div>
            <div><b>+3 fotos polaroid + llavero personalizado</b> (${fmt(ADDON_PRICES.extras14)})</div>
            <div class="pfSmall">Ideal para completar el detalle ✨</div>
          </div>
        </label>
      `);
    }

    rows.push(`
      <div class="pfTotal">
        <div><b>Total estimado</b><div class="pfSmall">Pack + extras</div></div>
        <div><b id="pf_total">${fmt(p.price)}</b></div>
      </div>
    `);

    $("#packForm").innerHTML = rows.join("");

    const noteEl = $("#pf_note"); if(noteEl) noteEl.addEventListener("input", ()=> packState.note = noteEl.value);
    const cardEl = $("#pf_card"); if(cardEl) cardEl.addEventListener("change", ()=> packState.card = cardEl.value);

    const collarEl = $("#pf_collar");
    const collarOther = $("#pf_collar_other");
    if(collarEl){
      collarEl.addEventListener("change", ()=>{
        packState.collar = collarEl.value;
        if(collarOther) collarOther.style.display = isOther(collarEl.value) ? "block" : "none";
      });
    }
    if(collarOther) collarOther.addEventListener("input", ()=> packState.collar_other = collarOther.value);

    const pelEl = $("#pf_peluche");
    const pelOther = $("#pf_peluche_other");
    if(pelEl){
      pelEl.addEventListener("change", ()=>{
        packState.peluche = pelEl.value;
        if(pelOther) pelOther.style.display = isOther(pelEl.value) ? "block" : "none";
      });
    }
    if(pelOther) pelOther.addEventListener("input", ()=> packState.peluche_other = pelOther.value);

    const espEl = $("#pf_espejo");
    const espOther = $("#pf_espejo_other");
    if(espEl){
      espEl.addEventListener("change", ()=>{
        packState.espejo = espEl.value;
        if(espOther) espOther.style.display = isOther(espEl.value) ? "block" : "none";
      });
    }
    if(espOther) espOther.addEventListener("input", ()=> packState.espejo_other = espOther.value);

    const ex14 = $("#pf_extras14");
    if(ex14) ex14.addEventListener("change", ()=>{ packState.extras14 = ex14.checked; updatePackTotal(); });

    updatePackTotal();
    openModal("packModal");
  }

  function chosen(v, other){ return isOther(v) ? (other || "Otro") : v; }

  function packTotal(){
    const p = getById(currentPackId);
    let total = p ? p.price : 0;
    if(packState.extras14) total += (ADDON_PRICES.extras14 || 14);
    return total;
  }
  function updatePackTotal(){
    const t = $("#pf_total");
    if(t) t.textContent = fmt(packTotal());
  }

  function bindPackBuy(){
    $("#pkBuy").addEventListener("click", ()=>{
      if(!currentPackId) return;
      const p = getById(currentPackId);
      const cfg = packConfigs[currentPackId] || { fields:[] };

      const parts = [];
      parts.push("💝 *PEDIDO PALTISHOP — PACK PERSONALIZADO* 💝");
      parts.push("");
      parts.push(`🎁 *Pack:* ${p.name}`);
      parts.push(`💰 *Precio pack:* ${fmt(p.price)}`);

      if(cfg.fields.includes("card")) parts.push(`🎴 *Tarjetita:* ${packState.card}`);
      if(cfg.fields.includes("peluche")) parts.push(`🧸 *Peluche:* ${chosen(packState.peluche, packState.peluche_other)}`);
      if(cfg.fields.includes("collar")) parts.push(`💐 *Collar:* ${chosen(packState.collar, packState.collar_other)}`);
      if(cfg.fields.includes("espejo")) parts.push(`💡 *Lámpara/Espejo:* ${chosen(packState.espejo, packState.espejo_other)}`);

      if(cfg.fields.includes("note")){
        const note = (packState.note || "").trim();
        parts.push(`📝 *Dedicatoria:* ${note ? note : "Sin dedicatoria"}`);
      }

      const extras = [];
      if(cfg.fields.includes("extras14") && packState.extras14) extras.push(`+3 polaroids + llavero (${fmt(ADDON_PRICES.extras14)})`);
      if(extras.length) parts.push(`✨ *Extras:* ${extras.join(" + ")}`);

      parts.push(`🧾 *Total estimado:* ${fmt(packTotal())}`);
      parts.push("");
      parts.push("📍 *Distrito / ciudad:* ________");
      parts.push("🚚 *Envío:* Lima/Provincia");
      parts.push("");
      parts.push("¿Está disponible? 🌸✨");

      window.open("https://wa.me/" + WHATSAPP_PHONE + "?text=" + encodeURIComponent(parts.join("\n")), "_blank");
    });
  }

  // ===== Bindings =====
  function bindNav(){
    $("#goPacks").addEventListener("click", ()=> location.hash = "#packs");
    $("#goShop").addEventListener("click", ()=> location.hash = "#tienda");
    $("#goHot").addEventListener("click", ()=> location.hash = "#destacados");
    $("#toTop").addEventListener("click", ()=> window.scrollTo({top:0, behavior:"smooth"}));

    $("#ctaWhats").addEventListener("click", ()=>{
      const text = "🌸 Hola PALTISHOP 💖 Quiero información de packs y disponibilidad (Día de la Mujer).";
      window.open("https://wa.me/" + WHATSAPP_PHONE + "?text=" + encodeURIComponent(text), "_blank");
    });
    $("#ctaNow").addEventListener("click", ()=> $("#ctaWhats").click());
  }

  function bindShop(){
    // chips
    $("#catChips").addEventListener("click", (e)=>{
      const b = e.target.closest("[data-cat]");
      if(!b) return;
      activeCat = b.getAttribute("data-cat");
      renderChips();
      renderGrid();
    });

    $("#sortSel").addEventListener("change", (e)=>{
      sortMode = e.target.value;
      renderGrid();
    });

    // card interactions
    document.addEventListener("click", (e)=>{
      const packBtn = e.target.closest("[data-pack]");
      if(packBtn){ e.preventDefault(); e.stopPropagation(); renderPackCustomizer(packBtn.getAttribute("data-pack")); return; }

      const addBtn = e.target.closest("[data-add]");
      if(addBtn){ e.preventDefault(); e.stopPropagation(); addToCart(addBtn.getAttribute("data-add"), 1); return; }

      const viewBtn = e.target.closest("[data-view]");
      if(viewBtn){ e.preventDefault(); e.stopPropagation(); openProductModal(viewBtn.getAttribute("data-view")); return; }

      const cardEl = e.target.closest(".card");
      if(cardEl && cardEl.getAttribute("data-id")){
        // don't open when clicking a button handled above
        if(e.target.closest("button")) return;
        openProductModal(cardEl.getAttribute("data-id"));
      }
    });
  }

  function bindSearch(){
    $("#openSearch").addEventListener("click", ()=>{
      openModal("searchModal");
      renderSearchResults();
      $("#searchInput").focus();
    });

    $("#searchInput").addEventListener("input", (e)=>{
      searchQuery = e.target.value;
      renderSearchResults();
      renderGrid(); // keep grid in sync too
    });

    $("#clearSearch").addEventListener("click", ()=>{
      searchQuery = "";
      $("#searchInput").value = "";
      renderSearchResults();
      renderGrid();
      $("#searchInput").focus();
    });
  }

  function bindPacks(){
    $("#packChips").addEventListener("click", (e)=>{
      const b = e.target.closest("[data-packcat]");
      if(!b) return;
      packFilter = b.getAttribute("data-packcat");
      $$("#packChips .chipBtn").forEach(x => x.setAttribute("aria-pressed", String(x===b)));
      renderPacks();
    });
  }

  // ===== Init =====
  function init(){
    loadCart();
    renderChips();
    renderPackChips();
    renderPacks();
    renderGrid();
    renderHot();
    renderTestimonials();
    renderFAQ();
    renderCart();
    renderSearchResults();

    bindNav();
    bindShop();
    bindSearch();
    bindSearchResults();
    bindCart();
    bindCheckout();
    bindProductModal();
    bindPacks();
    bindPackBuy();

    // If hash set, just let browser scroll; nothing else needed.
  }

  window.addEventListener("DOMContentLoaded", init);
})();