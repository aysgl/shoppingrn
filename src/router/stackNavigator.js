/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {COLOR} from '../theme/color';
import {SCREEN} from '../utils/routes';
import TabNavigator from './tabNavigator';
import Search from '../screens/Search';
import {ArrowLeft} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import ProductDetail from '../screens/ProductDetail';
import {TouchableOpacity} from 'react-native';
import Login from '../screens/Login';
import CheckOut from '../screens/CheckOut';
import Register from '../screens/Register';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeft size={32} color={COLOR.PRIMARY} />
          </TouchableOpacity>
        ),
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={SCREEN.TAB}
        component={TabNavigator}
      />
      <Stack.Screen name={SCREEN.SEARCH} component={Search} />
      <Stack.Screen name={SCREEN.LOGIN} component={Login} />
      <Stack.Screen name={SCREEN.CHECKOUT} component={CheckOut} />
      <Stack.Screen name={SCREEN.REGISTER} component={Register} />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={SCREEN.PRODUCT_DETAILS}
        component={ProductDetail}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
