/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {SectionList, TouchableOpacity, View} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import ImagePill from '../components/ImagePill';
import {width} from '../utils/constants';
import {COLOR} from '../theme/color';

export default function Slide({images}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const FlatListItemSeparator = () => {
    return <View style={{margin: 9, paddingRight: 22}} />;
  };

  return (
    <View>
      <View style={{paddingBottom: 38}}>
        <ImagePill
          width={'100%'}
          height={450}
          borderRadius={0}
          src={images[activeIndex]}
          active={true}
        />
      </View>
      <SectionList
        horizontal={true}
        style={{marginTop: -130, marginLeft: 16}}
        ItemSeparatorComponent={FlatListItemSeparator}
        sections={[{title: '', data: images}]}
        renderItem={({item, index}) => (
          <View style={{padding: 6, zIndex: 1000}}>
            <TouchableOpacity
              style={{
                padding: 6,
                borderColor:
                  index === activeIndex ? COLOR.PRIMARY : COLOR.WHITE,
                borderWidth: 2,
                borderRadius: 100,
              }}
              onPress={() => setActiveIndex(index)}>
              <ImagePill
                width={50}
                height={50}
                borderRadius={100}
                borderWidth={2}
                src={item}
              />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        pagingEnabled
      />
    </View>
  );
}
