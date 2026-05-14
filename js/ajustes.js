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


//////////////////////// filtros
document.addEventListener("DOMContentLoaded", function () {

    // Contenedor lateral
    const filterContainer = document.querySelector(".products-feed__filter");

    if (!filterContainer) return;

    // Crear div de filtros
    const fandomDiv = document.createElement("div");
    fandomDiv.classList.add("fandom-filters");

    fandomDiv.innerHTML = `
        <button data-filter="all">Todos</button>
        <button data-filter="dragon ball">Dragon Ball</button>
        <button data-filter="naruto">Naruto</button>
        <button data-filter="pokemon">Pokémon</button>
        <button data-filter="sonic">Sonic</button>
    `;

    // Insertar debajo del título
    const title = filterContainer.querySelector(".products-feed__filter-title");

    title.insertAdjacentElement("afterend", fandomDiv);

    // Productos
    const products = document.querySelectorAll(".products-feed__product");

    // Eventos de filtros
    const buttons = fandomDiv.querySelectorAll("button");

    buttons.forEach(button => {

        button.addEventListener("click", function () {

            const filter = this.dataset.filter.toLowerCase();

            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            products.forEach(product => {

                const title = product
                    .querySelector(".products-feed__product-name")
                    .innerText
                    .toLowerCase();

                if (filter === "all") {

                    product.style.display = "block";

                } else if (title.includes(filter)) {

                    product.style.display = "block";

                } else {

                    product.style.display = "none";

                }

            });

        });

    });

});

