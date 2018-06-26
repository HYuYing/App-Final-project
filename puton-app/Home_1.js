import React from 'react';
import { StyleSheet, ScrollView, View, Image, ImageBackground } from 'react-native';
import Header from './Header';



export default class home1 extends React.Component {
  render() {
    return (
      <ImageBackground source={require('./page1_img//Clothes.png')} style={{width: null, height: 625}}>
      </ImageBackground>
    );
  }
}