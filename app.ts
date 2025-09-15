import express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

import auth from './routes/auth';
import foods from './routes/foods';
import vowls from './routes/vowls';
import meals from './routes/meals';

mongoose.connect(process.env.MONGODB_URI as string)
  .then(() => {
    console.log('Connected to database');
  })
  .catch(error => {
    console.error(error);
  });

const app = express();

app.use(cors({
  credentials: true,
  origin: [process.env.PUBLIC_DOMAIN as string]
}));

app.use(session({
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI as string,
    ttl: 24 * 60 * 60 // 1 day
  }),
  secret: process.env.SECRET_SESSION as string,
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
  }
}));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', auth);
app.use('/foods', foods);
app.use('/vowls', vowls);
app.use('/meals', meals);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
