import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  Home,
  Category,
  Heart,
  Profile,
  ShoppingCart,
} from 'iconsax-react-native';
import {SCREEN} from '../utils/routes';
import {COLOR} from '../theme/color';
import {useSelector} from 'react-redux';

export default function TabIcon({color, route, focused, size}) {
  const state = useSelector(state => state.carts);
  // console.log(state.carts);
  // const [count, setCount] = useState(1);
  const getIcon = () => {
    switch (route.name) {
      case SCREEN.HOME:
        return focused ? (
          <Home size={size} color={color} variant="Bold" />
        ) : (
          <Home size={size} color="gray" />
        );
      case SCREEN.CATEGORIES:
        return focused ? (
          <Category size={size} color={color} variant="Bold" />
        ) : (
          <Category size={size} color="gray" />
        );
      case SCREEN.FAVORITES:
        return focused ? (
          <Heart size={size} color={color} variant="Bold" />
        ) : (
          <Heart size={size} color="gray" />
        );
      case SCREEN.PROFILE:
        return focused ? (
          <Profile size={size} color={color} variant="Bold" />
        ) : (
          <Profile size={size} color="gray" />
        );
      case SCREEN.CART:
        return focused ? (
          <View>
            <View style={styles.badgeContainer}>
              <Text style={styles.text}>{state.carts.length}</Text>
            </View>
            <ShoppingCart size={size} color={color} variant="Bold" />
          </View>
        ) : (
          <View>
            <View style={styles.badgeContainer}>
              <Text style={styles.text}>{state.carts.length}</Text>
            </View>
            <ShoppingCart size={size} color="gray" />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.iconContainer}>{getIcon(focused, size, color)}</View>
  );
}

const styles = StyleSheet.create({
  badgeContainer: {
    zIndex: 99,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: COLOR.ORANGE,
    borderRadius: 100,
    position: 'absolute',
    top: -4,
    right: -6,
    width: 18,
    height: 18,
  },
  text: {
    fontSize: 12,
    color: COLOR.WHITE,
    position: 'absolute',
    zIndex: 100,
  },
});
