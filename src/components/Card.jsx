import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Seperator from './Seperator';
import {height, width} from '../utils/constants';
import {COLOR} from '../theme/color';
import {Heart} from 'iconsax-react-native';

export default function Card({item}) {
  return (
    <View style={{width: width / 2 - 40, marginRight: 10}}>
      <TouchableOpacity>
        <Image
          source={{uri: item?.image}}
          style={styles.image}
          resizeMode="contain"
        />

        <Text numberOfLines={3} style={styles.title}>
          {item?.title}
        </Text>
        <View style={styles.row}>
          <View>
            <Text style={styles.category}>{item?.category}</Text>
            <Text style={styles.price}>{item?.price}</Text>
          </View>
          <TouchableOpacity>
            <Heart color={COLOR.GRAY} style={{marginRight: 10}} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <Seperator />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: width / 2 - 40,
    height: height / 6,
    objectFit: 'cover',
    borderRadius: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLOR.BLACK,
    marginTop: 10,
    height: 70,
  },
  category: {
    fontSize: 13,
    color: COLOR.BLACK,
  },
  price: {
    fontSize: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
