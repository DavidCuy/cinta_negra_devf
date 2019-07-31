const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    img: {
        type: String,
        default: ''
    }
});

userSchema.pre('save', function(next) {
    const user = this;

    bcrypt.genSalt(parseInt(process.env.SALTROUNDS), function(err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            user.password = hash;
            console.log(user);
            next();
        });
    });
});

const User = mongoose.model('user', userSchema);

module.exports = User;