import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import fetch from 'node-fetch';

let instance;

class GraphQLBroker {
  client = new ApolloClient({
    uri: 'http://localhost:4000/',
    fetch,
  });

  async query(query) {
    return await this.client.query({ query: gql`query ${query}`})
  }
}

function getGraphQL() {
  if (instance) {
    return instance;
  } else {
    instance = new GraphQLBroker();

    return instance;
  }
}

export { getGraphQL };
