/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';
import {COLOR} from '../theme/color';

export default function ImagePill(props) {
  return (
    <Image
      source={{url: props.src}}
      resizeMode="stretch"
      style={{
        width: props.width,
        height: props.height,
        borderRadius: props.borderRadius,
        margin: props.margin,
        objectFit: 'fill',
      }}
    />
  );
}
