import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
const App = createStackNavigator({
 
    FirstPage: { screen: FirstPage }, 
    
    SecondPage: { screen: SecondPage }, 

    ThirdPage: { screen: ThirdPage},
  },
  {
    initialRouteName: 'FirstPage',
  }
);
export default createAppContainer(App);
