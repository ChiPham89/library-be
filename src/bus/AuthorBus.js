import models from '../../models';

export default class AuthorBus {
    static getAuthors = (req, res, next) => {
        models.Authors.findAll()
        .then(authors => {
            res.send(authors);
        });
    }

    static getAuthor = (req, res, next) => {
        models.Authors.findOne({
            where: {
                id: req.params.author_id
            }
        })
        .then(author => {
            res.send(author);
        });
    }

    static createAuthor = (req, res, next) => {
        models.Authors.create({
            name: req.body.name,
            penName: req.body.penName
        })
        .then(author => {
            res.send(author);
        });
    }

    static updateAuthor = (req, res, next) => {
        models.Authors.update({
            name: req.body.name,
            penName: req.body.penName
        }, {
            where: {
                id: req.params.author_id
            }
        })
        .then(author => {
            res.send(author);
        });
    }

    static removeAuthor = (req, res, next) => {
        models.Authors.destroy({
            where: {
                id: req.params.author_id
            }
        })
        .then(author => {
            res.send("Remove author successful");
        });
    }
}