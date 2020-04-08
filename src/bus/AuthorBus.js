import models from '../../models';

export default class AuthorBus {
    static getAuthors = () => {
        return models.Authors.findAll();
    }

    static getAuthorById = (authorId) => {
        return models.Authors.findOne({
            where: {
                id: authorId
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