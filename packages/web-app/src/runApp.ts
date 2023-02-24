import express from 'express';

export interface AppStartupOptions {
  port: number;
  appName?: string;
  setup?: () => Promise<void>;
  callback?: () => void;
}

export default function runApp(
  app: express.Application,
  options: AppStartupOptions = {
    port: 5000,
    setup: undefined,
    callback: undefined,
  }
) {
  const { port, appName, setup, callback } = options;

  const startApp = () => {
    app.listen(port, () => {
      console.log(`${appName || 'App'} started on port ${port}`);
      if (callback && typeof callback === 'function') {
        callback();
      }
    });
  };

  if (setup && typeof setup === 'function') {
    setup().then(() => {
      startApp();
    });
  } else {
    startApp();
  }
}
