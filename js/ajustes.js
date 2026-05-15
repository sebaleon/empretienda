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

    if (textoURL === "figuras-y-coleccionables/anime") {



    contenedor.insertAdjacentHTML(
        "afterbegin",
        `
        <div class="filtro-contenedor">
            Filtrar por: 
                   <a href="https://www.purcua.com.ar/filtro-anime/dragon-ball" class="mi-boton">Dragon Ball</a> 
                   <a href="https://www.purcua.com.ar/filtro-anime/onepiece" class="mi-boton">One Piece</a>                     
                   <a href="https://www.purcua.com.ar/filtro-animen/aruto" class="mi-boton">Naruto</a> 
                   <a href="https://www.purcua.com.ar/filtro-anime/jujutsu" class="mi-boton">Jujutsu Kaisen</a>
                   <a href="https://www.purcua.com.ar/filtro-anime/bleach" class="mi-boton">Bleach</a> 
                   <a href="https://www.purcua.com.ar/filtro-anime/sailor" class="mi-boton">Sailor Moon</a>
                   <a href="https://www.purcua.com.ar/filtro-anime/demonslayer" class="mi-boton">Demon Slayer</a>
                   <a href="https://www.purcua.com.ar/filtro-anime/pokemon" class="mi-boton">Pokémon</a>
                   <a href="https://www.purcua.com.ar/filtro-anime/mha" class="mi-boton">My Hero Academia</a>
        </div>
        `);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    
const partes = window.location.pathname.split("/").filter(Boolean);
// Tomar solo las primeras 2 partes
const resultado = partes.slice(0, 2).join("/");

    if (resultado === "filtro-tazas/anime") {

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
            <a href="https://www.purcua.com.ar/figuras-y-coleccionables/anime">
                < VOLVER
            </a>
        </li>
        `
    );
   } 
});

