const request = require('supertest');
const server = require('../index');

describe('auth API', () => {
  test('POST /api/auth/login', async () => {
    const res = await request(server)
      .post('/api/auth/login')
      .send({
        email: 'test@example.com',
        password: 'password123',
      });
    expect(res.statusCode).toEqual(200);
  })

  test('GET /api/auth/logout', async () => {
    const res = await request(server)
      .get('/api/auth/logout');
    expect(res.statusCode).toEqual(200);
  })
});