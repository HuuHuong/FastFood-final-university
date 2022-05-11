import {View, Text, PermissionsAndroid, Platform} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScreenWrapper} from '@components/Screen/ScreenWrapper';
import {colors, commonStyles, deviceHeight, deviceWidth, Spacing} from '@theme';
import trans, {IconHome, IconMarker, IconPencil, Images} from '@assets';
import FastImage from 'react-native-fast-image';
import {styles} from './styles';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation, {
  GeolocationError,
  GeolocationResponse,
} from '@react-native-community/geolocation';
import reactotron from 'reactotron-react-native';
import {AppText, BackButton, DebounceButton, MainButtonApp} from '@components';
import {IconBack} from '@assets/icons/icon_back';
import {NavigationUtils} from '@navigation';
export const LocationScreen = () => {
  const [currentLocation, setCurrentLocation] = useState<any>('');
  const [detailAdress, setDetailAddress] = useState<any>('');
  const LATITUDE_DELTA = 0.001;
  const ASPECT_RATIO = deviceWidth / deviceHeight;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position: GeolocationResponse) => {
        reactotron.log!({position});
        setCurrentLocation({
          latitude: position?.coords?.latitude || 0,
          longitude: position?.coords?.longitude || 0,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        });
      },
      (error: GeolocationError) => {},
      {
        enableHighAccuracy: false,
        // maximumAge: 2000,
        // timeout: 10000,
      },
    );
  };
  useEffect(() => {
    getCurrentLocation();
  }, []);
  return (
    <ScreenWrapper
      unsafe
      backgroundColor={colors.mainColor}
      style={{paddingTop: Spacing.height44}}>
      <FastImage source={Images.ic_logo} style={styles.logo} />

      <View style={styles.view_map}>
        <DebounceButton
          viewStyle={styles.view_back}
          onPress={() => NavigationUtils.goBack()}>
          <IconBack strokeColor={colors.black} />
          <AppText style={styles.deliver}>{trans().deliver_to}</AppText>
        </DebounceButton>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          minZoomLevel={3}
          showsUserLocation
          region={currentLocation}>
          <Marker coordinate={currentLocation}>
            <View>
              <IconMarker />
            </View>
          </Marker>
        </MapView>
      </View>
      <View style={styles.view_bottom}>
        <DebounceButton style={{alignSelf: 'flex-end'}}>
          <IconPencil />
        </DebounceButton>
        <View style={{...commonStyles.row_align_center}}>
          <IconHome />
          <AppText numberOfLines={2} style={styles.location}>
            {'21-42-34, Banjara Hills, Hyderabad, 500072'}
          </AppText>
        </View>
        <MainButtonApp
          style={{marginTop: Spacing.height16}}
          title={trans().confirm_location}
        />
      </View>
    </ScreenWrapper>
  );
};
