import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {iconProps} from './icon.type';
export const IconBack = (props: iconProps) => (
  <Svg width="20" height="20" viewBox="0 0 20 27" fill="none">
    <Path
      d="M1.15553 12.4798L15.6599 1.46185C16.5825 0.76062 18.078 0.76062 19.0002 1.46185C19.9224 2.16247 19.9224 3.29879 19.0002 3.99934L6.16647 13.7483L19.0002 23.4973C19.9224 24.1982 19.9224 25.3344 19.0002 26.035C18.0779 26.7359 16.5821 26.7359 15.6594 26.035L1.15508 15.0169C0.694172 14.6664 0.463867 14.2076 0.463867 13.7483C0.463867 13.2893 0.69462 12.8301 1.15553 12.4798Z"
      fill={props.strokeColor || '#FEFAF9'}
    />
  </Svg>
);
