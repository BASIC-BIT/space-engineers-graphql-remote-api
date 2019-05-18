import { getStatisticStore } from './util/statisticLogger';

const { ApolloServer, gql } = require('apollo-server');
const requireDir = require('webpack-requiredir');

const resolvers = requireDir(require.context('./resolvers', true, /\.js$/));
const typeDefFiles = requireDir(require.context('./types', true, /\.js$/));

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

  const statisticLogger = getStatisticStore();
  statisticLogger.start();
});