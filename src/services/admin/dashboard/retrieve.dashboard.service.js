const {success} = require('../../../helpers/response');
const {Article, Publication, Document} = require('../../../models');

const retrieveDashboardService = async (req) => {


    const articleInactiveCount = await Article.count({
        where: {
            isForMetaRule: false,
            isActive: false
        }
    });
    const articleActiveCount = await Article.count({
        where: {
            isForMetaRule: false,
            isActive: true
        }
    });

    const blogInactiveCount = await Article.count({
        where: {
            isForMetaRule: true,
            isActive: false
        }
    });
    const blogActiveCount = await Article.count({
        where: {
            isForMetaRule: true,
            isActive: true
        }
    });

    const publicationInactiveCount = await Publication.count({
        where: {
            isActive: false
        }
    });

    const publicationActiveCount = await Publication.count({
        where: {
            isActive: true
        }
    });

    const documentInactiveCount = await Document.count({
        where: {
            isActive: false
        }
    });

    const documentActiveCount = await Document.count({
        where: {
            isActive: true
        }
    });


    return success('', {
        article: {
            total: articleActiveCount + articleInactiveCount,
            inactiveCount: articleInactiveCount,
            activeCount: articleActiveCount,
        },
        blog: {
            total: blogActiveCount + blogInactiveCount,
            inactiveCount: blogInactiveCount,
            activeCount: blogActiveCount,
        },
        publication: {
            total: publicationActiveCount + publicationInactiveCount,
            inactiveCount: publicationInactiveCount,
            activeCount: publicationActiveCount,
        },
        document: {
            total: documentActiveCount + documentInactiveCount,
            inactiveCount: documentInactiveCount,
            activeCount: documentActiveCount,
        }
    });

};

module.exports = retrieveDashboardService;