import {
  dataFilmsSort,
  dataFilmsReverse,
  dataScoreDesc,
  dataScoreAsc,
  dataFilmsFilter,
  dataYearDesc,
  dataYearAsc,
  dataMovie,
  dataStats,
} from "../src/data.js";

const dataSampleGhibli = [
  {
    id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    title: "Castle in the Sky",
    director: "Hayao Miyazaki",
    release_date: "1986",
    rt_score: "95",
  },
  {
    id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    title: "My Neighbor Totoro",
    director: "Hayao Miyazaki",
    release_date: "1988",
    rt_score: "93",
  },
  {
    id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    title: "My Neighbor Totoro",
    director: "Hayao Miyazaki",
    release_date: "1988",
    rt_score: "93",
  },
  {
    id: "ff24da26-a969-4f0e-ba1e-a122ead6c6e3",
    title: "Whisper of the Heart",
    director: "Yoshifumi Kondō",
    release_date: "1995",
    rt_score: "91",
  },
  {
    id: "0440483e-ca0e-4120-8c50-4c8cd9b965d6",
    title: "Princess Mononoke",
    director: "Hiroyuki Morita",
    release_date: "1997",
    rt_score: "92",
  },
];

const dataSamplePeople = [
  {
    name: "Taeko Okajima",
    gender: "Female",
  },
  {
    name: "Toshio",
    gender: "Male",
  },
  {
    name: "Mr. Okajima",
    gender: "Male",
  },
  {
    name: "Mrs. Okajima",
    gender: "Female",
  },
  {
    name: "Grandmother Okajima",
    gender: "Female",
  },
];

