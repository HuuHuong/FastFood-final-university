import {View, Text} from 'react-native';
import React from 'react';
import trans, {Images} from '@assets';
import {NavigationUtils} from '@navigation';
import {SCREEN_ROUTER_APP} from '@utils';

export const useFunctions = () => {
  const OPTION_SETTING = [
    {
      id: 1,
      icon: Images.ic_bookmark,
      title: trans().bookmark,
    },
    {
      id: 2,
      icon: Images.ic_notification,
      title: trans().notification,
    },
    {
      id: 3,
      icon: Images.ic_setting,
      title: trans().setting,
      navigate: SCREEN_ROUTER_APP.SETTING,
    },
    {
      id: 4,
      icon: Images.ic_payment,
      title: trans().payment,
    },
  ];
  const OPTION_MENU = [
    {
      id: 1,
      title: trans().your_orders,
    },
    {
      id: 2,
      title: trans().feedback,
    },
    {
      id: 3,
      title: trans().my_preference,
    },
    {
      id: 4,
      title: trans().help,
    },
  ];
  const OPTION_ADMIN = [
    {
      id: 1,
      title: trans().send_feedback,
    },
    {
      id: 2,
      title: trans().report,
    },
    {
      id: 3,
      title: trans().rate,
    },
    {
      id: 4,
      title: trans().logout,
    },
  ];

  const onNavigationOptionSetting = (navigateItem: any) => {
    NavigationUtils.navigate(navigateItem);
  };

  return {OPTION_SETTING, OPTION_MENU, OPTION_ADMIN, onNavigationOptionSetting};
};