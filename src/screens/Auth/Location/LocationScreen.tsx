import {View, Text, PermissionsAndroid} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScreenWrapper} from '@components/Screen/ScreenWrapper';
import {colors, deviceHeight, deviceWidth, Spacing} from '@theme';
import {IconMarker, Images} from '@assets';
import FastImage from 'react-native-fast-image';
import {styles} from './styles';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation, {
  GeolocationError,
  GeolocationResponse,
} from '@react-native-community/geolocation';
import reactotron from 'reactotron-react-native';
import {BackButton} from '@components';
export const LocationScreen = () => {
  const [currentLocation, setCurrentLocation] = useState<any>('');
  const [detailAdress, setDetailAddress] = useState<any>('');
  const LATITUDE_DELTA = 0.001;
  const ASPECT_RATIO = deviceWidth / deviceHeight;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
  const permissionApp = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getCurrentLocation();
        console.log('Location permission granted');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position: GeolocationResponse) => {
        reactotron.log!({position});

        setCurrentLocation({
          latitude: 106.0193375,
          longitude: 21.1430392,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        });
      },
      (error: GeolocationError) => {},
      {
        enableHighAccuracy: false,
        maximumAge: 1000,
        timeout: 25000,
      },
    );
  };
  useEffect(() => {
    permissionApp();
  }, []);
  return (
    <ScreenWrapper
      unsafe
      backgroundColor={colors.mainColor}
      style={{paddingTop: Spacing.height44}}>
      <FastImage source={Images.ic_logo} style={styles.logo} />
      <BackButton />
      <View style={styles.view_map}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          minZoomLevel={6}
          region={currentLocation}>
          {/* <Marker coordinate={currentLocation}>
            <View>
              <IconMarker />
            </View>
          </Marker> */}
        </MapView>
      </View>
    </ScreenWrapper>
  );
};
