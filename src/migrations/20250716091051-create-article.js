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
                type: Sequelize.TEXT
            },
            author: {
                type: Sequelize.STRING
            },
            authorSocials: {
                type: Sequelize.JSONB,
                allowNull: false,
                defaultValue: {
                    linkedin: '',
                    facebook: '',
                    twitter: ''
                }
            },
            tags: {
                type: Sequelize.JSONB,
                allowNull: false,
                default: []
            },
            contentHtml: {
                type: Sequelize.TEXT,
            },
            contentCss: {
                type: Sequelize.TEXT,
            },
            estimateReadTime: {
                type: Sequelize.INTEGER
            },
            coverImage: {
                type: Sequelize.STRING
            },
            coverUrl:{
                type: Sequelize.TEXT
            },
            isForMetaRule: {
                type: Sequelize.BOOLEAN,
                default: false
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