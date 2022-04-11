import {Images} from '@assets';
import {CartScreen} from '@screens/App/CartScreen/CartScreen';
import {HomeScreen} from '@screens/App/HomeScreen/HomeScreen';
import {ProfileScreen} from '@screens/App/ProfileScreen/ProfileScreen';
import {StarScreen} from '@screens/App/StarScreen/StarScreen';
import {APP_STACK} from './AppStack';

const SCREEN_ROUTER_APP = {
  SPLASH: 'SPLASH',
  MAIN: 'MAIN',
  HOME: 'HOME',
  OFFERS: 'OFFERS',
  CART: 'CART',
  PROFILE: 'PROFILE',
  LOGIN: 'LOGIN',
  SWIPER_AUTH: 'SWIPER_AUTH',
};
const MAIN_TAB_BAR = {
  HOME: 'HOME',
  OFFERS: 'OFFERS',
  CART: 'CART',
  PROFILE: 'PROFILE',
};
const TAB_BAR = {
  HOME: {
    name: SCREEN_ROUTER_APP.HOME,
    icon: Images.ic_home,
    route: HomeScreen,
    title: 'HOME',
  },
  OFFERS: {
    name: SCREEN_ROUTER_APP.OFFERS,
    icon: Images.ic_offers,
    route: StarScreen,
    title: 'OFFERS',
  },
  CART: {
    name: SCREEN_ROUTER_APP.CART,
    icon: Images.ic_cart,
    route: CartScreen,
    title: 'CART',
  },
  PROFILE: {
    name: SCREEN_ROUTER_APP.PROFILE,
    icon: Images.ic_user,
    route: ProfileScreen,
    title: 'ACCOUNT',
  },
};
export {APP_STACK, SCREEN_ROUTER_APP, TAB_BAR, MAIN_TAB_BAR};
