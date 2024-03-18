import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLOR} from '../theme/color';

export default function Category() {
  const [category, setCategory] = useState([]);

  const renderItem = ({data}) => {
    return (
      <View style={styles.text}>
        <Text> {data.value}</Text>
      </View>
    );
  };
  return (
    <View>
      <FlatList horizontal data={category} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: COLOR.PRIMARY,
    padding: 10,
    marginEnd: 5,
    borderRadius: 100,
  },
});
