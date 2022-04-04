import {View, Text, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import {colors} from '@theme';
import {ScreenWrapperProps} from './ScreenWrapperProps';

export const ScreenWrapper = React.memo((props: ScreenWrapperProps) => {
  const {children, scroll} = props;
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={colors.mainColor} />
      {scroll ? (
        <ScrollView>
          <View>{children}</View>
        </ScrollView>
      ) : (
        {children}
      )}
    </SafeAreaView>
  );
});
