import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {screenStyles} from '../style/screenStyle';
import {fetchCart} from '../services/api';
import {COLOR} from '../theme/color';

export default function Cart() {
  const [carts, setCarts] = useState([]);
  const [count, setCount] = useState(1);

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
        <Text style={styles.title}>
          {item.brand} {item.model}
        </Text>
        <Text style={styles.category}>{item.category}</Text>
        <View style={styles.priceCountContainer}>
          <Text style={styles.price}>${item.price}</Text>
          <View style={styles.countContainer}>
            <TouchableOpacity
              style={styles.minus}
              onPress={() => {
                setCount(Math.max(count - 1, 0));
              }}>
              <Text>-</Text>
            </TouchableOpacity>
            <Text>{count}</Text>
            <TouchableOpacity
              style={styles.plus}
              onPress={() => {
                setCount(count + 1);
              }}>
              <Text style={styles.plusText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderFooter = () => (
    <View style={styles.footer}>
      <View style={styles.text}>
        <Text>Subtotal</Text>
        <Text>$</Text>
      </View>
      <View style={styles.text}>
        <Text>Delivery Fee</Text>
        <Text>$</Text>
      </View>
      <View style={styles.text}>
        <Text>Discount</Text>
        <Text>%</Text>
      </View>
      <View style={[styles.text, {paddingVertical: 30}]}>
        <Text>Total</Text>
        <Text>$</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text>Check out</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      style={screenStyles.body}
      data={carts}
      renderItem={renderItem}
      ListEmptyComponent={
        <Text style={styles.emptyCartText}>Your cart is empty.</Text>
      }
      keyExtractor={(item, index) => index.toString()}
      ListFooterComponent={renderFooter}
    />
  );
}

const styles = StyleSheet.create({
  emptyCartText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  cart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    padding: 20,
    borderColor: COLOR.GRAY,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    objectFit: 'cover',
    borderRadius: 16,
  },
  item: {
    flex: 1,
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
  category: {
    paddingVertical: 10,
    color: COLOR.DARK_GRAY,
  },
  priceCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  countContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.GRAY,
    borderRadius: 100,
  },
  minus: {
    borderWidth: 2,
    borderColor: COLOR.BLACK,
    padding: 5,
    margin: 6,
    borderRadius: 100,
    width: 26,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    backgroundColor: COLOR.BLACK,
    padding: 5,
    margin: 6,
    color: COLOR.WHITE,
    borderRadius: 100,
    width: 26,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusText: {
    color: COLOR.WHITE,
  },
  footer: {
    padding: 20,
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  button: {
    backgroundColor: COLOR.PRIMARY,
    padding: 16,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
