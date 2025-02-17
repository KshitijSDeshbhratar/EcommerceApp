import React from 'react';
import PropTypes from 'prop-types';
import {Image, View,Text} from 'react-native';
import style from './style';

const Header  = () => {
  return (
    <View style ={style.container}>
      <View style={style.appIconContainer}>
        <Image
        source={require('../../assets/images/headerApp.png')} style ={style.appIcon}/>
      </View>
      <Image source={require('../../assets/images/headerGirl.png')} style = {style.dpImage}/>
    </View>
  )
}

export default Header;
