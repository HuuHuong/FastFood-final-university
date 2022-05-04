import {View, Text} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {iconProps} from './icon.type';

export const IconArrowRight = (props: iconProps) => {
  const {strokeColor} = props;
  return (
    <Svg width="14" height="9" viewBox="0 0 14 9" fill="none">
      <Path
        d="M1 4.5L13 4.5"
        stroke="white"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.5 1L13 4.5L9.5 8"
        stroke="white"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
