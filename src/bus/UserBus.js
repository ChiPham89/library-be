import models from '../../models';
import CopiesStatus from '../constant/CopiesStatus';
import BookBus from './BookBus';

export default class UserBus {
    static getUsers = (req, res, next) => {
        models.Users.findAll()
        .then(users => {
            res.send(users);
        });
    }

    static getUser = (req, res, next) => {
        this.getUserById(req.params.user_id)
        .then(user => {
            res.send(user);
        });
    }

    static getUserById = (userId) => {
        return models.Users.findOne({
            where: {
                id: userId
            },
            include: ['borrowedBooks']
        });
    }

    static createUser = (req, res, next) => {
        models.Users.create({
            ...req.body
        })
        .then(user => {
            res.send(user);
        });
    }

    static updateUser = (req, res, next) => {
        models.Users.update({
            ...req.body
        }, {
            where: {
                id: req.params.user_id
            }
        })
        .then(user => {
            res.send(user);
        });
    }

    static borrowBook = (req, res, next) => {
        Promise.all([
            BookBus.getAvailableCopy(req.params.book_id),
            this.getUserById(req.params.user_id)
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
        })
        .then(result => {
            res.send("User borrow book successful");
        })
        .catch(err => {
            console.log("err: ", err);
            res.send(err);
        });
    }

    static returnBook = (req, res, next) => {
        this.getUserById(req.params.user_id)
        .then(user => {
            let returnBookCopy = user.borrowedBooks
                .find(bookCopy => bookCopy.bookId == req.params.book_id);

            if(returnBookCopy) {
                let remainingBorrowedBooks = user.borrowedBooks
                    .filter(bookCopy => bookCopy.bookId != req.params.book_id);
                user.setBorrowedBooks(remainingBorrowedBooks);

                models.Copies.update({
                    ...returnBookCopy,
                    status: CopiesStatus.AVAILABLE
                }, {
                    where: {
                        id: returnBookCopy.id
                    }
                })
                .then(result => {
                    res.send("Return successful");
                });
            } else {
                res.send("User didn't borrow this book!");
            }
        })
    }

    static removeUser = (req, res, next) => {
        models.Users.destroy({
            where: {
                id: req.params.user_id
            }
        })
        .then(user => {
            res.send("Remove user successful");
        });
    }
}