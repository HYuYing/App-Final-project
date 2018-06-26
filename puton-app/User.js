import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';



export default class home1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./page5_img/Login.png')} style={{width: 425, height: 650}}>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0,
  },
});