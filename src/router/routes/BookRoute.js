import { Router } from 'express';

import BookAction from '../../action/BookAction';
import Route from '../Route';
import HTTPMethods from '../../constant/HTTPMethods';

const bookRoutes = [];

bookRoutes.push(new Route(HTTPMethods.GET, '/books', BookAction.getBooks));
bookRoutes.push(new Route(HTTPMethods.GET, '/authors/:author_id/books', BookAction.getBooksByAuthor));
bookRoutes.push(new Route(HTTPMethods.GET, '/authors/:author_id/books/:book_id', BookAction.getBook));
bookRoutes.push(new Route(HTTPMethods.POST, '/authors/:author_id/books', BookAction.createBook));
bookRoutes.push(new Route(HTTPMethods.POST, '/authors/:author_id/books/:book_id/copies', BookAction.addCopies));
bookRoutes.push(new Route(HTTPMethods.PUT, '/authors/:author_id/books/:book_id', BookAction.updateBook));
bookRoutes.push(new Route(HTTPMethods.DELETE, '/authors/:author_id/books/:book_id', BookAction.removeBook));

export default bookRoutes;