//import { getFilms, getPeople } from "./data.js";
import { dataFilmsSort } from "./data.js";
import data from "./data/ghibli/ghibli.js";

const dataFilms = data.films;
createCards(dataFilms);

// Obtener la opcion del select

const filters = document.querySelector("#f-movies");
filters.addEventListener("change", () => {
  const indexSelect = filters.selectedIndex;
  if (indexSelect === 0) {
    const dataOrdenada = dataFilmsSort(dataFilms);
// remover nodo 
    createCards(dataOrdenada)
  }
});

// hacer funcion para crear tarjetas -> recibe data ordenada

function createCards(dataSort) {
  const containerCards = document.getElementById("cont-movies");
  dataSort.forEach((element) => {
    //console.log(element);
    const divCard = document.createElement("div");
    const imgCard = document.createElement("img");
    const spanCard = document.createElement("span");
    divCard.classList = "card";
    imgCard.src = `${element.poster}`;
    spanCard.innerHTML = `${element.title}`;
    divCard.appendChild(imgCard);
    divCard.appendChild(spanCard);
    containerCards.appendChild(divCard);
  });
}

/*const search = document.querySelectorAll("#search");
search.addEventListener("keyup",)*/
