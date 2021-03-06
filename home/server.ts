import next from 'next';
// import http from 'http';
// import http2 from 'http2';
// import https from 'https';
import express from 'express';

import nextI18NextMiddleware from 'next-i18next/middleware';

import NextI18NextInstance from './src/i18n';
import routes from './router/routes';

const PORT = parseInt((process as any).env.PORT, 10) || 8080;
const IS_DEV = process.env.NODE_ENV !== 'production';

const app = next({ dev: IS_DEV });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  /**
   * i18n (Check the docs)
   * @see https://github.com/isaachinman/next-i18next
   */
  server.use(nextI18NextMiddleware(NextI18NextInstance));

  /**
   * Page Routes
   */
  routes.map(({ page, path }) => {
    server.get(path, (req, res) => {
      return app.render(req, res, page, { ...req.query, ...req.params });
    });
  });

  /**
   * Watcher
   */
  server.route('*').get((req, res) => handle(req, res));
  server.listen(PORT, (error) => {
    if (error) {
      throw error;
    }
    console.log(`> Ready on http://localhost:${PORT}`);
  });
  // http.createServer(server).listen(PORT, () => {
  //   console.log(`http listening on port : ${PORT}`);
  // });
});
