'use strict';
module.exports = (sequelize, DataTypes) => {
    const Books = sequelize.define('Books', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        title: DataTypes.STRING,
        authorId: DataTypes.INTEGER,
        category: DataTypes.STRING
    });
    Books.associate = (models) => {
        Books.belongsTo(models.Authors, {
            foreignKey: 'authorId',
            as: 'author', 
            onDelete: 'cascade'
        });

        Books.hasMany(models.Copies, {
            foreignKey: 'bookId', 
            as: 'copies',
            onDelete: 'CASCADE'
        });
    };
    return Books;
}