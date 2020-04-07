import 'dotenv/config';
import express from 'express';

import authorRoute from './route/AuthorRoute';
import bookRoute from './route/BookRoute';
import userRoute from './route/UserRoute';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', authorRoute, bookRoute, userRoute);

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);