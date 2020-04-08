import 'dotenv/config';
import express from 'express';

import AppRouter from './route/AppRouter'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', AppRouter.router);

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);