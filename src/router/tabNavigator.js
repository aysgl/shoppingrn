/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Favorites from '../screens/Favorites';
import {SCREEN} from '../utils/routes';
import TabIcon from '../components/TabIcon';
import {COLOR} from '../theme/color';
import {SearchNormal, Trash} from 'iconsax-react-native';
import {TouchableOpacity} from 'react-native';
import Cart from '../screens/Cart';
import {Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {clearCart} from '../redux/cartsSlice';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  const dispatch = useDispatch();
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarActiveTintColor: COLOR.BLACK,
        headerShadowVisible: false,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon focused={focused} color={color} size={size} route={route} />
        ),
        tabBarLabel: ({focused}) => {
          return focused ? (
            <Text style={{color: COLOR.BLACK, fontSize: 8}}>●</Text>
          ) : null;
        },
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate(SCREEN.SEARCH)}>
            <SearchNormal
              size="26"
              color={COLOR.BLACK}
              style={{marginRight: 16}}
            />
          </TouchableOpacity>
        ),
      })}>
      <Tab.Screen name={SCREEN.HOME} component={Home} options={{}} />
      <Tab.Screen
        name={SCREEN.CART}
        component={Cart}
        options={({navigation}) => ({
          headerRight: () => (
            <TouchableOpacity
              onPress={() => dispatch(clearCart())}
              style={{marginRight: 20}}>
              <Trash style={{color: COLOR.BLACK}} />
            </TouchableOpacity>
          ),
        })}
      />
      <Tab.Screen name={SCREEN.FAVORITES} component={Favorites} />
      <Tab.Screen name={SCREEN.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
}
export default TabNavigator;
