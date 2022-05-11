import React, {useRef, useState} from 'react';
import Svg, {Path} from 'react-native-svg';
import LottieView from 'lottie-react-native';
import {Animated, View} from 'react-native';
import {colors, Spacing} from '@theme';
import {DebounceButton} from '@components/Button/Button';
export type iconAnimation = {
  isActive?: boolean | number;
  isHeart: boolean;
  setIsHeart: (value: any) => void;
};
export const HeartLotie = (props: iconAnimation) => {
  const {isHeart, setIsHeart} = props;
  const progress = useRef(new Animated.Value(0)).current;

  const onPressHeart = () => {
    const newValue = isHeart ? 0 : 1;
    Animated.timing(progress, {
      toValue: newValue,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    setIsHeart(!isHeart);
  };
  return (
    <DebounceButton
      onPress={onPressHeart}
      viewStyle={{
        width: 40,
        height: 40,
        borderWidth: Spacing.width2,
        borderColor: colors.mainColor,
        borderRadius: Spacing.width100,
        backgroundColor: colors.white,
      }}>
      <LottieView
        style={{
          width: 72,
          height: 72,
          // position: 'absolute',
          top: -8,
          left: -9,
        }}
        source={require('./heart_animated.json')}
        progress={progress}
      />
    </DebounceButton>
  );
};
