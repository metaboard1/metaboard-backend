'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Publications', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.TEXT
            },
            authors: {
                type: Sequelize.STRING
            },
            pages: {
                type: Sequelize.INTEGER
            },
            isbn: {
                type: Sequelize.STRING
            },
            publisher: {
                type: Sequelize.STRING
            },
            publicationDate: {
                type: Sequelize.DATE
            },
            price: {
                type: Sequelize.INTEGER
            },
            storeLink: {
                type: Sequelize.STRING
            },
            coverImage: {
                type: Sequelize.STRING
            },
            coverUrl:{
                type: Sequelize.TEXT
            },
            isActive: {
                type: Sequelize.BOOLEAN
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
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Publications');
    }
};