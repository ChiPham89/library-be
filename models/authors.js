'use strict';
module.exports = (sequelize, DataTypes) => {
    const Authors = sequelize.define('Authors', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: DataTypes.STRING,
        penName: DataTypes.STRING
    });
    Authors.associate = function(models) {
        Authors.hasMany(models.Books, {as: 'books'})
    };
    return Authors;
}