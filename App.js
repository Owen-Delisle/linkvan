/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Map from './src/screens/map';
import AppNavigator from './src/navigation/RootStackNavigator';
import client from './src/config/api';
import {ApolloProvider} from 'react-apollo';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppNavigator />
    </ApolloProvider>
  );
};

export default App;
