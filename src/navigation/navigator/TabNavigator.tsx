import React, {memo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {CustomTabBar} from './CustomTab';

// import { Home } from '@screens';
// export { SCREEN_ROUTE } from '../route';

const Tab = createBottomTabNavigator();

const TabNavigator = memo(function () {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}></Tab.Navigator>
  );
});

export {TabNavigator};
