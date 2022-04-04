import {LoginScreen} from '@screens/App/LoginScreen/LoginScreen';
import {SplashScreen} from '@screens/Auth/Splash/SplashScreen';
import {SwiperAuth} from '@screens/Auth/Splash/SwiperAuth';
import {SCREEN_ROUTER_APP} from './constants';

const {SPLASH, LOGIN, SWIPER_AUTH} = SCREEN_ROUTER_APP;
export const APP_STACK = {
  [SPLASH]: SplashScreen,
  [SWIPER_AUTH]: SwiperAuth,
  [LOGIN]: LoginScreen,
};
