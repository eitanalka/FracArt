import '@babel/polyfill';
import './env';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import massive from 'massive';
import passport from './utils/passport';
import router from './routes';
import getDbConfig from './dbconfig';

const port = process.env.PORT || 3001;
const app = express();

// makes it so requests from other doamins work
app.use(cors());

// log incoming requests
app.use(morgan('combined'));

// parse json object before sending it to router
app.use(express.json());

app.use(passport.initialize());

// all api requests are expected to start with /api
app.use('/api', router);

const dbConfig = getDbConfig();

massive(dbConfig).then((instance) => {
  console.log('Connected to db');
  app.set('db', instance);
  app.listen(port, () => {
    console.log('Server listening on port 3001');
  });
});

export default app;
