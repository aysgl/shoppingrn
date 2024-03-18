import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {screenStyles} from '../style/screenStyle';
import {COLOR} from '../theme/color';
import {fetchCart} from '../services/api';
import HeartIcon from '../components/HeartIcon';

export default function Favorites() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetchCart()
      .then(res => setCarts(res))
      .catch(err => console.log(err));
  }, []);

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.cart}>
      <Image
        source={{uri: item?.images[0]}}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.item}>
        <View>
          <Text style={styles.title}>
            {item.brand} {item.model}
          </Text>
          <Text style={styles.category}>{item.category}</Text>
        </View>
        <View>
          <HeartIcon />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      style={screenStyles.body}
      data={carts}
      renderItem={renderItem}
      ListEmptyComponent={
        <Text style={styles.empty}>Your favoritelist is empty.</Text>
      }
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

const styles = StyleSheet.create({
  empty: {
    fontSize: 16,
    textAlign: 'center',
  },
  cart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    padding: 10,
    paddingHorizontal: 20,
    borderColor: COLOR.GRAY,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 100,
    marginRight: 10,
    objectFit: 'cover',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  category: {
    paddingTop: 5,
    color: COLOR.DARK_GRAY,
  },
});
