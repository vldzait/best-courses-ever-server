const request = require('supertest');
const server = require('../index');

describe('courses API', () => {
  test('POST /api/courses', async () => {
    const res = await request(server)
      .post('/api/courses')
      .send({});
    expect(res.statusCode).toEqual(201);
  })
  test('GET /api/courses', async () => {
    const res = await request(server)
      .get('/api/courses');
    expect(res.statusCode).toEqual(200);
  })
  test('GET /api/courses/courseId', async () => {
    const res = await request(server)
      .get(`/api/courses/${1}`);
    expect(res.statusCode).toEqual(200);
  })
  test('PUT /api/courses', async () => {
    const res = await request(server)
      .put('/api/courses')
      .send({});
    expect(res.statusCode).toEqual(200);
  })
  test('DELETE /api/courses', async () => {
    const res = await request(server)
      .delete('/api/courses')
      .send({});
    expect(res.statusCode).toEqual(200);
  })
});