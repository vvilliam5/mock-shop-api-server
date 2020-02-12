const model = require('./index');
//view all products
const viewAll = async (request, response) => {
    try {
        await model.Product.sync();
        console.log('Creates the table if it doesn\'t exist and do nothing if it already exists')
        const users = await model.Product.findAll();
        response.status(200).json({ "status": "success", "data": users });
    } catch (error) {
        response.status(401).json({ "status": error.status, "error": error.message })
    }
};
//view product by id
const viewProductByID = async (request, response) => {
    try {
        const user = await model.Product.findAll({
            where: {
                id: request.params.id
            }
        });
        response.status(200).json({ "status": "success", "data": user });
    } catch (error) {
        response.status(401).json({ "status": error.status, "error": error.message })
    }
};
//create new product
const createNew = async (request, response) => {
    try {
        await model.Product.sync();
        let { name, description, category, price, inStock } = request.body;
        name = name.toLowerCase();
        description = description.toLowerCase();
        category = category.toLowerCase();
        const product = await model.Product.create({
            name,
            description,
            category,
            price,
            inStock
        });
        response.status(200).json({ "status": "success", "data": product });
    } catch (error) {
        response.status(401).json({ "status": "error", "error": error.message })
    }
};
//delete a product
const deleteProduct = async (request, response) => {
    try {
        const product = await model.Product.destroy({
            where: {
                id: request.params.id
            }
        });
        response.status(200).json({ "status": "success", "data": product });
    } catch (error) {
        response.status(401).json({ "status": "error", "error": error.message })
    }
};
//update new product
const updateProduct = async (request, response) => {
    try {
        let { name, description, category, price, inStock } = request.body;
        name = name.toLowerCase();
        description = description.toLowerCase();
        category = category.toLowerCase();
        const product = await model.Product.update({
            name,
            description,
            category,
            price,
            inStock
        }, {
            where: {
                id: request.params.id
            }
        });
        response.status(200).json({ "status": "success", "data": product });
    } catch (error) {
        response.status(401).json({ "status": "error", "error": error.message })
    }
};

module.exports = { viewAll, viewProductByID, createNew, deleteProduct, updateProduct };
