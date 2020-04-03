import models from '../../models';

export default class BookBus {
    static getBooks = (req, res, next) => {
        models.Books.findAll()
        .then(books => {
            res.send(books);
        });
    }

    static getBooksByAuthor = (req, res, next) => {
        models.Books.findAll({
            where: {
                authorId: req.params.author_id
            }
        })
        .then(books => {
            res.send(books);
        });
    }

    static getBook = (req, res, next) => {
        models.Books.findOne({
            where: {
                authorId: req.params.author_id,
                id: req.params.book_id
            }
        })
        .then(book => {
            res.send(book);
        })
    }

    static createBook = (req, res, next) => {
        let authorId = req.params.author_id;
        models.Books.create({
            ...req.body,
            authorId
        })
        .then(book => {
            res.send(book);
        });
    }

    static updateBook = (req, res, next) => {
        let authorId = req.params.author_id;
        models.Books.update({
            ...req.body,
            authorId
        }, {
            where: {
                authorId: req.params.author_id,
                id: req.params.book_id
            }
        })
        .then(book => {
            res.send(book);
        });
    }

    static removeBook = (req, res, next) => {
        models.Books.destroy({
            where: {
                authorId: req.params.author_id,
                id: req.params.book_id
            }
        })
        .then(book => {
            res.send("Remove book successful");
        })
    }
}