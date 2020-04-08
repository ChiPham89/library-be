import models from '../../models';
import CopiesStatus from '../constant/CopiesStatus';
import NotFoundError from '../error/NotFoundError';
import ActionNotAllowError from '../error/ActionNotAllowError';
import BookBus from './BookBus';

export default class UserBus {
    static getUsers = () => {
        return models.Users.findAll();
    }

    static getUserById = (userId) => {
        return models.Users.findOne({
            where: {
                id: userId
            },
            include: ['borrowedBooks']
        })
        .then(user => {
            if(user) {
                return user;
            } else {
                throw new NotFoundError(`User with id ${userId} is not found!`);
            }
        });
    }

    static createUser = (user) => {
        return models.Users.create({
            ...user
        });
    }

    static updateUser = (userId, user) => {
        return models.Users.update({
            ...user
        }, {
            where: {
                id: userId
            }
        });
    }

    static borrowBook = (userId, borrowBookId) => {
        return Promise.all([
            BookBus.getAvailableCopy(borrowBookId),
            this.getUserById(userId)
        ])
        .then(results => {
            let copy = results[0];
            let user = results[1];
            user.borrowedBooks.push(copy);
            user.setBorrowedBooks(user.borrowedBooks);
            models.Copies.update({
                ...copy,
                status: CopiesStatus.BORROWED
            }, {
                where: {
                    id: copy.id
                }
            });
        });
    }

    static returnBook = (userId, returnBookId) => {
        return this.getUserById(ruserId)
        .then(user => {
            let returnBookCopy = user.borrowedBooks
                .find(bookCopy => bookCopy.bookId == returnBookId);

            if(returnBookCopy) {
                let remainingBorrowedBooks = user.borrowedBooks
                    .filter(bookCopy => bookCopy.bookId != returnBookId);
                user.setBorrowedBooks(remainingBorrowedBooks);

                return models.Copies.update({
                    ...returnBookCopy,
                    status: CopiesStatus.AVAILABLE
                }, {
                    where: {
                        id: returnBookCopy.id
                    }
                })
                .then(result => {
                    return result;
                });
            } else {
                throw new ActionNotAllowError(`User ${userId} didn't borrow ${returnBookId}!`);
            }
        })
    }

    static removeUser = (userId) => {
        return models.Users.destroy({
            where: {
                id: userId
            }
        });
    }
}