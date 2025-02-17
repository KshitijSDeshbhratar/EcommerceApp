import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProductCard = ({item,handleLiked}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => {}}>
      <Image
        source={require('../../assets/images/productImage.png')}
        style={styles.coverImage}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>'Jeans and Jacket</Text>
        <Text style={styles.price}>$ 44</Text>
      </View>
      <TouchableOpacity onPress={() => {handleLiked(item);}} style={styles.likeContainer}>
        {item?.isLiked ? (
          <AntDesign name={'heart'} size={20} color={'#E55B5B'} />
        ) : (
          <AntDesign name={'hearto'} size={20} color={'#E55B5B'} />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ProductCard;
