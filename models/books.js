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
    Books.associate = function(models) {
        Books.belongsTo(models.Authors, {foreignKey: 'authorId',as: 'author'})
        Books.hasMany(models.Copies, {as: 'copies'})
    };
    return Books;
}