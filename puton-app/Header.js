import React from 'react';
import { View, Image, ImageBackground } from 'react-native';


const Header = () => {
  const { iconStyle, viewStyle,bodyStyle,titleStyle } = styles;

  return (
    <View style={viewStyle}>
      <ImageBackground source={require('./img/Header_StaBar Bg.png')} style={{width: 420, height: 75}}>
        <View style={{flex:1}}><Image style={iconStyle} source={require('./img/AppLogo.png')} /></View>
      </ImageBackground>
    </View>
  );
};


const styles = {
  
  viewStyle: {
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    height: 75,
    paddingTop: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.1,
    // Android Only
    elevation: 2,
    flexDirection: 'row',
    justifyContent:'center',
  },
  iconStyle: {
    width:30,
    height:35,
    margin:30
  },
  titleStyle: {
    width:65,
    height:25,
    margin:20
  },
  textStyle: {
    fontSize: 18,
    // paddingLeft:50,
    flex: 1,
  },
//        <View style={{flex:0,}}><Image style={bodyStyle} source={require('./img/AdjustIcon.png')} /></View>   
  bodyStyle:{
    width:18,
    height:30,
    margin:10,
    // position:'relative',
    // right:0
  }
};

export default Header;
