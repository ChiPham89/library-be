module.exports = (sequelize, DataTypes) => {
    const Copies = sequelize.define('Copies', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        status: DataTypes.STRING,
        bookId: DataTypes.INTEGER
    });
    Copies.associate = function(models) {
        Copies.belongsTo(models.Books, {
            foreignKey: 'bookId', 
            as: 'book'
        });
        Copies.belongsToMany(models.Users, {
            through: 'BorrowedBooks', 
            foreignKey: 'copyId', 
            as: 'borrowedUsers'
        });
    };
    return Copies;
}