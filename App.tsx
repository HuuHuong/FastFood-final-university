import {View, Text} from 'react-native';
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Provider, useDispatch} from 'react-redux';
import {QueryClientProvider, QueryClient} from 'react-query';
import {PersistGate} from 'redux-persist/integration/react';
import {ThemeProvider} from '@theme';
import {NavigationApp, NavigationUtils} from '@navigation';
import {persistor, store} from '@redux';
import I18n from './src/i18n/i18n';
import AsyncStorageService from '@services/AsyncStorage/AsyncStorageService';
import {setLocalLang} from '@redux/slices/accountSlice';
const queryClient = new QueryClient();
const LanguageSetting = () => {
  const dispatch = useDispatch();
  const updateLanguage = async () => {
    const lang = await AsyncStorageService.load('language');
    if (lang) {
      I18n.locale = lang;
      dispatch(setLocalLang(lang));
    } else {
      I18n.locale = 'en';
      dispatch(setLocalLang('en'));
    }
  };
  useEffect(() => {
    updateLanguage();
  }, []);
  return null;
};
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider>
          <PersistGate loading={null} persistor={persistor}>
            <LanguageSetting />
            <NavigationApp
              ref={(navigatorRef: any) =>
                NavigationUtils.setTopLevelNavigator(navigatorRef)
              }
            />
          </PersistGate>
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
