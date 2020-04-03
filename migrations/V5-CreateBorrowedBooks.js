'use strict'
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('BorrowedBooks', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            copyId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    models: "Copies",
                    key: "id"
                }
            },
            userId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    models: "Users",
                    key: "id"
                }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('BorrowedBooks');
    }
}