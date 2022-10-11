const knex = require('../connection');

const getProducts = async (req, res) => {
    const { nome } = req.body;

    try {
        const product = await knex('produtos').where({ nome }).first();

        if (!product) {
            return res.status(404).json("Produto não encontrado");
        };

        return res.status(200).json(product);
    } catch (error) {
        return res.status(400).json(error.message);
    };
};

module.exports = {
    getProducts
};
