import { Router } from 'express';

import UserBus from '../bus/UserBus';

const userRoute = Router();

userRoute.get('/users', UserBus.getUsers);
userRoute.get('/users/:user_id', UserBus.getUser);
userRoute.post('/users', UserBus.createUser);
userRoute.post('/users/:user_id/books/:book_id/borrow', UserBus.borrowBook);
userRoute.post('/users/:user_id/books/:book_id/return', UserBus.returnBook);
userRoute.put('/users/:user_id', UserBus.updateUser);
userRoute.delete('/users/:user_id', UserBus.removeUser);

export default userRoute;