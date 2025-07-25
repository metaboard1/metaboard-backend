'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Articles', {
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
                type: Sequelize.STRING
            },
            author: {
                type: Sequelize.STRING
            },
            authorSocials: {
                type: Sequelize.JSON,
                allowNull: false,
                defaultValue: {
                    linkedin: '',
                    facebook: '',
                    twitter: ''
                }
            },
            contentHtml: {
                type: Sequelize.TEXT
            },
            contentCss: {
                type: Sequelize.TEXT
            },
            estimateReadTime: {
                type: Sequelize.INTEGER
            },
            coverImage: {
                type: Sequelize.STRING
            },
            isFeatured: {
                type: Sequelize.BOOLEAN,
                default: false
            },
            isActive: {
                type: Sequelize.BOOLEAN,
                default: false
            },
            publishedAt: {
                type: Sequelize.DATE
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
        await queryInterface.dropTable('Articles');
    }
};