import supertest from 'supertest';
import allowList from '../../allowList';
import app from '../../app';

describe('List all allowed sites', () => {
  it('should return a list of allowed sites', async () => {
    const res = await supertest(app)
      .get('/api/v1/allowedSites');

    expect(res.status).toEqual(200);
    expect(res.body).toEqual(allowList);
  });
});
