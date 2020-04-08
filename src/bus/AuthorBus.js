import models from '../../models';
import NotFoundError from '../error/NotFoundError';

export default class AuthorBus {
    static getAuthors = () => {
        return models.Authors.findAll();
    }

    static getAuthorById = (authorId) => {
        return models.Authors.findOne({
            where: {
                id: authorId
            }
        })
        .then(author => {
            if(author) {
                return author;
            } else {
                throw new NotFoundError(`Author with id ${authorId} is not found!`);
            }
        });
    }

    static createAuthor = (author) => {
        return models.Authors.create({
            ... author
        });
    }

    static updateAuthor = (authorId, author) => {
        return models.Authors.update({
            ...author
        }, {
            where: {
                id: authorId
            }
        });
    }

    static removeAuthor = (authorId) => {
        return models.Authors.destroy({
            where: {
                id: authorId
            }
        });
    }
}