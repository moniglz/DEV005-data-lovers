//Ordenar películas A - Z
export function dataFilmsSort(arr) {
  const arrResult = arr.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  });
  return arrResult;
}

//Ordenar películas Z - A
export function dataFilmsReverse(arr) {
  const arrResult = arr.sort((a, b) => {
    if (a.title > b.title) {
      return -1;
    }
    return 0;
  });
  return arrResult;
}

//Ordenar de mayor a menor puntuación(rating)
export function dataScoreDesc(arr) {
  const arrResult = arr.sort((a, b) => {
    if (parseInt(a.rt_score) > parseInt(b.rt_score)) {
      return -1;
    }
    return 0;
  });
  return arrResult;
}

//Ordenar de menor a mayor puntuación(rating)
export function dataScoreAsc(arr) {
  const arrResult = arr.sort((a, b) => {
    if (parseInt(a.rt_score) < parseInt(b.rt_score)) {
      return -1;
    }
    return 0;
  });
  return arrResult;
}
//Ordenar de menor a mayor año
export function dataYearAsc(arr) {
  const arrResult = arr.sort((a, b) => {
    if (parseInt(a.release_date) < parseInt(b.release_date)) {
      return -1;
    }
    return 0;
  });
  return arrResult;
}
//Ordenar de mayor a menor puntuación(rating)
export function dataYearDesc(arr) {
  const arrResult = arr.sort((a, b) => {
    if (parseInt(a.release_date) > parseInt(b.release_date)) {
      return -1;
    }
    return 0;
  });
  return arrResult;
}

// Filtrar peliulas por director

export function dataFilmsFilter(films, director) {
  const arrFilter = films.filter((el) => el.director === director);
  return arrFilter;
}

// obtener la información de la pelicula dependiendo el id

export function dataMovie(films, id) {
  const arrFilter = films.filter((el) => el.id === id);
  return arrFilter;
}

// stats

export function dataStats(filmPeople) {
  const arrFemale = filmPeople.filter((el) => el.gender === "Female");
  const arrMale = filmPeople.filter((el) => el.gender === "Male");
  const arrOther = filmPeople.filter((el) => el.gender === "NA");
  const countFemale = arrFemale.length;
  const countMale = arrMale.length;
  const countOther = arrOther.length;

  const sumPeople = filmPeople.length;
  const percentageFemale = `${Math.round((countFemale * 100) / sumPeople)}%`;
  const percentageMale = `${Math.round((countMale * 100) / sumPeople)}%`;
  const percentageOther = `${Math.round((countOther * 100) / sumPeople)}%`;
  return {percentageFemale, percentageMale, percentageOther};
}

