import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function H2({title}) {
  return (
    <View style={styles.row}>
      <Text style={styles.h2}>{title}</Text>
      {title && (
        <TouchableOpacity>
          <Text>see all</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  h2: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000000',
  },
});
