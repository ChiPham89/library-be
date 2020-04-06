import models from '../../models';

export default class UserBus {
    static getUsers = (req, res, next) => {
        models.Users.findAll()
        .then(users => {
            res.send(users);
        });
    }

    static getUser = (req, res, next) => {
        models.Users.findOne({
            where: {
                id: req.params.user_id
            }
        })
        .then(user => {
            res.send(user);
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