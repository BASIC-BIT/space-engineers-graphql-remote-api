const { ApolloServer, gql } = require('apollo-server');
const requireDir = require('require-dir');

const resolvers = requireDir('./resolvers');
const typeDefFiles = requireDir('./typeDefs');

const typeDefs = gql`
${Object.entries(typeDefFiles)
  .map(([key, value]) => `type ${key} ${value}`)
  .join('\n')}
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});