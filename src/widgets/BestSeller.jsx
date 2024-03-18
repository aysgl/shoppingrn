// BestSeller.js

import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import Card from '../components/Card';
import CategoryTab from '../components/CategoryTab';
import {fetchCategory} from '../services/api';
import Seperator from '../components/Seperator';

const BestSeller = () => {
  const [categories, setCategories] = useState(['woman', 'man', 'children']);
  const [selectedCategory, setSelectedCategory] = useState('woman');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts(selectedCategory);
  }, [selectedCategory]);

  const fetchProducts = category => {
    fetchCategory(category)
      .then(res => setProducts(res))
      .catch(err => console.log(err));
  };

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
        data={products}
        renderItem={({item}) => <Card data={item} />}
      />
      <Seperator />
    </View>
  );
};

export default BestSeller;
