import {StyleSheet, Text, View, FlatList, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';

import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header/Header';
import Search from '../components/Search/Search';
import Category from '../components/Category/Category';
import SingleProductItem from '../components/SingleProductItem/SingleProductItem';
import data from '../data/data.json';
import axios from 'axios';
import BottomTabs from '../Navigation/BottomTabNavigation';

const categories = ['Trending Now', 'All', 'New', 'Upcoming', 'Mens', 'Womens'];
const HomeScreen = () => {
 const [products, setProducts] = useState(data.products);
 const [selectedCategory, setSelectedCategory] = useState('Mens');

  const handleLiked = (item) => {
    const newProducts = products.map((prod) => {
      if(prod.id === item.id) {
        return {
          ...prod,
          isLiked: true,
        };
      }
      return prod;
    });
    setProducts(newProducts);
  };

  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
      <Header />
      <Text style={styles.matchText}>Match Your Style</Text>
      <Search />
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <FlatList
              data={categories}
              renderItem={({item}) => (
                <Category
                  item={item}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              )}
              keyExtractor={item => item}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </>
        }
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <SingleProductItem
            item={item}
            handleLiked = {handleLiked}
          />
        )}
        contentContainerStyle={styles.productListBottomPadding}
      />
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex:1,
  },
  matchText: {
    fontSize: 28,
    color: '#000000',
    marginTop: 25,
  },
  productListBottomPadding: {
    paddingBottom: 200,
  },
});
