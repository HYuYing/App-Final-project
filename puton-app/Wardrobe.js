import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Animated, Dimensions, ImageBackground, Image, Alert } from 'react-native';
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

  render() {
    return (
      <ImageBackground source={require('./page4_img/Wardrobe page Bg.png')} style={{width: null, height: 850}}>
        <ScrollView style={styles.container}>
          <Animated.ScrollView horizontal={true} pagingEnabled={true} scrollEventThrottle={16} onScroll={this.trackScrollX}>
          
            <View style={{ paddingTop: 0,paddingLeft: 0, paddingRight: 0 }}>
              <Image source={require('./page4_img/TBtn_Shirt.png')} style={{width: 414, height: 260,paddingBottom: 0}}  />
              <View style={{ paddingTop: 0,paddingBottom: 0,paddingLeft: 10, paddingRight: 10,width: 400, height: 50 }}>
                <Image source={require('./page4_img/BC text.png')} style={{width: 415, height: 50}}  />
              </View>
              <ScrollView style={{ paddingTop: 0,paddingLeft: 10, paddingRight: 10,width: 400, height: 200, flexDirection: 'row' }}>
                <Image source={require('./page4_img/BC_Shirt.png')} style={{width: 800, height: 200}}  />
              </ScrollView>
              <View style={{ paddingTop: 0,paddingBottom: 0,paddingLeft: 10, paddingRight: 10,width: 400, height: 50 }}>
                <Image source={require('./page4_img/DC text.png')} style={{width: 415, height: 50}}  />
              </View>
              <ScrollView style={{ paddingTop: 0,paddingLeft: 10, paddingRight: 10,width: 400, height: 200, flexDirection: 'row' }}>
                <Image source={require('./page4_img/DC_Shirt.png')} style={{width: 800, height: 200}}  />
              </ScrollView>
            </View>
            
            <View style={{ paddingTop: 0,paddingLeft: 0, paddingRight: 0 }}>
              <Image source={require('./page4_img/TBtn_Shorts.png')} style={{width: 414, height: 260,paddingBottom: 0}}  />
              <View style={{ paddingTop: 0,paddingBottom: 0,paddingLeft: 10, paddingRight: 10,width: 400, height: 50 }}>
                <Image source={require('./page4_img/BC text.png')} style={{width: 415, height: 50}}  />
              </View>
              <ScrollView style={{ paddingTop: 0,paddingLeft: 10, paddingRight: 10,width: 400, height: 200, flexDirection: 'row' }}>
                <Image source={require('./page4_img/BC_Shorts.png')} style={{width: 650, height: 200}}  />
              </ScrollView>
              <View style={{ paddingTop: 0,paddingBottom: 0,paddingLeft: 10, paddingRight: 10,width: 400, height: 50 }}>
                <Image source={require('./page4_img/DC text.png')} style={{width: 415, height: 50}}  />
              </View>
              <ScrollView style={{ paddingTop: 0,paddingLeft: 10, paddingRight: 10,width: 400, height: 200, flexDirection: 'row' }}>
                <Image source={require('./page4_img/DC_Shorts.png')} style={{width: 800, height: 200}}  />
              </ScrollView>
            </View>
            
          </Animated.ScrollView>
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