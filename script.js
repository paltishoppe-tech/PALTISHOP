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
  // =========================
  // PACKS (según catálogo)
  // =========================
  { id:"pack-1", name:"Pack 1 (Corderito)", category:"Packs", price:119.90, img:"page-03.webp",
    desc:"Corderito + collar tulipán + lámpara tulipán + llavero + 3 fotos polaroid + dedicatoria.", badges:["⭐ Pack"], hot:true,
    size:"30 cm",
    variants:"—"
  },
  { id:"pack-nochebuena", name:"Pack Nochebuena Contigo", category:"Packs", price:119.90, img:"page-03.webp",
    desc:"Peluche que respira + espejo tulipanes infinitos + collar + 3 polaroids + llavero personalizado + chocolates.", badges:["🔥 HOT"], hot:true,
    size:"30 cm",
    variants:"—"
  },
  { id:"pack-2", name:"Pack 2 (Corderito)", category:"Packs", price:109.90, img:"page-04.webp",
    desc:"Corderito + lámpara tulipán + collar tulipán + dedicatoria.", badges:["⭐ Pack"], hot:true,
    size:"30 cm",
    variants:"—"
  },
  { id:"pack-3", name:"Pack 3", category:"Packs", price:109.90, img:"page-04.webp",
    desc:"Peluche que respira (modelo a elegir) + collar girasol + anillo girasol + dedicatoria.", badges:["⭐ Pack"], hot:false,
    size:"30 cm",
    variants:"—"
  },
  { id:"pack-4", name:"Pack 4", category:"Packs", price:99.90, img:"page-05.webp",
    desc:"Corderito + collar tulipán + 3 polaroids + llavero + dedicatoria.", badges:["⭐ Pack"], hot:false,
    size:"30 cm",
    variants:"—"
  },
  { id:"pack-5", name:"Pack 5", category:"Packs", price:99.90, img:"page-05.webp",
    desc:"Peluche que respira (modelo a elegir) + lámpara tulipán + dedicatoria.", badges:["⭐ Pack"], hot:true,
    size:"30 cm",
    variants:"—"
  },
  { id:"pack-6", name:"Pack 6", category:"Packs", price:75.90, img:"page-06.webp",
    desc:"Peluche que respira (modelo a elegir) + 3 polaroids + llavero + dedicatoria.", badges:["⭐ Pack"], hot:false,
    size:"30 cm",
    variants:"—"
  },
  { id:"pack-7", name:"Pack 7", category:"Packs", price:119.90, img:"page-06.webp",
    desc:"Peluche que respira (modelo a elegir) + collar girasol + lámpara tulipán + llavero + 3 polaroids + dedicatoria.", badges:["⭐ Pack","🔥 HOT"], hot:true,
    size:"30 cm",
    variants:"—"
  },

  // =========================
  // LÁMPARAS
  // =========================
  { id:"lampara-tulipan", name:"Lámpara de tulipán", category:"Lámparas", price:39.90, img:"page-07.webp",
    desc:"Colores: Multicolor, Celeste, Lila, Rosado.", badges:["🌷 Aesthetic"], hot:true,
    size:"30 cm",
    variants:"—"
  },

  // =========================
  // PELUCHES (por separado)
  // Nota: La mayoría aparece a S/ 39.90 en el catálogo.
  // =========================
  { id:"peluche-respira", name:"Peluchito que respira (30 cm)", category:"Peluches", price:39.90, img:"page-08.webp",
    desc:"Modelos: Elefante, Hello Kitty, Nutria (marrón, morado, rosado, plomo, azul, amarillo, celeste, beige).", badges:["Tendencia","30 cm"], hot:true,
    size:"30 cm",
    variants:"—"
  },

  { id:"oso-rosa", name:"Oso con rosa (20 cm)", category:"Peluches", price:39.90, img:"page-09.webp",
    desc:"Disponible solo en marrón.", badges:["20 cm"], hot:false,
    size:"20 cm",
    variants:"Disponible solo en marrón."
  },
  { id:"conejo-zanahoria", name:"Conejo zanahoria (24 cm)", category:"Peluches", price:39.90, img:"page-09.webp",
    desc:"Disponible en verde y amarillo.", badges:["24 cm"], hot:false,
    size:"24 cm",
    variants:"Disponible en verde y amarillo."
  },
  { id:"cinnamoroll", name:"Cinnamoroll (20 cm)", category:"Peluches", price:39.90, img:"page-09.webp",
    desc:"Disponible en lila.", badges:["20 cm"], hot:true,
    size:"20 cm",
    variants:"Disponible en lila."
  },
  { id:"oso-corbata", name:"Oso con corbata (28 cm)", category:"Peluches", price:39.90, img:"page-09.webp",
    desc:"Tamaño 28 cm.", badges:["28 cm"], hot:false,
    size:"28 cm",
    variants:"—"
  },

  { id:"corderito-gorra", name:"Corderito con gorra (22 cm)", category:"Peluches", price:39.90, img:"page-10.webp",
    desc:"Tamaño 22 cm.", badges:["22 cm"], hot:false,
    size:"22 cm",
    variants:"—"
  },
  { id:"snoopy-tulipan", name:"Snoopy con tulipán (20 cm)", category:"Peluches", price:39.90, img:"page-10.webp",
    desc:"Tulipán: lila, amarillo y rojo.", badges:["20 cm"], hot:true,
    size:"20 cm",
    variants:"—"
  },
  { id:"pinguino-iloveyou", name:"Pingüino I ❤ YOU (20 cm)", category:"Peluches", price:39.90, img:"page-10.webp",
    desc:"Disponible en azul.", badges:["20 cm"], hot:false,
    size:"20 cm",
    variants:"Disponible en azul."
  },
  { id:"mono", name:"Mono (21 cm)", category:"Peluches", price:39.90, img:"page-10.webp",
    desc:"Tamaño 21 cm.", badges:["⭐"], hot:false,
    size:"21 cm",
    variants:"—"
  },

  { id:"hello-kitty", name:"Hello Kitty (22 cm)", category:"Peluches", price:39.90, img:"page-11.webp",
    desc:"Disponible en tulipán lila y amarillo.", badges:["22 cm"], hot:true,
    size:"22 cm",
    variants:"Disponible en tulipán lila y amarillo."
  },
  { id:"gatito-chino", name:"Gatito chino (22 cm)", category:"Peluches", price:39.90, img:"page-11.webp",
    desc:"Tamaño 22 cm.", badges:["22 cm"], hot:false,
    size:"22 cm",
    variants:"—"
  },
  { id:"hello-kitty-girasol", name:"Hello Kitty girasol (20 cm)", category:"Peluches", price:39.90, img:"page-11.webp",
    desc:"Tamaño 20 cm.", badges:["20 cm"], hot:true,
    size:"20 cm",
    variants:"—"
  },
  { id:"snoopy-pijama", name:"Snoopy pijama (21 cm)", category:"Peluches", price:39.90, img:"page-11.webp",
    desc:"Disponible en azul y rosado.", badges:["21 cm"], hot:false,
    size:"21 cm",
    variants:"Disponible en azul y rosado."
  },

  { id:"cerdito-mochila", name:"Cerdito mochila (20 cm)", category:"Peluches", price:39.90, img:"page-12.webp",
    desc:"Tamaño 20 cm.", badges:["20 cm"], hot:false,
    size:"20 cm",
    variants:"—"
  },
  { id:"cerdito-medalla", name:"Cerdito medalla (20 cm)", category:"Peluches", price:39.90, img:"page-12.webp",
    desc:"Tamaño 20 cm.", badges:["20 cm"], hot:false,
    size:"20 cm",
    variants:"—"
  },
  { id:"cerdito-dino", name:"Cerdito dino (20 cm)", category:"Peluches", price:39.90, img:"page-12.webp",
    desc:"Tamaño 20 cm.", badges:["20 cm"], hot:true,
    size:"20 cm",
    variants:"—"
  },
  { id:"cerdito-unicornio", name:"Cerdito unicornio (23 cm)", category:"Peluches", price:39.90, img:"page-12.webp",
    desc:"Disponible en blanco y celeste.", badges:["23 cm"], hot:false,
    size:"23 cm",
    variants:"Disponible en blanco y celeste."
  },

  { id:"erizo-lazo", name:"Erizo con lazo (20 cm)", category:"Peluches", price:39.90, img:"page-13.webp",
    desc:"Tamaño 20 cm.", badges:["20 cm"], hot:false,
    size:"20 cm",
    variants:"—"
  },
  { id:"pancito", name:"Pancito (30 cm)", category:"Peluches", price:39.90, img:"page-13.webp",
    desc:"Tamaño 30 cm.", badges:["30 cm"], hot:true,
    size:"30 cm",
    variants:"—"
  },
  { id:"gatita", name:"Gatita (20 cm)", category:"Peluches", price:39.90, img:"page-13.webp",
    desc:"Tamaño 20 cm.", badges:["20 cm"], hot:false,
    size:"20 cm",
    variants:"—"
  },
  { id:"pochaco-zanahoria", name:"Pochaco zanahoria (30 cm)", category:"Peluches", price:39.90, img:"page-13.webp",
    desc:"Tamaño 30 cm.", badges:["30 cm"], hot:false,
    size:"30 cm",
    variants:"—"
  },

  { id:"pinguino-audifonos", name:"Pingüino con audífonos (25 cm)", category:"Peluches", price:39.90, img:"page-14.webp",
    desc:"Nuevo ingreso. Tamaño 25 cm.", badges:["Nuevo","25 cm"], hot:true,
    size:"25 cm",
    variants:"—"
  },
  { id:"pinguino-dino", name:"Pingüino dino (22 cm)", category:"Peluches", price:39.90, img:"page-14.webp",
    desc:"Nuevo ingreso. Tamaño 22 cm.", badges:["Nuevo","22 cm"], hot:false,
    size:"22 cm",
    variants:"—"
  },
  { id:"pinguino", name:"Pingüino (20 cm)", category:"Peluches", price:39.90, img:"page-14.webp",
    desc:"Nuevo ingreso. Tamaño 20 cm.", badges:["Nuevo","20 cm"], hot:false,
    size:"20 cm",
    variants:"—"
  },
  { id:"ositos-cariositos", name:"Ositos cariñositos (25 cm)", category:"Peluches", price:49.90, img:"page-14.webp",
    desc:"Precio S/ 49.90 (según catálogo).", badges:["Nuevo","25 cm"], hot:true,
    size:"25 cm",
    variants:"—"
  },

  // =========================
  // OTROS / REGALOS
  // =========================
  { id:"esfera-1", name:"Esfera 1", category:"Esferas", price:39.90, img:"page-15.webp",
    desc:"Esferas decorativas (modelo 1).", badges:["S/ 39.90"], hot:false },
  { id:"esfera-2", name:"Esfera 2", category:"Esferas", price:39.90, img:"page-15.webp",
    desc:"Esferas decorativas (modelo 2).", badges:["S/ 39.90"], hot:false },
  { id:"esfera-3", name:"Esfera 3", category:"Esferas", price:39.90, img:"page-15.webp",
    desc:"Esferas decorativas (modelo 3).", badges:["S/ 39.90"], hot:true },
  { id:"esfera-4", name:"Esfera 4", category:"Esferas", price:39.90, img:"page-15.webp",
    desc:"Esferas decorativas (modelo 4).", badges:["S/ 39.90"], hot:false },

  { id:"anillo-girasol-1", name:"Anillo girasol 1", category:"Accesorios", price:39.90, img:"page-16.webp",
    desc:"Anillos girasol (modelo 1).", badges:["S/ 39.90"], hot:true },
  { id:"anillo-girasol-2", name:"Anillo girasol 2", category:"Accesorios", price:39.90, img:"page-16.webp",
    desc:"Anillos girasol (modelo 2).", badges:["S/ 39.90"], hot:false },
  { id:"anillo-girasol-3", name:"Anillo girasol 3", category:"Accesorios", price:39.90, img:"page-16.webp",
    desc:"Anillos girasol (modelo 3).", badges:["S/ 39.90"], hot:false },

  { id:"pulsera-tulipan-lila", name:"Pulsera tulipán (lila)", category:"Accesorios", price:39.90, img:"page-16.webp",
    desc:"Pulsera tulipán lila.", badges:["S/ 39.90"], hot:false },
  { id:"pulsera-tulipan-rosado", name:"Pulsera tulipán (rosado)", category:"Accesorios", price:39.90, img:"page-16.webp",
    desc:"Pulsera tulipán rosado.", badges:["S/ 39.90"], hot:true },
  { id:"pulsera-tulipan-blanco", name:"Pulsera tulipán (blanco)", category:"Accesorios", price:39.90, img:"page-16.webp",
    desc:"Pulsera tulipán blanco.", badges:["S/ 39.90"], hot:false },

  { id:"collar-mariposa-lila", name:"Collar mariposa (lila)", category:"Accesorios", price:39.90, img:"page-17.webp",
    desc:"Collar mariposa lila.", badges:["S/ 39.90"], hot:false },
  { id:"collar-mariposa-blanca", name:"Collar mariposa (blanca)", category:"Accesorios", price:39.90, img:"page-17.webp",
    desc:"Collar mariposa blanca.", badges:["S/ 39.90"], hot:false },
  { id:"collar-mariposa-rosada", name:"Collar mariposa (rosada)", category:"Accesorios", price:39.90, img:"page-17.webp",
    desc:"Collar mariposa rosada.", badges:["S/ 39.90"], hot:true },
  { id:"collar-mariposa-roja", name:"Collar mariposa (roja)", category:"Accesorios", price:39.90, img:"page-17.webp",
    desc:"Collar mariposa roja.", badges:["S/ 39.90"], hot:false },
  { id:"collar-mariposa-azul", name:"Collar mariposa (azul)", category:"Accesorios", price:39.90, img:"page-17.webp",
    desc:"Collar mariposa azul.", badges:["S/ 39.90"], hot:false },

  { id:"collar-tulipan-rojo", name:"Collar tulipán (rojo)", category:"Accesorios", price:39.90, img:"page-18.webp",
    desc:"Collar tulipán rojo.", badges:["S/ 39.90"], hot:true },
  { id:"collar-tulipan-rosado", name:"Collar tulipán (rosado)", category:"Accesorios", price:39.90, img:"page-18.webp",
    desc:"Collar tulipán rosado.", badges:["S/ 39.90"], hot:false },
  { id:"collar-tulipan-lila", name:"Collar tulipán (lila)", category:"Accesorios", price:39.90, img:"page-18.webp",
    desc:"Collar tulipán lila.", badges:["S/ 39.90"], hot:false },
  { id:"collar-tulipan-amarillo", name:"Collar tulipán (amarillo)", category:"Accesorios", price:39.90, img:"page-18.webp",
    desc:"Collar tulipán amarillo.", badges:["S/ 39.90"], hot:false },
  { id:"collar-tulipan-blanco", name:"Collar tulipán (blanco)", category:"Accesorios", price:39.90, img:"page-18.webp",
    desc:"Collar tulipán blanco.", badges:["S/ 39.90"], hot:false },

  { id:"collar-girasol-1", name:"Collar girasol 1", category:"Accesorios", price:39.90, img:"page-19.webp",
    desc:"Collar girasol (modelo 1).", badges:["S/ 39.90"], hot:false },
  { id:"collar-girasol-2", name:"Collar girasol 2", category:"Accesorios", price:39.90, img:"page-19.webp",
    desc:"Collar girasol (modelo 2).", badges:["S/ 39.90"], hot:true },
  { id:"collar-girasol-3", name:"Collar girasol 3", category:"Accesorios", price:39.90, img:"page-19.webp",
    desc:"Collar girasol (modelo 3).", badges:["S/ 39.90"], hot:false },
  { id:"collar-girasol-4", name:"Collar girasol 4", category:"Accesorios", price:39.90, img:"page-19.webp",
    desc:"Collar girasol (modelo 4).", badges:["S/ 39.90"], hot:false },
  { id:"collar-girasol-5", name:"Collar girasol 5", category:"Accesorios", price:39.90, img:"page-19.webp",
    desc:"Collar girasol (modelo 5).", badges:["S/ 39.90"], hot:false },

  // =========================
  // ACCESORIOS PARA PAREJA
  // =========================
  { id:"set-solmun", name:"Set Solmún", category:"Para pareja", price:89.90, img:"page-20.webp",
    desc:"Par de anillos (regulables) + par de collares + dedicatoria/acta + chocolates + presentación lista.", badges:["Pack pareja"], hot:true },
  { id:"set-dualidad", name:"Set Dualidad", category:"Para pareja", price:54.90, img:"page-20.webp",
    desc:"Par de anillos (regulables) + dedicatoria/acta + chocolates + presentación lista.", badges:["Pack pareja"], hot:false },
  { id:"set-corazon-protector", name:"Set Corazón Protector", category:"Para pareja", price:59.90, img:"page-21.webp",
    desc:"Collares corazón y espada + chocolates + dedicatoria/acta + presentación lista.", badges:["A tan solo"], hot:true },
  { id:"set-nuestro-primer-si", name:"Set “Nuestro primer sí”", category:"Para pareja", price:59.90, img:"page-22.webp",
    desc:"Par de anillos (regulables) + dedicatoria/acta + chocolates + presentación lista.", badges:["A tan solo"], hot:false },
];


