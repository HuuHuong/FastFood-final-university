import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {iconProps} from './icon.type';

export const IconStar = (props: iconProps) => {
  const {width, height} = props;
  return (
    <Svg
      width={width || '12'}
      height={height || '12'}
      viewBox="0 0 12 12"
      fill="none">
      <Path
        d="M6 0.819824L7.34708 4.96572H11.7063L8.17963 7.52803L9.52671 11.6739L6 9.11162L2.47329 11.6739L3.82037 7.52803L0.293661 4.96572H4.65292L6 0.819824Z"
        fill="white"
      />
    </Svg>
  );
};
