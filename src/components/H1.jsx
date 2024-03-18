import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function H1({title}) {
  return (
    <View>
      <Text style={styles.h1}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
    paddingEnd: 20,
  },
});
