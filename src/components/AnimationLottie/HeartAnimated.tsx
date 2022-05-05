import React, {useRef, useState} from 'react';
import Svg, {Path} from 'react-native-svg';
import LottieView from 'lottie-react-native';
import {Animated, View} from 'react-native';
import {colors, Spacing} from '@theme';
import {DebounceButton} from '@components/Button/Button';
export type iconAnimation = {
  isActive?: boolean | number;
};
export const HeartLotie = (props: iconAnimation) => {
  // const animation = React.useRef<any>(null);
  // React.useEffect(() => {
  //   if (props.isActive) animation.current.play(0, 20);
  // }, [props.isActive]);
  const progress = useRef(new Animated.Value(0)).current;
  const [isLike, setIsLike] = useState<boolean>(false);
  const onPressHeart = () => {
    const newValue = isLike ? 0 : 1;
    Animated.timing(progress, {
      toValue: newValue,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    setIsLike(!isLike);
  };
  return (
    <DebounceButton
      onPress={onPressHeart}
      viewStyle={{
        width: Spacing.width40,
        height: Spacing.width40,
        borderWidth: Spacing.width2,
        borderColor: colors.mainColor,
        borderRadius: Spacing.width100,
        backgroundColor: colors.white,
      }}>
      <LottieView
        // ref={animation}
        style={{
          width: Spacing.width72,
          height: Spacing.width72,
          // position: 'absolute',
          top: -Spacing.width6,
          left: -Spacing.width6,
        }}
        source={require('./heart_animated.json')}
        progress={progress}
      />
    </DebounceButton>
  );
};
