
import React from 'react'
import { View,Image } from 'react-native';
import { style } from './style';

 const HeaderImage = () => {
    return(
        <View>
        <Image
          source={require('../../assets/images/topLogin.png')}
          style={style.image}
        />
      </View>
    );
};

export default HeaderImage;

