/* eslint-disable no-shadow */
import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import Card from '../components/Card';
import CategoryTab from '../components/CategoryTab';
import Seperator from '../components/Seperator';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories} from '../redux/productsAction';

const BestSeller = () => {
  const categories = ['Woman', 'Man', 'Children'];
  const [selectedCategory, setSelectedCategory] = useState('Woman');
  const dispatch = useDispatch();
  const state = useSelector(state => state.products.categories);

  useEffect(() => {
    dispatch(getCategories(selectedCategory));
  }, [dispatch, selectedCategory]);

  return (
    <View>
      <CategoryTab
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={state}
        renderItem={({item}) => <Card data={item} />}
      />
      <Seperator />
    </View>
  );
};

export default BestSeller;
