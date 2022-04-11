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
export const LoginScreen = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{width: '100%', backgroundColor: colors.white}}>
        <FastImage source={Images.ic_logo} style={styles.logo} />
      </View>
      <AppTabView
        // reviewNumber={tutorDetail?.tutor?.reviews?.data?.length}
        screenRoutes={[
          {key: 'TabLogin', title: 'Login'},
          {key: 'TabSignUp', title: 'Sign-up'},
        ]}
        components={{
          TabLogin: () => <TabLogin />,
          TabSignUp: () => <TabSignUp />,
        }}
      />
    </View>
  );
};
