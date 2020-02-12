const jwt = require('jsonwebtoken');

const verifyAdmin = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, 'admin_secret_key');
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            "status": "error",
            "error": error.message
        })
    }
}

const verifyBoth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, "admin_secret_key", (err, data) => {
            if (err) {
                jwt.verify(token, "user_secret_key", (err, userData) => {
                    if (err) {
                        return res.status(401).json({
                            "status": "error",
                            "error": "Token Authentication Failed"
                        })
                    }
                    else {
                        req.userData = userData;
                        next();
                    }
                })
            }
            else {
                req.userData = data
                next();
            }
        })
    } catch (error) {
        return res.status(401).json({
            "status": "error",
            "error": error.message
        })
    }

}

module.exports = {
    verifyAdmin,
    verifyBoth
}