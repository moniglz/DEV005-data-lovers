//import { getFilms, getPeople } from "./data.js";
import {
  dataFilmsFilter,
  dataFilmsReverse,
  dataFilmsSort,
  dataScoreAsc,
  dataScoreDesc,
  dataYearAsc,
  dataYearDesc,
  dataMovie,
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
  } else if (indexSelect === 5) {
    const dataScoreReverse = dataYearDesc(dataFilms);
    createCards(dataScoreReverse);
  } else if (indexSelect === 6) {
    const dataScoreReverse = dataYearAsc(dataFilms);
    createCards(dataScoreReverse);
  }
});

// Filtrar
const arrDirectors = [];
dataFilms.forEach((element) => {
  arrDirectors.push(element.director);
});

const uniqueDirectors = arrDirectors.filter((value, index) => {
  return arrDirectors.indexOf(value) === index;
});

//agregar opctions al select
const filter = document.querySelector(".filterDirectors");
uniqueDirectors.forEach((element) => {
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
    // aqui agrego el dataset de tipo id
    divCard.dataset.id = `${element.id}`;
    divCard.innerHTML = `
    <img src="${element.poster}">
    <span>${element.title}</span>
    <p>${element.release_date}</p>
    `;
    containerCards.appendChild(divCard);
  });

  //Modal con info
  const movieInfo = document.querySelectorAll(".card");
  const containerModal = document.querySelector(".container-modal");
  containerModal.innerHTML = `
  <div class="cont-button">
    <button class="close-modal">✕</button>
  </div>
  `;
  movieInfo.forEach((element) => {
    //se da click a la tarjeta
    element.addEventListener("click", (e) => {
      if (!e.target.classList.contains("card")) {
        const movie = e.target.parentElement;
        // obtengo el id
        const idMovie = movie.dataset.id;
        //  obtener solo la dataque corresponde al id
        const arrMovie = dataMovie(dataFilms, idMovie);
        // console.log("El array que viene desde la funcion dataMovie", arrMovie);
        // console.log("Ingreso a ese array en su posicion 0 y obtengo la imagen:   ", arrMovie[0].poster);
        // console.log("Ingreso a ese array en su posicion 0 y obtengo titulo:    ", arrMovie[0].title);
        // console.log("Ingreso a ese array en su posicion 0 y obtengo descripcion:    ", arrMovie[0].description);
        // console.log("Ingreso a ese array en su posicion 0 y obtengo el año:    ", arrMovie[0].release_date);
        const modalMovie = document.createElement("section");
        modalMovie.className = "modal";
        modalMovie.setAttribute("id", "modal-movies");
        modalMovie.dataset.id = `${arrMovie[0].id}`;
        modalMovie.innerHTML = `
        <div id="cont-modal-img">
          <img src="${arrMovie[0].poster}" class="poster-img"
          alt="'Poster film ' + '${arrMovie[0].title}'"/>
        </div>
        <div id="cont-modal-txt">
          <h1>${arrMovie[0].title}</h1>
          <h2>${(arrMovie[0].release_date)}</h2>
          <h3>${arrMovie[0].director}</h3>
          <p>${arrMovie[0].description}</p>
          <h4>${arrMovie[0].rt_score}</h4>
        </div>  
        `;
        console.log(modalMovie);
        containerModal.appendChild(modalMovie);
        containerModal.style.display = "block";
      }
    });
    const closeModal = document.querySelector(".close-modal");
    closeModal.addEventListener("click", () => {
      containerModal.style.display = "none";
    });
  });
}

/*const search = document.querySelectorAll("#search");
search.addEventListener("keyup",)*/

// mostrar menu mobile

// const btnMenu = document.querySelector(".logo-hamburger"),
//   menu = document.querySelector(".menu-mobile-items");

// btnMenu.addEventListener("click", () => {
//   btnMenu.classList.toggle("is-active");
//   menu.classList.toggle("is-active");
// });
