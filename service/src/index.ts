import { runApp } from '@dhruv-m-patel/express-app';
import app from './app';

runApp(app, {
  appName: 'Backend Service',
  port: Number(process.env.NODE_SERVICE_PORT) || 4000,
});
