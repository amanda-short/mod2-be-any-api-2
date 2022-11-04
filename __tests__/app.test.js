const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { university } = require('../lib/uni-data.js');
// const { brewery } = require('../lib/beer-data.js');

describe('university routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/university should return list of universities', async () => {
    const res = await request(app).get('/university');
    const expected = university.map((uni) => {
      return { id: uni.id, school: uni.school };
    });
    expect(res.body).toEqual(expected);
  });

  it('/university/:id should return university detail', async () => {
    const res = await request(app).get('/university/1');
    const universityOfOregon = {
      id: '1',
      school: 'University of Oregon',
      mascot: 'Duck',
      location: 'Eugene Oregon',
    };  
    expect(res.body).toEqual(universityOfOregon);
  });
});

// describe('brewery routes', () => {
//   beforeEach(() => {
//     return setup(pool);
//   });
  
//   it('/brewery should return a list of breweries', async () => {
//     const res = await request(app).get('/brewery');
//     const expected = brewery.map((brew) => {
//       return { id: brew.id, name: brew.name };
//     });
//     expect(res.body).toEqual(expected);
//   });

describe('brewery routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  
  it('/brewery should return a list of breweries', async () => {
    const res = await request(app).get('/brewery');
    // const expected = brewery.map((brew) => {
    //   return { id: brew.id, name: brew.name };
    // });
    expect(res.body).toEqual([
      {
        id: '1',
        name: 'Two Town Ciderhouse',
      },
      {
        id: '2',
        name: 'Rogue Nation Brewery and Spirits'
      },
      {
        id: '3',
        name: 'Deschutes Brewery'
      },
      {
        id: '4',
        name: 'Arch Rock Brewing Company'
      },
      {
        id: '5',
        name: 'De Garde Brewing'
      },
      {
        id: '6',
        name: 'Pelican Brewing'
      },
      {
        id: '7',
        name: 'Ninkasi Brewing'
      },
      {
        id: '8',
        name: 'SakeOn'
      },
      {
        id: '9',
        name: 'Lookingglass Brewery'
      },
      {
        id: '10',
        name: 'Thunder Island Brewing'
      },
      {
        id: '11',
        name: 'Uptown Beer Co'
      },
      {
        id: '12',
        name: 'Boneyard Beer'
      }
    ]);
  });

  it('/brewery/:id should return brewery detail', async () => {
    const res = await request(app).get('/brewery/1');
    const twoTownCiderhouse = {
      id: '1',
      name: 'Two Town Ciderhouse',
      rating: 4,
      location: 'Corvallis',
    };  
    expect(res.body).toEqual(twoTownCiderhouse);
  });

  afterAll(() => {
    pool.end();
  });
});
