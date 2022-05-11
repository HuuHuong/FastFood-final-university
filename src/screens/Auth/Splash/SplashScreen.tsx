import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationUtils} from '@navigation';
import {SCREEN_ROUTER_APP} from '@utils';
import FastImage from 'react-native-fast-image';
import {Images} from '@assets';
import {useSelector} from 'react-redux';
import reactotron from 'reactotron-react-native';

export const SplashScreen = () => {
  const {isFirst, token} = useSelector((state: any) => state.accountSlice);
  reactotron.log!({isFirst});
  useEffect(() => {
    setTimeout(() => {
      if (token) NavigationUtils.reset(SCREEN_ROUTER_APP.MAIN);
      else NavigationUtils.replace(SCREEN_ROUTER_APP.SWIPER_AUTH);
    }, 1000);
  }, []);
  return (
    <View style={{flex: 1}}>
      <FastImage
        source={Images.img_splash}
        style={{width: '100%', height: '100%'}}
      />
    </View>
  );
};
