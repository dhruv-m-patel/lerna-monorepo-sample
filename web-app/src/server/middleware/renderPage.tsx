import React from 'react';
import { NextFunction, Request, Response } from 'express';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
import { StaticRouter } from 'react-router-dom';
import { ChunkExtractor } from '@loadable/server';
import configureStore from '../../client/redux/configureStore';
import Router from '../../common/router';
import ReduxStateDecorator from '../../client/redux/StateDecorator';

export default function renderPage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const contentType =
    req.headers['content-type'] || req.headers['Content-Type'];
  if (contentType && !contentType.includes('text/html')) {
    next();
  } else {
    const context: { url?: string } = {};
    if (context.url) {
      res.redirect(context.url);
      return;
    }

    // @ts-ignore
    const request = req as any;

    const store = configureStore(request.initialState || {});
    const preloadedState = request.initialState || store.getState();
    if (!request.initialState) {
      request.initialState = preloadedState;
    }

    // const statsFile = path.join(
    //   process.cwd(),
    //   './build-static/loadable-stats.json'
    // );

    const nodeStats = path.resolve(
      process.cwd(),
      './build-static/node/loadable-stats.json',
    )

    const webStats = path.resolve(
      process.cwd(),
      './build-static/web/loadable-stats.json',
    )


    // const extractor = new ChunkExtractor({
    //   statsFile,
    //   entrypoints: ['client'],
    //   publicPath: '/',
    // });

    const nodeExtractor = new ChunkExtractor({ entrypoints: ['client'], statsFile: nodeStats, publicPath: '/node' });
    const { default: App } = nodeExtractor.requireEntrypoint();

    const webExtractor = new ChunkExtractor({ entrypoints: ['client'], statsFile: webStats, publicPath: '/web' })
    const jsx = webExtractor.collectChunks(
      <StaticRouter location={req.url} context={context}>
        <ReduxStateDecorator initialState={preloadedState}>
          <App />
          <Router />
        </ReduxStateDecorator>
      </StaticRouter>
    );

    const html = ReactDOMServer.renderToString(jsx);

    const baseUrl = process.env.BASE_URL
      ? `<base href="${process.env.BASE_URL}">`
      : '';

    res.set('content-type', 'text/html')
    res.send(`
<!DOCTYPE html>
<html lang="en-US">
  <head>
    ${baseUrl}
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" priority="1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>React App</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    ${webExtractor.getLinkTags()}
    <script id="stateData">window.__PRELOADED_STATE__ = ${JSON.stringify(
      preloadedState
    ).replace(/</g, '\\u003c')};</script>
  </head>
  <body>
    <div id="root">${html}</div>
    ${webExtractor.getScriptTags()}
  </body>
</html>
    `);
  }
}
