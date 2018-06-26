import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Animated, Dimensions, ImageBackground, Image, Linking, Button, Alert } from 'react-native';
import { Constants } from 'expo';

const { width } = Dimensions.get('window');

export default class App extends Component {
  state = {
    scrollX: new Animated.Value(0)
  }

  trackScrollX = ({ nativeEvent: { contentOffset: { x } } }) => {
    console.log(x);
    this.state.scrollX.setValue(x)
  };

  scrollInterpolation = this.state.scrollX.interpolate({
    inputRange: [width*1, width*1, width*1],
    outputRange: [0, 0, 0]
  });

  _handleOpenWithLinking = () => {
    Linking.openURL('https://magazines.elle.com.hk/subscription/');
  }

  render() {
    return (
      <ImageBackground source={require('./page2_img/Info_Page Bg.png')} style={{width: null, height: 625}}>
        <ScrollView style={styles.container}>
          <Animated.ScrollView horizontal={true} pagingEnabled={true} scrollEventThrottle={16} onScroll={this.trackScrollX}>
            <View style={{ paddingTop: 0,paddingLeft: 80, paddingRight: 120 }}>
              <Image source={require('./page2_img/Cover1.png')} style={{width: 250, height: 260}}  />
              <Button title="       " onPress={this._handleOpenWithLinking}/>
            </View>
            <View style={{ paddingTop: 0,paddingLeft: 50, paddingRight: 120 }}><Image source={require('./page2_img/Cover2.png')} style={{width: 250, height: 260}} /></View>
            <View style={{ paddingTop: 0,paddingLeft: 50, paddingRight: 120 }}><Image source={require('./page2_img/Cover3.png')} style={{width: 250, height: 260}} /></View>
          </Animated.ScrollView>
          <Animated.View style={{ transform: [{ translateY: this.scrollInterpolation }],paddingTop: 35 }}>
            <View style={{ paddingTop: 0, paddingBottom: 50 }}><Image source={require('./page2_img/P_1.png')} style={{width: 415, height: 620}} /></View>
            <View style={{ paddingTop: 0, paddingBottom: 50 }}><Image source={require('./page2_img/P_2.png')} style={{width: 415, height: 620}} /></View>
            <View style={{ paddingTop: 0, paddingBottom: 50 }}><Image source={require('./page2_img/P_3.png')} style={{width: 415, height: 620}} /></View>
            <View style={{ paddingTop: 0, paddingBottom: 50 }}><Image source={require('./page2_img/P_4.png')} style={{width: 415, height: 620}} /></View>
            <View style={{ paddingTop: 0, paddingBottom: 50 }}><Image source={require('./page2_img/P_5.png')} style={{width: 415, height: 620}} /></View>
          </Animated.View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
