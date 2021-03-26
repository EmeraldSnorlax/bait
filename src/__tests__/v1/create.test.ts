import supertest from 'supertest';
import app from '../../app';
import db from '../../db';
import link, { notAllowedLink } from '../__mocks__/testLink';

beforeAll(() => {
  db.run('CREATE TABLE IF NOT EXISTS links (id STRING PRIMARY KEY, title STRING, description STRING, image STRING, color STRING, destination STRING);');
});

describe('Create a new Link', () => {
  it('should reject posts that dont conform to link', async () => {
    const res = await supertest(app)
      .post('/api/v1/create')
      .send({});

    expect(res.status).toEqual(400);
  });

  it('should send back an id if data is valid', async () => {
    const res = await supertest(app)
      .post('/api/v1/create')
      .send(link);

    expect(res.status).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });
});

it('should reject destinations that arent allowed', async () => {
  const res = await supertest(app)
    .post('/api/v1/create')
    .send(notAllowedLink);

  expect(res.status).toEqual(403);
  expect(res.text).toMatch('not allowed');
});

afterAll((done) => {
  db.close();
  done();
});
