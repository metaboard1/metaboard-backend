'use strict';

const {faker} = require("@faker-js/faker");
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

        const documents = faker.helpers.multiple(() => ({
            title: faker.lorem.sentence(5),
            description: faker.lorem.paragraphs(2),
            estimateReadTime: faker.number.int({min: 5, max: 100}),
            file: null,
            fileSize: faker.number.int({min: 1, max: 1048576}),
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        }), {
            count: 50,
        });

        await queryInterface.bulkInsert('Documents', documents, {});

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