describe("Función que ordena de A-Z", () => {
  it("Debería ser una función", () => {
    expect(typeof dataFilmsSort).toBe("function");
  });
  it("Debería retornar el array ordenado de A-Z", () => {
    const resultGhibliAZ = [
      {
        id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        title: "Castle in the Sky",
        director: "Hayao Miyazaki",
        release_date: "1986",
        rt_score: "95",
      },
      {
        id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        release_date: "1988",
        rt_score: "93",
      },
      {
        id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        release_date: "1988",
        rt_score: "93",
      },
      {
        id: "0440483e-ca0e-4120-8c50-4c8cd9b965d6",
        title: "Princess Mononoke",
        director: "Hiroyuki Morita",
        release_date: "1997",
        rt_score: "92",
      },
      {
        id: "ff24da26-a969-4f0e-ba1e-a122ead6c6e3",
        title: "Whisper of the Heart",
        director: "Yoshifumi Kondō",
        release_date: "1995",
        rt_score: "91",
      },
    ];
    expect(dataFilmsSort(dataSampleGhibli)).toEqual(resultGhibliAZ);
  });
});
describe("Función que ordena de Z-A", () => {
  it("Debería ser una función", () => {
    expect(typeof dataFilmsReverse).toBe("function");
  });
  it("Debería retornar el array ordenado de Z-A", () => {
    const resultGhibliZA = [
      {
        id: "ff24da26-a969-4f0e-ba1e-a122ead6c6e3",
        title: "Whisper of the Heart",
        director: "Yoshifumi Kondō",
        release_date: "1995",
        rt_score: "91",
      },
      {
        id: "0440483e-ca0e-4120-8c50-4c8cd9b965d6",
        title: "Princess Mononoke",
        director: "Hiroyuki Morita",
        release_date: "1997",
        rt_score: "92",
      },
      {
        id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        release_date: "1988",
        rt_score: "93",
      },
      {
        id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        release_date: "1988",
        rt_score: "93",
      },
      {
        id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        title: "Castle in the Sky",
        director: "Hayao Miyazaki",
        release_date: "1986",
        rt_score: "95",
      },
    ];
    expect(dataFilmsReverse(dataSampleGhibli)).toEqual(resultGhibliZA);
  });
});
describe("Función que ordena peliculas de mayor a menor puntuación(rating)", () => {
  it("Debería se una funcion", () => {
    expect(typeof dataScoreDesc).toBe("function");
  });
  it("Debería retornar el array ordenado de 95-91", () => {
    const resultGhibliScore = [
      {
        id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        title: "Castle in the Sky",
        director: "Hayao Miyazaki",
        release_date: "1986",
        rt_score: "95",
      },
      {
        id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        release_date: "1988",
        rt_score: "93",
      },
      {
        id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        release_date: "1988",
        rt_score: "93",
      },
      {
        id: "0440483e-ca0e-4120-8c50-4c8cd9b965d6",
        title: "Princess Mononoke",
        director: "Hiroyuki Morita",
        release_date: "1997",
        rt_score: "92",
      },
      {
        id: "ff24da26-a969-4f0e-ba1e-a122ead6c6e3",
        title: "Whisper of the Heart",
        director: "Yoshifumi Kondō",
        release_date: "1995",
        rt_score: "91",
      },
    ];
    expect(dataScoreDesc(dataSampleGhibli)).toEqual(resultGhibliScore);
  });
});
describe("Función que ordena peliculas de menor a mayor puntuación(rating)", () => {
  it("Debería se una funcion", () => {
    expect(typeof dataScoreAsc).toBe("function");
  });
  it("Debería retornar el array ordenado de 91-95", () => {
    const resultGhibliSCore = [
      {
        id: "ff24da26-a969-4f0e-ba1e-a122ead6c6e3",
        title: "Whisper of the Heart",
        director: "Yoshifumi Kondō",
        release_date: "1995",
        rt_score: "91",
      },
      {
        id: "0440483e-ca0e-4120-8c50-4c8cd9b965d6",
        title: "Princess Mononoke",
        director: "Hiroyuki Morita",
        release_date: "1997",
        rt_score: "92",
      },
      {
        id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        release_date: "1988",
        rt_score: "93",
      },
      {
        id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        release_date: "1988",
        rt_score: "93",
      },
      {
        id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        title: "Castle in the Sky",
        director: "Hayao Miyazaki",
        release_date: "1986",
        rt_score: "95",
      },
    ];
    expect(dataScoreAsc(dataSampleGhibli)).toEqual(resultGhibliSCore);
  });
});
describe("Función que ordena peliculas de menor a mayor año", () => {
  it("Debería se una funcion", () => {
    expect(typeof dataYearDesc).toBe("function");
  });
  it("Debería retornar el array ordenado de 1986-1997", () => {
    const resultGhibliYear = [
      {
        id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        title: "Castle in the Sky",
        director: "Hayao Miyazaki",
        release_date: "1986",
        rt_score: "95",
      },
      {
        id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        release_date: "1988",
        rt_score: "93",
      },
      {
        id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        release_date: "1988",
        rt_score: "93",
      },
      {
        id: "ff24da26-a969-4f0e-ba1e-a122ead6c6e3",
        title: "Whisper of the Heart",
        director: "Yoshifumi Kondō",
        release_date: "1995",
        rt_score: "91",
      },
      {
        id: "0440483e-ca0e-4120-8c50-4c8cd9b965d6",
        title: "Princess Mononoke",
        director: "Hiroyuki Morita",
        release_date: "1997",
        rt_score: "92",
      },
    ];
    expect(dataYearDesc(dataSampleGhibli)).toEqual(resultGhibliYear);
  });
});
describe("Función que ordena peliculas de mayor a menor año", () => {
  it("Debería se una funcion", () => {
    expect(typeof dataYearAsc).toBe("function");
  });
  it("Debería retornar el array ordenado de 1997-1986", () => {
    const resultGhibliYear = [
      {
        id: "0440483e-ca0e-4120-8c50-4c8cd9b965d6",
        title: "Princess Mononoke",
        director: "Hiroyuki Morita",
        release_date: "1997",
        rt_score: "92",
      },
      {
        id: "ff24da26-a969-4f0e-ba1e-a122ead6c6e3",
        title: "Whisper of the Heart",
        director: "Yoshifumi Kondō",
        release_date: "1995",
        rt_score: "91",
      },
      {
        id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        release_date: "1988",
        rt_score: "93",
      },
      {
        id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        release_date: "1988",
        rt_score: "93",
      },
      {
        id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        title: "Castle in the Sky",
        director: "Hayao Miyazaki",
        release_date: "1986",
        rt_score: "95",
      },
    ];
    expect(dataYearAsc(dataSampleGhibli)).toEqual(resultGhibliYear);
  });
});
describe("Función que filtra peliculas por director", () => {
  it("Debería ser una funcion", () => {
    expect(typeof dataFilmsFilter).toBe("function");
  });
  it("Debería retornar el array con las películas filtradas por director", () => {
    const resultGhibliFilter = [
      {
        id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        release_date: "1988",
        rt_score: "93",
      },
      {
        id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        release_date: "1988",
        rt_score: "93",
      },
      {
        id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        title: "Castle in the Sky",
        director: "Hayao Miyazaki",
        release_date: "1986",
        rt_score: "95",
      },
    ];
    expect(dataFilmsFilter(dataSampleGhibli, "Hayao Miyazaki")).toEqual(
      resultGhibliFilter
    );
  });
});

describe("Función que filtra cada película por id", () => {
  it("Debería ser una funcion", () => {
    expect(typeof dataMovie).toBe("function");
  });
  it("Debería retornar un array con una sola película", () => {
    const resultGhibliMovie = [
      {
        id: "ff24da26-a969-4f0e-ba1e-a122ead6c6e3",
        title: "Whisper of the Heart",
        director: "Yoshifumi Kondō",
        release_date: "1995",
        rt_score: "91",
      },
    ];
    expect(
      dataMovie(dataSampleGhibli, "ff24da26-a969-4f0e-ba1e-a122ead6c6e3")
    ).toEqual(resultGhibliMovie);
  });
});

describe("Función que calcula el % de personaje Femeninos, Masculinos y Otros", () => {
  it("Debería ser una funcion", () => {
    expect(typeof dataStats).toBe("function");
  });
  it("Debería retornar un objeto con los porcentajes", () => {
    const resultGhibliPercentage = {
      percentageFemale: "60%",
      percentageMale: "40%",
      percentageOther: "0%",
    };
    expect(dataStats(dataSamplePeople)).toEqual(resultGhibliPercentage);
  });
});
