const { ApolloServer, gql } = require('apollo-server');
const requireDir = require('webpack-requiredir');

const resolvers = requireDir(require.context('./resolvers', true, /\.js$/));
const typeDefFiles = requireDir(require.context('./typeDefs', true, /\.js$/));

console.log('resolvers', JSON.stringify(resolvers));
console.log('typeDefFiles', JSON.stringify(typeDefFiles));

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