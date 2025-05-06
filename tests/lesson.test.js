const request = require('supertest');
const server = require('../index');

describe('lessones API', () => {
  test('POST /api/lessones', async () => {
    const res = await request(server)
      .post('/api/lessones')
      .send({});
    expect(res.statusCode).toEqual(201);
  })
  test('GET /api/lessones', async () => {
    const res = await request(server)
      .get('/api/lessones');
    expect(res.statusCode).toEqual(200);
  })
  test('GET /api/lessones/lessonId', async () => {
    const res = await request(server)
      .get(`/api/lessones/${1}`);
    expect(res.statusCode).toEqual(200);
  })
  test('PUT /api/lessones', async () => {
    const res = await request(server)
      .put('/api/lessones')
      .send({});
    expect(res.statusCode).toEqual(200);
  })
  test('DELETE /api/lessones', async () => {
    const res = await request(server)
      .delete('/api/lessones')
      .send({});
    expect(res.statusCode).toEqual(200);
  })
});