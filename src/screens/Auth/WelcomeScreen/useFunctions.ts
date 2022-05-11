import {NavigationUtils} from '@navigation';
import {SCREEN_ROUTER_APP} from '@utils';

export const useFunctions = (props: any) => {
  const {name} = props.route?.params;
  const onStart = () => {
    NavigationUtils.reset(SCREEN_ROUTER_APP.MAIN);
  };
  const onNavigationLocation = () => {
    NavigationUtils.navigate(SCREEN_ROUTER_APP.MY_LOCATION);
  };
  return {
    onStart,
    name,
    onNavigationLocation,
  };
};
