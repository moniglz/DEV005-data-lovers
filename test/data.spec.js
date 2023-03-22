import { dataFilmsReverse,  } from "../src/data.js";

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

describe("Función que ordena de Z-A", () => {
  it("Debería se una funcion", () => {
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
