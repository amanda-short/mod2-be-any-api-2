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

  afterAll(() => {
    pool.end();
  });
});
