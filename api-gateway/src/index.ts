import cors from 'cors';
import express from 'express';
import session from 'express-session';
import helmet from 'helmet';

import config from './config';

/**
 * @Configurations
 */
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.disable('x-powered-by');
const expiringDate = new Date(Date.now() + 1000 * 60 * 30); // 30 min
app.use(
  session({
    secret: 'hi-cord',
    name: 'sessionId',
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: true,
      httpOnly: true,
      expires: expiringDate,
    },
  }),
);
app.set('trust proxy', 1);

/**
 * @Routes
 */
app.use('/api/ping', (_req, res) => {
  res.send(JSON.stringify({ name: '/api/ping', message: 'Ping is good' }));
});

app.use('*', (req, _res, next) => {
  console.log('@@ @@', req.baseUrl);
  next();
});

/**
 * @Run
 */
app
  .listen(config.HTTP_PORT, () => {
    console.log(`Listening the server ${config.HTTP_PORT}`);
  })
  .on('error', (err) => {
    console.error(err);
  });
