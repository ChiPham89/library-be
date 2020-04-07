import { Router } from 'express';

import AuthorBus from '../bus/AuthorBus';
import Route from './Route';
import HTTPMethods from '../constant/HTTPMethods';

const authorRoutes = [];

authorRoutes.push(new Route(HTTPMethods.GET, '/authors', AuthorBus.getAuthors));
authorRoutes.push(new Route(HTTPMethods.GET, '/authors/:author_id', AuthorBus.getAuthor));
authorRoutes.push(new Route(HTTPMethods.POST, '/authors', AuthorBus.createAuthor));
authorRoutes.push(new Route(HTTPMethods.PUT, '/authors/:author_id', AuthorBus.updateAuthor));
authorRoutes.push(new Route(HTTPMethods.DELETE, '/authors/:author_id', AuthorBus.removeAuthor));

export default authorRoutes;