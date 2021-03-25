import supertest from 'supertest';
import Link from '../../api/v1/link/link';
import app from '../../app';
import db from '../../db';

describe('View a link', () => {
  it('should error on invalid links', async () => {
    const res = await supertest(app)
      .get('/view/this-link-does-not-exist');
    expect(res.status).toEqual(404);
    expect(res.body).toContain('not exist');
  });
  it('should redirect valid links', async () => {
    await db.run('CREATE TABLE IF NOT EXISTS links (id STRING PRIMARY KEY, title STRING, description STRING, image STRING, color STRING, destination STRING);');
    const post: Link = {
      content: {
        title: 'Bill Gates to buy FSF for $4.20bn',
        description: 'The retired multi-billionaire is embracing open-source.',
        color: '#f9a825',
      },
      destination: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    };

    let res = await supertest(app)
      .post('/api/v1/create')
      .send(post);
    const id = res.body.id!;
    res = await supertest(app)
      .get(`/view/${id}`);
    expect(res.body).toContain('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  });
});

afterAll((done) => {
  db.close();
  done();
});
