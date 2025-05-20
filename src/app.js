const request = require('supertest');
const app = require('../app');

describe('Pruebas de API básica', () => {
  test('GET / debe responder con mensaje de bienvenida', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBeDefined();
  });

  test('POST /echo debe devolver el mensaje enviado', async () => {
    const testMessage = 'Test mensaje';
    const response = await request(app)
      .post('/echo')
      .send({ message: testMessage });
    expect(response.statusCode).toBe(200);
    expect(response.body.echo).toBe(testMessage);
  });

  test('POST /echo sin mensaje debe fallar', async () => {
    const response = await request(app)
      .post('/echo')
      .send({});
    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe('No se envió mensaje');
  });
});
