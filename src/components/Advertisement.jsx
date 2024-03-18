import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLOR} from '../theme/color';
import Seperator from './Seperator';
import {width} from '../utils/constants';

export default function Advertisement() {
  return (
    <View style={{paddingTop: 20, paddingEnd: 20}}>
      <View style={styles.adv}>
        <Image
          source={{
            uri: 'https://i.ytimg.com/vi/0trXUYYeNHY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCxhddZ31-BSiziAqE2lU3cs0PF9w',
          }}
          style={{width: '100%', height: 150, borderRadius: 20}}
        />
      </View>
      <Seperator />
    </View>
  );
}

const styles = StyleSheet.create({
  adv: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 5,
  },
  text: {
    fontSize: 26,
    fontWeight: '200',
    color: COLOR.WHITE,
  },
});
