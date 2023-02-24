import path from 'path';
import { configureApp } from '@dhruv-m-patel/express-app';
import healthRouter from './routes/health';
import messageRouter from './routes/message';

const apiSpec = path.join(__dirname, '../build/api/api-spec.yaml');

const app = configureApp({
  apiOptions: {
    apiSpec,
    specType: 'openapi',
    validateResponses: true,
  },
  setup: (theApp) => {
    theApp.use('/api/health', healthRouter);
    theApp.use('/api/message', messageRouter);
  },
});

export default app;
