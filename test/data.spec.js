import { dataFilmsSort, dataFilmsReverse, dataScoreDesc, dataScoreAsc } from "../src/data.js";

const dataTitles = [
  {
    title: "Castle in the Sky",
  },
  {
    title: "My Neighbor Totoro",
  },
  {
    title: "My Neighbor Totoro",
  },
  {
    title: "Kiki's Delivery Service",
  },
  {
    title: "Princess Mononoke",
  },
];

const dataScore = [
  {
    rt_score: "92",
  },
  {
    rt_score: "95",
  },
  {
    rt_score: "83",
  },
  {
    rt_score: "89",
  },
  {
    rt_score: "100",
  },
  {
    rt_score: "92",
  },
];

describe("Función que ordena de A-Z", () => {
  it("Debería ser una función", () => {
    expect(typeof dataFilmsSort).toBe("function");
  });
  it("Debería retornar el array ordenado de Z-A", () => {
    const resultGhibliAZ = [
      {
        title: "Castle in the Sky",
      },
      {
        title: "Kiki's Delivery Service",
      },
      {
        title: "My Neighbor Totoro",
      },
      {
        title: "My Neighbor Totoro",
      },
      {
        title: "Princess Mononoke",
      },
    ];
    expect(dataFilmsSort(dataTitles)).toEqual(resultGhibliAZ);
  });
});
describe("Función que ordena de Z-A", () => {
  it("Debería ser una función", () => {
    expect(typeof dataFilmsReverse).toBe("function");
  });
  it("Debería retornar el array ordenado de Z-A", () => {
    const resultGhibliZA = [
      {
        title: "Princess Mononoke",
      },
      {
        title: "My Neighbor Totoro",
      },
      {
        title: "My Neighbor Totoro",
      },
      {
        title: "Kiki's Delivery Service",
      },
      {
        title: "Castle in the Sky",
      },
    ];
    expect(dataFilmsReverse(dataTitles)).toEqual(resultGhibliZA);
  });
});

describe("Función que ordena peliculas de mayor a menor puntuación(rating)", () => {
  it("Debería se una funcion", () => {
    expect(typeof dataScoreDesc).toBe("function");
  });
  it("Debería retornar el array ordenado de 100-83", () => {
    const resultGhibliScore = [
      {
        rt_score: "100",
      },
      {
        rt_score: "95",
      },
      {
        rt_score: "92",
      },
      {
        rt_score: "92",
      },
      {
        rt_score: "89",
      },
      {
        rt_score: "83",
      },
    ];
    expect(dataScoreDesc(dataScore)).toEqual(resultGhibliScore);
  });
});
describe("Función que ordena peliculas de menor a mayor puntuación(rating)", () => {
  it("Debería se una funcion", () => {
    expect(typeof dataScoreAsc).toBe("function");
  });
  it("Debería retornar el array ordenado de 83-100", () => {
    const resultGhibliSCore = [
      {
        rt_score: "83",
      },
      {
        rt_score: "89",
      },
      {
        rt_score: "92",
      },
      {
        rt_score: "92",
      },
      {
        rt_score: "95",
      },
      {
        rt_score: "100",
      },
    ];
    expect(dataScoreAsc(dataScore)).toEqual(resultGhibliSCore);
  });
});