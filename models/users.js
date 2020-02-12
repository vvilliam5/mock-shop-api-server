const jwt = require('jsonwebtoken');
const model = require('./index');
//view all users
const viewAll = async (request, response) => {
    try {
        await model.User.sync();
        console.log('Creates the table if it doesn\'t exist and do nothing if it already exists')
        const users = await model.User.findAll();
        // console.log('All users ', JSON.stringify(users, null, 2));
        response.status(200).json({ "status": "success", "data": users });
        // const williams = User.create({
        //   firstName: "Oluwafemi",
        //   lastName: 'WIlliams',
        //   email: "admin@gmail.com",
        //   password: "admin123",
        //   isAdmin: true
        // })
        // console.log('Williams was created with id: ', williams.id)
    } catch (error) {
        // console.log('There was an error: ', error.message)
        response.status(401).json({ "status": error.status, "error": error.message })
    }
};
//sign up
const signUp = async (request, response) => {
    try {
        // await User.sync();
        // console.log('Creates the table if it doesn\'t exist and do nothing if it already exists')
        let { firstName, lastName, email, password, isAdmin } = request.body;
        firstName = firstName.toLowerCase();
        lastName = lastName.toLowerCase();
        email = email.toLowerCase();
        const williams = await model.User.create({
            firstName,
            lastName,
            email,
            password,
            isAdmin
        });
        response.status(200).json({ "status": "success", "data": williams });
        // console.log('Williams was created with id: ', williams.id)
    } catch (error) {
        // console.log('There was an error: ', error.message)
        response.status(401).json({ "status": "error", "error": error.message })
    }
};
//login
const login = async (request, response) => {
    let { email, password } = request.body;
    email = email.toLowerCase();
    try {
        const user = await model.User.findAll({
            where: {
                email
            }
        });
        if (password === user[0].password) {
            if (user[0].isAdmin) {
                const token = jwt.sign({
                    id: user[0].id,
                    email: user[0].email,
                    firstName: user[0].firstName,
                    lastName: user[0].lastName
                }, "admin_secret_key")
                return response.status(200).json({
                    "status": "success",
                    "data": token
                })
            }
            else {
                const token = jwt.sign({
                    id: user[0].id,
                    email: user[0].email,
                    firstName: user[0].firstName,
                    lastName: user[0].lastName
                }, "user_secret_key")
                return response.status(200).json({
                    "status": "success",
                    "data": token
                })
            }
        }
        else {
            return response.status(400).json({ "status": "error", "error": "email or password incorrect" });
        }
    } catch (error) {
        // console.log('There was an error: ', error.message)
        response.status(401).json({ "status": error.status, "error": error.message })
    }
};
module.exports = { viewAll, signUp, login };
