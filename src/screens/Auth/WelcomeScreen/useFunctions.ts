import {NavigationUtils} from '@navigation';
import {SCREEN_ROUTER_APP} from '@utils';

export const useFunctions = (props: any) => {
  const {name} = props.route?.params;
  const onStart = () => {};
  const onNavigationLocation = () => {
    NavigationUtils.navigate(SCREEN_ROUTER_APP.MY_LOCATION);
  };
  return {
    onStart,
    name,
    onNavigationLocation,
  };
};
