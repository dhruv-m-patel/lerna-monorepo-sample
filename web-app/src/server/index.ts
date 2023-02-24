import dotenv from 'dotenv';
import app from './app';
import { runApp } from '@dhruv-m-patel/web-app';
import { Promise as BluebirdPromise } from 'bluebird';

dotenv.config();
global.Promise = BluebirdPromise;

const port: number = Number(process.env.REACT_APP_PORT) || 3000;

runApp(app, { appName: 'Web App', port });
