import React from 'react';
import { StyleSheet, View } from 'react-native';
import Info from './Info';
import Header from './Header';

export default class Info_page extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Header'} />
        <Info />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});