import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

const Button = ( onPress) => {
    const { buttonStyle/*, textStyle*/ } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
          <Image source={require('./user_img/camera.png')} style={{width: 24, height: 24}}/>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#4d3126',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff',
        marginLeft: 5,
    }
};

export default Button;