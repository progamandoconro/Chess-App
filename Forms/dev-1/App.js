import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import MainPage from './mainPage'
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
const App = createStackNavigator({
 
    MainPage: {screen: MainPage},

    FirstPage: { screen: FirstPage }, 
    
    SecondPage: { screen: SecondPage }, 

    ThirdPage: { screen: ThirdPage},
  },
  {
    initialRouteName: 'MainPage',
    
  }
);
export default createAppContainer(App);