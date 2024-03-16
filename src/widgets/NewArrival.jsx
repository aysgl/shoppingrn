import {FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card from '../components/Card';
import {getRequest} from '../services/verbs';
import {URL} from '../services/url';

export default function NewArrival() {
  const [data, setData] = useState();

  const getAllProducts = () => {
    getRequest(URL.PRODUCTS_URL)
      .then(res => setData(res))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item}) => <Card item={item} />}
      />
    </View>
  );
}
