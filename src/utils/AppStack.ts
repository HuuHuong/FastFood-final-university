import {DetailFood} from '@screens/App/DetailFood/DetailFood';
import {ListFood} from '@screens/App/ListFood/ListFood';
import {OrderAgain} from '@screens/App/OrderAgain/OrderAgain';
import {LoginScreen} from '@screens/Auth/LoginApp/LoginScreen';
import {SplashScreen} from '@screens/Auth/Splash/SplashScreen';
import {SwiperAuth} from '@screens/Auth/Splash/SwiperAuth';
import {SCREEN_ROUTER_APP} from './constants';

const {SPLASH, LOGIN, SWIPER_AUTH, LIST_FOOD, ORDER_AGAIN, DETAIL_FOOD} =
  SCREEN_ROUTER_APP;
export const APP_STACK = {
  [SPLASH]: SplashScreen,
  [SWIPER_AUTH]: SwiperAuth,
  [LOGIN]: LoginScreen,
  [LIST_FOOD]: ListFood,
  [ORDER_AGAIN]: OrderAgain,
  [DETAIL_FOOD]: DetailFood,
};
