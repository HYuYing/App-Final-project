import React from 'react';
import { StyleSheet, ScrollView, View, Image, ImageBackground } from 'react-native';
import Header from './Header';



export default class home1 extends React.Component {
  render() {
    return (
      <ImageBackground source={require('./page1_img//Clothes.png')} style={{width: null, height: 625}}>
        <ScrollView style={styles.container}>
          <Image
              source={require('./page1_img/ClothesList_1.png')}
              style={{ height: 125 , width: 1000}}
          />
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});