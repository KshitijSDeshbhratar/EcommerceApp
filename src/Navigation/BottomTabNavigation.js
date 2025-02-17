import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../Screens/ProfileScreen';
import {View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from '../Screens/HomeScreen';
import CartScreen from '../Screens/CartScreen';
import StackNavigation from './StackNavigation';

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#E96E6E',
      }}>
      <Tab.Screen
        name="Home_Stack"
        component={StackNavigation}
        options={{
          tabBarIcon: ({size, focused, color}) => {
            return (
              <View>
                <AntDesign
                  name={'home'}
                  size={size}
                  color={focused ? '#e32f45' : '748c94'}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({size, focused, color}) => {
            return (
              <View>
                <AntDesign
                  name={'shoppingcart'}
                  size={size}
                  color={focused ? '#e32f45' : '748c94'}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({size, focused, color}) => {
            return (
              <View>
                <AntDesign
                  name={'user'}
                  size={size}
                  color={focused ? '#e32f45' : '748c94'}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
