import path from 'path';
import request from 'supertest';
import getTestApp from '../fixtures/test-app/getTestApp';
import testRouter from '../fixtures/test-app/routes/index';

describe('configureApp', () => {
  it('should setup api with openapi spec', async () => {
    const app = getTestApp({
      appName: 'test-app',
      apiOptions: {
        apiSpec: path.resolve(
          __dirname,
          '../fixtures/test-app/api/open-api-spec.yaml'
        ),
        specType: 'openapi',
        validateResponses: true,
      },
      setup: (apiRouter) => {
        apiRouter.use('/', testRouter);
      },
    });

    let res = await request(app).get('/hello');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Hello World');

    res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Test App is healthy');
  });

  it('should setup api with swagger spec', async () => {
    const app = getTestApp({
      appName: 'test-app',
      apiOptions: {
        apiSpec: path.resolve(
          __dirname,
          '../fixtures/test-app/api/swagger-api-spec.yaml'
        ),
        specType: 'swagger',
        validateResponses: true,
      },
      setup: (apiRouter) => {
        apiRouter.use('/', testRouter);
      },
    });

    let res = await request(app).get('/hello');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Hello World');

    res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Test App is healthy');
  });
});
