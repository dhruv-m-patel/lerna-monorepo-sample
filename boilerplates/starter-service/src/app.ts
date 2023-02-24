import { configureApp } from '@dhruv-m-patel/express-app';
import router from './routes/health';
import path from 'path';

const apiSpec = path.join(__dirname, '../build/api/api-spec.yaml');

const app = configureApp({
  apiOptions: {
    apiSpec,
    specType: 'openapi',
    validateResponses: true,
  },
  setup: (theApp) => {
    theApp.use('/api/health', router);
  },
});

export default app;
