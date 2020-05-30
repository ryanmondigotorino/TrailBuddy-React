/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import store from './store';
import Home from './src/screens/Home';


const Stack = createStackNavigator();

const options = {
  headerBackground: () => (
    <BlurView tint="light" intensity={1000} style={StyleSheet.absoluteFill} />
  ),
};

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={options}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
