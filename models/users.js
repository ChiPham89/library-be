module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        email: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING
    });

    Users.associate = function(models) {
        Users.belongsToMany(models.Copies, {
            through: 'BorrowedBooks', 
            foreignKey: 'userId', 
            as: 'borrowedBooks'
        })
    };
    return Users;
}