import React, { Component } from 'react';
import { View } from 'react-native';
import { Camera, Permissions } from 'expo';

import { Button } from 'react-native-elements'; // Version can be specified in package.json
import "@expo/vector-icons"; // Version can be specified in package.json

import Header from './Header';

export default class App extends Component {
  state = {
    isRecording: false
  };
  
  constructor(props) {
    super(props);
    this.permissions()
  }
  
  permissions = async () => {
    try {
    await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    } catch(a) {
      console.log(a);
    }
  }
  
  record = async () => {
    this.setState({ isRecording: true });
    console.log("record");
    const { uri } = await this.camera.recordAsync();
    console.log("uri", uri);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Header'} />
        <Camera style={{ flex: 1 }} ref={(ref) => {console.log("ref change"); this.camera = ref}}>
          { this.state.isRecording === false &&
            <Button
              buttonStyle={{
                backgroundColor: "#fff",
                width: 80,
                height: 80,
                borderColor: "#8e8e8e",
                borderWidth: 5,
                borderRadius: 50,
                position: 'relative',
                top: 525,
                left: 150
              }}
              containerStyle={{ marginTop: 20 }}
              onPress={this.record}
            />
          }
        </Camera>
      </View>
    );
  }
}