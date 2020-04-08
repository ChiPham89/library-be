import AuthorBus from '../bus/AuthorBus';
import ActionHandler from './ActionHandler';

export default class AuthorAction extends ActionHandler {
    static getAuthors = (req, res, next) => {
        return AuthorBus.getAuthors()
        .then(authors => {
            res.send(authors);
        })
        .catch(err => {
            this.handleError(err, res);
        });
    }

    static getAuthor = (req, res, next) => {
        return AuthorBus.getAuthorById(req.params.author_id)
        .then(author => {
            res.send(author);
        })
        .catch(err => {
            this.handleError(err, res);
        });
    }

    static createAuthor = (req, res, next) => {
        return AuthorBus.createAuthor(req.body)
        .then(author => {
            res.send(author);
        })
        .catch(err => {
            this.handleError(err, res);
        });
    }

    static updateAuthor = (req, res, next) => {
        return AuthorBus.updateAuthor(req.params.author_id, req.body)
        .then(author => {
            res.send(author);
        })
        .catch(err => {
            this.handleError(err, res);
        });
    }

    static removeAuthor = (req, res, next) => {
        return AuthorBus.removeAuthor(req.params.author_id)
        .then(author => {
            res.send("Remove author successful");
        })
        .catch(err => {
            this.handleError(err, res);
        });
    }
}