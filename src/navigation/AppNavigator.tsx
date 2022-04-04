import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStackComponent} from './stack/MainStack';

const NavigationApp = React.forwardRef((props: any, ref: any) => {
  const renderStackApp = () => {
    return (
      <>
        <MainStackComponent />
      </>
    );
  };
  return (
    <NavigationContainer ref={ref}>{renderStackApp()}</NavigationContainer>
  );
});

export {NavigationApp};
