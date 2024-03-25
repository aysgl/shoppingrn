/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Seperator from './Seperator';
import {height, width} from '../utils/constants';
import {COLOR} from '../theme/color';
import {useNavigation} from '@react-navigation/native';
import {SCREEN} from '../utils/routes';
import HeartIcon from './HeartIcon';
import {updateFavorite} from '../redux/productsAction';
import {useDispatch} from 'react-redux';

export default function Card({data}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={{width: width / 2 - 40, marginRight: 10}}
      onPress={() => navigation.navigate(SCREEN.PRODUCT_DETAILS, {data})}>
      <Image
        source={{uri: data.images?.[0]}}
        style={styles.image}
        resizeMode="contain"
      />
      <Text numberOfLines={2} style={styles.title}>
        {data?.brand} {data?.model}
      </Text>
      <View style={styles.row}>
        <View>
          <Text style={styles.category}>{data?.category}</Text>
          <Text style={styles.price}>${data?.price}</Text>
        </View>
        <HeartIcon
          favorite={data?.favorite}
          updateFavorites={() =>
            dispatch(updateFavorite({id: data.id, favorite: !data.favorite}))
          }
        />
      </View>
      <Seperator />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    width: width / 2 - 40,
    height: height / 7,
    objectFit: 'cover',
    borderRadius: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLOR.BLACK,
    marginTop: 10,
    height: 35,
  },
  category: {
    fontSize: 11,
    color: COLOR.DARK_GRAY,
    paddingVertical: 5,
  },
  price: {
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
