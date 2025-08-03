'use strict';

const {faker} = require('@faker-js/faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        const articles = faker.helpers.multiple(() => ({
            title: faker.lorem.sentence(5),
            description: faker.lorem.paragraphs(2),
            author: faker.person.fullName(),
            estimateReadTime: faker.number.int({min: 5, max: 100}),
            coverImage: null,
            tags: JSON.stringify([]),
            contentHtml: null,
            contentCss: null,
            authorSocials: JSON.stringify({
                twitter: "",
                facebook: "",
                linkedin: ""
            }),
            isForMetaRule: false,
            isFeatured: false,
            isActive: true,
            publishedAt: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
        }), {
            count: 50,
        });

        await queryInterface.bulkInsert('Articles', articles, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
