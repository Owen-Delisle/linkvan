import {ApolloClient} from 'apollo-client';
import {WebSocketLink} from 'apollo-link-ws';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloLink, split} from 'apollo-link';
import {getMainDefinition} from 'apollo-utilities';
import {onError} from 'apollo-link-error';

const httpLink = new HttpLink({
  uri: 'http://localhost:5466/',
  credentials: 'same-origin',
});

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:5466/',
  options: {
    reconnect: true,
  },
});

const link = split(
  // split based on operation type
  ({query}) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({graphQLErrors, networkError}) => {
      if (graphQLErrors)
        graphQLErrors.map(({message, locations, path}) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    link,
  ]),
  cache: new InMemoryCache(),
});

export default client;
