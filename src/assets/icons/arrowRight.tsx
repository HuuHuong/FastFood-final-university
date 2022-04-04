import {View, Text} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {iconProps} from './icon.type';

export const IconArrowRight = (props: iconProps) => (
  <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <Path
      d="M6 3L11 8L6 13"
      stroke="#565656"
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </Svg>
);
