const Post = require('../models/Post.model');
const User = require('../models/User.model');
const authenticate = require('../utils/authenticate');

const createPost = async(_, args) => {
    let newPost = new Post({
        title: args.data.title,
        body: args.data.body,
        createdAt: args.data.createdAt,
        user: args.data.user
    })
    const miPost = await newPost.save();
    const post = await Post.findOne({ _id: miPost._id }).populate('user')
    return post;
};

const createUser = async(_, args) => {
    let newUser = new User({
        ...args.data
    })
    const user = await newUser.save();
    return user;
};

const login = async(_, args) => {
    let user = await authenticate(args);
    return user;
}


module.exports = {
    createPost,
    createUser,
    login
};