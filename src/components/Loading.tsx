import {View, Text} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {Dot_Loading} from './AnimationLottie';
export const AppLoading = React.memo(() => {
  const animation = React.useRef<any>(null);
  React.useEffect(() => {
    animation.current.play(0, 140);
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <LottieView
        ref={animation}
        style={
          {
            // width: scaleWidth(70),
            // height: scaleHeight(70),
            // marginLeft: scaleWidth(-20),
            // marginRight: scaleWidth(-32),
          }
        }
        source={Dot_Loading}
        autoPlay={true}
        loop={true}
      />
    </View>
  );
});
