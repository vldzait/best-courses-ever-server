const request = require('supertest');
const server = require('../index');

describe('users API', () => {
  test('POST /api/users', async () => {
    const res = await request(server)
      .post('/api/users')
      .send({});
    expect(res.statusCode).toEqual(201);
  })
  test('GET /api/users', async () => {
    const res = await request(server)
      .get('/api/users');
    expect(res.statusCode).toEqual(200);
  })
  test('GET /api/users/userId', async () => {
    const res = await request(server)
      .get(`/api/users/${1}`);
    expect(res.statusCode).toEqual(200);
  })
  test('PUT /api/users', async () => {
    const res = await request(server)
      .put('/api/users')
      .send({});
    expect(res.statusCode).toEqual(200);
  })
  test('DELETE /api/users', async () => {
    const res = await request(server)
      .delete('/api/users')
      .send({});
    expect(res.statusCode).toEqual(200);
  })
});