// =========================
// PACK CONFIGS (cada pack es diferente)
// Edita aquí qué se puede personalizar por pack.
// fields: note, card, collar, peluche, espejo, extras14, 
// =========================
const packConfigs = {
  // Nota: cada pack muestra SOLO lo que tiene sentido personalizar.
  // fields disponibles: note, card, collar, collarColor, peluche, pelucheColor, espejo, llavero, polaroids, extras14

  "pack-1": {
    title:"Pack 1 (Corderito)",
    fields:["note","card","collar","collarColor","llavero","polaroids"],
    options:{
      collar:["Tulipán","Mariposa","Girasol","Otro (escribir)"],
      collarColor:["Rojo","Rosado","Lila","Amarillo","Blanco","Azul","Otro (escribir)"],
      card:["N°1","N°2","N°3","N°4","N°5","N°6"],
      polaroids:["3 fotos (incluidas)","6 fotos (+S/14)","9 fotos (+S/28)"]
    }
  },

  "pack-nochebuena": {
    title:"Pack Nochebuena Contigo",
    fields:["note","card","peluche","pelucheColor","espejo","collar","collarColor","llavero","polaroids"],
    options:{
      peluche:["Peluche que respira — Nutria","Peluche que respira — Hello Kitty","Peluche que respira — Conejo","Peluche que respira — Elefante","Nutria (normal)","Hello Kitty (normal)","Conejo","Oso","Snoopy","Pingüino","Otro (escribir)"],
      pelucheColor:["Marrón","Morado","Rosado","Plomo","Azul","Amarillo","Celeste","Beige","Otro (escribir)"],
      espejo:["Tulipanes infinitos","Nube","Otro (escribir)"],
      collar:["Tulipán","Mariposa","Girasol","Otro (escribir)"],
      collarColor:["Rojo","Rosado","Lila","Amarillo","Blanco","Azul","Otro (escribir)"],
      card:["N°1","N°2","N°3","N°4","N°5","N°6"],
      polaroids:["3 fotos (incluidas)","6 fotos (+S/14)","9 fotos (+S/28)"]
    }
  },

  "pack-2": {
    title:"Pack 2 (Corderito)",
    fields:["note","card","collar","collarColor","llavero"],
    options:{
      collar:["Tulipán","Mariposa","Girasol","Otro (escribir)"],
      collarColor:["Rojo","Rosado","Lila","Amarillo","Blanco","Azul","Otro (escribir)"],
      card:["N°1","N°2","N°3","N°4","N°5","N°6"]
    }
  },

  "pack-3": {
    title:"Pack 3",
    fields:["note","card","peluche","pelucheColor","collar","collarColor"],
    options:{
      peluche:["Peluche que respira — Nutria","Peluche que respira — Hello Kitty","Peluche que respira — Conejo","Peluche que respira — Elefante","Nutria (normal)","Hello Kitty (normal)","Conejo","Oso","Snoopy","Pingüino","Otro (escribir)"],
      pelucheColor:["Marrón","Morado","Rosado","Plomo","Azul","Amarillo","Celeste","Beige","Otro (escribir)"],
      collar:["Girasol","Tulipán","Mariposa","Otro (escribir)"],
      collarColor:["Rojo","Rosado","Lila","Amarillo","Blanco","Azul","Otro (escribir)"],
      card:["N°1","N°2","N°3","N°4","N°5","N°6"]
    }
  },

  "pack-4": {
    title:"Pack 4",
    fields:["note","card","collar","collarColor","llavero","polaroids"],
    options:{
      collar:["Tulipán","Mariposa","Girasol","Otro (escribir)"],
      collarColor:["Rojo","Rosado","Lila","Amarillo","Blanco","Azul","Otro (escribir)"],
      card:["N°1","N°2","N°3","N°4","N°5","N°6"],
      polaroids:["3 fotos (incluidas)","6 fotos (+S/14)","9 fotos (+S/28)"]
    }
  },

  "pack-5": {
    title:"Pack 5",
    fields:["note","card","peluche","pelucheColor","espejo","llavero"],
    options:{
      peluche:["Peluche que respira — Nutria","Peluche que respira — Hello Kitty","Peluche que respira — Conejo","Peluche que respira — Elefante","Nutria (normal)","Hello Kitty (normal)","Conejo","Oso","Snoopy","Pingüino","Otro (escribir)"],
      pelucheColor:["Marrón","Morado","Rosado","Plomo","Azul","Amarillo","Celeste","Beige","Otro (escribir)"],
      espejo:["Lámpara tulipán","Nube","Tulipanes infinitos","Otro (escribir)"],
      card:["N°1","N°2","N°3","N°4","N°5","N°6"]
    }
  },

  "pack-6": {
    title:"Pack 6",
    fields:["note","card","peluche","pelucheColor","llavero","polaroids"],
    options:{
      peluche:["Peluche que respira — Nutria","Peluche que respira — Hello Kitty","Peluche que respira — Conejo","Peluche que respira — Elefante","Nutria (normal)","Hello Kitty (normal)","Conejo","Oso","Snoopy","Pingüino","Otro (escribir)"],
      pelucheColor:["Marrón","Morado","Rosado","Plomo","Azul","Amarillo","Celeste","Beige","Otro (escribir)"],
      card:["N°1","N°2","N°3","N°4","N°5","N°6"],
      polaroids:["3 fotos (incluidas)","6 fotos (+S/14)","9 fotos (+S/28)"]
    }
  },

  "pack-7": {
    title:"Pack 7",
    fields:["note","card","peluche","pelucheColor","collar","collarColor","espejo","llavero","polaroids"],
    options:{
      peluche:["Peluche que respira — Nutria","Peluche que respira — Hello Kitty","Peluche que respira — Conejo","Peluche que respira — Elefante","Nutria (normal)","Hello Kitty (normal)","Conejo","Oso","Snoopy","Pingüino","Otro (escribir)"],
      pelucheColor:["Marrón","Morado","Rosado","Plomo","Azul","Amarillo","Celeste","Beige","Otro (escribir)"],
      collar:["Girasol","Tulipán","Mariposa","Otro (escribir)"],
      collarColor:["Rojo","Rosado","Lila","Amarillo","Blanco","Azul","Otro (escribir)"],
      espejo:["Lámpara tulipán","Nube","Tulipanes infinitos","Otro (escribir)"],
      card:["N°1","N°2","N°3","N°4","N°5","N°6"],
      polaroids:["3 fotos (incluidas)","6 fotos (+S/14)","9 fotos (+S/28)"]
    }
  }
};

