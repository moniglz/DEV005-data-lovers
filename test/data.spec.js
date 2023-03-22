import { example, anotherExample, dataFilmsSort } from '../src/data.js';

const sampleData = [
  {
    "title": "Castle in the Sky",
    "director": "Hayao Miyazaki",
    "release_date": "1986",
    "rt_score": "95",
  },
  {
    "title": "My Neighbor Totoro",
    "director": "Hayao Miyazaki",
    "release_date": "1988",
    "rt_score": "93",
  },
  {
    "title": "The Secret World of Arrietty",
    "director": "Hiromasa Yonebayashi",
    "release_date": "2010",
    "rt_score": "95",
  },
]

describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});

describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});


describe('dataFilmsSort', () => {
  it('is a function', () => {
    expect(typeof dataFilmsSort).toBe('function');
  });

  it('returns films from A to Z', () => {
    const AtoZOrder = [
      {
        "title": "Castle in the Sky",
        "director": "Hayao Miyazaki",
        "release_date": "1986",
        "rt_score": "95",
      },
      {
        "title": "My Neighbor Totoro",
        "director": "Hayao Miyazaki",
        "release_date": "1988",
        "rt_score": "93",
      },
      {
        "title": "The Secret World of Arrietty",
        "director": "Hiromasa Yonebayashi",
        "release_date": "2010",
        "rt_score": "95",
      },   
    ]
    expect(dataFilmsSort(sampleData, 'title')).toEqual(AtoZOrder);
  });
});