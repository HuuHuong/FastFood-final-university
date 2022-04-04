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
const TAB_BAR = {
  HOME: {
    name: SCREEN_ROUTER_APP.HOME,
    // icon: R.images.ic_home,
    // route: HomePageScreen,
    // title: R.strings().home,
  },
  OFFERS: {
    name: SCREEN_ROUTER_APP.OFFERS,
    // icon: R.images.ic_session,
    // route: SessionScreen,
    // title: R.strings().my_session,
  },
  CART: {
    name: SCREEN_ROUTER_APP.CART,
    // icon: R.images.ic_care,
    // route: ScheduleScreen,
    // title: R.strings().schedule,
  },
  PROFILE: {
    name: SCREEN_ROUTER_APP.PROFILE,
    // icon: R.images.ic_profile,
    // route: ProfileScreen,
    // title: R.strings().profile,
  },
};
export {APP_STACK, SCREEN_ROUTER_APP};
