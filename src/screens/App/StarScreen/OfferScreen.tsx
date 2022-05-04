import {View, Text} from 'react-native';
import React from 'react';
import {ScreenWrapper} from '@components/Screen/ScreenWrapper';
import {colors, Spacing} from '@theme';
import {AppText} from '@components';

export const OfferScreen = () => {
  return (
    <ScreenWrapper
      backgroundColor={colors.white}
      unsafe
      scroll
      style={{paddingTop: Spacing.height44}}>
      <View>
        <AppText>{'Happy Deals'}</AppText>
      </View>
    </ScreenWrapper>
  );
};
