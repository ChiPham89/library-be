import 'dotenv/config';
import express from 'express';

import bookRoute from './route/BookRoute';
import userRoute from './route/UserRoute';
import router from './route/Router'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router, bookRoute, userRoute);

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);