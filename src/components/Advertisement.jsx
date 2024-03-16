import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLOR} from '../theme/color';
import Seperator from './Seperator';

export default function Advertisement() {
  return (
    <View>
      <View style={styles.adv}>
        <Text style={styles.text}>Advertisement</Text>
      </View>
      <Seperator />
    </View>
  );
}

const styles = StyleSheet.create({
  adv: {
    backgroundColor: COLOR.PRIMARY,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 5,
  },
  text: {
    fontSize: 26,
    fontWeight: '200',
    color: COLOR.WHITE,
  },
});
