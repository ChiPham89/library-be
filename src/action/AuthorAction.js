import AuthorBus from '../bus/AuthorBus';

export default class AuthorAction {
    static getAuthors = (req, res, next) => {
        return AuthorBus.getAuthors()
        .then(authors => {
            res.send(authors);
        });
    }

    static getAuthor = (req, res, next) => {
        return AuthorBus.getAuthorById(req.params.author_id)
        .then(author => {
            res.send(author);
        });
    }

    static createAuthor = (req, res, next) => {
        return AuthorBus.createAuthor(req.body)
        .then(author => {
            res.send(author);
        });
    }

    static updateAuthor = (req, res, next) => {
        return AuthorBus.updateAuthor(req.params.author_id, req.body)
        .then(author => {
            res.send(author);
        });
    }

    static removeAuthor = (req, res, next) => {
        return AuthorBus.removeAuthor(req.params.author_id)
        .then(author => {
            res.send("Remove author successful");
        });
    }
}