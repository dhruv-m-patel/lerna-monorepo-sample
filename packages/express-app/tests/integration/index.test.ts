import express, { Response, Request } from 'express';
import request from 'supertest';
import path from 'path';
import fs from 'fs';
import * as uuid from 'uuid';
import { configureApp } from '../../src';

const TEST_ROUTE = '/test';

const INVALID_REQUEST_BODY = {
  foo: 123,
};
const VALID_REQUEST_BODY = {
  foo: 'my string',
};

const INVALID_RESPONSE_BODY = {
  bar: 123,
};

const TEST_APP = 'testApp';

describe('Integrate tests: Health Check', () => {
  it('should return health check metadata', (done) => {
    const app = configureApp({ appName: TEST_APP, setup: () => {} });

    request(app)
      .get('/health')
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.text).toEqual(`${TEST_APP} is healthy`);
        done();
      });
  });
});

describe('Integration tests: finalErrorHandler', () => {
  let errorSpy: jest.SpyInstance;

  beforeEach(() => {
    errorSpy = jest.spyOn(global.console, 'error').mockImplementation();
  });

  afterEach(() => {
    errorSpy.mockClear();
  });

  it('should not need to handle startup errors since they prevent server start', () => {
    const message = 'Setup Crashed';
    expect(() => {
      configureApp({
        appName: TEST_APP,
        setup: () => {
          throw new Error(message);
        },
      });
    }).toThrowError(message);
  });

  it('should handle uncaught errors in an express route', (done) => {
    const message = 'Route crashed';
    const app = configureApp({
      appName: TEST_APP,
      setup: (app) => {
        app.get(TEST_ROUTE, () => {
          throw new Error(message);
        });
      },
    });
    request(app)
      .get(TEST_ROUTE)
      .expect(() => {
        expect(errorSpy).toHaveBeenCalledWith(
          expect.stringContaining(message),
          expect.stringContaining(message)
        );
      })
      .expect(500, { message }, done);
  });

  it('should handle error response in an express route', (done) => {
    const message = 'Route returns error message';
    const app = configureApp({
      appName: TEST_APP,
      setup: (app) => {
        app.get(TEST_ROUTE, (request: Request, response: Response) => {
          response.status(500).json({ message });
        });
      },
    });
    request(app)
      .get(TEST_ROUTE)
      .expect(() => {
        expect(errorSpy).not.toHaveBeenCalled();
      })
      .expect(500, { message }, done);
  });
});

describe('Integration tests: Service Contract Validations with OpenAPI', () => {
  let errorSpy: jest.SpyInstance;
  const validOpenApiSpec = path.join(
    __dirname,
    '../fixtures/validOpenApiSpec.yaml'
  );
  const invalidOpenApiSpec = path.join(
    __dirname,
    '../fixtures/invalidOpenApiSpec.yaml'
  );

  function configureTestAppWithInvalidOpenApiResponse(
    apiSpec: string,
    validateResponses: boolean
  ) {
    const router = express.Router();
    router.post('/', (request: Request, response: Response) => {
      response.json(INVALID_RESPONSE_BODY);
    });
    return configureApp({
      apiOptions: {
        apiSpec,
        specType: 'openapi',
        validateResponses: validateResponses,
      },
      setup: (app) => {
        app.use(TEST_ROUTE, router);
      },
    });
  }

  beforeEach(() => {
    errorSpy = jest.spyOn(global.console, 'error').mockImplementation();
  });

  afterEach(() => {
    errorSpy.mockClear();
  });

  it('should handle server startup errors when api spec is not valid', (done) => {
    const app = configureTestAppWithInvalidOpenApiResponse(
      invalidOpenApiSpec,
      false
    );
    request(app)
      .post(TEST_ROUTE)
      .send(VALID_REQUEST_BODY)
      .expect(() => {
        expect(errorSpy).toHaveBeenCalledWith(
          expect.stringContaining('Token "components" does not exist.'),
          expect.stringContaining(
            'MissingPointerError: Token "components" does not exist.'
          )
        );
      })
      .expect(500, { message: 'Token "components" does not exist.' }, done);
  });

  it('should validate request sending back a 400 response for bad requests', (done) => {
    const app = configureTestAppWithInvalidOpenApiResponse(
      validOpenApiSpec,
      true
    );
    request(app)
      .post(TEST_ROUTE)
      .send(INVALID_REQUEST_BODY)
      .expect(400, { message: 'request.body.foo should be string' }, done);
  });

  it('should not validate response if not enabled', (done) => {
    const app = configureTestAppWithInvalidOpenApiResponse(
      validOpenApiSpec,
      false
    );
    request(app).post(TEST_ROUTE).send(VALID_REQUEST_BODY).expect(200, done);
  });

  it('should send back a 400 response with bad response when response validation is enabled', (done) => {
    const app = configureTestAppWithInvalidOpenApiResponse(
      validOpenApiSpec,
      true
    );
    request(app).post(TEST_ROUTE).send(VALID_REQUEST_BODY).expect(
      500,
      {
        message: '.response.bar should be string',
      },
      done
    );
  });
});

