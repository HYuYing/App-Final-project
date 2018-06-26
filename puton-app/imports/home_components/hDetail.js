import React from 'react';
import { Text, View, Image} from 'react-native';

import Box from './hBox';
import BoxSection from './hBoxSection';

const hDetail = () => {
  


    return (
        <Box>
            <BoxSection>
                <View >
                    <Image
                        source={require('./img/LativLogo.png')}
                    />
                </View>
                <View >
                    <Text >Lativ</Text>
                </View>
            </BoxSection>
            <BoxSection>
                <Image 
                    source={{ uri: 'https://s3.lativ.com.tw/i/34045/34045_L_03.jpg' }} 
                />
            </BoxSection>
        </Box>
    );
};

/*const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle:{
        fontSize: 24
    },
    thumbnailStyle: {
       height: 50,
       width: 50 
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 700,
        flex: 1,
        width: null
    }
};
*/
export default hDetail;