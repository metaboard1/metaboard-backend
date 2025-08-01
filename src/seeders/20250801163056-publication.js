'use strict';

const { faker } = require('@faker-js/faker');

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

        const generateBookTitle = () => {
            const format = [
                `The ${faker.word.adjective()} ${faker.word.noun()}`,
                `The ${faker.word.noun()} of ${faker.word.adjective()} ${faker.word.noun()}`,
                `${faker.word.verb()}ing the ${faker.word.adjective()} ${faker.word.noun()}`
            ];
            return faker.helpers.arrayElement(format);
        };

        const generateBookSubtitle = () => {
            const format = [
                `A Journey Through ${faker.word.adjective()} ${faker.word.noun()}`,
                `How to ${faker.word.verb()} Your ${faker.word.adjective()} ${faker.word.noun()}`,
                `Uncovering the ${faker.word.adjective()} Truth Behind ${faker.word.noun()}`,
                `Lessons from a ${faker.word.adjective()} ${faker.word.noun()}`,
                `${faker.word.adjective()} Paths to ${faker.word.noun()}`
            ];
            return faker.helpers.arrayElement(format);
        };

        const generateBookDescription = () => {
            const hero = faker.person.firstName();
            const location = faker.location.city();
            const goal = faker.word.verb();
            const obstacle = faker.word.noun();
            const theme = faker.word.adjective();

            return `In the heart of ${location}, ${hero} must ${goal} the ${obstacle} that threatens their world. 
What begins as a simple quest quickly spirals into a ${theme} journey filled with mystery, betrayal, and unexpected allies. 
Perfect for fans of gripping adventures and unforgettable characters.`;
        };


        const generatePublisherName = () => {
            const formats = [
                `${faker.word.adjective()} ${faker.word.noun()} Press`,
                `${faker.person.lastName()} Publishing`,
                `${faker.word.noun()} House`,
                `${faker.word.noun()} Books`,
                `${faker.word.adjective()} Tree Publications`
            ];

            return faker.helpers.arrayElement(formats);
        };

        const generateBookCoverUrl = () => `https://picsum.photos/400/600?random=${faker.number.int(1000)}`;

        const publications = faker.helpers.multiple(()=>({
            title: generateBookTitle(),
            subTitle: generateBookSubtitle(),
            description: generateBookDescription(),
            pages: faker.number.int({min: 10, max: 400}),
            isbn: faker.number.int({min: 1_000_000_000_000, max: 9_999_999_999_999}).toString(),
            publisher: generatePublisherName(),
            publicationDate: faker.date.past(),
            price: faker.number.int({min: 400, max: 5000}),
            storeLinks: JSON.stringify({
                amazon: "https://www.amazon.com/Great-Gatsby-F-Scott-Fitzgerald/dp/0743273567",
                flipkart: "https://www.flipkart.com/great-gatsby/p/itmf3y9z8zxvgznf"
            }),
            coverImage: generateBookCoverUrl(),
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date()
        }), {
            count: 100,
        });

        // console.log(publications)

        await queryInterface.bulkInsert('Publications', publications, {});
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
