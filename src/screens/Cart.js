/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-const-assign */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
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
import {COLOR} from '../theme/color';
import {useNavigation} from '@react-navigation/native';
import {SCREEN} from '../utils/routes';
import {useDispatch, useSelector} from 'react-redux';
import {
  deleteCart,
  getCarts,
  updateCartItemQuantity,
} from '../redux/cartsAction';

export default function Cart() {
  const state = useSelector(state => state.carts);
  const [counts, setCounts] = useState({});
  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getCarts());
  }, [dispatch]);

  useEffect(() => {
    if (state.carts) {
      let initialCounts = {};
      let tempSubTotal = 0;
      state.carts.forEach(item => {
        initialCounts[item.id] = item.quantity;
        tempSubTotal += item.price * item.quantity;
      });
      setCounts(initialCounts);
      setSubTotal(tempSubTotal);
      updateTotal();
    }
  }, [state.carts]);

  useEffect(() => {
    updateTotal();
  }, [counts, state.carts]);

  const updateTotal = () => {
    let tempTotal = subTotal;

    const deliveryFee = 10;
    const discount = 0;

    const totalPrice = tempTotal + deliveryFee - discount;
    setTotal(totalPrice);
  };

  const handleIncrement = (itemId, itemQuantity) => {
    const newQuantity = itemQuantity + 1;
    dispatch(updateCartItemQuantity({itemId, newQuantity}));
    setCounts(prevCounts => ({...prevCounts, [itemId]: newQuantity}));
    updateTotal();
  };

  const handleDecrement = (itemId, itemQuantity) => {
    if (itemQuantity > 1) {
      const newQuantity = itemQuantity - 1;
      dispatch(updateCartItemQuantity({itemId, newQuantity}));
      setCounts(prevCounts => ({...prevCounts, [itemId]: newQuantity}));
      updateTotal();
    } else {
      dispatch(deleteCart(itemId));
      const {[itemId]: deletedItem, ...restCounts} = counts;
      setCounts(restCounts);
      updateTotal();
    }
  };

  const renderItem = ({item}) => {
    const itemQuantity = counts[item.id] || 1;
    return (
      <TouchableOpacity style={styles.cart}>
        <Image
          source={{uri: item.images?.[0]}}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.item}>
          <Text style={styles.title}>
            {item?.brand} {item?.model}
          </Text>
          <Text style={styles.category}>{item.category}</Text>
          <View style={styles.priceCountContainer}>
            <Text style={styles.price}>${item.price}</Text>
            <View style={styles.countContainer}>
              <TouchableOpacity
                style={styles.minus}
                onPress={() => handleDecrement(item.id, itemQuantity)}>
                <Text>-</Text>
              </TouchableOpacity>
              <Text>{itemQuantity}</Text>
              <TouchableOpacity
                style={styles.plus}
                onPress={() => handleIncrement(item.id, itemQuantity)}>
                <Text style={styles.plusText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderFooter = () => (
    <View style={styles.footer}>
      <View style={styles.text}>
        <Text>Subtotal</Text>
        <Text>${subTotal}</Text>
      </View>
      <View style={styles.text}>
        <Text>Delivery Fee</Text>
        <Text>$10</Text>
      </View>
      <View style={styles.text}>
        <Text>Discount</Text>
        <Text>%0</Text>
      </View>
      <View style={[styles.text, {paddingVertical: 30}]}>
        <Text>Total</Text>
        <Text style={{fontSize: 20}}>${total}</Text>
      </View>
    </View>
  );

  return (
    <View style={{flex: 1, backgroundColor: COLOR.WHITE}}>
      <FlatList
        style={screenStyles.body}
        data={state?.carts}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.emptyCartText}>Your cart is empty.</Text>
        }
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={renderFooter}
      />
      <View style={{padding: 20, paddingTop: 0}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(SCREEN.LOGIN)}>
          <Text>Check out</Text>
        </TouchableOpacity>
      </View>
    </View>
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
