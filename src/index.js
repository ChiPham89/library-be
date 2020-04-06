import 'dotenv/config';
import express from 'express';

import AuthorBus from './bus/AuthorBus';
import BookBus from './bus/BookBus';
import UserBus from './bus/UserBus';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/authors', AuthorBus.getAuthors);
app.get('/authors/:author_id', AuthorBus.getAuthor);
app.post('/authors', AuthorBus.createAuthor);
app.put('/authors/:author_id', AuthorBus.updateAuthor);
app.delete('/authors/:author_id', AuthorBus.removeAuthor);

app.get('/books', BookBus.getBooks);
app.get('/authors/:author_id/books', BookBus.getBooksByAuthor);
app.get('/authors/:author_id/books/:book_id', BookBus.getBook);
app.post('/authors/:author_id/books', BookBus.createBook);
app.post('/authors/:author_id/books/:book_id/copies', BookBus.addCopies);
app.put('/authors/:author_id/books/:book_id', BookBus.updateBook);
app.delete('/authors/:author_id/books/:book_id', BookBus.removeBook);

app.get('/users', UserBus.getUsers);
app.get('/users/:user_id', UserBus.getUser);
app.post('/users', UserBus.createUser);
app.put('/users/:user_id', UserBus.updateUser);
app.delete('/users/:user_id', UserBus.removeUser);

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);