import { dataFilmsSort, dataFilmsReverse, dataScoreDesc, dataScoreAsc, dataFilmsFilter } from "../src/data.js";

const dataSampleGhibli = [
  {
    title: "Castle in the Sky",
    director: "Hayao Miyazaki",
    release_date: "1986",
    rt_score: "95",
  },
  {
    title: "My Neighbor Totoro",
    director: "Hayao Miyazaki",
    release_date: "1988",
    rt_score: "93",
  },
  {
    title: "My Neighbor Totoro",
    director: "Hayao Miyazaki",
    release_date: "1988",
    rt_score: "93",
  },
  {
    title: "Whisper of the Heart",
    director: "Yoshifumi Kondō",
    release_date: "1995",
    rt_score: "91",
  },
  {
    title: "Princess Mononoke",
    director: "Hiroyuki Morita",
    release_date: "1997",
    rt_score: "92",
  },
];

describe("Función que ordena de A-Z", () => {
  it("Debería ser una función", () => {
    expect(typeof dataFilmsSort).toBe("function");
  });
  it("Debería retornar el array ordenado de A-Z", () => {
    const resultGhibliAZ = [
      {
        title: "Castle in the Sky",
        director: "Hayao Miyazaki",
        release_date: "1986",
        rt_score: "95",
      },
      {
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        release_date: "1988",
        rt_score: "93",
      },
      {
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        release_date: "1988",
        rt_score: "93",
      },
      {
        title: "Princess Mononoke",
        director: "Hiroyuki Morita",
        release_date: "1997",
        rt_score: "92",
      },
      {
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
        title: "Whisper of the Heart",
        director: "Yoshifumi Kondō",
        release_date: "1995",
        rt_score: "91",
      },
      {
        title: "Princess Mononoke",
        director: "Hiroyuki Morita",
        release_date: "1997",
        rt_score: "92",
      },
      {
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        release_date: "1988",
        rt_score: "93",
      },
      {
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        release_date: "1988",
        rt_score: "93",
      },
      {
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
        title: "Castle in the Sky",
        director: "Hayao Miyazaki",
        release_date: "1986",
        rt_score: "95",
      },
      {
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        release_date: "1988",
        rt_score: "93",
      },
      {
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        release_date: "1988",
        rt_score: "93",
      },

      {
        title: "Princess Mononoke",
        director: "Hiroyuki Morita",
        release_date: "1997",
        rt_score: "92",
      },
      {
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
        title: "Whisper of the Heart",
        director: "Yoshifumi Kondō",
        release_date: "1995",
        rt_score: "91",
      },
      {
        title: "Princess Mononoke",
        director: "Hiroyuki Morita",
        release_date: "1997",
        rt_score: "92",
      },
      {
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        release_date: "1988",
        rt_score: "93",
      },
      {
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        release_date: "1988",
        rt_score: "93",
      },
      {
        title: "Castle in the Sky",
        director: "Hayao Miyazaki",
        release_date: "1986",
        rt_score: "95",
      },
    ];
    expect(dataScoreAsc(dataSampleGhibli)).toEqual(resultGhibliSCore);
  });
});
describe("Función que filtra peliculas por director", () => {
  it("Debería ser una funcion", () => {
    expect(typeof dataFilmsFilter).toBe("function");
  });
  it("Debería retornar el array con las películas filtradas por director", () => {
    const resultGhibliFilter= [
      {
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        release_date: "1988",
        rt_score: "93",
      },
      {
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        release_date: "1988",
        rt_score: "93",
      },
      {
        title: "Castle in the Sky",
        director: "Hayao Miyazaki",
        release_date: "1986",
        rt_score: "95",
      },
    ];
    expect(dataFilmsFilter(dataSampleGhibli, "Hayao Miyazaki")).toEqual(resultGhibliFilter);
  });
});
