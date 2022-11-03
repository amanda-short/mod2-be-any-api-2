const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const { university } = require('../lib/uni-data.js');
// const app = require('../lib/app');

describe('university routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/university should return list of universities', async () => {
    const res = await request(app).get('/university');
    const expected = university.map((university) => {
      return { id: university.id, school: university.school };
    });
    expect(res.body).toEqual(expected);
  });

  afterAll(() => {
    pool.end();
  });
});
