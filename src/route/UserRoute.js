import { Router } from 'express';

import UserAction from '../action/UserAction';
import Route from './Route';
import HTTPMethods from '../constant/HTTPMethods';

const userRoutes = [];

userRoutes.push(new Route(HTTPMethods.GET, '/users', UserAction.getUsers));
userRoutes.push(new Route(HTTPMethods.GET, '/users/:user_id', UserAction.getUser));
userRoutes.push(new Route(HTTPMethods.POST, '/users', UserAction.createUser));
userRoutes.push(new Route(HTTPMethods.POST, '/users/:user_id/books/:book_id/borrow', UserAction.borrowBook));
userRoutes.push(new Route(HTTPMethods.POST, '/users/:user_id/books/:book_id/return', UserAction.returnBook));
userRoutes.push(new Route(HTTPMethods.PUT, '/users/:user_id', UserAction.updateUser));
userRoutes.push(new Route(HTTPMethods.DELETE, '/users/:user_id', UserAction.removeUser));

export default userRoutes;