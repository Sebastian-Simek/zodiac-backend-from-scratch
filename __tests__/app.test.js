const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { zodiacs } = require('../data/zodiacs');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  
  it('/zodiacs should return list of zodiacs', async () => {
    const res = await request(app).get('/zodiacs');
    const expected = zodiacs.map((zodiac) => {
      return { ...zodiac };
    });
    expect(res.body).toEqual(expected);
  });

  it('/zodiac/:id should return zodiac details', async () => {
    const res = await request(app).get('/zodiacs/1');
    const expected = { ...zodiacs[0] };
    expect(res.body).toEqual(expected);
  });

 
  it('example test - delete me!', () => {
    expect(1).toEqual(1);
  });
  afterAll(() => {
    pool.end();
  });
});
