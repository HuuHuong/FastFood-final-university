import React, {memo, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {APP_STACK, SCREEN_ROUTER_APP} from '@utils';
import {BottomTab} from '@navigation/navigator/components/BottomTab/BottomTab';

const MainStack = createStackNavigator();

const MainStackComponent = memo(() => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {Object.keys(APP_STACK).map((item, index) => {
        return (
          <MainStack.Screen
            name={item}
            component={APP_STACK[item]}
            key={index}
          />
        );
      })}
      <MainStack.Screen name={SCREEN_ROUTER_APP.MAIN} component={BottomTab} />
    </MainStack.Navigator>
  );
});

export {MainStackComponent};
