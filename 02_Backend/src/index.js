require('dotenv').config();
const { GraphQLServer } = require('graphql-yoga');
const { importSchema } = require('graphql-import');
const { makeExecutableSchema } = require('graphql-tools');
const mongoose = require('mongoose');
const { AuthDirective } = require('./resolvers/directive');
const verifyToken = require('./utils/verifyToken');

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

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
    schemaDirectives: {
        auth: AuthDirective
    }
});

const server = new GraphQLServer({
    schema,
    context: async({ request }) => verifyToken(request)
});
server.start(() => console.log('Server is running on localhost:4000'))