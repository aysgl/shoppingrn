import {FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card from '../components/Card';
import {fetchProducts} from '../services/api';
import Seperator from '../components/Seperator';

export default function NewArrival() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then(res => setProducts(res))
      .catch(err => console.log(err));
  }, []);

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products}
        renderItem={({item}) => <Card data={item} />}
      />
      <Seperator />
    </View>
  );
}
