const model = require('./index');
//view all products in cart
const viewCart = async (request, response) => {
    try {
        console.log('Creates the table if it doesn\'t exist and do nothing if it already exists')
        const cart = await model.Cart.findAll({
            where: {
                userID: request.params.id
            }
        });
        response.status(200).json({ "status": "success", "data": cart });
    } catch (error) {
        response.status(401).json({ "status": error.status, "error": error.message })
    }
};
//add product to cart
const addToCart = async (request, response) => {
    try {
        let { productID } = request.body;
        let userID = request.params.id
        const cart = await model.Cart.create({
            productID,
            userID
        });
        response.status(200).json({ "status": "success", "data": cart });
    } catch (error) {
        response.status(401).json({ "status": "error", "error": error.message })
    }
};
//delete a product from cart
const deleteProductFromCart = async (request, response) => {
    try {
        const cart = await model.Cart.destroy({
            where: {
                productID: request.params.pID,
                userID: request.params.id
            }
        });
        response.status(200).json({ "status": "success", "data": cart });
    } catch (error) {
        response.status(401).json({ "status": "error", "error": error.message })
    }
};

module.exports = { viewCart, addToCart, deleteProductFromCart };
