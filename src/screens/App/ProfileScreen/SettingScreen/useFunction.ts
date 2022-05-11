import {NavigationUtils} from '@navigation';
import {SCREEN_ROUTER_APP} from '@utils';
import React from 'react';
import {useSelector} from 'react-redux';

export const useFunction = () => {
  const languageApp = useSelector((state: any) => state.accountSlice.localLang);
  const onSettingLanguage = () => {
    NavigationUtils.navigate(SCREEN_ROUTER_APP.LANGUAGE);
  };
  const renderLanguage = () => {
    switch (languageApp) {
      case 'en':
        return 'English';
      case 'vi':
        return 'Việt Nam';
      default:
        return '';
    }
  };
  return {onSettingLanguage, renderLanguage};
};
