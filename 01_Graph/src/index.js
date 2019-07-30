const { GraphQLServer } = require('graphql-yoga');
const { importSchema } = require('graphql-import');

const typeDefs = importSchema('./schema.graphql');

const resolvers = {
    Query: {
        Saludo: (root, args) => `Hola ${args.name}, tienes ${args.age || 0} años`,
        Despedida: (root, args) => `Adios ${args.name}`,
        Edad: (root, args) => `Usted tiene ${args.age} años`
    },
    Mutation: {
        createPerson: (root, { data }) => ({ name: data.name, age: data.age })
    }
};

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))