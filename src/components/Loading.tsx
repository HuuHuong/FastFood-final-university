import {View, Text} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {Dot_Loading} from './AnimationLottie';
import {Spacing} from '@theme';
export const AppLoading = React.memo(() => {
  const animation = React.useRef<any>(null);
  React.useEffect(() => {
    animation.current.play(0, 140);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255,255,255,0.2)',
        zIndex: 99,
      }}>
      <LottieView
        progress={0}
        ref={animation}
        style={{
          width: Spacing.width200,
          // height: Spacing.width200,
          // marginLeft: scaleWidth(-20),
          // marginRight: scaleWidth(-32),
        }}
        source={Dot_Loading}
        autoPlay={true}
        loop={true}
      />
    </View>
  );
});
