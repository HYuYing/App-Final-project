import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Header from './Header';
import User from './User_page_2';


export default class home1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Header'} />
        <User/>
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