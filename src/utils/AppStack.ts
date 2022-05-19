import {VoucherScreen} from '@screens/App/CartScreen/VoucherScreen/VoucherScreen';
import {DetailFood} from '@screens/App/DetailFood/DetailFood';
import {ListFood} from '@screens/App/ListFood/ListFood';
import {OrderAgain} from '@screens/App/OrderAgain/OrderAgain';
import {LanguageScreen} from '@screens/App/ProfileScreen/SettingScreen/LanguageScreen/LanguageScreen';
import {SettingScreen} from '@screens/App/ProfileScreen/SettingScreen/SettingScreen';
import {YourOrders} from '@screens/App/ProfileScreen/YourOrders/YourOrders';
import {LocationScreen} from '@screens/Auth/Location/LocationScreen';
import {LoginScreen} from '@screens/Auth/LoginApp/LoginScreen';
import {SplashScreen} from '@screens/Auth/Splash/SplashScreen';
import {SwiperAuth} from '@screens/Auth/Splash/SwiperAuth';
import {WelcomeScreen} from '@screens/Auth/WelcomeScreen/WelcomeScreen';
import {SCREEN_ROUTER_APP} from './constants';

const {
  SPLASH,
  LOGIN,
  SWIPER_AUTH,
  LIST_FOOD,
  ORDER_AGAIN,
  DETAIL_FOOD,
  SETTING,
  LANGUAGE,
  WELCOME,
  MY_LOCATION,
  YOUR_ORDERS,
  VOUCHER,
} = SCREEN_ROUTER_APP;
export const APP_STACK = {
  [SPLASH]: SplashScreen,
  [SWIPER_AUTH]: SwiperAuth,
  [LOGIN]: LoginScreen,
  [WELCOME]: WelcomeScreen,
  [MY_LOCATION]: LocationScreen,
  [LIST_FOOD]: ListFood,
  [ORDER_AGAIN]: OrderAgain,
  [DETAIL_FOOD]: DetailFood,
  [SETTING]: SettingScreen,
  [LANGUAGE]: LanguageScreen,
  [YOUR_ORDERS]: YourOrders,
  [VOUCHER]: VoucherScreen,
};
