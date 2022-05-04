import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setLocalLang} from '@redux/slices/accountSlice';

import AsyncStorageService from '@services/AsyncStorage/AsyncStorageService';
import {NavigationUtils} from '@navigation';
import {SCREEN_ROUTER_APP} from '@utils';
import I18n from '../../../../../i18n/i18n';
interface Language {
  id: number;
  lang: string;
  isChecked: boolean;
  localLang: string;
}
export const useFunctions = () => {
  const LANGUAGE = [
    {
      id: 1,
      lang: 'English',
      isChecked: false,
      localLang: 'en',
    },
    {
      id: 1,
      lang: 'Việt Nam',
      isChecked: false,
      localLang: 'vi',
    },
  ];
  const dispatch = useDispatch();
  const [language, setLanguage] = useState<Language[]>([]);
  const languageApp = useSelector((state: any) => state.accountSlice.localLang);

  useEffect(() => {
    setLanguage(
      LANGUAGE.map((item: any, index: number) => {
        if (item.localLang === languageApp) return {...item, isChecked: true};
        else return item;
      }),
    );
  }, []);
  const onSelectlanguage = async (item: any, indexLang: any) => {
    try {
      if (!item.isChecked) {
        // const response = await changeLanguageApi({language: item.localLang});
        const languageCode = language[indexLang].localLang;
        setLanguage(
          language.map((item: any, index: number) => {
            if (index === indexLang) return {...item, isChecked: true};
            else return {...item, isChecked: false};
          }),
        );
        dispatch(setLocalLang(languageCode));
        I18n.locale = languageCode;
        AsyncStorageService.save('language', languageCode);
        NavigationUtils.reset(SCREEN_ROUTER_APP.SPLASH);
      }
    } catch (error) {}
  };
  return {language, onSelectlanguage};
};
