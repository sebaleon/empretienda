//// INICIO
///////////////////////
// ocultar-sin-stock.js
document.addEventListener('DOMContentLoaded', () => {

  function ocultarSinStock() {
    document.querySelectorAll('.products-feed__product').forEach(producto => {
      const sinStock = producto.querySelector('.products-feed__product-out-stock');

      if (sinStock) {
        producto.remove();
      }
    });
  }

  ocultarSinStock();

  const observer = new MutationObserver(() => {
    ocultarSinStock();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});

// imagen random bolsita golosinera
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

// texto imagenes solo ilustrativas desktop y mobile
document.addEventListener("DOMContentLoaded", function () {

    const descriptions = document.querySelectorAll(
        ".product-vip__description"
    );

    descriptions.forEach(description => {

        // evitar duplicados
        if (description.querySelector(".imagenes-ilustrativas")) return;

        const p = document.createElement("p");

        p.textContent = "-- Las imágenes son solo ilustrativas --";
        p.classList.add("imagenes-ilustrativas");

        // estilos
        p.style.color = "gray";
        p.style.fontStyle = "italic";

        description.appendChild(p);

    });

});

// ELIMINAR DE "MAS PRODUCTOS" FANDOM Y FILTRO FIGURAS ANIME PAGINA INICIAL
document.addEventListener("DOMContentLoaded", function () {

const lista = document.querySelector('.block-categories-carrousel__list');

if (lista) {
  lista.querySelectorAll('a').forEach(link => {
    const texto = link.textContent.trim();

    if (
      texto === 'FANDOM' ||
      texto === 'FILTRO FIGURAS ANIME'
    ) {
      link.closest('li')?.remove();
    }
  });
}

});


// filtros
document.addEventListener("DOMContentLoaded", function () {

    const textoURL = window.location.pathname.substring(1);

    const contenedor = document.querySelector(".category-feed_content");

    if (!contenedor) return;

    if (textoURL === "figuras-y-coleccionables/anime") {

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
            <option value="naruto">Naruto</option>
            <option value="sailormoon">Sailor Moon</option>
            <option value="jujutsukaisen">Jujutsu Kaisen</option>
            <option value="chainsawman">Chainsaw Man</option>
            <option value="demonslayer">Demon Slayer</option>
            <option value="mha">My Hero Academia</option>
            <option value="bluelock">Blue Lock</option>
            <option value="haikyuu">Haikyuu</option>
            <option value="pokemon">Pokémon</option>
            <option value="sxf">Spy x Family</option>
            <option value="saintseiya">Saint Seiya</option>
        </select>
        </div>
        `);
    }
});

// boton <volver
document.addEventListener("DOMContentLoaded", function () {   

// parseo url
const resultado = window.location.pathname.split("/")[1];

    if (resultado === "filtro-figuras-anime") {

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


// Redirección al cambiar
document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("select-anime").addEventListener("change", function () {
  
  
      const valor = this.value;
  
      if (valor === "dragonball") {  
          window.location.href = "https://www.purcua.com.ar/filtro-figuras-anime/dragon-ball";  
      } else if (valor === "onepiece") {  
          window.location.href = "https://www.purcua.com.ar/filtro-figuras-anime/one-piece";  
      } else if (valor === "bleach") {  
          window.location.href = "https://www.purcua.com.ar/filtro-figuras-anime/bleach";  
      } else if (valor === "naruto") {
  		  window.location.href = "https://www.purcua.com.ar/filtro-figuras-anime/naruto";
  	  } else if (valor === "sailormoon") {
  		  window.location.href = "https://www.purcua.com.ar/filtro-figuras-anime/sailor-moon";
  	  } else if (valor === "jujutsukaisen") {
  		  window.location.href = "https://www.purcua.com.ar/filtro-figuras-anime/jujutsu-kaisen";
  	  } else if (valor === "chainsawman") {
  		  window.location.href = "https://www.purcua.com.ar/filtro-figuras-anime/chainsaw-man";
  	  } else if (valor === "demonslayer") {
  		  window.location.href = "https://www.purcua.com.ar/filtro-figuras-anime/demon-slayer";
  	  } else if (valor === "mha") {
  		  window.location.href = "https://www.purcua.com.ar/filtro-figuras-anime/my-hero-academia";
  	  } else if (valor === "bluelock") {
  		  window.location.href = "https://www.purcua.com.ar/filtro-figuras-anime/blue-lock";
  	  } else if (valor === "pokemon") {
  		  window.location.href = "https://www.purcua.com.ar/filtro-figuras-anime/pokemon";
  	  } else if (valor === "sxf") {
  		  window.location.href = "https://www.purcua.com.ar/filtro-figuras-anime/spy-x-family";
  	  } else if (valor === "saintseiya") {
  		  window.location.href = "https://www.purcua.com.ar/filtro-figuras-anime/saint-seiya";
  	  } else if (valor === "haikyuu") {
  		  window.location.href = "https://www.purcua.com.ar/filtro-figuras-anime/haikyuu";
  	  }
  
  });

});


// ELIMINAR FILTROS DESKTOP
document.addEventListener("DOMContentLoaded", function () {

    const urlBase = window.location.origin;  

    const linksToRemove = [
        urlBase + "/fandom",
        urlBase + "/filtro-figuras-anime"
    ];

    linksToRemove.forEach(href => {

        const link = document.querySelector(
            `.desktop-list__menu a[href="${href}"]`
        );

        if (link) {
            link.closest("ul.uk-navbar-dropdown-nav")?.remove();
        }

    });

});

// ELIMINAR FILTROS DE CATEGORIAS TEMA ELARA DESKTOP
document.addEventListener("DOMContentLoaded", function () {

    const categoryList = document.querySelector(
        ".products-feed__categories-list" 
    );

    if (!categoryList) return;

    const textsToRemove = [
        "FANDOM",
        "FILTRO FIGURAS ANIME"
    ];

    categoryList.querySelectorAll("li").forEach(li => {

        const link = li.querySelector("a");

        if (!link) return;

        const text = link.textContent.trim();

        if (textsToRemove.includes(text)) {
            li.remove();
        }

    });

});

// ELIMINAR PERSONALIZADOS DEL MENU PRODUCTOS
document.addEventListener("DOMContentLoaded", function () {

    // seleccionar solo el menú principal donde está PERSONALIZADOS
    const menu = document.querySelector(".desktop-list__menu");

    if (!menu) return;

    // buscar el enlace con el texto PERSONALIZADOS dentro del menú
    const link = [...menu.querySelectorAll("a")].find(a =>
        a.textContent.trim() === "PERSONALIZADOS"
    );

    if (link) {
        // eliminar el <ul> contenedor de ese enlace
        const ul = link.closest("ul.uk-navbar-dropdown-nav");
        if (ul) ul.remove();
    }

});

// AGREGAR PERSONALIZADOS AL LADO DEL BOTON PRODUCTOS
document.addEventListener("DOMContentLoaded", function () {

    const menu = document.querySelector(".header-menu__desktop-list");

    if (!menu) return;

    // buscar el item PRODUCTOS
    const inicioItem = [...menu.querySelectorAll(".desktop-list__item")]
        .find(item => {
            const link = item.querySelector("a");
            return link && link.textContent.trim() === "Productos";
        });

    if (!inicioItem) return;

    // evitar duplicados
    const alreadyExists = [...menu.querySelectorAll("a")]
        .some(a => a.href === "https://www.purcua.com.ar/personalizados");

    if (alreadyExists) return;

    // crear nuevo LI
    const li = document.createElement("li");
    li.className = "desktop-list__item text--primary";

    li.innerHTML = `
        <a href="https://www.purcua.com.ar/personalizados"
           class="desktop-list__link">
            PERSONALIZADOS
        </a>
    `;

    // insertar al lado de INICIO
    inicioItem.insertAdjacentElement("afterend", li);

});

//// personalizados dropdown
document.addEventListener("DOMContentLoaded", function () {

    const itemPersonalizados = [...document.querySelectorAll(".desktop-list__item")]
        .find(item => {
            const link = item.querySelector(".desktop-list__link");
            return link && link.textContent.trim() === "PERSONALIZADOS";
        });

    if (!itemPersonalizados) return;

    itemPersonalizados.innerHTML = `
        <a class="desktop-list__link" href="#" aria-expanded="false">
            PERSONALIZADOS
            <span class="desktop-list__down-icon text--primary uk-icon" uk-icon="icon: chevron-down"></span>
        </a>

        <ul class="uk-nav-sub uk-nav-parent-icon uk-dropdown uk-dropdown-bottom-left" uk-dropdown>
            <li class="desktop-list__subitem nav-overlay text--primary">
                <a href="https://www.purcua.com.ar/personalizados/tazas-y-jarros"
                   class="desktop-list-link__text desktop-list-link__text--bold">
                    TAZAS Y TAZONES
                </a>
            </li>
			
			<li class="desktop-list__subitem nav-overlay text--primary">
                <a href="https://www.purcua.com.ar/personalizados/textil"
                   class="desktop-list-link__text desktop-list-link__text--bold">
                    TEXTIL
                </a>
            </li>

			<li class="desktop-list__subitem nav-overlay text--primary">
                <a href="https://www.purcua.com.ar/personalizados/llaveros"
                   class="desktop-list-link__text desktop-list-link__text--bold">
                    LLAVEROS
                </a>
            </li>			
			
			<li class="desktop-list__subitem nav-overlay text--primary">
                <a href="https://www.purcua.com.ar/personalizados/papeleria-para-cumple"
                   class="desktop-list-link__text desktop-list-link__text--bold">
                    PAPELERÍA PARA CUMPLE
                </a>
            </li>			
			
			<li class="desktop-list__subitem nav-overlay text--primary">
                <a href="https://www.purcua.com.ar/personalizados/papeleria-para-emprendedores"
                   class="desktop-list-link__text desktop-list-link__text--bold">
                    PAPELERÍA PARA EMPRENDEDORES
                </a>
            </li>
        </ul>
    `;
});


/////////////////////////////////////// MOBILE /////////////////////////////////

// ELIMINAR FILTROS MOBILE
document.addEventListener("DOMContentLoaded", function () {

    const enlaces = document.querySelectorAll(".mobile-menu-sidenav__item-link");

    enlaces.forEach(enlace => {

        const texto = enlace.textContent.trim();

        // Buscar exactamente "FILTRO ANIME"
        if (texto === "FILTRO FIGURAS ANIME" || texto === "FANDOM") {

            // Eliminar el <li> contenedor completo
            const item = enlace.closest("li");

            if (item) {
                item.remove();
            }

        }

    });
//  
});


// ELIMINAR CATEGORIAS MOBILE
document.addEventListener("DOMContentLoaded", function () {

    const textsToRemove = [
        "FANDOM",
        "FILTRO FIGURAS ANIME"
    ];

    function removeCategories() {

        const categoryLists = document.querySelectorAll(
            ".products-feed__categories-list"
        );

        categoryLists.forEach(list => {

            list.querySelectorAll("li").forEach(li => {

                const link = li.querySelector("a");

                if (!link) return;

                const text = link.textContent.trim();

                if (textsToRemove.includes(text)) {
                    li.remove();
                }

            });

        });

    }

    // ejecutar inicialmente
    removeCategories();

    // observar cambios dinámicos del DOM
    const observer = new MutationObserver(() => {
        removeCategories();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

});

// ELIMINAR PERSONALIZADOS DE PRODUCTOS MOBILE
document.addEventListener("DOMContentLoaded", function () {

    const enlaces = document.querySelectorAll(".mobile-menu-sidenav__item-link");

    enlaces.forEach(enlace => {

        const texto = enlace.textContent.trim();

        // Opciones a eliminar
        if (
            texto === "PERSONALIZADOS" ||
            texto === "PAPELERÍA PERSONALIZADA"
        ) {

            const item = enlace.closest("li");

            if (item) {
                item.remove();
            }

        }

    });

});

// AGREGAR PERSONALIZADOS EN NAV MOBILE
document.addEventListener("DOMContentLoaded", function () {

    // Buscar menú mobile
    const menuMobile = document.querySelector(".mobile-menu-sidenav__list");

    if (!menuMobile) return;

    // Crear nuevo botón
    const nuevoBoton = `
        <li class="mobile-menu-sidenav__list-item">
            <a href="https://www.purcua.com.ar/personalizados"
               class="mobile-menu-sidenav__item-link">
                Personalizados
            </a>
        </li>
    `;

    // Buscar PRODUCTOS
    const inicio = [...menuMobile.querySelectorAll(".mobile-menu-sidenav__item-link")]
        .find(link => link.textContent.trim() === "Productos");

    if (!inicio) return;

    // Obtener LI padre
    const itemInicio = inicio.closest("li");

    // Insertar debajo de PRODUCTOS
    itemInicio.insertAdjacentHTML("afterend", nuevoBoton);

});

/// personalizados dropdown mobile
document.addEventListener("DOMContentLoaded", function () {

    const item = [...document.querySelectorAll(".mobile-menu-sidenav__list-item")]
        .find(li => {
            const link = li.querySelector(".mobile-menu-sidenav__item-link");
            return link && link.textContent.trim() === "Personalizados";
        });

    if (!item) return;

    item.classList.add("uk-parent");

    item.innerHTML = `
        <a href="#" class="mobile-menu-sidenav__item-link">
            Personalizados
        </a>

        <ul class="uk-nav-sub uk-nav-parent-icon" hidden>
            <li class="mobile-menu-sidenav__list-item">
                <a href="https://www.purcua.com.ar/personalizados/tazas-y-jarros"
                   class="mobile-menu-sidenav__item-link">
                    TAZAS Y TAZONES
                </a>
            </li>

			<li class="mobile-menu-sidenav__list-item">
                <a href="https://www.purcua.com.ar/personalizados/textil"
                   class="mobile-menu-sidenav__item-link">
                    TEXTIL
                </a>
            </li>

			<li class="mobile-menu-sidenav__list-item">
                <a href="https://www.purcua.com.ar/personalizados/llaveros"
                   class="mobile-menu-sidenav__item-link">
                    LLAVEROS
                </a>
            </li>

			<li class="mobile-menu-sidenav__list-item">
                <a href="https://www.purcua.com.ar/personalizados/papeleria-para-cumple"
                   class="mobile-menu-sidenav__item-link">
                    PAPELERÍA PARA CUMPLE
                </a>
            </li>

			<li class="mobile-menu-sidenav__list-item">
                <a href="https://www.purcua.com.ar/personalizados/papeleria-para-emprendedores"
                   class="mobile-menu-sidenav__item-link">
                    PAPELERÍA PARA EMPRENDEDORES
                </a>
            </li>
			
        </ul>
    `;

    if (window.UIkit) {
        UIkit.nav(item.closest("[uk-nav]"));
    }

});

/// ACCESOS DIRECTOS
document.addEventListener("DOMContentLoaded", function () {

    // Evitar duplicados
    if (document.querySelector(".quick-links-container")) return;

    const quickLinksHTML = `
        <div class="quick-links-container">
            <div class="quick-links">

        <a href="https://www.purcua.com.ar/figuras-y-coleccionables/anime" class="quick-link">
            <img src="https://d22fxaf9t8d39k.cloudfront.net/360b1a8d8866a99e189671dfdba7cd3d9c4510485ae8fca047d4bb13e77cc65f31350.jpg" alt="Figuras">
            <span>Figuras</span>
        </a>

		<a href="https://www.purcua.com.ar/mangas-comics-libros" class="quick-link">
            <img src="https://img.rtve.es/imagenes/persona-leyendo-stand-mangas-one-piece-naruto/1635873046169.jpg" alt="Mangas">
            <span>Mangas</span>
        </a>

        <a href="https://www.purcua.com.ar/accesorios" class="quick-link">
            <img src="https://d22fxaf9t8d39k.cloudfront.net/15fdf60fb65fc34c1e6f3819df21e09e4693cec8438864c2b9105768e0edb52e31350.jpg" alt="Accesorios">
            <span>Accesorios</span>
        </a>

        <a href="https://www.purcua.com.ar/personalizados/tazas-y-jarros" class="quick-link">
            <img src="https://d22fxaf9t8d39k.cloudfront.net/24cd8f7043c20dd856747ab3322d484d10e4a7eadd995bcff6776c9057aac3a031350.jpg" alt="Tazas">
            <span>Tu taza <br> personalizada</span>
        </a>

        <a href="https://www.purcua.com.ar/peluches" class="quick-link">
            <img src="https://d22fxaf9t8d39k.cloudfront.net/e9638e97c51130fc596fb077620fedfd9bfe6c7bfdf0e79843431244aec9365031350.jpg" alt="Peluches">
            <span>Peluches</span>
        </a>

            </div>
        </div>
    `;

    // Insertar debajo del menú principal
    const headerMenu = document.querySelector(".header-menu");

    if (headerMenu) {
        headerMenu.insertAdjacentHTML("afterend", quickLinksHTML);
    }

    // CSS
    const style = document.createElement("style");

    style.innerHTML = `

        .quick-links-container{
            width:100%;
            background:#fff;
            padding:15px 0;
            border-bottom:1px solid rgba(0,0,0,.08);
        }

        .quick-links{
            display:flex;
            gap:18px;

            overflow-x:auto;
            overflow-y:hidden;

            scroll-behavior:smooth;
            -webkit-overflow-scrolling:touch;

            padding:0 15px;

            scrollbar-width:none;
            -ms-overflow-style:none;
        }

        .quick-links::-webkit-scrollbar{
            display:none;
        }

        .quick-link{
            flex:0 0 auto;

            display:flex !important;
            flex-direction:column !important;
            align-items:center !important;

            text-decoration:none;
            text-align:center;

            min-width:90px;
        }

        .quick-link img{
            width:70px;
            height:70px;

            border-radius:50%;
            object-fit:cover;

            border:3px solid #ececec;

            transition:transform .3s ease;
            display:block;
        }

        .quick-link:hover img{
            transform:scale(1.06);
        }

        .quick-link span{
            margin-top:8px;

            font-size:13px;
            font-weight:600;
            line-height:1.2;

            color:#333;
        }

        /* Tablet */
        @media (min-width:768px){

            .quick-links{
                gap:25px;
                padding:0 20px;
            }

            .quick-link{
                min-width:110px;
            }

            .quick-link img{
                width:95px;
                height:95px;
            }

            .quick-link span{
                font-size:14px;
            }
        }

        /* Desktop */
        @media (min-width:1024px){

            .quick-links{
                justify-content:center;
                overflow-x:visible;
            }

            .quick-link{
                min-width:140px;
            }

            .quick-link img{
                width:120px;
                height:120px;
            }

            .quick-link span{
                font-size:15px;
                margin-top:12px;
            }
        }

    `;

    document.head.appendChild(style);

});


