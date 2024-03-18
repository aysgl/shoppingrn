import {TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Heart} from 'iconsax-react-native';
import {COLOR} from '../theme/color';

export default function HeartIcon() {
  const [heartClicked, setHeartClicked] = useState(false);

  return (
    <TouchableOpacity onPress={() => setHeartClicked(!heartClicked)}>
      <Heart
        color={heartClicked ? COLOR.ORANGE : COLOR.DARK_GRAY}
        size={20}
        variant={heartClicked ? 'Bold' : 'Linear'}
      />
    </TouchableOpacity>
  );
}
