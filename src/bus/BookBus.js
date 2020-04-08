import models from '../../models';
import CopiesStatus from '../constant/CopiesStatus';

export default class BookBus {
    static getBooks = () => {
        return models.Books.findAll();
    }

    static getBooksByAuthor = (authorId) => {
        return models.Books.findAll({
            where: {
                authorId: authorId
            }
        });
    }

    static getBookById = (authorId, bookId) => {
        return models.Books.findOne({
            where: {
                authorId: authorId,
                id: bookId
            },
            include: ['author', 'copies']
        });
    }

    static createBook = (authorId, book) => {
        let numberOfCopy = book.numberOfCopy ? book.numberOfCopy : 1;
        return models.Books.create({
            ...book,
            authorId
        })
        .then(book => {
            for(let i = 0; i < numberOfCopy; i++) {
                models.Copies.create({
                    status: CopiesStatus.AVAILABLE,
                    bookId: book.id
                })
            }
            
            return book;
        });
    }

    static addCopies = (authorId, bookId, numberOfCopy) => {
        return models.Books.findOne({
            where: {
                authorId: authorId,
                id: bookId
            }
        })
        .then(book => {
            for(let i = 0; i < numberOfCopy; i++) {
                models.Copies.create({
                    status: CopiesStatus.AVAILABLE,
                    bookId: book.id
                })
            }
            
            return book;
        });
    }

    static updateBook = (authorId, bookId, book) => {
        return models.Books.update({
            ...book,
            authorId
        }, {
            where: {
                authorId: authorId,
                id: bookId
            }
        });
    }

    static removeBook = (authorId, bookId) => {
        return models.Books.destroy({
            where: {
                authorId: authorId,
                id: bookId
            }
        });
    }

    static getAvailableCopy = (bookId) => {
        return models.Books.findOne({
            where: {
                id: bookId
            },
            include: ['author', 'copies']
        })
        .then(book => {
            return book.copies.find(copy => copy.status == CopiesStatus.AVAILABLE)
        });
    }
}