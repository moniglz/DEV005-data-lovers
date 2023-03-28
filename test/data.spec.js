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

describe("function that sorts films from A to Z", () => {
  it("should be a function", () => {
    expect(typeof dataFilmsSort).toBe("function");
  });
  it("should return an array ordered A to Z", () => {
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
describe("function that sorts films from Z to A", () => {
  it("should be a function", () => {
    expect(typeof dataFilmsReverse).toBe("function");
  });
  it("should return an array ordered Z to A", () => {
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
describe("function that sorts films by score from highest to lowest", () => {
  it("should be a function", () => {
    expect(typeof dataScoreDesc).toBe("function");
  });
  it("should return an array ordered 95-91", () => {
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
describe("function that sorts films by score from lowest to highest", () => {
  it("should be a function", () => {
    expect(typeof dataScoreAsc).toBe("function");
  });
  it("should return an array ordered 91-95", () => {
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
describe("function that sorts films by year in ascending order", () => {
  it("should be a function", () => {
    expect(typeof dataYearAsc).toBe("function");
  });
  it("should return an array ordered 1986-1997", () => {
    const resultGhibliYearAsc = [
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
    expect(dataYearAsc(dataSampleGhibli)).toEqual(resultGhibliYearAsc);
  });
});
describe("function that sorts films by year in descending order", () => {
  it("should be a function", () => {
    expect(typeof dataYearDesc).toBe("function");
  });
  it("should return an array ordered 1997-1986", () => {
    const resultGhibliYearDesc = [
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
    expect(dataYearDesc(dataSampleGhibli)).toEqual(resultGhibliYearDesc);
  });
});
describe("function that filters films by director", () => {
  it("should be a function", () => {
    expect(typeof dataFilmsFilter).toBe("function");
  });
  it("should return an array with films filtered by director", () => {
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

describe("function that filters each film by id", () => {
  it("should be a function", () => {
    expect(typeof dataMovie).toBe("function");
  });
  it("should return an array with just one film", () => {
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

describe("function that calculates the % by gender", () => {
  it("should be a function", () => {
    expect(typeof dataStats).toBe("function");
  });
  it("should return an object with percentages by gender", () => {
    const resultGhibliPercentage = {
      percentageFemale: "60%",
      percentageMale: "40%",
      percentageOther: "0%",
    };
    expect(dataStats(dataSamplePeople)).toEqual(resultGhibliPercentage);
  });
});