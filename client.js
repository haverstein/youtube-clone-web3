import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "<subgraph-url>",
  cache: new InMemoryCache(),
});

export default client;
