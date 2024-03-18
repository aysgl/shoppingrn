import {FlatList, View} from 'react-native';
import React from 'react';
import H2 from '../components/H2';
import {widgets} from '../widgets'; // Eğer widgets burada bir import olarak tanımlanmışsa
import {screenStyles} from '../style/screenStyle';

export default function Home() {
  const renderItem = ({item}) => {
    return (
      <View>
        {item.title && <H2 title={item.title} button="see all" />}
        <View>{item.component}</View>
      </View>
    );
  };

  return (
    <View style={[screenStyles.body, {paddingBottom: 0, paddingStart: 20}]}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{padding: 0, margin: 0}}
        data={widgets}
        renderItem={renderItem}
      />
    </View>
  );
}
