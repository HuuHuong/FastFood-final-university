import {NavigationUtils} from '@navigation';
import {SCREEN_ROUTER_APP} from '@utils';
import React from 'react';

export const useFunction = () => {
  const onSettingLanguage = () => {
    NavigationUtils.navigate(SCREEN_ROUTER_APP.LANGUAGE);
  };
  return {onSettingLanguage};
};
