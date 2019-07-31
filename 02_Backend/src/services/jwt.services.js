const jwt = require('jsonwebtoken');

exports.generateToken = (user) => {
    const payload = {
        id: user._id,
        name: user.name,
        email: user.email

    };
    return jwt.sign(payload, process.env.SECRET, { expiresIn: '1hr' });
};

exports.getTokenInfo = (token, callback) => {
    return jwt.verify(token, process.env.SECRET, (err, decoded) => {
        callback(err, decoded);
    });
};