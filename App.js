/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import store from './store';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import SignUp from './src/screens/Sign-up';


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
          name="Trail Buddy | Login"
          component={Login}
          options={options}
        />
        <Stack.Screen
          name="Trail Buddy | Sign Up"
          component={SignUp}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
