import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import style from './style';

const Category = ({item, selectedCategory, setSelectedCategory}) => {
  return (
    <TouchableOpacity onPress={() => setSelectedCategory(item)}>
      <Text
        style={[
          style.categoryText,
          selectedCategory === item && style.selectedCategory,
        ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export default Category;
