const {success, error} = require('../../../helpers/response');
const {Article} = require('../../../models');
const {Op, Sequelize} = require("sequelize");

const retrieveArticlesService = async (req) => {

        const {search, isActive, createdAt, page = 0, limit = 10} = req.query;

        let where = {};

        if (search) {
            let decodedSearch = decodeURIComponent(search);
            where = {
                [Op.or]: decodedSearch.charAt(0) !== '#' ?
                    [
                        {title: {[Op.iLike]: `%${search}%`}},
                        {description: {[Op.iLike]: `%${search}%`}},
                        {author: {[Op.iLike]: `%${search}%`}}
                    ]
                    :
                    [
                        Sequelize.literal(`CAST(id AS TEXT) LIKE '%${decodedSearch.slice(1)}%'`),
                        {tags: {[Op.contains]: [decodedSearch.slice(1)]}}
                    ]
            }

        }

        if (isActive) {
            where.isActive = isActive;
        }

        const {count, rows} = await Article.findAndCountAll({
            where,
            limit,
            offset: page * limit,
            order: [['id', 'DESC']]
        });


        return success('', {rows, count});

    }
;

module.exports = retrieveArticlesService;