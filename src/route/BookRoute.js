import { Router } from 'express';

import BookBus from '../bus/BookBus';
import Route from './Route';
import HTTPMethods from '../constant/HTTPMethods';

const bookRoutes = [];

bookRoutes.push(new Route(HTTPMethods.GET, '/books', BookBus.getBooks));
bookRoutes.push(new Route(HTTPMethods.GET, '/authors/:author_id/books', BookBus.getBooksByAuthor));
bookRoutes.push(new Route(HTTPMethods.GET, '/authors/:author_id/books/:book_id', BookBus.getBook));
bookRoutes.push(new Route(HTTPMethods.POST, '/authors/:author_id/books', BookBus.createBook));
bookRoutes.push(new Route(HTTPMethods.POST, '/authors/:author_id/books/:book_id/copies', BookBus.addCopies));
bookRoutes.push(new Route(HTTPMethods.PUT, '/authors/:author_id/books/:book_id', BookBus.updateBook));
bookRoutes.push(new Route(HTTPMethods.DELETE, '/authors/:author_id/books/:book_id', BookBus.removeBook));

export default bookRoutes;