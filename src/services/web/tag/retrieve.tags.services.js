const {success} = require('../../../helpers/response');
const {Tag} = require('../../../models');
const { Sequelize } = require("sequelize");

const retrieveTagsService = async (req) => {

    const {page = 0, limit = 30} = req.query;

    const rows = await Tag.findAll({
        attributes: ['name'],
        limit,
        offset: page * limit,
        order: Sequelize.literal("RANDOM()")
    });


    return success('', {rows});

};

module.exports = retrieveTagsService;