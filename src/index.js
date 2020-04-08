import 'dotenv/config';
import express from 'express';

import router from './router/AppRouter'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);