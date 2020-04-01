import 'dotenv/config';
import express from 'express';

import AuthorBus from './bus/AuthorBus'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/authors', AuthorBus.getAuthors);
app.get('/authors/:author_id', AuthorBus.getAuthor);
app.post('/authors', AuthorBus.createAuthor);
app.put('/authors/:author_id', AuthorBus.updateAuthor);
app.delete('/authors/:author_id', AuthorBus.removeAuthor);

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);