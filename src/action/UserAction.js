import UserBus from '../bus/UserBus';
import ActionHandler from './ActionHandler';

export default class UserAction extends ActionHandler{
    static getUsers = (req, res, next) => {
        return UserBus.getUsers()
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            this.handleError(err, res);
        });
    }

    static getUser = (req, res, next) => {
        return UserBus.getUserById(req.params.user_id)
        .then(user => {
            res.send(user);
        })
        .catch(err => {
            this.handleError(err, res);
        });
    }

    static createUser = (req, res, next) => {
        return UserBus.createUser(req.body)
        .then(user => {
            res.send(user);
        })
        .catch(err => {
            this.handleError(err, res);
        });
    }

    static updateUser = (req, res, next) => {
        return UserBus.updateUser(req.params.user_id, req.body)
        .then(user => {
            res.send(user);
        })
        .catch(err => {
            this.handleError(err, res);
        });
    }

    static borrowBook = (req, res, next) => {
        return UserBus.borrowBook(req.params.user_id, req.params.book_id)
        .then(result => {
            res.send("User borrow book successful");
        })
        .catch(err => {
            this.handleError(err, res);
        });
    }

    static returnBook = (req, res, next) => {
        return UserBus.returnBook(req.params.user_id, req.params.book_id)
        .then(result => {
            res.send("User return book successful");
        })
        .catch(err => {
            this.handleError(err, res);
        });
    }

    static removeUser = (req, res, next) => {
        return UserBus.removeUser(req.params.user_id)
        .then(user => {
            res.send("Remove user successful");
        })
        .catch(err => {
            this.handleError(err, res);
        });
    }
}