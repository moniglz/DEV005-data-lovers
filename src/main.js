//import { getFilms, getPeople } from "./data.js";
import { dataFilmsReverse, dataFilmsSort } from "./data.js";
import data from "./data/ghibli/ghibli.js";

const dataFilms = data.films;
// createCards(dataFilms);


// Obtener la opcion del select

const filters = document.querySelector("#f-movies");
filters.addEventListener("change", () => {
  const indexSelect = filters.selectedIndex;
  if (indexSelect === 1) {
    const dataOrdenada = dataFilmsSort(dataFilms);
    // remover nodo
    // deleteNodo();
    createCards(dataOrdenada);
  } else if (indexSelect === 2) {
    const dataReverse = dataFilmsReverse(dataFilms);
    createCards(dataReverse);
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

// function deleteNodo() {
//   const containerCards = document.getElementById("cont-movies");
//   const cards = document.querySelectorAll(".card");

//   containerCards.removeChild(cards);
// }
/*const search = document.querySelectorAll("#search");
search.addEventListener("keyup",)*/
