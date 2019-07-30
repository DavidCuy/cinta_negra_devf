const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        required: 'Users'
    }
});

// postSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Posts', postSchema);