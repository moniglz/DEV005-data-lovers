import { getFilms, getPeople } from "./data.js";
import data from "./data/ghibli/ghibli.js";

// const dataFilms = getFilms(data);
const dataFilm = getFilms(data);

// console.log(dataPeople)
dataFilm.forEach((element) => {
  // crear tarjeta por cada pelicula
  console.log(element);
});
// getFilms(data);
// getPeople(data);
