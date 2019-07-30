const Post = require('../models/Post.model');
const User = require('../models/User.model');

/**
 * Posts
 */


const GetPostById = async(_, args) => {
    const myPost = await Post.findById(args.id);
    return myPost;
};

const GetAllPosts = async(_, args) => {
    const allPosts = await Post.find();
    return allPosts;
}

/**
 * Users
 */
const GetUserByName = async(_, args) => {
    const myUser = await User.findOne({ name: args.name });
    return myUser;
};

module.exports = {
    GetPostById,
    GetAllPosts,
    GetUserByName
};