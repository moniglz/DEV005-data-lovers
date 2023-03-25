//Ordenar películas A - Z
export function dataFilmsSort(arr) {
  const arrResult = arr.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  return arrResult;
}

//Ordenar películas Z - A
export function dataFilmsReverse(arr) {
  const arrResult = arr.sort((a, b) => {
    // if (a.title < b.title) {
    //   return 1;
    // }
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
  return(arrResult);
}

//Ordenar de menor a mayor puntuación(rating)
export function dataScoreAsc(arr) {
  const arrResult = arr.sort((a, b) => {
    if (parseInt(a.rt_score) < parseInt(b.rt_score)) {
      return -1;
    }
    return 0
  });
  return(arrResult);
}
//Ordenar de menor a mayor año
export function dataYearDesc(arr) {
  const arrResult = arr.sort((a, b) => {
    if (parseInt(a.release_date) < parseInt(b.release_date)) {
      return -1;
    }
    return 0;
  });
  return arrResult;
}
//Ordenar de mayor a menor puntuación(rating)
export function dataYearAsc(arr) {
  const arrResult = arr.sort((a, b) => {
    if (parseInt(a.release_date) > parseInt(b.release_date)) {
      return -1;
    }
    return 0;
  });
  return(arrResult);
}

// Filtrar peliulas por director

export function dataFilmsFilter(films, director) {
  const arrFilter = films.filter((el) => el.director === director);
  return arrFilter;
}