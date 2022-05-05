import {View, Text, Dimensions} from 'react-native';
import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import {Images} from '@assets';
import {styles} from './styles';
import {colors, Spacing} from '@theme';
import {TabLogin} from './TabLogin/TabLogin';
import {TabSignUp} from './TabSignUp/TabSignUp';
import {TabView, SceneMap} from 'react-native-tab-view';
import AppTabView from '@components/AppTabView/AppTabView';
import {ScreenWrapper} from '@components/Screen/ScreenWrapper';
import {useFunctions} from './useFunctions';
import trans from '@assets/trans';
export const LoginScreen = () => {
  const {
    showDialog,
    signInFacebook,
    signInGoogle,
    isVisible,
    setIsVisible,
    onSubmit,
    verifyCode,
  } = useFunctions();
  return (
    <ScreenWrapper unsafe dialogLoading={showDialog} style={{flex: 1}}>
      <View style={{width: '100%', backgroundColor: colors.white}}>
        <FastImage source={Images.ic_logo} style={styles.logo} />
      </View>
      <AppTabView
        screenRoutes={[
          {key: 'TabLogin', title: trans().login},
          {key: 'TabSignUp', title: trans().sign_up},
        ]}
        components={{
          TabLogin: () => (
            <TabLogin
              signInFacebook={signInFacebook}
              signInGoogle={signInGoogle}
            />
          ),
          TabSignUp: () => (
            <TabSignUp
              onSubmit={onSubmit}
              verifyCode={verifyCode}
              isVisible={isVisible}
              setIsVisible={setIsVisible}
              signInFacebook={signInFacebook}
              signInGoogle={signInGoogle}
            />
          ),
        }}
      />
    </ScreenWrapper>
  );
};
