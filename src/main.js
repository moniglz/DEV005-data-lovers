//import { getFilms, getPeople } from "./data.js";
import { dataFilmsReverse, dataFilmsSort } from "./data.js";
import data from "./data/ghibli/ghibli.js";

const dataFilms = data.films;
createCards(dataFilms);

// Obtener la opcion del select

const filters = document.querySelector("#f-movies");
filters.addEventListener("change", () => {
  const indexSelect = filters.selectedIndex;
  if (indexSelect === 1) {
    const dataOrdenada = dataFilmsSort(dataFilms);
    createCards(dataOrdenada);
  } else if (indexSelect === 2) {
    const dataReverse = dataFilmsReverse(dataFilms);
    createCards(dataReverse);
  }
});

// hacer funcion para crear tarjetas -> recibe data ordenada

function createCards(dataSort) {
  const containerCards = document.getElementById("cont-movies");
  containerCards.innerHTML = "";
  dataSort.forEach((element) => {
    const divCard = document.createElement("div");
    divCard.classList = "card";
    divCard.innerHTML = `
    <img src="${element.poster}">
    <span>${element.title}</span>
   `;
    containerCards.appendChild(divCard);
  });
}


/*const search = document.querySelectorAll("#search");
search.addEventListener("keyup",)*/
