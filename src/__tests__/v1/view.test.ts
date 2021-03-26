import supertest from 'supertest';
import { v4 as uuidv4 } from 'uuid';
import app from '../../app';
import db from '../../db';
import link from '../__mocks__/testLink';

const id = uuidv4();

beforeAll(() => {
  db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS links (id STRING PRIMARY KEY, title STRING, description STRING, image STRING, color STRING, destination STRING);');
    db.run(
      'INSERT INTO links(id, title, description, image, color, destination) VALUES(?, ?, ?, ?, ?, ?)',
      [id, link.content.title, link.content.description, link.content.image, link.content.color,
        link.destination],
      (err) => {
        if (err) {
          console.log(err);
        }
      },
    );
  });
});

describe('View a link', () => {
  it('should error on invalid links', async () => {
    const res = await supertest(app)
      .get('/view/this-link-does-not-exist');

    expect(res.status).toEqual(404);
    expect(res.text).toMatch('not exist');
    expect(res.type).toEqual('text/html');
  });
  it('should redirect valid links', async () => {
    const res = await supertest(app)
      .get(`/view/${id}`);
    expect(res.text).toMatch(link.destination);
    expect(res.text).toMatch('redirect');
    expect(res.status).toEqual(200);
    expect(res.type).toEqual('text/html');
  });
});

afterAll((done) => {
  db.close();
  done();
});
