import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {screenStyles} from '../style/screenStyle';
import {COLOR} from '../theme/color';
import HeartIcon from '../components/HeartIcon';
import {useDispatch, useSelector} from 'react-redux';
import {getFavorites, updateFavorite} from '../redux/productsAction';

export default function Favorites() {
  const favorites = useSelector(state => state.products.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch, favorites]);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.cart}>
        <Image
          source={{uri: item.images?.[0]}}
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
            <HeartIcon
              favorite={item?.favorite}
              updateFavorites={() =>
                dispatch(
                  updateFavorite({id: item.id, favorite: !item.favorite}),
                )
              }
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      style={screenStyles.body}
      data={favorites}
      renderItem={renderItem}
      ListEmptyComponent={
        <Text style={styles.empty}>Your favorite list is empty.</Text>
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
