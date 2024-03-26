import React, {useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {Heart} from 'iconsax-react-native';
import {COLOR} from '../theme/color';

export default function HeartIcon({favorite, updateFavorites}) {
  useEffect(() => {}, [favorite, updateFavorites]);
  // console.log('heartIcon', favorite, updateFavorites);
  return (
    <TouchableOpacity onPress={updateFavorites}>
      <Heart
        color={favorite ? COLOR.ORANGE : COLOR.DARK_GRAY}
        size={20}
        variant={favorite ? 'Bold' : 'Linear'}
      />
    </TouchableOpacity>
  );
}
