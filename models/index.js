//coonect to db
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres://qdliexhuqfnckg:27d8e309d8ff2a41e095e49c2fa3344d1d3bb573f01c9456dd14f3aaa04bfe79@ec2-3-230-106-126.compute-1.amazonaws.com:5432/d2sjrhprsp18kv?ssl=true');
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection was established successfully')
    }
    catch (error) {
        console.error('Unable to connect to db: ', error.message);
    }
})();

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
})

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "https://www.uh.edu/pharmacy/_images/directory-staff/no-image-available.jpg"
    },
    inStock: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})
const Cart = sequelize.define('Cart', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    productID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
})
module.exports = {
    User,
    Product,
    Cart
};