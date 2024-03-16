import {FlatList, StyleSheet, View, Text} from 'react-native';
import React from 'react';
import H2 from '../components/H2';
import {widgets} from '../widgets';
import {screenStyles} from '../style/screenStyle';

export default function Home() {
  const renderItem = ({item}) => {
    return (
      <View>
        <H2 title={item.title} />
        <View>{item.component}</View>
      </View>
    );
  };

  return (
    <View style={screenStyles.body}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{padding: 0, margin: 0}}
        data={widgets}
        renderItem={renderItem}
      />
    </View>
  );
}
