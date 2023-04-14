'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.createTable('Cars', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
                autoIncrement: true
            },
            model: {
                type: Sequelize.STRING
            },
            image: {
                type: Sequelize.STRING
            },
            rentPerDay: {
                type: Sequelize.INTEGER
            },
            type: {
                type: Sequelize.STRING
            },
            size: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        })
    },
    async down (queryInterface, Sequelize) {
        await queryInterface.dropTable('Cars')
    }
}
