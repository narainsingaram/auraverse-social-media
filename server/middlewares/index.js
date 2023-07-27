const expressJwt = require('express-jwt');

const requireSignIn = expressJwt({ 
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"],
});

module.exports = requireSignIn;
