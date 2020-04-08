import { Router } from 'express';

import UserBus from '../bus/UserBus';
import Route from './Route';
import HTTPMethods from '../constant/HTTPMethods';

const userRoutes = [];

userRoutes.push(new Route(HTTPMethods.GET, '/users', UserBus.getUsers));
userRoutes.push(new Route(HTTPMethods.GET, '/users/:user_id', UserBus.getUser));
userRoutes.push(new Route(HTTPMethods.POST, '/users', UserBus.createUser));
userRoutes.push(new Route(HTTPMethods.POST, '/users/:user_id/books/:book_id/borrow', UserBus.borrowBook));
userRoutes.push(new Route(HTTPMethods.POST, '/users/:user_id/books/:book_id/return', UserBus.returnBook));
userRoutes.push(new Route(HTTPMethods.PUT, '/users/:user_id', UserBus.updateUser));
userRoutes.push(new Route(HTTPMethods.DELETE, '/users/:user_id', UserBus.removeUser));

export default userRoutes;