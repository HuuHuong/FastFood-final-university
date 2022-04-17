import {View, Text} from 'react-native';
import React from 'react';
import {ScreenWrapper} from '@components/Screen/ScreenWrapper';
import {IconBack} from '@assets/icons/icon_back';
import {colors, Spacing} from '@theme';
import {AppText, DebounceButton} from '@components';
import {NavigationUtils} from '@navigation';

export const OrderAgain = () => {
  return (
    <ScreenWrapper
      unsafe
      scroll
      style={{paddingTop: Spacing.height44, marginHorizontal: Spacing.width20}}>
      <DebounceButton onPress={() => NavigationUtils.goBack()}>
        <IconBack strokeColor={colors.black} />
      </DebounceButton>
      <View>
        <AppText>{'Order Again'}</AppText>
      </View>
    </ScreenWrapper>
  );
};
