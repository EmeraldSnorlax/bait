import supertest from 'supertest';
import app from '../../app';
import Link from '../../api/v1/link/link';

describe('Create a new Link', () => {
  it('should reject blank posts', async () => {
    const res = await supertest(app)
      .post('/api/v1/create')
      .send({});

    expect(res.status).toEqual(400);
  });

  it('should reject posts that dont conform to link', async () => {
    const res = await supertest(app)
      .post('/api/v1/create')
      .send({});

    expect(res.status).toEqual(400);
  });

  it('should send back an id if data is valid', async () => {
    const post: Link = {
      content: {
        title: 'Bill Gates to buy FSF for $4.20bn',
        description: 'The retired multi-billionaire is embracing open-source.',
        color: '#f9a825',
      },
      destination: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    };

    const res = await supertest(app)
      .post('/api/v1/create')
      .send(post);

    expect(res.status).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });
});
