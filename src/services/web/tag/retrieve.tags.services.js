const {success} = require('../../../helpers/response');
const {Tag} = require('../../../models');

const retrieveTagsService = async (req) => {

    const {page = 0, limit = 10} = req.query;

    const rows = await Tag.findAll({
        attributes: ['name'],
        limit,
        offset: page * limit,
        order: [['id', 'DESC']]
    });


    return success('', {rows});

};

module.exports = retrieveTagsService;