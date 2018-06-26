import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, ScrollView, Button } from 'react-native';
import { Constants } from 'expo';
import { TabNavigator, StackNavigator } from 'react-navigation'; // 2.3.1
import User from './User';


class User_Page extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{width: 420, height: 650, paddingTop: 0}} ><Image source={require('./img/User_Page Bg_2.png')} style={{width: 420, height: 260, paddingTop: 0 }} />
        <ScrollView style={{width: 400, height: 720, paddingTop: 20, paddingLeft: 20}} ><Image source={require('./img/Context.png')} style={{width: 420, height: 700}} /></ScrollView>
        </View>
      </View>
    );
  }
}

class User_Page_2 extends Component {

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./img/User_Page Bg_4.png')} style={{width: 420, height: 650, paddingTop: 0 }}>
            <View style={{width: 420, height: 20, paddingTop: 255 }}>
              <Button
              title="   "
              backgroundColor="#e1edf1"
              onPress={() => {this.props.navigation.navigate('User')}}
              />
            </View>
        </ImageBackground>
      </View>
    );
  }
}

const Main = StackNavigator({
  User_Page: {
    screen: User_Page,
  },
})
const Main_2 = StackNavigator({
  User_Page_2: {
    screen: User_Page_2,
  },
  User: {
    screen: User,
  },
})

const Root = TabNavigator({
    User_Page: {
      screen: Main,
    },
    Setting: {
      screen: Main_2,
    },
  },
  {
    scrollEnabled: true,
    swipeEnabled: true,
    pressOpacity: 1,
    tabBarPosition: 'top',
    tabBarOptions: {
      indicatorStyle: {height: 100},
      activeBackgroundColor :'#8db2bb',
      inactiveTintColor:'#dd604c',
      activeTintColor:'#fff',
    },
});

export default Root

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0,
    backgroundColor: '#fff',
  },
});
