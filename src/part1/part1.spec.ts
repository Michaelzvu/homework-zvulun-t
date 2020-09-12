import { data } from '../shared/data';
import { getMostIsolatedCountry } from './part1';

const TEST_DATA_1 = [
  {
    agent: '007',
    country: 'Brazil',
    address: '',
    date: ''
  },
  {
    agent: '007',
    country: 'Brazil',
    address: '',
    date: ''
  },
  {
    agent: '005',
    country: 'Poland',
    address: '',
    date: ''
  },
  {
    agent: '005',
    country: 'Poland',
    address: '',
    date: ''
  },
];

const TEST_DATA_2 = [
  {
    agent: '007',
    country: 'Brazil',
    address: '',
    date: ''
  },
  {
    agent: '007',
    country: 'Morocco',
    address: '',
    date: ''
  },
  {
    agent: '005',
    country: 'Poland',
    address: '',
    date: ''
  },
  {
    agent: '005',
    country: 'Morocco',
    address: '',
    date: ''
  },
];


describe('getMostIsolatedCountry', () => {
  it(`should return array with the country Morocco`, () => {
    const result = getMostIsolatedCountry(data);
    expect(getMostIsolatedCountry(data)).toEqual(expect.arrayContaining(['Morocco']));
  });

  it(`should return array with two countries, Brazil and Poland`, () => {
    expect(getMostIsolatedCountry(TEST_DATA_1)).toEqual(expect.arrayContaining(['Brazil', 'Poland']));
  });

  it(`should return empty array`, () => {
    expect(getMostIsolatedCountry(TEST_DATA_2)).toEqual([]);
  });
});

