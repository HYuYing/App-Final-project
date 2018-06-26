import React from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';
import { DrawerNavigator } from 'react-navigation'; // Version can be specified in package.json
import Header from './Header';
import Home_1 from './Home_1';
import Home_2 from './Home_2';

export const RootDrawer = DrawerNavigator({
  TypeList: {
    screen: Home_1,
    navigationOptions: {
      drawerLabel:
      <ImageBackground source={require('./page1_img/TypeList.png')} style={{width: 280, height: 100}}>
      </ImageBackground>
    },
  },
  TypeList_1: {
    screen: Home_2,
    navigationOptions: {
      drawerLabel:
      <ImageBackground source={require('./page1_img/TypeList_1.png')} style={{width: 280, height: 100}}>
      </ImageBackground>
    },
  },
  TypeList_2: {
    screen: Home_2,
    navigationOptions: {
      drawerLabel:
      <ImageBackground source={require('./page1_img/TypeList_2.png')} style={{width: 280, height: 100}}>
      </ImageBackground>
    },
  },
  TypeList_3: {
    screen: Home_2,
    navigationOptions: {
      drawerLabel:
      <ImageBackground source={require('./page1_img/TypeList_3.png')} style={{width: 280, height: 100}}>
      </ImageBackground>
    },
  },
  TypeList_4: {
    screen: Home_2,
    navigationOptions: {
      drawerLabel:
      <ImageBackground source={require('./page1_img/TypeList_4.png')} style={{width: 280, height: 100}}>
      </ImageBackground>
    },
  },
  TypeList_5: {
    screen: Home_2,
    navigationOptions: {
      drawerLabel:
      <ImageBackground source={require('./page1_img/TypeList_5.png')} style={{width: 280, height: 72}}>
      </ImageBackground>
    },
  },
  TypeList_6: {
    screen: Home_2,
    navigationOptions: {
      drawerLabel:
      <ImageBackground source={require('./page1_img/TypeList_6.png')} style={{width: 280, height: 72}}>
      </ImageBackground>
    },
  },
});


export default class home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Header'} />
        <ImageBackground source={require('./page1_img/Main_Page_Context Bg.png')} style={{width: null, height: 625}}>
          <RootDrawer />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});