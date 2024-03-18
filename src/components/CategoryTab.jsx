import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {COLOR} from '../theme/color';

const CategoryTab = ({categories, selectedCategory, onSelect}) => {
  return (
    <View style={styles.container}>
      {categories.map(category => (
        <TouchableOpacity
          key={category}
          onPress={() => onSelect(category)}
          style={[styles.text, category === selectedCategory && styles.active]}>
          <Text>{category}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    backgroundColor: COLOR.GRAY,
    padding: 10,
    marginEnd: 5,
    borderRadius: 100,
    color: COLOR.BLACK,
  },
  active: {
    backgroundColor: COLOR.PRIMARY,
    color: COLOR.WHITE,
  },
});

export default CategoryTab;