describe('Integration tests: Service Contract Validations with Swagger', () => {
  let errorSpy: jest.SpyInstance;
  const validSwaggerSpec = path.join(
    __dirname,
    '../fixtures/validSwaggerSpec.yaml'
  );
  const invalidSwaggerSpec = path.join(
    __dirname,
    '../fixtures/invalidSwaggerSpec.yaml'
  );

  function configureTestAppWithInvalidSwaggerResponse(
    apiSpec: string,
    validateResponses: boolean
  ) {
    const router = express.Router();
    router.post('/', (request: Request, response: Response) => {
      response.json(INVALID_RESPONSE_BODY);
    });
    return configureApp({
      apiOptions: {
        apiSpec,
        specType: 'swagger',
        validateResponses: validateResponses,
      },
      setup: (app) => {
        app.use(TEST_ROUTE, router);
      },
    });
  }

  beforeEach(() => {
    errorSpy = jest.spyOn(global.console, 'error').mockImplementation();
  });

  afterEach(() => {
    errorSpy.mockClear();
  });

  it('should handle server startup errors when api spec is not valid', (done) => {
    const app = configureTestAppWithInvalidSwaggerResponse(
      invalidSwaggerSpec,
      false
    );
    request(app)
      .post(TEST_ROUTE)
      .send(VALID_REQUEST_BODY)
      .expect(() => {
        expect(errorSpy).toHaveBeenCalledWith(
          expect.stringContaining(
            "can't resolve reference #/definitions/foo from id #"
          ),
          undefined
        );
      })
      .expect(
        500,
        {
          message: "can't resolve reference #/definitions/foo from id #",
        },
        done
      );
  });

  it('should validate request sending back a 400 response for bad requests', (done) => {
    const app = configureTestAppWithInvalidSwaggerResponse(
      validSwaggerSpec,
      true
    );
    request(app)
      .post(TEST_ROUTE)
      .send(INVALID_REQUEST_BODY)
      .expect(() => {
        expect(errorSpy).not.toHaveBeenCalled();
      })
      .expect(
        400,
        {
          message: 'Request schema validation failed for POST/test',
        },
        done
      );
  });

  it('should not validate response if not enabled', (done) => {
    const app = configureTestAppWithInvalidSwaggerResponse(
      validSwaggerSpec,
      false
    );
    request(app)
      .post(TEST_ROUTE)
      .send(VALID_REQUEST_BODY)
      .expect(() => {
        expect(errorSpy).not.toHaveBeenCalled();
      })
      .expect(200, done);
  });

  it('should send back a 400 response with bad response when response validation is enabled', (done) => {
    const app = configureTestAppWithInvalidSwaggerResponse(
      validSwaggerSpec,
      true
    );
    request(app)
      .post(TEST_ROUTE)
      .send(VALID_REQUEST_BODY)
      .expect(() => {
        expect(errorSpy).toHaveBeenCalledWith(
          expect.stringContaining(
            'Response schema validation failed for POST/test'
          ),
          undefined
        );
      })
      .expect(
        500,
        {
          message: 'Response schema validation failed for POST/test',
        },
        done
      );
  });
});

describe('Integrate tests: Request Tracing', () => {
  it('should inject a valid uuid v4 guid as a request identifier', (done) => {
    const app = configureApp({
      setup: (testApp: express.Application) => {
        testApp.get('/idCheck', (req: Request, res: Response) => {
          res.json({
            message: {
              // @ts-ignore
              requestId: req.id, // Pass back request id referring to request for verification
            },
          });
        });
      },
    });

    request(app)
      .get('/idCheck')
      .send()
      .then((response) => {
        expect(uuid.validate(response.body.message.requestId)).toBeTruthy();
        expect(uuid.version(response.body.message.requestId)).toEqual(4);
        expect(response.status).toEqual(200);
        done();
      });
  });
});
