//Ordenar películas A - Z
export function dataFilmsSort(arr) {
  const arrSort = arr.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  return arrSort;
}

//Ordenar películas Z - A
export function dataFilmsReverse(arr) {
  const arrSort = arr.sort((a, b) => {
    // if (a.title < b.title) {
    //   return 1;
    // }
    if (a.title > b.title) {
      return -1;
    }
    return 0;
  });
  return arrSort;
}

//Ordenar de mayor a menor puntuación(rating)
export function dataScoreDesc(arr) {
  const arrSort = arr.sort((a, b) => {
    if (parseInt(a.rt_score) > parseInt(b.rt_score)) {
      return -1;
    }
    if (parseInt(a.rt_score) < parseInt(b.rt_score)) {
      return 1;
    }
    return 0;
  });
  return(arrSort);
}

//Ordenar de menor a mayor puntuación(rating)
export function dataScoreAsc(arr) {
  const arrSort = arr.sort((a, b) => {
    // if (parseInt(a.rt_score) > parseInt(b.rt_score)) {
    //   return 1;
    // }
    if (parseInt(a.rt_score) < parseInt(b.rt_score)) {
      return -1;
    }
    return 0
  });
  return(arrSort);
}

// Filtrar peliulas por director

export function dataFilmsFilter(films, director) {
  const arrFilter = films.filter((el) => el.director === director);
  return arrFilter;
}