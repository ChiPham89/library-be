import BookBus from '../bus/BookBus';

export default class BookAction {
    static getBooks = (req, res, next) => {
        return BookBus.getBooks()
        .then(books => {
            res.send(books);
        });
    }

    static getBooksByAuthor = (req, res, next) => {
        return BookBus.getBooksByAuthor(req.params.author_id)
        .then(books => {
            res.send(books);
        });
    }

    static getBook = (req, res, next) => {
        return BookBus.getBooksByAuthor(req.params.author_id, req.params.book_id)
        .then(book => {
            res.send(book);
        });
    }

    static createBook = (req, res, next) => {
        return BookBus.createBook(req.params.author_id, req.body)
        .then(book => {
            res.send(book);
        });
    }

    static addCopies = (req, res, next) => {
        return BookBus.addCopies(req.params.author_id, req.params.book_id, req.body.numberOfCopy)
        .then(book => {
            res.send(book);
        });
    }

    static updateBook = (req, res, next) => {
        return BookBus.updateBook(req.params.author_id, req.params.book_id, req.body)
        .then(book => {
            res.send(book);
        });
    }

    static removeBook = (req, res, next) => {
        return BookBus.removeBook(req.params.author_id, req.params.book_id)
        .then(book => {
            res.send("Remove book successful");
        })
    }
}