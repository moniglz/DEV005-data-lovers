//import { getFilms, getPeople } from "./data.js";
import { dataFilmsSort } from "./data.js";
import data from "./data/ghibli/ghibli.js";

const dataFilms = data.films;
dataFilmsSort(dataFilms);
console.log(dataFilms);

const containerCards = document.getElementById("cont-movies");
dataFilms.forEach(element => {
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



/*const search = document.querySelectorAll("#search");
search.addEventListener("keyup",)*/