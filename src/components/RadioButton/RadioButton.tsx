import {RadioButtonProps} from './RadioButton.props';

import equals from 'react-fast-compare';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';

import React, {memo, useCallback, useMemo, useState} from 'react';
import {Image, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';

// import { useInterpolate, useInterpolateColor, useSharedTransition } from '#animated';
import {onCheckType} from '@utils/commonFunctions';
import {useSharedTransition} from '@utils/animated/Transition';
import {useInterpolate, useInterpolateColor} from '@utils/animated/Hook';
import R, {Images} from '@assets';
import {colors, commonStyles, Spacing} from '@theme';
import {Block} from '@components/Block/Block';
import FastImage from 'react-native-fast-image';

const SIZE = 20;
const ACTIVE_COLOR = colors.mainColor;
const UN_ACTIVE_COLOR = colors.white;
const STROKE_WIDTH = 1;
const styles = StyleSheet.create({
  wrap: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'relative',
    borderWidth: 1,
    // borderColor: colors.borderD8,
    backgroundColor: colors.white,
  },
  dot: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tick: {
    resizeMode: 'contain',
    width: 12,
    height: 8,
    alignSelf: 'center',
    tintColor: colors.white,
  },
  textStyle: {
    ...commonStyles.commonText400_16,
    color: colors.black,
    marginLeft: 10,
  },
});

const RadioButtonComponent = (props: RadioButtonProps) => {
  const {
    initialValue = false,
    activeColor = ACTIVE_COLOR,
    unActiveColor = UN_ACTIVE_COLOR,
    strokeWidth = STROKE_WIDTH,
    sizeDot = SIZE,
    value,
    onToggle,
    title,
    style,
    onSelect,
    isCircle = false,
  } = props;
  const [localValue, setLocalValue] = useState<boolean>(initialValue);
  const progress = useSharedTransition(value ?? localValue, {duration: 200});
  const size = useInterpolate(progress, [0, 1], [0, sizeDot - strokeWidth]);
  const color = useInterpolateColor(
    progress,
    [0, 1],
    [colors.white, colors.mainColor],
  );
  const bgColor = useInterpolateColor(
    progress,
    [0, 1],
    [colors.white, colors.mainColor],
  );
  const _onPress = useCallback(() => {
    if (onToggle && onCheckType(onToggle, 'function')) {
      onToggle(!value);
    } else if (onSelect && onCheckType(onSelect, 'function')) {
      onSelect();
    } else {
      setLocalValue(v => !v);
    }
  }, [onToggle, value]);

  const wrapStyle = useMemo(
    () => ({
      width: sizeDot,
      height: sizeDot,
      borderRadius: isCircle ? sizeDot : 4,
      borderWidth: 1,
    }),
    [sizeDot, strokeWidth],
  );
  const wrapAnimaStyle = useAnimatedStyle(() => ({
    // borderColor: color.value as string,
  }));
  const wrapBgAnimaStyle = useAnimatedStyle(() => ({
    // backgroundColor: bgColor.value as string,
  }));
  const dotStyle = useAnimatedStyle(() => ({
    width: size.value,
    height: size.value,
    borderRadius: 4,
    backgroundColor: color.value as string,
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const circleStyle = useAnimatedStyle(() => ({
    width: size.value - 4,
    height: size.value - 4,
    borderRadius: size.value,
    backgroundColor: color.value as string,
  }));
  return (
    <TouchableWithoutFeedback onPress={_onPress}>
      <Block direction="row" style={{alignSelf: 'baseline'}}>
        <Block style={style} direction="row">
          <Animated.View
            style={[styles.wrap, wrapStyle, wrapAnimaStyle, wrapBgAnimaStyle]}>
            {isCircle ? (
              <Animated.View
                pointerEvents="none"
                style={[styles.dot, circleStyle]}></Animated.View>
            ) : (
              <Animated.View pointerEvents="none" style={dotStyle}>
                {value && (
                  <FastImage source={Images.ic_tick} style={styles.tick} />
                )}
              </Animated.View>
            )}
          </Animated.View>
          {!!title?.length && (
            <Text children={title} style={styles.textStyle} />
          )}
        </Block>
      </Block>
    </TouchableWithoutFeedback>
  );
};

export const RadioButton = memo(RadioButtonComponent, equals);
