const bcrypt = require('bcrypt');
const User = require('../models/User.model');
const tokens = require('../services/jwt.services');

const authenticate = (params) => {
    return new Promise((resolve, reject) => {
        let { email, password } = params.data;
        User.findOne({ email: email }).then((user) => {
            if (!user) reject(new Error('El usuario no está registrado'));

            bcrypt.compare(password, user.password, (err, isValid) => {
                isValid ? resolve(tokens.generateToken(user)) : reject(new Error('error al capturar la contraseña'));
            });
        });
    }).then((tokenUser) => {

        return {
            token: tokenUser,
            message: 'OK'
        };
    });
};

module.exports = authenticate;