import supertest from 'supertest';
import { v4 as uuidv4 } from 'uuid';
import Link from '../../api/v1/link/link';
import app from '../../app';
import db from '../../db';

const id = uuidv4();
const link: Link = {
  content: {
    title: 'Bill Gates to buy FSF for $4.20bn',
    description: 'The retired multi-billionaire is embracing open-source.',
    color: '#f9a825',
  },
  destination: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
};

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
    expect(res.body).toMatch('not exist');
    expect(res.type).toEqual('text/html');
  });
  it('should redirect valid links', async () => {
    const res = await supertest(app)
      .get(`/view/${id}`);
    expect(res.text).toMatch('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    expect(res.status).toEqual(200);
    expect(res.type).toEqual('text/html');
  });
});

afterAll((done) => {
  db.close();
  done();
});
