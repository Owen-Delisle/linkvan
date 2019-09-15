import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Image} from 'react-native';

import MapScreen from '../screens/map';
import NewsScreen from '../screens/news';
import InfoScreen from '../screens/info';

const MapStack = createStackNavigator({
  Map: MapScreen,
});

const NewsStack = createStackNavigator({
  Profile: NewsScreen,
});

const InfoStack = createStackNavigator({
  Info: InfoScreen,
});

export const AppStack = createBottomTabNavigator(
  {Map: MapStack, News: NewsStack, Info: InfoStack},
  {
    initialRouteName: 'Map',
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let image;
        let style = {marginBottom: 25};
        let showStyle = true;

        if (routeName === 'Map') {
          tabBarVisible: false;
          focused
            ? (image = require('../assets/asset_index/menuTabBtn_map_selected.png'))
            : (image = require('../assets/asset_index/menuTabBtn_map_default.png'));
        } else if (routeName === 'Info') {
          tabBarVisible: false;
          focused
            ? (image = require('../assets/asset_index/menuTabBtn_linkvan_selected.png'))
            : (image = require('../assets/asset_index/menuTabBtn_linkvan_default.png'));
        } else if (routeName === 'News') {
          showStyle = false;
          focused
            ? (image = require('../assets/asset_index/menuTabBtn_news_selected.png'))
            : (image = require('../assets/asset_index/menuTabBtn_news_default.png'));
        }
        return (
          <Image style={(style = {height: 60, width: 55})} source={image} />
        );
      },
    }),
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: '#FF8587',
        height: 80,
      },
      activeBackgroundColor: '#1F5163',
    },
  },
);
