// 30 descuento
document.addEventListener("DOMContentLoaded", function(event) {
  
////
function getRandomImage(arr) {
  const length = arr.length;
  const randomIndex = Math.floor(length * Math.random())
  return arr[randomIndex]
}
let img=[    {src:'https://d22fxaf9t8d39k.cloudfront.net/ac434dae6d18533b754811ffed245ff8e63bb4cf1c8a1c3961081aea4f53c68031350.jpg',},{src:'https://i.imgur.com/r6GlbT9.jpg',},{src:'https://i.imgur.com/pV3Rct8.jpg',},{src:'https://i.imgur.com/oRutIOk.png',},{src:'https://i.imgur.com/bf1KAWz.jpeg',},{src:'https://i.imgur.com/22wjQDw.jpg',},{src:'https://i.imgur.com/QftH2KH.jpeg',},];
let lis = document.querySelector('.block-grill-images__grid-item--full').getElementsByTagName('img');
[].forEach.call(lis, (element, index) => {
  if (element.className == 'block-grill-images__image') {  
      //ramdom      
      document.querySelector('.block-grill-images__image').src = 
      getRandomImage(img)['src'];}});

});

// destaca personalizados y papeleria
window.addEventListener("load", (event) => {
  // PC
  let lis = document.querySelector('.header-menu__desktop-list').getElementsByTagName('a');
  [].forEach.call(lis, (element, index) => {
    //console.log(element.innerText.trim());
    if (element.innerText.trim() == 'PERSONALIZADOS') {
       document.getElementsByClassName("desktop-list__link")[index].target = "_self";
       //element.style.color = '#ffffff';
           element.style.backgroundColor = '#5FA6CF'; 
    } 
    if (element.innerText.trim() == 'PAPELERÍA') {
       document.getElementsByClassName("desktop-list__link")[index].target = "_self";
       //element.style.color = '#ffffff';
           element.style.backgroundColor = '#BBE06D';  
    } 
  });
});

///////////////////////
// ocultar-sin-stock.js
(() => {

  const PRODUCT_SELECTOR = '.products-feed__product';
  const OUT_STOCK_SELECTOR = '.products-feed__product-out-stock';

  function hideOutOfStockProducts() {

    const products = document.querySelectorAll(PRODUCT_SELECTOR);

    products.forEach(product => {

      const outOfStock = product.querySelector(OUT_STOCK_SELECTOR);

      if (outOfStock) {
        product.style.display = 'none';
      }

    });

  }

  function init() {

    hideOutOfStockProducts();

    // Detecta productos cargados dinámicamente
    const observer = new MutationObserver(() => {
      hideOutOfStockProducts();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

// filtros
document.addEventListener("DOMContentLoaded", function () {

    const textoURL = window.location.pathname.substring(1);

    const contenedor = document.querySelector(".category-feed_content");

    if (!contenedor) return;

    if (textoURL === "coleccionables/anime") {

    contenedor.insertAdjacentHTML(
        "afterbegin",
        `
        <div class="filtro-anime">
        <span>Filtrar por: </span>
        <select id="select-anime" class="field__select border-radius">
            <option value="">Seleccionar Anime</option>
            <option value="dragonball">Dragon Ball</option>
            <option value="onepiece">One Piece</option>
            <option value="bleach">Bleach</option>
        </select>
        </div>
        `);
    }
});

// boton <volver
document.addEventListener("DOMContentLoaded", function () {   

// parseo url
const resultado = window.location.pathname.split("/")[1];

    if (resultado === "filtro-anime") {

    // Buscar el UL
    const breadcrumb = document.querySelector(".category-feed__breadcrumb");

    if (!breadcrumb) return;

    // Eliminar todos los LI viejos
    breadcrumb.querySelectorAll(".breadcrumb__item").forEach(item => {
        item.remove();
    });

    // Agregar nuevo LI con enlace
    breadcrumb.insertAdjacentHTML(
        "beforeend",
        `
        <li class="breadcrumb__item">
            <a href="https://www.purcua.com.ar/coleccionables/anime">
                < VOLVER
            </a>
        </li>
        `
    );
   } 
});


// Redirección al cambiar
document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("select-anime").addEventListener("change", function () {
  
  
      const valor = this.value;
  
      if (valor === "dragonball") {
  
          window.location.href = "https://www.purcua.com.ar/filtro-anime/dragon-ball";
  
      } else if (valor === "onepiece") {
  
          window.location.href = "https://www.purcua.com.ar/filtro-anime/onepiece";
  
      } else if (valor === "bleach") {
  
          window.location.href = "https://www.purcua.com.ar/filtro-anime/bleach";
  
      }
  
  });

});


// ELIMINAR FILTROS DESKTOP
document.addEventListener("DOMContentLoaded", function () {

    const enlaces = document.querySelectorAll(".desktop-list__link");

    enlaces.forEach(enlace => {

        // Limpiar espacios/saltos de línea
        const texto = enlace.textContent.trim();

        // Buscar SOLO el enlace FILTRO ANIME
        if (texto === "FILTRO ANIME") {

            // Eliminar el <li> padre completo
            enlace.closest("li").remove();

        }

    });

});

// ELIMINAR FILTROS MOBILE
document.addEventListener("DOMContentLoaded", function () {

    const enlaces = document.querySelectorAll(".mobile-menu-sidenav__item-link");

    enlaces.forEach(enlace => {

        const texto = enlace.textContent.trim();

        // Buscar exactamente "FILTRO ANIME"
        if (texto === "FILTRO ANIME") {

            // Eliminar el <li> contenedor completo
            const item = enlace.closest("li");

            if (item) {
                item.remove();
            }

        }

    });

});

// menu por tematica
document.addEventListener("DOMContentLoaded", function () {

    // Buscar el item PRODUCTOS
    const productosItem = document.querySelector(".header-menu__desktop-list");

    if (!productosItem) return;

    // Crear nuevo menú
    const nuevoMenu = `
        <li class="desktop-list__item text--primary">
            
            <a href="#" class="desktop-list__link">
                POR TEMATICA
                <i class="desktop-list__down-icon text--primary fas fa-chevron-down"></i>
            </a>

            <ul class="nav first">

                <li class="desktop-list__subitem text--primary">
                    <a href="https://www.purcua.com.ar/por-tematica/anime/dragon-ball" class="desktop-list__link">
                        Dragon Ball
                    </a>
                </li>

                <li class="desktop-list__subitem text--primary">
                    <a href="https://www.purcua.com.ar/harry-potter" class="desktop-list__link">
                        Harry Potter
                    </a>
                </li>

            </ul>

        </li>
    `;

    // Insertar después del menú PRODUCTOS
    const menuProductos = productosItem.querySelector(".desktop-list__item:nth-child(2)");

    if (menuProductos) {

        menuProductos.insertAdjacentHTML("afterend", nuevoMenu);

    }

});
