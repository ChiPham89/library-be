import UserBus from '../bus/UserBus';

export default class UserAction {
    static getUsers = (req, res, next) => {
        return UserBus.getUsers()
        .then(users => {
            res.send(users);
        });
    }

    static getUser = (req, res, next) => {
        return UserBus.getUserById(req.params.user_id)
        .then(user => {
            res.send(user);
        })
        .catch(err => {
            if (err.status) {
                res.status(err.status).send(err.message);
            } else {
                console.log(err.stack);
                res.status(500).send("Something went wrong!");
            }
        });;
    }

    static createUser = (req, res, next) => {
        return UserBus.createUser(req.body)
        .then(user => {
            res.send(user);
        });
    }

    static updateUser = (req, res, next) => {
        return UserBus.updateUser(req.params.user_id, req.body)
        .then(user => {
            res.send(user);
        });
    }

    static borrowBook = (req, res, next) => {
        return UserBus.borrowBook(req.params.user_id, req.params.book_id)
        .then(result => {
            res.send("User borrow book successful");
        })
        .catch(err => {
            if (err.status) {
                res.status(err.status).send(err.message);
            } else {
                console.log(err.stack);
                res.status(500).send("Something went wrong!");
            }
        });
    }

    static returnBook = (req, res, next) => {
        return UserBus.returnBook(req.params.user_id, req.params.book_id)
        .then(result => {
            res.send("User return book successful");
        })
        .catch(err => {
            if (err.status) {
                res.status(err.status).send(err.message);
            } else {
                console.log(err.stack);
                res.status(500).send("Something went wrong!");
            }
        });
    }

    static removeUser = (req, res, next) => {
        return UserBus.removeUser(req.params.user_id)
        .then(user => {
            res.send("Remove user successful");
        });
    }
}