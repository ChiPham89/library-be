import { Router } from 'express';

import Route from './Route';
import AppRouter from './AppRouter';
import AuthorAction from '../action/AuthorAction';
import HTTPMethods from '../constant/HTTPMethods';

const authorRoutes = [];

authorRoutes.push(new Route(HTTPMethods.GET, '/authors', AuthorAction.getAuthors));
authorRoutes.push(new Route(HTTPMethods.GET, '/authors/:author_id', AuthorAction.getAuthor));
authorRoutes.push(new Route(HTTPMethods.POST, '/authors', AuthorAction.createAuthor));
authorRoutes.push(new Route(HTTPMethods.PUT, '/authors/:author_id', AuthorAction.updateAuthor));
authorRoutes.push(new Route(HTTPMethods.DELETE, '/authors/:author_id', AuthorAction.removeAuthor));

AppRouter.registerRoutes(authorRoutes);