import { runApp } from '@dhruv-m-patel/express-app';
import app from './app';

runApp(app, Number(process.env.STARTER_SERVICE_PORT || 8888));
