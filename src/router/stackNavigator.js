import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {COLOR} from '../theme/color';
import {SCREEN} from '../utils/routes';
import TabNavigator from './tabNavigator';
import Search from '../screens/Search';
import {ArrowLeft} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <ArrowLeft
            size={32}
            color={COLOR.PRIMARY}
            onPress={() => navigation.goBack()}
          />
        ),
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={SCREEN.TAB}
        component={TabNavigator}
      />
      <Stack.Screen name={SCREEN.SEARCH} component={Search} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
