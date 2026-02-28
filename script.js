/* PALTISHOP v2 */
(() => {
  'use strict';
  const WHATSAPP_PHONE = '51928314541';
  const $ = (s, el=document) => el.querySelector(s);
  const $$ = (s, el=document) => Array.from(el.querySelectorAll(s));
  const fmt = (n) => `S/ ${Number(n||0).toFixed(2)}`;
  const esc = (str) => String(str ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function openModal(id){ const m=document.getElementById(id); if(m) m.setAttribute('aria-hidden','false'); }
  function closeModal(id){ const m=document.getElementById(id); if(m) m.setAttribute('aria-hidden','true'); }
  document.addEventListener('click',(e)=>{ const b=e.target.closest('[data-close]'); if(!b) return; closeModal(b.getAttribute('data-close')); });

  const products = [
    {id:"pack-1",name:"Pack 1 (Corderito)",category:"Packs",price:119.90,originalPrice:149.90,img:"page-03.webp",images:["page-03.webp","image (1).png"],desc:"Corderito + collar tulipán + lámpara tulipán + llavero + 3 fotos polaroid + dedicatoria.",badges:["⭐ Pack"],hot:true,variantLabel:"Collar",variants:["Tulipán","Mariposa","Girasol"]},
    {id:"pack-2",name:"Pack 2 (Corderito)",category:"Packs",price:109.90,originalPrice:139.90,img:"image (1).png",images:["image (1).png"],desc:"Corderito + lámpara tulipán + collar tulipán + dedicatoria.",badges:["⭐ Pack"],hot:true,variantLabel:"Collar",variants:["Tulipán","Mariposa","Girasol"]},
    {id:"pack-3",name:"Pack 3",category:"Packs",price:109.90,originalPrice:135.90,img:"image (2).png",images:["image (2).png"],desc:"Peluche que respira + collar girasol + anillo girasol + dedicatoria.",badges:["⭐ Pack"],hot:false,variantLabel:"Peluche",variants:["Nutria","Hello Kitty","Elefante"]},
    {id:"pack-4",name:"Pack 4",category:"Packs",price:99.90,img:"image (3).png",images:["image (3).png"],desc:"Corderito + collar tulipán + 3 polaroids + llavero + dedicatoria.",badges:["⭐ Pack"],hot:false,variantLabel:"Collar",variants:["Tulipán","Mariposa","Girasol"]},
    {id:"pack-5",name:"Pack 5",category:"Packs",price:99.90,img:"image (4).png",images:["image (4).png"],desc:"Peluche que respira + lámpara tulipán + dedicatoria.",badges:["⭐ Pack"],hot:true,variantLabel:"Peluche",variants:["Nutria","Hello Kitty","Elefante"]},
    {id:"pack-6",name:"Pack 6",category:"Packs",price:75.90,img:"image (5).png",images:["image (5).png"],desc:"Peluche que respira + 3 polaroids + llavero + dedicatoria.",badges:["⭐ Pack"],hot:false,variantLabel:"Peluche",variants:["Nutria","Hello Kitty","Elefante"]},
    {id:"pack-7",name:"Pack 7",category:"Packs",price:119.90,originalPrice:149.90,img:"image (6).png",images:["image (6).png"],desc:"Peluche que respira + collar girasol + lámpara tulipán + llavero + 3 polaroids + dedicatoria.",badges:["⭐ Pack","🔥 HOT"],hot:true,variantLabel:"Peluche",variants:["Nutria","Hello Kitty","Elefante"]},
    {id:"lampara-tulipan",name:"Lámpara de Tulipán",category:"Lámparas",price:39.90,img:"image (7).png",images:["image (7).png"],desc:"Lámpara aesthetic de tulipán. Perfecta para decorar cuartos 🌷",badges:["🌷 Aesthetic"],hot:true,size:"—",variantLabel:"Color",variants:["Multicolor","Celeste","Lila","Rosado"]},
    {id:"peluche-respira",name:"Peluchito que Respira (30 cm)",category:"Peluches",price:39.90,img:"c247fcba-aaae-4ec0-9163-8db3413f74b8.jpg",images:["c247fcba-aaae-4ec0-9163-8db3413f74b8.jpg"],desc:"El peluchito viral de TikTok 🔥 Imita el movimiento de respiración. Súper suave.",badges:["Tendencia","30 cm"],hot:true,size:"30 cm",variantLabel:"Modelo",variants:["Nutria Marrón","Nutria Morado","Nutria Rosado","Nutria Azul","Hello Kitty","Elefante"]},
    {id:"snoopy-tulipan",name:"Snoopy con Tulipán (20 cm)",category:"Peluches",price:39.90,img:"Captura de pantalla 2026-02-27 174147.png",images:["Captura de pantalla 2026-02-27 174147.png"],desc:"Snoopy sosteniendo un tulipán.",badges:["20 cm"],hot:true,size:"20 cm",variantLabel:"Color tulipán",variants:["Lila","Amarillo","Rojo"]},
    {id:"hello-kitty",name:"Hello Kitty (22 cm)",category:"Peluches",price:39.90,img:"Captura de pantalla 2026-02-27 174105.png",images:["Captura de pantalla 2026-02-27 174105.png"],desc:"Hello Kitty con tulipán. Tierna y suave.",badges:["22 cm"],hot:true,size:"22 cm",variantLabel:"Color tulipán",variants:["Lila","Amarillo"]},
    {id:"oso-rosa",name:"Oso con Rosa (20 cm)",category:"Peluches",price:39.90,img:"Captura de pantalla 2026-02-27 174326.png",images:["Captura de pantalla 2026-02-27 174326.png"],desc:"Osito con rosa roja. Ideal para regalar.",badges:["20 cm"],hot:true,size:"20 cm"},
    {id:"conejo-zanahoria",name:"Conejo Zanahoria (24 cm)",category:"Peluches",price:39.90,img:"Captura de pantalla 2026-02-27 174314.png",images:["Captura de pantalla 2026-02-27 174314.png"],desc:"Conejito tierno con zanahoria.",badges:["24 cm"],hot:true,size:"24 cm"},
    {id:"oso-corbata",name:"Oso con Corbata (20 cm)",category:"Peluches",price:39.90,img:"Captura de pantalla 2026-02-27 174259.png",images:["Captura de pantalla 2026-02-27 174259.png"],desc:"Oso clásico con corbata.",badges:["20 cm"],hot:false,size:"20 cm"},
    {id:"cinnamoroll",name:"Cinnamoroll (28 cm)",category:"Peluches",price:39.90,img:"Captura de pantalla 2026-02-27 174243.png",images:["Captura de pantalla 2026-02-27 174243.png"],desc:"Cinnamoroll grande y súper suave.",badges:["28 cm"],hot:true,size:"28 cm"},
    {id:"corderito-gorra",name:"Corderito con Gorra (22 cm)",category:"Peluches",price:39.90,img:"Captura de pantalla 2026-02-27 174226.png",images:["Captura de pantalla 2026-02-27 174226.png"],desc:"Corderito con gorrita. Adorable.",badges:["22 cm"],hot:true,size:"22 cm"},
    {id:"pinguino-i-love-you",name:"Pingüino I ❤️ You (20 cm)",category:"Peluches",price:39.90,img:"Captura de pantalla 2026-02-27 174125.png",images:["Captura de pantalla 2026-02-27 174125.png"],desc:"Pingüino azul con corazón.",badges:["20 cm"],hot:true,size:"20 cm",variantLabel:"Color",variants:["Azul"]},
    {id:"mono",name:"Mono ⭐ (21 cm)",category:"Peluches",price:39.90,img:"Captura de pantalla 2026-02-27 174116.png",images:["Captura de pantalla 2026-02-27 174116.png"],desc:"Parejita de monitos.",badges:["21 cm"],hot:true,size:"21 cm"},
    {id:"gatito-chino",name:"Gatito Chino (22 cm)",category:"Peluches",price:39.90,img:"Captura de pantalla 2026-02-27 174055.png",images:["Captura de pantalla 2026-02-27 174055.png"],desc:"Gatito estilo chino.",badges:["22 cm"],hot:true,size:"22 cm"},
    {id:"hello-kitty-girasol",name:"Hello Kitty Girasol (20 cm)",category:"Peluches",price:39.90,img:"Captura de pantalla 2026-02-27 174038.png",images:["Captura de pantalla 2026-02-27 174038.png"],desc:"Hello Kitty con girasol.",badges:["20 cm"],hot:true,size:"20 cm"},
    {id:"snoopy-pijama",name:"Snoopy Pijama (21 cm)",category:"Peluches",price:39.90,img:"Captura de pantalla 2026-02-27 174010.png",images:["Captura de pantalla 2026-02-27 174010.png"],desc:"Snoopy con pijamita.",badges:["21 cm"],hot:true,size:"21 cm"},
    {id:"cerdito-medalla",name:"Cerdito Medalla (20 cm)",category:"Peluches",price:39.90,img:"Captura de pantalla 2026-02-27 173822.png",images:["Captura de pantalla 2026-02-27 173822.png"],desc:"Cerdito con medallita.",badges:["20 cm"],hot:true,size:"20 cm"},
    {id:"cerdito-mochila",name:"Cerdito Mochila (20 cm)",category:"Peluches",price:39.90,img:"Captura de pantalla 2026-02-27 173913.png",images:["Captura de pantalla 2026-02-27 173913.png"],desc:"Cerdito con mochilita.",badges:["20 cm"],hot:true,size:"20 cm"},
    {id:"cerdito-unicornio",name:"Cerdito Unicornio (23 cm)",category:"Peluches",price:39.90,img:"Captura de pantalla 2026-02-27 173804.png",images:["Captura de pantalla 2026-02-27 173804.png"],desc:"Cerdito unicornio. Blanco y celeste.",badges:["23 cm"],hot:true,size:"23 cm",variantLabel:"Color",variants:["Blanco","Celeste"]},
    {id:"cerdito-dino",name:"Cerdito Dino (20 cm)",category:"Peluches",price:39.90,img:"Captura de pantalla 2026-02-27 173813.png",images:["Captura de pantalla 2026-02-27 173813.png"],desc:"Cerdito disfraz dinosaurio 🦕",badges:["20 cm"],hot:true,size:"20 cm"},
    {id:"erizo-lazo",name:"Erizo con Lazo (20 cm)",category:"Peluches",price:39.90,img:"Captura de pantalla 2026-02-27 173753.png",images:["Captura de pantalla 2026-02-27 173753.png"],desc:"Erizo con lazo.",badges:["20 cm"],hot:true,size:"20 cm"},
    {id:"pancito",name:"Pancito (20 cm)",category:"Peluches",price:39.90,img:"Captura de pantalla 2026-02-27 173740.png",images:["Captura de pantalla 2026-02-27 173740.png"],desc:"Pancito tierno.",badges:["20 cm"],hot:false,size:"20 cm"},
    {id:"gatita",name:"Gatita (20 cm)",category:"Peluches",price:39.90,img:"Captura de pantalla 2026-02-27 173728.png",images:["Captura de pantalla 2026-02-27 173728.png"],desc:"Gatita tierna.",badges:["20 cm"],hot:false,size:"20 cm"},
    {id:"pochaco-zanahoria",name:"Pochaco Zanahoria (30 cm)",category:"Peluches",price:39.90,img:"Captura de pantalla 2026-02-27 173656.png",images:["Captura de pantalla 2026-02-27 173656.png"],desc:"Pochaco con zanahoria.",badges:["30 cm"],hot:true,size:"30 cm"},
    {id:"pinguino-audifonos",name:"Pingüino con Audífonos (25 cm)",category:"Peluches",price:39.90,img:"Captura de pantalla 2026-02-27 173643.png",images:["Captura de pantalla 2026-02-27 173643.png"],desc:"Nuevo 🆕 Pingüino con audífonos.",badges:["25 cm","Nuevo"],hot:true,size:"25 cm"},
    {id:"pinguino-dino",name:"Pingüino Dino (22 cm)",category:"Peluches",price:39.90,img:"Captura de pantalla 2026-02-27 173632.png",images:["Captura de pantalla 2026-02-27 173632.png"],desc:"Nuevo 🆕 Pingüino dino.",badges:["22 cm","Nuevo"],hot:true,size:"22 cm"},
    {id:"pinguino",name:"Pingüino (20 cm)",category:"Peluches",price:39.90,img:"Captura de pantalla 2026-02-27 173619.png",images:["Captura de pantalla 2026-02-27 173619.png"],desc:"Nuevo 🆕 Pingüino clasico.",badges:["20 cm","Nuevo"],hot:true,size:"20 cm"},
    {id:"ositos-carinocitos",name:"Ositos Cariñositos",category:"Peluches",price:39.90,img:"Captura de pantalla 2026-02-27 173605.png",images:["Captura de pantalla 2026-02-27 173605.png"],desc:"Ositos cariñositos. Modelos surtidos.",badges:["Nuevo"],hot:true,size:"—"},
    {id:"esfera-1",name:"Esfera Decorativa N°1",category:"Esferas",price:39.90,img:"page-15.webp",images:["page-15.webp"],desc:"Esfera decorativa modelo 1.",badges:["🔮"],hot:false},
    {id:"esfera-2",name:"Esfera Decorativa N°2",category:"Esferas",price:39.90,img:"page-15.webp",images:["page-15.webp"],desc:"Esfera decorativa modelo 2.",badges:["🔮"],hot:false},
    {id:"esfera-3",name:"Esfera Decorativa N°3",category:"Esferas",price:39.90,img:"page-15.webp",images:["page-15.webp"],desc:"Esfera decorativa modelo 3.",badges:["🔮"],hot:true},
    {id:"esfera-4",name:"Esfera Decorativa N°4",category:"Esferas",price:39.90,img:"page-15.webp",images:["page-15.webp"],desc:"Esfera decorativa modelo 4.",badges:["🔮"],hot:false},
    {id:"collar-tulipan",name:"Collar Tulipán",category:"Accesorios",price:39.90,img:"page-18.webp",images:["page-18.webp"],desc:"Collar de tulipán en acero quirúrgico.",badges:["💐"],hot:true,variantLabel:"Color",variants:["Rojo","Rosado","Lila","Amarillo","Blanco"]},
    {id:"collar-mariposa",name:"Collar Mariposa",category:"Accesorios",price:39.90,img:"page-17.webp",images:["page-17.webp"],desc:"Collar mariposa. Delicado y bonito.",badges:["🦋"],hot:true,variantLabel:"Color",variants:["Lila","Blanca","Rosada","Roja","Azul"]},
    {id:"set-solmun",name:"Set Sol y Luna",category:"Para pareja",price:89.90,originalPrice:109.90,img:"page-20.webp",images:["page-20.webp"],desc:"Par de anillos + par de collares + dedicatoria + chocolates. El regalo de pareja perfecto 💑",badges:["💑"],hot:true,variantLabel:"Metal",variants:["Oro - Plata","Oro Rosa - Negro","Ambos Oro","Ambos Plata"]},
  ];

  const packConfigs = {
    "pack-1":{title:"Pack 1",fields:["note","card","collar","extras14"],options:{card:["N°1","N°2","N°3","N°4","N°5","N°6"],collar:["Tulipán","Mariposa","Girasol","Otro (escribir)"]}},
    "pack-2":{title:"Pack 2",fields:["note","card","collar","extras14"],options:{card:["N°1","N°2","N°3","N°4","N°5","N°6"],collar:["Tulipán","Mariposa","Girasol","Otro (escribir)"]}},
    "pack-3":{title:"Pack 3",fields:["note","card","peluche","collar"],options:{card:["N°1","N°2","N°3","N°4","N°5","N°6"],peluche:["Nutria","Hello Kitty","Elefante","Otro (escribir)"],collar:["Girasol","Tulipán","Mariposa","Otro (escribir)"]}},
    "pack-4":{title:"Pack 4",fields:["note","card","collar","extras14"],options:{card:["N°1","N°2","N°3","N°4","N°5","N°6"],collar:["Tulipán","Mariposa","Girasol","Otro (escribir)"]}},
    "pack-5":{title:"Pack 5",fields:["note","card","peluche","espejo"],options:{card:["N°1","N°2","N°3","N°4","N°5","N°6"],peluche:["Nutria","Hello Kitty","Elefante","Otro (escribir)"],espejo:["Lámpara tulipán","Nube","Tulipanes infinitos","Otro (escribir)"]}},
    "pack-6":{title:"Pack 6",fields:["note","card","peluche","extras14"],options:{card:["N°1","N°2","N°3","N°4","N°5","N°6"],peluche:["Nutria","Hello Kitty","Elefante","Otro (escribir)"]}},
    "pack-7":{title:"Pack 7",fields:["note","card","peluche","collar","espejo","extras14"],options:{card:["N°1","N°2","N°3","N°4","N°5","N°6"],peluche:["Nutria","Hello Kitty","Elefante","Otro (escribir)"],collar:["Girasol","Tulipán","Mariposa","Otro (escribir)"],espejo:["Lámpara tulipán","Nube","Tulipanes infinitos","Otro (escribir)"]}},
  };
  const ADDON_PRICES = {extras14:14.00};

  let activeCat="Todos", sortMode="hot", searchQuery="";
  let modalProductId=null, modalQty=1, modalVariant=null;
  let currentPackId=null, packState={}, packFilter="Todos";
  let customerTarget="product", pendingPackMsg=[];
  const cart = new Map();

  const isOther = (v) => String(v||"").toLowerCase().includes("otro");
  function getById(id){ return products.find(p=>p.id===id); }

  function card(p){
    const tags=(p.badges||[]).map(b=>`<span class="tag">${esc(b)}</span>`).join("");
    const hot=p.hot?`<span class="tag tag--hot">🔥 HOT</span>`:"";
    const saleLabel=p.originalPrice?`<span class="card__badge-sale">OFERTA</span>`:"";
    const hotLabel=p.hot?`<span class="card__badge-hot">🔥</span>`:"";
    const priceHtml=p.originalPrice
      ?`<div class="price"><span class="price--old">${fmt(p.originalPrice)}</span> <span class="price--sale">${fmt(p.price)}</span></div>`
      :`<div class="price">${fmt(p.price)}</div>`;
    return `<article class="card" data-id="${esc(p.id)}">
      <div class="card__img">
        <img src="${esc(p.img||"")}" alt="${esc(p.name)}" onerror="this.style.display='none';this.parentElement.style.background='linear-gradient(135deg,rgba(224,160,64,.16),rgba(240,192,160,.10))'">
        ${saleLabel}${hotLabel}
      </div>
      <div class="card__body">
        <div class="card__name">${esc(p.name)}</div>
        <div class="card__desc">${esc(p.desc||"")}</div>
        <div class="tags">${hot}${tags}</div>
        <div class="card__row">${priceHtml}<div class="muted">${esc(p.category)}</div></div>
        <div class="card__actions">
          <button class="btn btn--ghost" data-view="${esc(p.id)}">Ver detalle</button>
          ${p.category==="Packs"
            ?`<button class="btn" data-pack="${esc(p.id)}">Personalizar 💝</button>`
            :`<button class="btn" data-add="${esc(p.id)}">Agregar 🛒</button>`}
        </div>
      </div>
    </article>`;
  }

  function categories(){ return ["Todos"].concat(Array.from(new Set(products.filter(p=>p.category!=="Packs").map(p=>p.category))).sort()); }
  function packs(){ return products.filter(p=>p.category==="Packs"); }
  function filteredProducts(){
    let list=products.filter(p=>p.category!=="Packs");
    if(activeCat!=="Todos") list=list.filter(p=>p.category===activeCat);
    const q=searchQuery.trim().toLowerCase();
    if(q) list=list.filter(p=>(`${p.name} ${p.category} ${p.desc} ${(p.badges||[]).join(" ")}`.toLowerCase().includes(q)));
    if(sortMode==="price_asc") list.sort((a,b)=>a.price-b.price);
    else if(sortMode==="price_desc") list.sort((a,b)=>b.price-a.price);
    else if(sortMode==="az") list.sort((a,b)=>a.name.localeCompare(b.name));
    else list.sort((a,b)=>(b.hot?1:0)-(a.hot?1:0)||a.name.localeCompare(b.name));
    return list;
  }

  function renderChips(){
    const box=$("#catChips");if(!box)return;
    box.innerHTML=categories().map(c=>`<button class="chipBtn" data-cat="${esc(c)}" aria-pressed="${c===activeCat}">${esc(c)}</button>`).join("");
  }
  function renderPackChips(){
    const box=$("#packChips");if(!box)return;
    box.innerHTML=`<button class="chipBtn" data-packcat="Todos" aria-pressed="true">Todos</button><button class="chipBtn" data-packcat="HOT" aria-pressed="false">🔥 HOT</button><button class="chipBtn" data-packcat="Económico" aria-pressed="false">💸 Económico</button>`;
  }
  function renderPacks(){
    const box=$("#packGrid");if(!box)return;
    let list=packs();
    if(packFilter==="HOT") list=list.filter(p=>p.hot);
    if(packFilter==="Económico") list=list.filter(p=>p.price<=99.90);
    box.innerHTML=list.map(p=>card(p)).join("");
  }
  function renderGrid(){
    const box=$("#grid");if(!box)return;
    box.innerHTML=filteredProducts().map(p=>card(p)).join("");
  }
  function renderHot(){
    const hot=products.filter(p=>p.hot).slice(0,8);
    $("#hotGrid").innerHTML=hot.map(p=>card(p)).join("");
    $("#hotList").innerHTML=hot.slice(0,4).map(p=>`<div class="cartItem"><div class="cartItem__img"><img src="${esc(p.img||"")}" alt="${esc(p.name)}" onerror="this.style.display='none'"></div><div class="cartItem__main"><div class="cartItem__name">${esc(p.name)}</div><div class="cartItem__meta">${fmt(p.price)} · ${esc(p.category)}</div></div><button class="qtyBtn" data-view="${esc(p.id)}">Ver</button></div>`).join("");
  }
  function renderTestimonials(){
    const t=[
      {name:"Valeria 🌸",text:"Llegó precioso 😭💖 la presentación 10/10. Lo mandaron con foto antes del envío.",stars:5},
      {name:"Camila 💝",text:"Me mandaron foto antes de enviar, todo seguro 🙌 El peluche que respira es demasiado tierno.",stars:5},
      {name:"Renzo 🔥",text:"Compré el pack y personalicé collar + dedicatoria. Quedó TOP, mi enamorada lo amó.",stars:5},
      {name:"Lucía 💕",text:"Super rápido el delivery. La caja vino hermosa. Definitivamente vuelvo a comprar.",stars:5},
      {name:"Andrés 🎁",text:"Excelente atención por WhatsApp. Me ayudaron a elegir y quedó perfecto.",stars:5},
      {name:"Sofía 🌷",text:"El peluchito que respira es lo más tierno que existe. Gracias PALTISHOP!",stars:5},
    ];
    $("#tGrid").innerHTML=t.map(x=>`<div class="tCard"><div class="tCard__stars">${"⭐".repeat(x.stars)}</div><p>"${esc(x.text)}"</p><b>— ${esc(x.name)}</b></div>`).join("");
  }
  function renderFAQ(){
    const items=[
      {q:"¿Cómo hago mi pedido?",a:"Elige el producto, selecciona color/modelo, presiona 'Comprar ahora' o 'Agregar al carrito'. Te pedimos tu nombre, celular y distrito antes de ir al WhatsApp."},
      {q:"¿Puedo personalizar la dedicatoria?",a:"Sí! En los Packs → Personalizar 💝 puedes escribir tu mensaje y elegir tarjetita."},
      {q:"¿Envían a provincias?",a:"Sí, a todo el Perú 🇵🇪 Coordinamos por WhatsApp y confirmamos el courier."},
      {q:"¿Aceptan contraentrega?",a:"Sí, para Lima. Para provincias coordinamos método de pago por WhatsApp."},
      {q:"¿Me mandan foto antes de enviar?",a:"Siempre 📸 Te enviamos foto del pedido empaquetado antes de que salga."},
    ];
    $("#faqBox").innerHTML=items.map(i=>`<details class="tCard"><summary><b>${esc(i.q)}</b></summary><p>${esc(i.a)}</p></details>`).join("");
  }

  function searchProducts(q){
    const s=(q||"").trim().toLowerCase();if(!s)return[];
    return products.map(p=>{
      const hay=`${p.name} ${p.category} ${p.desc} ${(p.badges||[]).join(" ")}`.toLowerCase();
      let score=0;
      if(p.name.toLowerCase().includes(s))score+=3;
      if(p.category.toLowerCase().includes(s))score+=2;
      if(hay.includes(s))score+=1;
      return{p,score};
    }).filter(x=>x.score>0).sort((a,b)=>b.score-a.score||a.p.name.localeCompare(b.p.name)).map(x=>x.p);
  }
  function renderSearchResults(){
    const box=$("#searchResults");if(!box)return;
    const q=(searchQuery||"").trim();
    if(!q){box.innerHTML=`<div class="sEmpty">Escribe para buscar productos…</div>`;return;}
    const list=searchProducts(q).slice(0,12);
    if(!list.length){box.innerHTML=`<div class="sEmpty">Sin resultados para "${esc(q)}".</div>`;return;}
    box.innerHTML=list.map(p=>`<div class="sResult" data-sopen="${esc(p.id)}" role="button" tabindex="0"><div class="sResult__img"><img src="${esc(p.img||"")}" alt="${esc(p.name)}" onerror="this.style.display='none'"></div><div class="sResult__main"><div class="sResult__name">${esc(p.name)}</div><div class="sResult__meta"><div class="sResult__price">${fmt(p.price)}</div><div class="sResult__cat">${esc(p.category)}</div></div></div></div>`).join("");
  }
  function bindSearchResults(){
    const box=$("#searchResults");if(!box)return;
    box.addEventListener("click",(e)=>{const row=e.target.closest("[data-sopen]");if(!row)return;closeModal("searchModal");openProductModal(row.getAttribute("data-sopen"));});
  }

  // ===== MODAL DE PRODUCTO MEJORADO =====
  function openProductModal(id){
    const p=getById(id);if(!p)return;
    modalProductId=id;modalQty=1;
    modalVariant=(p.variants&&p.variants.length)?p.variants[0]:null;

    $("#pmTitle").textContent=p.name;
    const priceEl=$("#pmPrice");
    if(p.originalPrice){
      priceEl.innerHTML=`<span class="price--old">${fmt(p.originalPrice)}</span> <span class="price--sale">${fmt(p.price)}</span> <span class="badge-oferta">OFERTA</span>`;
    } else {
      priceEl.innerHTML=fmt(p.price);
    }
    $("#pmDesc").textContent=p.desc||"";
    const badges=(p.badges||[]).map(b=>`<span class="tag">${esc(b)}</span>`).join("");
    const hot=p.hot?`<span class="tag tag--hot">🔥 HOT</span>`:"";
    $("#pmBadges").innerHTML=hot+badges;
    $("#pmSize").textContent=p.size||"—";

    // Variantes
    const varRow=$("#pmVariantRow"),varLabel=$("#pmVariantLabel"),varGrid=$("#pmVariantGrid");
    if(p.variants&&p.variants.length){
      varRow.style.display="";
      varLabel.textContent=p.variantLabel||"Variante";
      varGrid.innerHTML=p.variants.map((v,i)=>`<button class="varBtn${i===0?" varBtn--active":""}" data-var="${esc(v)}">${esc(v)}</button>`).join("");
    } else {
      varRow.style.display="none";varGrid.innerHTML="";
    }

    // Galería
    const imgs=(p.images&&p.images.length)?p.images:[p.img];
    renderModalGallery(imgs,0);

    $("#qtyVal").textContent="1";
    openModal("productModal");
  }

  function renderModalGallery(imgs,idx){
    const mainImg=$("#pmImg"),thumbs=$("#pmThumbs");
    mainImg.src=imgs[idx]||"";
    mainImg.onerror=()=>{mainImg.style.display="none";mainImg.parentElement.style.background="linear-gradient(135deg,rgba(224,160,64,.16),rgba(240,192,160,.10))";};
    mainImg.style.display="";
    if(imgs.length>1){
      thumbs.innerHTML=imgs.map((src,i)=>`<div class="pmThumb${i===idx?" pmThumb--active":""}" data-thumbi="${i}"><img src="${esc(src)}" alt="img ${i+1}" onerror="this.style.display='none'"></div>`).join("");
      thumbs.style.display="flex";
    } else {
      thumbs.innerHTML="";thumbs.style.display="none";
    }
  }

  function bindProductModal(){
    $("#qtyMinus").addEventListener("click",()=>{modalQty=Math.max(1,modalQty-1);$("#qtyVal").textContent=String(modalQty);});
    $("#qtyPlus").addEventListener("click",()=>{modalQty+=1;$("#qtyVal").textContent=String(modalQty);});
    $("#pmVariantGrid").addEventListener("click",(e)=>{
      const b=e.target.closest("[data-var]");if(!b)return;
      $$(".varBtn").forEach(x=>x.classList.remove("varBtn--active"));
      b.classList.add("varBtn--active");modalVariant=b.getAttribute("data-var");
    });
    $("#pmThumbs").addEventListener("click",(e)=>{
      const t=e.target.closest("[data-thumbi]");if(!t)return;
      const p=getById(modalProductId);if(!p)return;
      const imgs=(p.images&&p.images.length)?p.images:[p.img];
      renderModalGallery(imgs,parseInt(t.getAttribute("data-thumbi")||"0"));
    });
    $("#pmAdd").addEventListener("click",()=>{
      if(!modalProductId)return;
      addToCart(modalProductId,modalQty);closeModal("productModal");openModal("cartModal");
    });
    $("#pmBuy").addEventListener("click",()=>{if(!modalProductId)return;openCustomerModal("product");});
  }

  // ===== FORMULARIO DATOS CLIENTE =====
  function openCustomerModal(target){
    customerTarget=target;
    const n=$("#cfName");if(n)n.value="";
    const c=$("#cfCelular");if(c)c.value="";
    const d=$("#cfDistrito");if(d)d.value="";
    let summary="";
    if(target==="product"&&modalProductId){
      const p=getById(modalProductId);
      summary=`🛍️ <b>${esc(p.name)}</b> x${modalQty}`;
      if(modalVariant)summary+=` · <b>${esc(modalVariant)}</b>`;
      summary+=` — <b>${fmt(p.price*modalQty)}</b>`;
    } else if(target==="pack"&&currentPackId){
      const p=getById(currentPackId);
      summary=`💝 Pack: <b>${esc(p?.name||"")}</b> — <b>${fmt(packTotal())}</b>`;
    } else {
      summary=Array.from(cart.entries()).map(([id,qty])=>{const p=getById(id);if(!p)return"";return`• ${esc(p.name)} x${qty} — ${fmt(p.price*qty)}`;}).join("<br>");
      summary+=`<br><b>Total: ${fmt(cartTotal())}</b>`;
    }
    $("#cfSummary").innerHTML=summary;
    openModal("customerModal");
  }

  function bindCustomerForm(){
    $("#cfSend").addEventListener("click",()=>{
      const name=($("#cfName").value||"").trim();
      const cel=($("#cfCelular").value||"").trim();
      const dist=($("#cfDistrito").value||"").trim();
      const lines=[];
      if(customerTarget==="pack"){
        lines.push(...pendingPackMsg);
      } else if(customerTarget==="product"&&modalProductId){
        const p=getById(modalProductId);
        lines.push("🌸 *PALTISHOP — Pedido* 🌸","");
        lines.push(`🛍️ *Producto:* ${p.name}`);
        if(modalVariant)lines.push(`🎨 *${p.variantLabel||"Variante"}:* ${modalVariant}`);
        lines.push(`🔢 *Cantidad:* ${modalQty}`,`💰 *Total:* ${fmt(p.price*modalQty)}`,"");
      } else {
        lines.push("💚 *PALTISHOP — Pedido (Carrito)* 💚","");
        for(const [id,qty] of cart.entries()){const p=getById(id);if(!p)continue;lines.push(`• ${p.name} x${qty} — ${fmt(p.price*qty)}`);}
        lines.push("",`🧾 *Total:* ${fmt(cartTotal())}`,"");
      }
      if(name)lines.push(`👤 *Nombre:* ${name}`);
      if(cel)lines.push(`📱 *Celular:* ${cel}`);
      if(dist)lines.push(`📍 *Distrito/Ciudad:* ${dist}`);
      lines.push("🚚 *Envío:* Lima / Provincia","","¿Me confirmas disponibilidad? 💖");
      window.open("https://wa.me/"+WHATSAPP_PHONE+"?text="+encodeURIComponent(lines.join("\n")),"_blank");
      closeModal("customerModal");
    });
  }

  // ===== CARRITO =====
  function cartCount(){let n=0;for(const q of cart.values())n+=q;return n;}
  function cartTotal(){let t=0;for(const [id,qty] of cart.entries()){const p=getById(id);if(p)t+=p.price*qty;}return t;}
  function renderCart(){
    $("#cartCount").textContent=String(cartCount());
    const list=$("#cartList");
    if(cart.size===0){list.innerHTML=`<div class="sEmpty">Tu carrito está vacío 🛒</div>`;$("#cartMeta").textContent="Agrega productos para continuar.";$("#cartTotal").textContent=fmt(0);return;}
    list.innerHTML=Array.from(cart.entries()).map(([id,qty])=>{const p=getById(id);if(!p)return"";return`<div class="cartItem" data-cid="${esc(id)}"><div class="cartItem__img"><img src="${esc(p.img||"")}" alt="${esc(p.name)}" onerror="this.style.display='none'"></div><div class="cartItem__main"><div class="cartItem__name">${esc(p.name)}</div><div class="cartItem__meta">${fmt(p.price)} · ${esc(p.category)}</div></div><div class="cartItem__qty"><button class="qtyBtn" data-cminus="${esc(id)}">−</button><b>${qty}</b><button class="qtyBtn" data-cplus="${esc(id)}">+</button></div></div>`;}).join("");
    $("#cartMeta").textContent=`${cartCount()} item(s)`;$("#cartTotal").textContent=fmt(cartTotal());
  }
  function addToCart(id,qty){const cur=cart.get(id)||0;cart.set(id,cur+qty);renderCart();}
  function setQty(id,qty){if(qty<=0)cart.delete(id);else cart.set(id,qty);renderCart();}
  function bindCart(){
    $("#openCart").addEventListener("click",()=>{renderCart();openModal("cartModal");});
    $("#clearCart").addEventListener("click",()=>{cart.clear();renderCart();});
    $("#checkoutBtn").addEventListener("click",()=>{if(cart.size===0)return;openCustomerModal("cart");});
    $("#cartList").addEventListener("click",(e)=>{
      const m=e.target.closest("[data-cminus]"),pl=e.target.closest("[data-cplus]");
      if(m){const id=m.getAttribute("data-cminus");setQty(id,(cart.get(id)||1)-1);}
      if(pl){const id=pl.getAttribute("data-cplus");setQty(id,(cart.get(id)||0)+1);}
    });
  }

  // ===== PACK CUSTOMIZER =====
  function renderPackCustomizer(packId){
    const p=getById(packId);if(!p)return;
    const cfg=packConfigs[packId]||{title:p.name,fields:["note","card"],options:{card:["N°1","N°2","N°3","N°4","N°5","N°6"]}};
    currentPackId=packId;
    packState={note:"",card:"N°1",collar:"Tulipán",collar_other:"",peluche:"Nutria",peluche_other:"",espejo:"Nube",espejo_other:"",extras14:false};
    $("#packTitle").textContent="Personalizar "+(cfg.title||p.name);
    const rows=[];
    const opt=(arr)=>(arr||[]).map(x=>`<option>${esc(x)}</option>`).join("");
    if(cfg.fields.includes("note"))rows.push(`<div class="pfRow"><label>Dedicatoria 💌</label><textarea id="pf_note" rows="2" placeholder="Escribe tu mensaje... (o déjalo vacío)"></textarea></div>`);
    if(cfg.fields.includes("card"))rows.push(`<div class="pfRow"><label>Tarjetita 🎴</label><select id="pf_card">${opt(cfg.options?.card)}</select></div>`);
    if(cfg.fields.includes("collar"))rows.push(`<div class="pfRow"><label>Collar 💐</label><select id="pf_collar">${opt(cfg.options?.collar)}</select><input type="text" id="pf_collar_other" placeholder="Si elegiste 'Otro', escribe aquí" style="display:none"></div>`);
    if(cfg.fields.includes("peluche"))rows.push(`<div class="pfRow"><label>Peluche 🧸</label><select id="pf_peluche">${opt(cfg.options?.peluche)}</select><input type="text" id="pf_peluche_other" placeholder="Si elegiste 'Otro', escribe aquí" style="display:none"></div>`);
    if(cfg.fields.includes("espejo"))rows.push(`<div class="pfRow"><label>Lámpara / Espejo 💡</label><select id="pf_espejo">${opt(cfg.options?.espejo)}</select><input type="text" id="pf_espejo_other" placeholder="Si elegiste 'Otro', escribe aquí" style="display:none"></div>`);
    if(cfg.fields.includes("extras14"))rows.push(`<label class="pfCheck"><input type="checkbox" id="pf_extras14"><div><div><b>+3 fotos polaroid + llavero personalizado</b> (${fmt(ADDON_PRICES.extras14)})</div><div class="pfSmall">Ideal para completar el detalle ✨</div></div></label>`);
    rows.push(`<div class="pfTotal"><div><b>Total estimado</b></div><div><b id="pf_total">${fmt(p.price)}</b></div></div>`);
    $("#packForm").innerHTML=rows.join("");
    const noteEl=$("#pf_note");if(noteEl)noteEl.addEventListener("input",()=>packState.note=noteEl.value);
    const cardEl=$("#pf_card");if(cardEl)cardEl.addEventListener("change",()=>packState.card=cardEl.value);
    const collarEl=$("#pf_collar"),collarOther=$("#pf_collar_other");
    if(collarEl){collarEl.addEventListener("change",()=>{packState.collar=collarEl.value;if(collarOther)collarOther.style.display=isOther(collarEl.value)?"block":"none";});}
    if(collarOther)collarOther.addEventListener("input",()=>packState.collar_other=collarOther.value);
    const pelEl=$("#pf_peluche"),pelOther=$("#pf_peluche_other");
    if(pelEl){pelEl.addEventListener("change",()=>{packState.peluche=pelEl.value;if(pelOther)pelOther.style.display=isOther(pelEl.value)?"block":"none";});}
    if(pelOther)pelOther.addEventListener("input",()=>packState.peluche_other=pelOther.value);
    const espEl=$("#pf_espejo"),espOther=$("#pf_espejo_other");
    if(espEl){espEl.addEventListener("change",()=>{packState.espejo=espEl.value;if(espOther)espOther.style.display=isOther(espEl.value)?"block":"none";});}
    if(espOther)espOther.addEventListener("input",()=>packState.espejo_other=espOther.value);
    const ex14=$("#pf_extras14");if(ex14)ex14.addEventListener("change",()=>{packState.extras14=ex14.checked;updatePackTotal();});
    updatePackTotal();openModal("packModal");
  }
  const chosen=(v,o)=>isOther(v)?(o||"Otro"):v;
  function packTotal(){const p=getById(currentPackId);let t=p?p.price:0;if(packState.extras14)t+=(ADDON_PRICES.extras14||14);return t;}
  function updatePackTotal(){const t=$("#pf_total");if(t)t.textContent=fmt(packTotal());}

  function bindPackBuy(){
    $("#pkBuy").addEventListener("click",()=>{
      if(!currentPackId)return;
      const p=getById(currentPackId);const cfg=packConfigs[currentPackId]||{fields:[]};
      const parts=["💝 *PALTISHOP — PACK PERSONALIZADO* 💝","",`🎁 *Pack:* ${p.name}`,`💰 *Precio:* ${fmt(p.price)}`];
      if(cfg.fields.includes("card"))parts.push(`🎴 *Tarjetita:* ${packState.card}`);
      if(cfg.fields.includes("peluche"))parts.push(`🧸 *Peluche:* ${chosen(packState.peluche,packState.peluche_other)}`);
      if(cfg.fields.includes("collar"))parts.push(`💐 *Collar:* ${chosen(packState.collar,packState.collar_other)}`);
      if(cfg.fields.includes("espejo"))parts.push(`💡 *Lámpara/Espejo:* ${chosen(packState.espejo,packState.espejo_other)}`);
      if(cfg.fields.includes("note")){const note=(packState.note||"").trim();parts.push(`📝 *Dedicatoria:* ${note||"Sin dedicatoria"}`);}
      if(cfg.fields.includes("extras14")&&packState.extras14)parts.push(`✨ *Extras:* +3 polaroids + llavero (${fmt(ADDON_PRICES.extras14)})`);
      parts.push(`🧾 *Total:* ${fmt(packTotal())}`,"");
      pendingPackMsg=parts;
      openCustomerModal("pack");
    });
  }

  function bindNav(){
    const goP=$("#goPacks");if(goP)goP.addEventListener("click",()=>location.hash="#packs");
    const goS=$("#goShop");if(goS)goS.addEventListener("click",()=>location.hash="#tienda");
    const goH=$("#goHot");if(goH)goH.addEventListener("click",()=>location.hash="#destacados");
    const toTop=$("#toTop");if(toTop)toTop.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
    const ctaW=$("#ctaWhats");if(ctaW)ctaW.addEventListener("click",()=>window.open("https://wa.me/"+WHATSAPP_PHONE+"?text="+encodeURIComponent("🌸 Hola PALTISHOP 💖 Quiero información de packs y disponibilidad."),"_blank"));
    const ctaN=$("#ctaNow");if(ctaN)ctaN.addEventListener("click",()=>ctaW&&ctaW.click());
  }
  function bindShop(){
    const catChips=$("#catChips");if(catChips)catChips.addEventListener("click",(e)=>{const b=e.target.closest("[data-cat]");if(!b)return;activeCat=b.getAttribute("data-cat");renderChips();renderGrid();});
    const sortSel=$("#sortSel");if(sortSel)sortSel.addEventListener("change",(e)=>{sortMode=e.target.value;renderGrid();});
    document.addEventListener("click",(e)=>{
      const packBtn=e.target.closest("[data-pack]");if(packBtn){e.preventDefault();e.stopPropagation();renderPackCustomizer(packBtn.getAttribute("data-pack"));return;}
      const addBtn=e.target.closest("[data-add]");if(addBtn){e.preventDefault();e.stopPropagation();addToCart(addBtn.getAttribute("data-add"),1);return;}
      const viewBtn=e.target.closest("[data-view]");if(viewBtn){e.preventDefault();e.stopPropagation();openProductModal(viewBtn.getAttribute("data-view"));return;}
      const cardEl=e.target.closest(".card");if(cardEl&&cardEl.getAttribute("data-id")){if(e.target.closest("button"))return;openProductModal(cardEl.getAttribute("data-id"));}
    });
  }
  function bindSearch(){
    const openSearch=$("#openSearch");if(openSearch)openSearch.addEventListener("click",()=>{openModal("searchModal");renderSearchResults();const si=$("#searchInput");if(si)si.focus();});
    const searchInput=$("#searchInput");if(searchInput)searchInput.addEventListener("input",(e)=>{searchQuery=e.target.value;renderSearchResults();renderGrid();});
    const clearSearch=$("#clearSearch");if(clearSearch)clearSearch.addEventListener("click",()=>{searchQuery="";const si=$("#searchInput");if(si)si.value="";renderSearchResults();renderGrid();if(si)si.focus();});
  }
  function bindPacks(){
    const packChips=$("#packChips");if(packChips)packChips.addEventListener("click",(e)=>{const b=e.target.closest("[data-packcat]");if(!b)return;packFilter=b.getAttribute("data-packcat");$$(".chipBtn","#packChips").forEach(x=>x.setAttribute("aria-pressed",String(x===b)));renderPacks();});
  }

  function init(){
    renderChips();renderPackChips();renderPacks();renderGrid();renderHot();renderTestimonials();renderFAQ();renderCart();renderSearchResults();
    bindNav();bindShop();bindSearch();bindSearchResults();bindCart();bindProductModal();bindPacks();bindPackBuy();bindCustomerForm();
  }
  window.addEventListener("DOMContentLoaded",init);
})();
