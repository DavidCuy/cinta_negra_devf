const Post = require('../models/Post.model');
const User = require('../models/User.model');

const createPost = async(_, args) => {
    let data = args.data;
    let newPost = new Post({
        title: data.title,
        body: data.body,
        createdAt: data.createdAt,
        user: data.user
    });

    const myPost = await newPost.save();
    const post = await Post.findOne({ _id: myPost._id }).populate('user');
    console.log(post);
    return post;
};

const createUser = async(_, args) => {
    let newUser = new User({
        ...args.data
    });

    const myUser = await newUser.save();
    return myUser;
};


module.exports = {
    createPost,
    createUser
};