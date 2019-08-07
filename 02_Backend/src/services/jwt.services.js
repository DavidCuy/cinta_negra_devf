const jwt = require('jsonwebtoken');
const User = require('../models/User.model');

exports.generateToken = (user) => {
    const payload = {
        id: user._id,
        name: user.name,
        email: user.email

    };
    return jwt.sign(payload, process.env.SECRET, { expiresIn: '1hr' });
};

exports.verifyToken = async(req) => {
    const Authorization = req.get('Authorization');
    if (!Authorization) {
        return req;
    }

    const formToken = Authorization.replace('JWT ', "");
    const payload = jwt.verify(formToken, process.env.SECRET);
    if (!payload) {
        return req;
    }

    const user = await User.findOne({ _id: payload.id });
    return {...req, user };
};

exports.getTokenInfo = (token, callback) => {
    return jwt.verify(token, process.env.SECRET, (err, decoded) => {
        callback(err, decoded);
    });
};