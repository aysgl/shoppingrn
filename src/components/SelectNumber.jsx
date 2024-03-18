import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLOR} from '../theme/color';

export default function SelectNumber({sizes}) {
  return (
    <View style={styles.row}>
      {sizes?.map((size, index) => (
        <TouchableOpacity key={index} style={styles.col}>
          <Text style={styles.text}>{size}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 100,
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: COLOR.GRAY,
    margin: 5,
  },
  text: {
    margin: 4,
    padding: 10,
  },
});
