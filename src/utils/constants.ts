import {Images} from '@assets';
import {CartScreen} from '@screens/App/CartScreen/CartScreen';
import {HomeScreen} from '@screens/App/HomeScreen/HomeScreen';
import {ProfileScreen} from '@screens/App/ProfileScreen/ProfileScreen';
import {OfferScreen} from '@screens/App/StarScreen/OfferScreen';
import {Platform} from 'react-native';
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
  LIST_FOOD: 'LIST_FOOD',
  ORDER_AGAIN: 'ORDER_AGAIN',
  DETAIL_FOOD: 'DETAIL_FOOD',

  SETTING: 'SETTING',
  LANGUAGE: 'LANGUAGE',
};
const MAIN_TAB_BAR = {
  HOME: 'HOME',
  OFFERS: 'OFFERS',
  CART: 'CART',
  PROFILE: 'PROFILE',
};
const SOCIAL_NETWORK = {
  GOOGLE: 'google',
  FACEBOOK: 'facebook',
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
    route: OfferScreen,
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
const GOOGLE_CONFIG = {
  CLIENT_ID:
    '178946544364-sb94rpoafoe1geoq2tnd3m3kufg724kf.apps.googleusercontent.com',
  PROFILE_IMAGE_SIZE: 120,
};
const CREDENTIALS = {
  clientId: 'AIzaSyDxKmTyiBDzoNiPYrnCwiE3F23QRGa_CfE',
  appId:
    Platform.OS === 'android'
      ? '1:178946544364:android:2c4f956e5f0888e783cbc9'
      : '1:178946544364:ios:1523ff55a37daf0f83cbc9',
  apiKey: 'AIzaSyDxKmTyiBDzoNiPYrnCwiE3F23QRGa_CfE',
  databaseURL:
    'https://fastfood-debf7-default-rtdb.asia-southeast1.firebasedatabase.app/',
  storageBucket: '',
  messagingSenderId: '',
  projectId: 'fastfood-debf7',
};
const BANNER_HOME = [
  {
    id: 1,
    content: 'Select Preferences',
    img: Images.img_banner1,
    title: 'You can now order from multiple restaurants at the same time!',
  },
  {
    id: 2,
    content: 'Select Preferences',
    img: Images.img_banner1,
    title: 'You can now order from multiple restaurants at the same time!',
  },
  {
    id: 3,
    content: 'Select Preferences',
    img: Images.img_banner1,
    title: 'You can now order from multiple restaurants at the same time!',
  },
];
const USER = [
  {
    id: 1,
    name: 'User 1',
  },
  {
    id: 2,
    name: 'User 2',
  },
  {
    id: 3,
    name: 'User 3',
  },
  {
    id: 4,
    name: 'User 4',
  },
];
const TYPE_QUANTITY = {
  REDUCTION: 0,
  INCREASE: 1,
};
export {
  APP_STACK,
  SCREEN_ROUTER_APP,
  TAB_BAR,
  MAIN_TAB_BAR,
  BANNER_HOME,
  USER,
  SOCIAL_NETWORK,
  GOOGLE_CONFIG,
  CREDENTIALS,
  TYPE_QUANTITY,
};
