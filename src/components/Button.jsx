import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLOR} from '../theme/color';

export default function Button({title, onPress}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={{fontWeight: 'bold'}}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLOR.PRIMARY,
    padding: 16,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
