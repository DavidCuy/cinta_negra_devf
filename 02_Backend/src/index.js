require('dotenv').config();
const { GraphQLServer } = require('graphql-yoga');
const { importSchema } = require('graphql-import');
const mongoose = require('mongoose');

const typeDefs = importSchema('./schema.graphql');

// MongoDB connection
mongoose.connect(process.env.MONGO_ENDPOINT, { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('MongoDB conectado correctamente');
    }
});

const { GetAllPosts, GetPostById, GetUserByName, GetUsers } = require('./resolvers/Querys');
const { createPost, createUser, login } = require('./resolvers/Mutations');

const resolvers = {
    Query: {
        GetPostById,
        GetAllPosts,
        GetUserByName,
        GetUsers
    },
    Mutation: {
        createPost,
        createUser,
        login
    }
};

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))