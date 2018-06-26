import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import "@expo/vector-icons"; // Version can be specified in package.json

export default class extends Component {
  render() {
    return (
          <View style={styles.container}>
            <View style={styles.userStyle}>
              <View style={styles.cameraBStyle}>
                <Image
                  source={require('./user_img/camera.png')}
                  style={{width: 24, height: 24}}
                />
              </View>
              <View style={styles.settingBStyle}>
                <Image
                  source={require('./user_img/setting.png')}
                  style={{width: 24, height: 24}}
                />
              </View>
              <View style={styles.profileStyle}>
                <Image
                  source={require('./user_img/profile.png')}
                  style={{width: 100, height: 100}}
                />
                <Text style={styles.unameStyle}>User name</Text>
              </View>
            </View>
            <ScrollView style={styles.photoStyle}>
              <View style={{width: 50, height: 150, backgroundColor: "#e0e0e0"}} />
              <Text style={styles.textStyle}>Oops ! There's no selfie</Text>
            </ScrollView>
          </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#e0e0e0",
      weight: 500,
      height: 2000,
      position: 'absolute',
      top: 66,
      left: 0,
      right: 0
    },
    cameraBStyle: {
      weight: 100,
      height: 100,
      position: 'absolute',
      top: 10,
      left: 10,
    },
    settingBStyle: {
      weight: 100,
      height: 100,
      position: 'absolute',
      top: 10,
      left: 380,
    },
    profileStyle: {
      weight: 100,
      height: 100,
      position: 'absolute',
      top: 90,
      left: 165,
    },
    userStyle: {
      backgroundColor: "#fff",
      height: 275,
      position: 'relative',
   },
   photoStyle: {
      justifyContent: 'flex-start',
      backgroundColor: "#e0e0e0",
      height: 625,
      position: 'relative', 
   },
   textStyle: {
      textAlign: 'center',
      color:"#bebebe",
      fontSize: 22,
      fontWeight: 'bold',
   },
   unameStyle: {
      textAlign: 'center',
      color:"#6c6c6c",
      fontSize: 18,
      fontWeight: '500',
   }
});
