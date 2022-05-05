import {View, Text} from 'react-native';
import React from 'react';
import {ScreenWrapper} from '@components/Screen/ScreenWrapper';
import {colors, Spacing} from '@theme';
import {Images} from '@assets';
import FastImage from 'react-native-fast-image';
import {styles} from './styles';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export const LocationScreen = () => {
  return (
    <ScreenWrapper
      unsafe
      backgroundColor={colors.mainColor}
      style={{paddingTop: Spacing.height44}}>
      <FastImage source={Images.ic_logo} style={styles.logo} />
      <View style={{height: Spacing.height220, width: '100%'}}>
        {/* <DebounceButton
          activeOpacity={0.5}
          onPress={lingkingToGoogleMap}
          viewStyle={styles.container}></DebounceButton> */}
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          minZoomLevel={6}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          }}></MapView>
      </View>
    </ScreenWrapper>
  );
};
