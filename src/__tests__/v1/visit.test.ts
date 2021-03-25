import supertest from 'supertest';
import app from '../../app';

describe('Visit a link', () => {
  it('should error on invalid links', async () => {
    const res = await supertest(app)
      .get('/this-link-does-not-exist');
    expect(res.status).toEqual(404);
    expect(res.body).toContain('not exist');
  });
});
