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
import {useDispatch} from 'react-redux';
import {
  addToCart,
  deleteCart,
  getCarts,
  updateCartItemQuantity,
} from '../redux/cartsAction';
import {updateFavorite} from '../redux/productsAction';

export default function ProductDetail({route}) {
  const {data} = route.params;

  const [count, setCount] = useState(data.quantity);
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
      dispatch(deleteCart(itemId));
      setCount(0);
    }
  };

  useEffect(() => {
    dispatch(getCarts());
    // dispatch(updateFavorite());
  }, [dispatch, data.quantity, data.favorite]);

  const handleAddToCart = () => {
    dispatch(addToCart(data));
    navigation.navigate('Cart');
  };

  return (
    <View style={screenStyles.body}>
      <TouchableOpacity
        style={{position: 'absolute', top: 40, left: 20, zIndex: 9}}
        onPress={() => navigation.goBack()}>
        <ArrowLeft size={32} color={COLOR.PRIMARY} />
      </TouchableOpacity>
      <ScrollView>
        <Slider images={data?.images} />
        <View style={screenStyles.container}>
          <H2 title={`${data?.brand + ' ' + data?.model}`} />
          <View style={styles.heart}>
            <View>
              <Text style={{marginBottom: 10}}>{data?.category}</Text>
              <H3 title={`$${data?.price}`} />
            </View>
            <HeartIcon
              favorite={data?.favorite}
              updateFavorites={() =>
                dispatch(
                  updateFavorite({id: data.id, favorite: !data.favorite}),
                )
              }
            />
          </View>

          <SelectNumber sizes={data?.size} />

          <Text>{data?.description}</Text>
        </View>
      </ScrollView>
      <View style={styles.row}>
        <View style={styles.count}>
          <TouchableOpacity style={styles.minus} onPress={handleDecrement}>
            <Text>-</Text>
          </TouchableOpacity>
          <Text>{count}</Text>
          <TouchableOpacity style={styles.plus} onPress={handleIncrement}>
            <Text style={{color: COLOR.WHITE}}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
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
