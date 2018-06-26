import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';

import Header from './Header';
import Wardrobe from './Wardrobe';

export default class home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Header'} />
        <Wardrobe/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});