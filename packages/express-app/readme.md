# @dhruv-m-patel/express-app

A package to spin up a REST api server with express including swagger docs and health checks by default

![CI Status](https://github.com/dhruv-m-patel/node-react-monorepo/workflows/build/badge.svg)

Built with express and typescript providing following features:

- Configure apps with service discovery through Swagger or OpenAPI specs and enable request-response validations
- Enables health check by default for an application to provide monitoring capabilities
- Assigns unique id to each request for providing request traceability
- Adds final error handler at the end of the app setup to ensure all unhandled route errors are caught and logged
- Allows running app in clustered startup to leverage full potential of your CPU processes

### Using the package

1. Install the package: `npm i -S @dhruv-m-patel/express-app`

2. Update your `app.ts` file (main application file) to export configuration as below:

    ```typescript
    import path from 'path';
    import { Application } from 'express';
    import { configureApp } from '@dhruv-m-patel/express-app';

    const app: Application = configureApp({
      appName: 'My RESTful API',
      setup: (expressApp) => {
        // ...
        // Your app setup code goes here
        // ...
      },
    });

    export default app;
    ```

3. Update your `server.ts` or `index.ts` file (the file that starts the server) to run your application like this:

    ```typescript
    import app from './app';
    import { runApp } from '@dhruv-m-patel/express-app';

    const port: number = Number(process.env.PORT) || 5000;

    runApp(app, { port });
    ```

For test application examples, please refer to `tests/integration/runTestApp.test.ts`.
