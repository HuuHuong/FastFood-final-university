import React from 'react';
import Svg, {Path, G, Defs, ClipPath, Rect} from 'react-native-svg';
import {iconProps} from './icon.type';
export const IconBag = (props: iconProps) => (
  <Svg width="22" height="24" viewBox="0 0 22 24" fill="none">
    <G clip-path="url(#clip0_14_74)">
      <Path
        d="M4.45347 7L8.67954 2.298C8.85844 2.1 9.09307 2 9.3277 2C9.87877 2 10.2447 2.505 10.2447 3.029C10.2447 3.279 10.162 3.533 9.97586 3.74L7.04521 7H4.45347ZM15.242 7H17.8338L13.6077 2.298C13.4288 2.1 13.1942 2 12.9596 2C12.4085 2 12.0426 2.505 12.0426 3.029C12.0426 3.279 12.1253 3.533 12.3114 3.74L15.242 7ZM0.355957 9V11H0.933996C1.41405 11 1.85185 11.304 2.06311 11.784L5.74979 22H16.5375L20.225 11.786C20.4345 11.305 20.8741 11 21.3542 11H21.9313V9H0.355957Z"
        fill="black"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_14_74">
        <Rect
          width="21.5753"
          height="24"
          fill="white"
          transform="translate(0.355957)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
