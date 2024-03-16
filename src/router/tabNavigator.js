import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Favorites from '../screens/Favorites';
import {SCREEN} from '../utils/routes';
import TabIcon from '../components/TabIcon'; // Import TabIcon component
import {COLOR} from '../theme/color';
import {SearchNormal} from 'iconsax-react-native';
import {TouchableOpacity} from 'react-native';
import Cart from '../screens/Cart';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarActiveTintColor: COLOR.PRIMARY,
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon focused={focused} color={color} size={size} route={route} />
        ),
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
      <Tab.Screen name={SCREEN.CART} component={Cart} />
      <Tab.Screen name={SCREEN.FAVORITES} component={Favorites} />
      <Tab.Screen name={SCREEN.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
}
export default TabNavigator;
