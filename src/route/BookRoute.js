import { Router } from 'express';

import BookBus from '../bus/BookBus';

const bookRoute = Router();

bookRoute.get('/books', BookBus.getBooks);
bookRoute.get('/authors/:author_id/books', BookBus.getBooksByAuthor);
bookRoute.get('/authors/:author_id/books/:book_id', BookBus.getBook);
bookRoute.post('/authors/:author_id/books', BookBus.createBook);
bookRoute.post('/authors/:author_id/books/:book_id/copies', BookBus.addCopies);
bookRoute.put('/authors/:author_id/books/:book_id', BookBus.updateBook);
bookRoute.delete('/authors/:author_id/books/:book_id', BookBus.removeBook);

export default bookRoute;