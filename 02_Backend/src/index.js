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

const { GetAllPosts, GetPostById, GetUserByName } = require('./resolvers/Querys');
const { createPost, createUser } = require('./resolvers/Mutations');

const resolvers = {
    Query: {
        GetPostById,
        GetAllPosts,
        GetUserByName
    },
    Mutation: {
        createPost,
        createUser
    }
};

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))