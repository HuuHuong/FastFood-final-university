import {View, Text, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import {colors} from '@theme';
import {ScreenWrapperProps} from './ScreenWrapperProps';
import {AppLoading} from '@components/Loading';

export const ScreenWrapper = React.memo((props: ScreenWrapperProps) => {
  const {
    scroll = false,
    backgroundColor,
    back = false,
    isLoading = false,
    // ...
  } = props;
  const renderBody = () => {
    const {isLoading} = props;
    if (isLoading) return <AppLoading />;
    return (
      <>
        {scroll ? (
          <ScreenWithScrolling {...props} />
        ) : (
          <DismissKeyboard>
            <ScreenWithoutScrolling {...props} />
          </DismissKeyboard>
        )}
      </>
    );
  };
  return <View></View>;
});
