const Post = require('../models/Post.model');
const User = require('../models/User.model');

/**
 * Posts
 */


const GetPostById = async(_, args) => {
    let myPost = await Post.findById(args.id);
    if (!myPost) {
        throw new Error({
            description: 'No se encontró el post'
        });
    }

    return myPost;
};

const GetAllPosts = async(_, args) => {
    const allPosts = await Post.find().populate('user');
    return allPosts;
}

/**
 * Users
 */
const GetUserByName = async(_, args) => {
    const myUser = await User.findOne({ name: args.name });
    return myUser;
};

const GetUsers = async(_, args) => {
    const users = await User.find().exec();
    return users;
};

module.exports = {
    GetPostById,
    GetAllPosts,
    GetUserByName,
    GetUsers
};