const {success} = require('../../../helpers/response');
const {Article} = require('../../../models');

const retrieveBlogByIdService = async (req) => {

    const {id} = req.query;

    const blog = await Article.findOne({
        where: {
            id,
            isForMetaRule: true,
            isActive: true
        },
        attributes: {
            exclude:['createdAt', 'updatedAt', 'isActive', 'isForMetaRule']
        }
    });

    return success('', blog);
};

module.exports = retrieveBlogByIdService;