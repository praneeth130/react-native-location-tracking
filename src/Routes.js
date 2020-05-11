import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/Home';
import MapScreen from './screens/Map';

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Map: {
    screen: MapScreen,
  },
});

const Routes = createAppContainer(RootStack);

export default Routes;
