/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import H2 from '../components/H2';
import H3 from '../components/H3';
import SelectNumber from '../components/SelectNumber';
import {screenStyles} from '../style/screenStyle';
import {COLOR} from '../theme/color';
import {ArrowLeft} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import Slider from '../components/Slider';
import HeartIcon from '../components/HeartIcon';
import {useDispatch, useSelector} from 'react-redux';
import {
  deleteCart,
  getCarts,
  updateCartItemQuantity,
} from '../redux/cartsAction';
import {getProduct, updateFavorite} from '../redux/productsAction';
import {addToCart} from '../redux/cartsSlice';
import {SCREEN} from '../utils/routes';

export default function ProductDetail({route}) {
  const {data} = route.params;

  const state = useSelector(state => state.products.product);

  const [count, setCount] = useState(state?.product?.quantity ?? 1);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleIncrement = itemId => {
    const newQuantity = count + 1;
    dispatch(updateCartItemQuantity({itemId, newQuantity}));
    setCount(newQuantity);
  };

  const handleDecrement = itemId => {
    if (count > 1) {
      const newQuantity = count - 1;
      dispatch(updateCartItemQuantity({itemId, newQuantity}));
      setCount(newQuantity);
    } else {
      setCount(0);
    }
  };

  useEffect(() => {
    dispatch(getCarts());
    dispatch(getProduct(data?.id));
  }, [dispatch, data?.id]);

  return (
    <View style={screenStyles.body}>
      <TouchableOpacity
        style={{position: 'absolute', top: 40, left: 20, zIndex: 9}}
        onPress={() => navigation.goBack()}>
        <ArrowLeft size={32} color={COLOR.PRIMARY} />
      </TouchableOpacity>
      <ScrollView>
        <Slider images={state?.images} />
        <View style={screenStyles.container}>
          <H2 title={`${state?.brand + ' ' + state?.model}`} />
          <View style={styles.heart}>
            <View>
              <Text style={{marginBottom: 10}}>{state?.category}</Text>
              <H3 title={`$${state?.price}`} />
            </View>
            <HeartIcon
              favorite={state?.favorite}
              updateFavorites={() => {
                dispatch(
                  updateFavorite({
                    id: state?.id,
                    favorite: !state?.favorite,
                  }),
                );
                dispatch(getProduct(data?.id));
              }}
            />
          </View>
          <SelectNumber sizes={state?.size} />
          <Text>{state?.description}</Text>
        </View>
      </ScrollView>
      <View style={styles.row}>
        <View style={styles.count}>
          <TouchableOpacity
            style={styles.minus}
            onPress={() => handleDecrement(state?.id)}>
            <Text>-</Text>
          </TouchableOpacity>
          <Text>{count}</Text>
          <TouchableOpacity
            style={styles.plus}
            onPress={() => handleIncrement(state?.id)}>
            <Text style={{color: COLOR.WHITE}}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(
              addToCart({
                product: state,
                quantity: count,
              }),
              navigation.navigate(SCREEN.CART),
            );
          }}>
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
    padding: 20,
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
