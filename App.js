import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import Demo from './demo';
import {gql, useQuery} from '@apollo/client';

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: 'https://api.graphql.guide/graphql',
  cache,
  defaultOptions: {watchQuery: {fetchPolicy: 'cache-and-network'}},
});
export default function App() {
  return (
    <ApolloProvider client={client}>
      <Demo />
    </ApolloProvider>
  );
}
