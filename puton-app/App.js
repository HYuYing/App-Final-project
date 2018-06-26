import React, { Component } from 'react';
import { StyleSheet, Button, Image, View, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import { TabNavigator } from 'react-navigation'; // Version can be specified in package.json
import Home from './Home_page';
import Info from './Info_page';
import Camara from './Camera';
import Wardrobe from './Wardrobe_page';
import User from './User_page';
//import Header from './Header';



const PutON = TabNavigator(
  {
    Home: {
      screen: Home,
    },
    Info: {
      screen: Info,
    },
    Camara: {
      screen: Camara,
    },
    Wardrobe: {
      screen: Wardrobe,
    },
    User: {
      screen: User,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Info') {
          iconName = `ios-paper${focused ? '' : '-outline'}`;
        } else if (routeName === 'Camara') {
          iconName = `ios-qr-scanner${focused ? '' : '-outline'}`;
        } else if (routeName === 'Wardrobe') {
          iconName = `ios-shirt${focused ? '' : '-outline'}`;
        } else if (routeName === 'User') {
          iconName = `ios-person${focused ? '' : '-outline'}`;
        }
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarPosition: 'bottom',
    tabBarOptions:{ 
      activeTintColor: '#4682B4',
      labelStyle: {
        fontSize: 12,
      },
      tabStyle: {
        width: 100,
      },
      style: {
        backgroundColor: '#fff',
      },
    },
    animationEnabled: true,
  }
);

export default PutON;