import {StyleSheet, View} from 'react-native';
import React from 'react';

export default function () {
  return <View style={styles.padding}></View>;
}

const styles = StyleSheet.create({
  padding: {
    padding: 10,
  },
});
