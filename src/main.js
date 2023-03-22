//import { getFilms, getPeople } from "./data.js";
import {
  dataFilmsFilter,
  dataFilmsReverse,
  dataFilmsSort,
  dataScoreAsc,
  dataScoreDesc,
} from "./data.js";
import data from "./data/ghibli/ghibli.js";

const mainMenu = document.querySelector(".menu"),
  films = document.querySelector("#movies"),
  containerFilms = document.querySelector(".container-films");

films.addEventListener("click", () => {
  mainMenu.style.display = "none";
  containerFilms.style.display = "block";
});

const dataFilms = data.films;
createCards(dataFilms);

// Ordenar
const order = document.querySelector(".orderMovies");
order.addEventListener("change", () => {
  const indexSelect = order.selectedIndex;
  if (indexSelect === 1) {
    const dataOrdenada = dataFilmsSort(dataFilms);
    createCards(dataOrdenada);
  } else if (indexSelect === 2) {
    const dataReverse = dataFilmsReverse(dataFilms);
    createCards(dataReverse);
  } else if (indexSelect === 3) {
    const dataScore = dataScoreDesc(dataFilms);
    createCards(dataScore);
  } else if (indexSelect === 4) {
    const dataScoreReverse = dataScoreAsc(dataFilms);
    createCards(dataScoreReverse);
  }
});

// Filtrar
const arrDirectors = [];
dataFilms.forEach((element) => {
  arrDirectors.push(element.director);
});
const directors = [...new Set(arrDirectors)];

//agregar opctions al select
const filter = document.querySelector(".filterDirectors");
directors.forEach((element) => {
  const optionDirector = document.createElement("option");
  optionDirector.value = element;
  optionDirector.innerHTML = element;
  filter.appendChild(optionDirector);
});

filter.addEventListener("change", () => {
  const indexSelect = filter.selectedIndex;
  const director = filter.value;
  if (indexSelect === 1) {
    const dataFilter = dataFilmsFilter(dataFilms, director);
    createCards(dataFilter);
  } else if (indexSelect === 2) {
    const dataFilter = dataFilmsFilter(dataFilms, director);
    createCards(dataFilter);
  } else if (indexSelect === 3) {
    const dataFilter = dataFilmsFilter(dataFilms, director);
    createCards(dataFilter);
  } else if (indexSelect === 4) {
    const dataFilter = dataFilmsFilter(dataFilms, director);
    createCards(dataFilter);
  } else if (indexSelect === 5) {
    const dataFilter = dataFilmsFilter(dataFilms, director);
    createCards(dataFilter);
  } else if (indexSelect === 6) {
    const dataFilter = dataFilmsFilter(dataFilms, director);
    createCards(dataFilter);
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
    <p>${element.release_date}</p>
    `;
    containerCards.appendChild(divCard);
  });
}

/*const search = document.querySelectorAll("#search");
search.addEventListener("keyup",)*/

// mostrar menu mobile

const btnMenu = document.querySelector(".logo-hamburger"),
  menu = document.querySelector(".menu-mobile-items");

btnMenu.addEventListener("click", (e) => {
  btnMenu.classList.toggle("is-active");
  menu.classList.toggle("is-active");
});





// //Modal con info
// const movieInfo = document.querySelectorAll(".card");
// const containerModal = document.querySelector(".container-modal");
// movieInfo.forEach(element => {
//   //se da click a la tarjeta
//   element.addEventListener("click", () => {
//   console.log("hola");
//   containerModal.style.display = "block";
//   const posterImg = document.querySelector(".poster");
//   posterImg.src = `${element.poster}`;
//   });
// });


// const contModal = document.getElementById("modal-movies");
// contModal.innerHTML = "";
// dataFilms.forEach((element) => {
//   const divModal = document.createElement("div");
//   const imgModal = document.createElement("img");
//   imgModal.src = `${element.poster}`;
//   divModal.appendChild(imgModal);
//   const textModal = document.createElement("div");
//   textModal.innerHTML = `
//   <h1>"${element.title}"</h1>
//   <span>"${element.release_date}</span>
//   <p>"${element.description}"</p>
//   `;
//   contModal.appendChild(textModal);
//   contModal.appendChild(divModal);








