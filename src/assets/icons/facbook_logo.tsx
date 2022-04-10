import React from 'react';
import {iconProps} from './icon.type';
import Svg, {Path, Rect} from 'react-native-svg';
export const IconFacebook = (props: iconProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Rect width="24" height="24" fill="#1877F2" />
    <Path
      d="M23.5 12.0698C23.5 5.71857 18.3513 0.569849 12 0.569849C5.64872 0.569849 0.5 5.71857 0.5 12.0698C0.5 17.8098 4.70538 22.5674 10.2031 23.4301V15.3941H7.2832V12.0698H10.2031V9.53626C10.2031 6.65407 11.92 5.06204 14.5468 5.06204C15.805 5.06204 17.1211 5.28665 17.1211 5.28665V8.11672H15.671C14.2424 8.11672 13.7969 9.00319 13.7969 9.91263V12.0698H16.9863L16.4765 15.3941H13.7969V23.4301C19.2946 22.5674 23.5 17.8098 23.5 12.0698Z"
      fill="white"
    />
  </Svg>
);
