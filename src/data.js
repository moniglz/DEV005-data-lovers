// estas funciones son de ejemplo

export const getFilms = (dataName) => {
  const arrFilms = dataName.films;
  const arrDataFilms = [];
  arrFilms.forEach((element) => {
    // obtener informacion de las peliculas
    const idFilm = element.id,
      titleFilm = element.id,
      descriptionFilm = element.description,
      directorFilm = element.director,
      posterFilm = element.poster;

    const objFilms = {
      idFilm,
      titleFilm,
      descriptionFilm,
      directorFilm,
      posterFilm,
    };
    arrDataFilms.push(objFilms);
  });
  return arrDataFilms;
};
export const getPeople = (dataName) => {
  const arrFilms = dataName.films;
  const arrDataPeople = [];
  arrFilms.forEach((element) => {
    const dataPeople = element.people;
    dataPeople.forEach((el) => {
      const namePeople = el.name,
        imgPeople = el.img,
        genderPeople = el.gender,
        agePeople = el.age,
        speciePeople = el.specie;
      //   console.log(namePeople);

      const objPeople = {
        namePeople,
        imgPeople,
        genderPeople,
        agePeople,
        speciePeople,
      };
      arrDataPeople.push(objPeople);
    });
  });
  return arrDataPeople;
};
