import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignupScreen';
import HomeScreen from '../Screens/HomeScreen';
import ProductDetailScreen from '../Screens/ProductDetailScreen';


const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="LoginScreen">
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Signup" component={SignUpScreen}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="ProductDetailsScreen" component={ProductDetailScreen}/>

      </Stack.Navigator>
  );
};

export default StackNavigation;
