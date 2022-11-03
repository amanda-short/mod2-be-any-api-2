const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { university } = require('../lib/uni-data.js');

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

  afterAll(() => {
    pool.end();
  });
});
