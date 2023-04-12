'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.createTable('Cars', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING
            },
            plate: {
                type: Sequelize.STRING
            },
            manufacture: {
                type: Sequelize.STRING
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
            capacity: {
                type: Sequelize.INTEGER
            },
            description: {
                type: Sequelize.TEXT
            },
            availableAt: {
                type: Sequelize.STRING
            },
            transmission: {
                type: Sequelize.STRING
            },
            available: {
                type: Sequelize.BOOLEAN
            },
            type: {
                type: Sequelize.STRING
            },
            year: {
                type: Sequelize.INTEGER
            },
            options: {
                type: Sequelize.TEXT
            },
            specs: {
                type: Sequelize.TEXT
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
