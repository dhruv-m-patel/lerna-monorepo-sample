# @dhruv-m-patel/web-app

A package to spin up an express web server for your application

![CI Status](https://github.com/dhruv-m-patel/node-react-monorepo/workflows/build/badge.svg)

Built with express, typescript and webpack providing following features:

- Configure your web-app with universal/isomorphic rendering support
- Built-in webpack support - hot reloading included
- Uses directory-based routing, which fosters clarity in implementing your route handlers
- Built-in, optional session support
- Built-in, optional static directory support to host your static assets with application code and serve them publicly
- Allows adding your own custom application logic easily through one-time configuration in app startup options
- Assigns unique id to each request for providing request traceability
- Adds final error handler at the end of the app setup to ensure all unhandled route errors are caught and logged

### Using the package

1. Install the package: `npm i -S @dhruv-m-patel/web-app`

2. Update your `app.ts` file (main application file) to export configuration as below:

    ```typescript
    import path from 'path';
    import { Application } from 'express';
    import { configureApp } from '@dhruv-m-patel/web-app';

    const app: Application = configureApp({
      paths: {
        // specify directory containing file-based routing structure for your app
        routes: path.resolve(__dirname, './routes'),
        // specify static directory where scripts / styles / images would be found
        staticDirectories: [path.resolve(__dirname, '../../static')],
      },
      setup: (webApp) => {
        // Your custom app setup code goes here
      },
    });

    export default app;
    ```

3. Update your `server.ts` or `index.ts` file (the file that starts the server) to run your application like this:

    ```typescript
    import app from './app';
    import { runApp } from '@dhruv-m-patel/web-app';

    const port: number = Number(process.env.PORT) || 3000;

    runApp(app, { appName: 'Web App', port});
    ```
