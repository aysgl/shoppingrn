/* eslint-disable no-shadow */
import {FlatList, View} from 'react-native';
import React, {useEffect} from 'react';
import Card from '../components/Card';
import Seperator from '../components/Seperator';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../redux/productsAction';

export default function NewArrival() {
  const state = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={state?.products}
        renderItem={({item}) => <Card data={item} />}
      />
      <Seperator />
    </View>
  );
}
