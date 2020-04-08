import BookBus from '../bus/BookBus';
import ActionHandler from './ActionHandler';

export default class BookAction extends ActionHandler {
    static getBooks = (req, res, next) => {
        return BookBus.getBooks()
        .then(books => {
            res.send(books);
        })
        .catch(err => {
            this.handleError(err, res);
        });
    }

    static getBooksByAuthor = (req, res, next) => {
        return BookBus.getBooksByAuthor(req.params.author_id)
        .then(books => {
            res.send(books);
        })
        .catch(err => {
            this.handleError(err, res);
        });
    }

    static getBook = (req, res, next) => {
        return BookBus.getBookById(req.params.author_id, req.params.book_id)
        .then(book => {
            res.send(book);
        })
        .catch(err => {
            this.handleError(err, res);
        });
    }

    static createBook = (req, res, next) => {
        return BookBus.createBook(req.params.author_id, req.body)
        .then(book => {
            res.send(book);
        })
        .catch(err => {
            this.handleError(err, res);
        });
    }

    static addCopies = (req, res, next) => {
        return BookBus.addCopies(req.params.author_id, req.params.book_id, req.body.numberOfCopy)
        .then(book => {
            res.send(book);
        })
        .catch(err => {
            this.handleError(err, res);
        });
    }

    static updateBook = (req, res, next) => {
        return BookBus.updateBook(req.params.author_id, req.params.book_id, req.body)
        .then(book => {
            res.send(book);
        })
        .catch(err => {
            this.handleError(err, res);
        });
    }

    static removeBook = (req, res, next) => {
        return BookBus.removeBook(req.params.author_id, req.params.book_id)
        .then(book => {
            res.send("Remove book successful");
        })
        .catch(err => {
            this.handleError(err, res);
        });
    }
}