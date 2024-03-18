/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import H2 from '../components/H2';
import H3 from '../components/H3';
import SelectNumber from '../components/SelectNumber';
import {screenStyles} from '../style/screenStyle';
import {COLOR} from '../theme/color';
import {ArrowLeft} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import Slider from '../components/Slider';
import HeartIcon from '../components/HeartIcon';

export default function ProductDetail({route}) {
  const [count, setCount] = useState(1);
  const {data} = route.params;
  const navigation = useNavigation();

  return (
    <View style={screenStyles.body}>
      <TouchableOpacity
        style={{position: 'absolute', top: 40, left: 20, zIndex: 9}}
        onPress={() => navigation.goBack()}>
        <ArrowLeft size={32} color={COLOR.PRIMARY} />
      </TouchableOpacity>

      <Slider images={data?.images} />
      <View style={screenStyles.container}>
        <H2 title={`${data?.brand + ' ' + data?.model}`} />
        <View style={styles.heart}>
          <View>
            <Text style={{marginBottom: 10}}>{data?.category}</Text>
            <H3 title={`$${data?.price}`} />
          </View>
          <HeartIcon />
        </View>

        <SelectNumber sizes={data?.size} />

        <Text>{data?.description}</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.count}>
          <TouchableOpacity
            style={styles.minus}
            onPress={() => {
              setCount(0);
            }}>
            <Text>-</Text>
          </TouchableOpacity>
          <Text>{count}</Text>
          <TouchableOpacity
            style={styles.plus}
            onPress={() => {
              setCount(count + 1);
            }}>
            <Text style={{color: COLOR.WHITE}}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 20,
    position: 'absolute',
    bottom: 10,
    right: 20,
    left: 20,
  },
  count: {
    width: '30%',
    flexDirection: 'row',
    backgroundColor: COLOR.GRAY,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginEnd: 10,
  },
  minus: {
    borderWidth: 2,
    borderColor: COLOR.BLACK,
    padding: 5,
    margin: 8,
    borderRadius: 100,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    backgroundColor: COLOR.BLACK,
    padding: 5,
    margin: 8,
    color: COLOR.WHITE,
    borderRadius: 100,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: COLOR.PRIMARY,
    padding: 16,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
  },
});
