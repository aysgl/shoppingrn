import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/router/stackNavigator';
import {Provider} from 'react-redux';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}