// Add-ons pricing

const ADDON_PRICES = {
  polaroid6: 14.00,
  polaroid9: 28.00
};


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
        <button class="btn btn--ghost" data-view="${esc(p.id)}">Ver</button>
        ${p.category === "Packs"
          ? `<button class="btn" data-pack="${esc(p.id)}">Personalizar 💝</button>`
          : `<button class="btn" data-add="${esc(p.id)}">Agregar</button>`}
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

  // Badges
  const badges = (p.badges||[]).map(b => `<span class="tag">${esc(b)}</span>`).join("");
  const hot = p.hot ? `<span class="tag">🔥 HOT</span>` : "";
  $("#pmBadges").innerHTML = hot + badges;

  // Specs (tamaño y variantes)
  const size = p.size ? p.size : "—";
  const variants = p.variants ? p.variants : "—";
  const pmSize = $("#pmSize");
  const pmVariants = $("#pmVariants");
  if(pmSize) pmSize.textContent = size;
  if(pmVariants) pmVariants.textContent = variants;

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


function renderSearchResults(){
  const box = $("#searchResults");
  if(!box) return;

  const q = (searchQuery || "").trim().toLowerCase();
  if(!q){
    box.innerHTML = `<div class="sEmpty">Escribe para buscar productos…</div>`;
    return;
  }

  const list = filterSortProducts().slice(0, 12); // top 12
  if(list.length === 0){
    box.innerHTML = `<div class="sEmpty">Sin resultados para “${esc(q)}”.</div>`;
    return;
  }

  box.innerHTML = list.map(p => `
    <div class="sResult" data-sopen="${esc(p.id)}" role="button" tabindex="0" aria-label="Abrir ${esc(p.name)}">
      <div class="sResult__img"><img src="${esc(p.img)}" alt="${esc(p.name)}"></div>
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
    renderSearchResults();
    $("#searchInput").focus();
  });

  renderSearchResults();
  });

  // Search input (modal + grid)
  $("#searchInput").addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderGrid();
    renderSearchResults();
  });

  // Clear button
  $("#clearSearch").addEventListener("click", () => {
    searchQuery = "";
    $("#searchInput").value = "";
    renderGrid();
    renderSearchResults();
    $("#searchInput").focus();
  });

}


function bindCards(){
  document.addEventListener("click", (e) => {
    // Add to cart button
    const packBtn = e.target.closest("[data-pack]");
    if(packBtn){
      renderPackCustomizer(packBtn.getAttribute("data-pack"));
      return;
    }

    const add = e.target.closest("[data-add]");
    if(add){
      addToCart(add.getAttribute("data-add"), 1);
      return;
    }

    // Explicit view target
    const view = e.target.closest("[data-view]");
    if(view){
      openProductModal(view.getAttribute("data-view"));
      return;
    }

    // Click on card (anywhere) opens modal
    const cardEl = e.target.closest(".card");
    if(cardEl && cardEl.getAttribute("data-id")){
      openProductModal(cardEl.getAttribute("data-id"));
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


function bindSearchResults(){
  const box = $("#searchResults");
  if(!box) return;

  box.addEventListener("click", (e) => {
    const row = e.target.closest("[data-sopen]");
    if(!row) return;
    const id = row.getAttribute("data-sopen");
    closeModal("searchModal");
    openProductModal(id);
  });

  // Enter key support
  box.addEventListener("keydown", (e) => {
    if(e.key !== "Enter") return;
    const row = e.target.closest("[data-sopen]");
    if(!row) return;
    const id = row.getAttribute("data-sopen");
    closeModal("searchModal");
    openProductModal(id);
  });
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

// ===== Pack customizer (B: editable total) =====
let currentPackId = null;
let currentPackState = {};

function isOtherChoice(v){ return (v || "").toLowerCase().includes("otro"); }

function renderPackCustomizer(packId){
  const p = products.find(x => x.id === packId);
  const cfg = packConfigs[packId] || { title: p?.name || "Pack", fields:["note","card"], options:{ card:["N°1","N°2","N°3","N°4","N°5","N°6"] } };

  currentPackId = packId;
  currentPackState = { note:"", card:"N°1", collar:"Tulipán", collar_other:"", collarColor:"Rojo", collarColor_other:"", peluche:"Nutria que respira", peluche_other:"", pelucheColor:"Rosado", pelucheColor_other:"", espejo:"Nube", espejo_other:"", llavero:"", polaroids:"3 fotos (incluidas)" };

  const form = $("#packForm");
  if(!form) return;

  $("#packTitle").textContent = "Personalizar " + (cfg.title || p.name);

  const rows = [];

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
    const opts = (cfg.options?.card || ["N°1","N°2","N°3","N°4","N°5","N°6"]).map(o => `<option>${esc(o)}</option>`).join("");
    rows.push(`
      <div class="pfRow">
        <label>Tarjetita 🎴</label>
        <select id="pf_card">${opts}</select>
        <div class="pfSmall">Elige el modelo (N°1–N°6)</div>
      </div>
    `);
  }

  if(cfg.fields.includes("collar")){
    const opts = (cfg.options?.collar || ["Tulipán","Mariposa","Girasol","Otro (escribir)"]).map(o => `<option>${esc(o)}</option>`).join("");
    rows.push(`
      <div class="pfRow">
        <label>Collar 💐</label>
        <select id="pf_collar">${opts}</select>
        <input type="text" id="pf_collar_other" placeholder="Si elegiste 'Otro', escribe aquí" style="display:none">
      </div>
    `);
  }

  if(cfg.fields.includes("collarColor")){
    const opts = (cfg.options?.collarColor || ["Rojo","Rosado","Lila","Amarillo","Blanco","Azul","Otro (escribir)"]).map(o => `<option>${esc(o)}</option>`).join("");
    rows.push(`
      <div class="pfRow">
        <label>Color del collar 🎨</label>
        <select id="pf_collarColor">${opts}</select>
        <input type="text" id="pf_collarColor_other" placeholder="Si elegiste \'Otro\', escribe aquí" style="display:none">
      </div>
    `);
  }

  if(cfg.fields.includes("peluche")){
    const opts = (cfg.options?.peluche || ["Peluche que respira — Nutria","Peluche que respira — Hello Kitty","Peluche que respira — Conejo","Peluche que respira — Elefante","Nutria (normal)","Hello Kitty (normal)","Conejo","Oso","Snoopy","Pingüino","Otro (escribir)"]).map(o => `<option>${esc(o)}</option>`).join("");
    rows.push(`
      <div class="pfRow">
        <label>Peluche 🧸 (incluye opción “que respira”)</label>
        <select id="pf_peluche">${opts}</select>
        <input type="text" id="pf_peluche_other" placeholder="Si elegiste 'Otro', escribe aquí" style="display:none">
      </div>
    `);
  }

  if(cfg.fields.includes("pelucheColor")){
    const opts = (cfg.options?.pelucheColor || ["Marrón","Morado","Rosado","Plomo","Azul","Amarillo","Celeste","Beige","Otro (escribir)"]).map(o => `<option>${esc(o)}</option>`).join("");
    rows.push(`
      <div class="pfRow">
        <label>Color del peluche 🎨</label>
        <select id="pf_pelucheColor">${opts}</select>
        <input type="text" id="pf_pelucheColor_other" placeholder="Si elegiste \'Otro\', escribe aquí" style="display:none">
      </div>
    `);
  }

  if(cfg.fields.includes("espejo")){
    const opts = (cfg.options?.espejo || ["Nube","Tulipanes infinitos","Lámpara tulipán","Otro (escribir)"]).map(o => `<option>${esc(o)}</option>`).join("");
    rows.push(`
      <div class="pfRow">
        <label>Lámpara / Espejo 💡</label>
        <select id="pf_espejo">${opts}</select>
        <input type="text" id="pf_espejo_other" placeholder="Si elegiste 'Otro', escribe aquí" style="display:none">
      </div>
    `);
  }

  if(cfg.fields.includes("llavero")){
    rows.push(`
      <div class="pfRow">
        <label>Llavero personalizado 🔑</label>
        <input type="text" id="pf_llavero" placeholder="Nombre, iniciales o frase corta...">
        <div class="pfSmall">Ej: “A+M” o “Mi reina”</div>
      </div>
    `);
  }

  if(cfg.fields.includes("polaroids")){
    const opts = (cfg.options?.polaroids || ["3 fotos (incluidas)","6 fotos (+S/14)","9 fotos (+S/28)"]).map(o => `<option>${esc(o)}</option>`).join("");
    rows.push(`
      <div class="pfRow">
        <label>Fotos polaroid 🖼️</label>
        <select id="pf_polaroids">${opts}</select>
        <div class="pfSmall">Puedes agregar más fotos si deseas ✨</div>
      </div>
    `);
  }

  if(cfg.fields.includes("extras14")){
    rows.push(`
      <label class="pfCheck">
        <input type="checkbox" id="pf_extras14">
        <div>
          <div><b>+3 fotos polaroid + llavero personalizado</b> (S/ ${fmt(ADDON_PRICES.extras14)})</div>
          <div class="pfSmall">Ideal para completar el detalle ✨</div>
        </div>
      </label>
    `);
  }

  if(cfg.fields.includes("")){
    rows.push(`
      <label class="pfCheck">
        <input type="checkbox" id="pf_">
        <div>
          <div><b>Agregar extra (3 fotos + llavero)</b> (S/ 14.00)</div>
          <div class="pfSmall">Si quieres duplicar o sumar más fotos 🖼️</div>
        </div>
      </label>
    `);
  }

  // total line
  rows.push(`
    <div class="pfTotal">
      <div><b>Total estimado</b><div class="pfSmall">Pack + extras</div></div>
      <div><b id="pf_total">${fmt(p.price)}</b></div>
    </div>
  `);

  form.innerHTML = rows.join("");

  // bindings
  const noteEl = $("#pf_note");
  if(noteEl) noteEl.addEventListener("input", () => { currentPackState.note = noteEl.value; });

  const cardEl = $("#pf_card");
  if(cardEl) cardEl.addEventListener("change", () => { currentPackState.card = cardEl.value; });

  const collarEl = $("#pf_collar");
  const collarOther = $("#pf_collar_other");
  if(collarEl){
    collarEl.addEventListener("change", () => {
      currentPackState.collar = collarEl.value;
      if(collarOther){
        collarOther.style.display = isOtherChoice(collarEl.value) ? "block" : "none";
      }
    });
  }
  if(collarOther){
    collarOther.addEventListener("input", () => { currentPackState.collar_other = collarOther.value; });
  }

  const pelEl = $("#pf_peluche");
  const pelOther = $("#pf_peluche_other");
  if(pelEl){
    pelEl.addEventListener("change", () => {
      currentPackState.peluche = pelEl.value;
      if(pelOther){
        pelOther.style.display = isOtherChoice(pelEl.value) ? "block" : "none";
      }
    });
  }
  if(pelOther){
    pelOther.addEventListener("input", () => { currentPackState.peluche_other = pelOther.value; });
  }

  const espEl = $("#pf_espejo");
  const espOther = $("#pf_espejo_other");
  if(espEl){
    espEl.addEventListener("change", () => {
      currentPackState.espejo = espEl.value;
      if(espOther){
        espOther.style.display = isOtherChoice(espEl.value) ? "block" : "none";
      }
    });
  }
  if(espOther){
    espOther.addEventListener("input", () => { currentPackState.espejo_other = espOther.value; });
  }

  const ll = $("#pf_llavero");
  if(ll){ ll.addEventListener("input", () => { currentPackState.llavero = ll.value; }); }

  const pol = $("#pf_polaroids");
  if(pol){ pol.addEventListener("change", () => { currentPackState.polaroids = pol.value; updatePackTotal(); }); }

  const ex14 = $("#pf_extras14");
  if(ex14) ex14.addEventListener("change", () => { currentPackState.extras14 = ex14.checked; updatePackTotal(); });

  const exPol = $("#pf_");
  if(exPol) exPol.addEventListener("change", () => { currentPackState. = exPol.checked; updatePackTotal(); });

  updatePackTotal();
  openModal("packModal");
}

function getChosen(value, other){
  return isOtherChoice(value) ? (other || "Otro") : value;
}

function polaroidExtraPrice(sel){
  const v = (sel || "").toLowerCase();
  if(v.includes("+s/14") || v.includes("s/14") || v.includes("6 fotos")) return ADDON_PRICES.polaroid6;
  if(v.includes("+s/28") || v.includes("s/28") || v.includes("9 fotos")) return ADDON_PRICES.polaroid9;
  return 0;
}

function packTotal(){
  const p = products.find(x => x.id === currentPackId);
  let total = p ? p.price : 0;
  total += polaroidExtraPrice(currentPackState.polaroids);
  return total;
}

function updatePackTotal(){
  const t = $("#pf_total");
  if(t) t.textContent = fmt(packTotal());
}

$("#pkBuy")?.addEventListener("click", () => {
  if(!currentPackId) return;
  const p = products.find(x => x.id === currentPackId);
  const cfg = packConfigs[currentPackId] || { fields:[] };

  const parts = [];
  parts.push("💝 *PEDIDO PALTISHOP — PACK PERSONALIZADO* 💝");
  parts.push("");
  parts.push(`🎁 *Pack:* ${p.name}`);
  parts.push(`💰 *Precio pack:* ${fmt(p.price)}`);

  if(cfg.fields.includes("card")) parts.push(`🎴 *Tarjetita:* ${currentPackState.card}`);
  if(cfg.fields.includes("peluche")) parts.push(`🧸 *Peluche:* ${getChosen(currentPackState.peluche, currentPackState.peluche_other)}`);
  if(cfg.fields.includes("pelucheColor")) parts.push(`🎨 *Color peluche:* ${getChosen(currentPackState.pelucheColor, currentPackState.pelucheColor_other)}`);
  if(cfg.fields.includes("collar")) parts.push(`💐 *Collar:* ${getChosen(currentPackState.collar, currentPackState.collar_other)}`);
  if(cfg.fields.includes("collarColor")) parts.push(`🎨 *Color collar:* ${getChosen(currentPackState.collarColor, currentPackState.collarColor_other)}`);
  if(cfg.fields.includes("espejo")) parts.push(`💡 *Lámpara/Espejo:* ${getChosen(currentPackState.espejo, currentPackState.espejo_other)}`);
  if(cfg.fields.includes("llavero")) parts.push(`🔑 *Llavero:* ${currentPackState.llavero ? currentPackState.llavero : "Sin texto"}`);
  if(cfg.fields.includes("polaroids")) parts.push(`🖼️ *Polaroids:* ${currentPackState.polaroids}`);

  if(cfg.fields.includes("note")){
    const note = (currentPackState.note || "").trim();
    parts.push(`📝 *Dedicatoria:* ${note ? note : "Sin dedicatoria"}`);
  }

  parts.push(`🧾 *Total estimado:* ${fmt(packTotal())}`);
  parts.push("");
  parts.push("📍 *Distrito / ciudad:* ________");
  parts.push("🚚 *Envío:* Lima/Provincia");
  parts.push("");
  parts.push("¿Está disponible? 🌸✨");

  const text = parts.join("
");
  const url = "https://wa.me/" + WHATSAPP_PHONE + "?text=" + encodeURIComponent(text);
  window.open(url, "_blank");
});

function init(){
  renderChips();
  renderDeals();
  renderGrid();
  renderPacks();
  renderTestimonials();
  renderFAQ();

  renderSearchResults();

  updateCartUI();
  bindCloseButtons();
  bindHeader();
  bindShopbar();
  bindSearchResults();
  bindCards();
  bindCart();
  bindProductModal();
  bindCatalog();
  bindFAQ();
  bindMisc();
  bindReveal();
}
init();


