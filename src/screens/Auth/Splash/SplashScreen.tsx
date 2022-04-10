import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationUtils} from '@navigation';
import {SCREEN_ROUTER_APP} from '@utils';
import FastImage from 'react-native-fast-image';
import {Images} from '@assets';

export const SplashScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      NavigationUtils.replace(SCREEN_ROUTER_APP.SWIPER_AUTH);
    }, 1000);
  });
  return (
    <View style={{flex: 1}}>
      <FastImage
        source={Images.img_splash}
        style={{width: '100%', height: '100%'}}
      />
    </View>
  );
};
