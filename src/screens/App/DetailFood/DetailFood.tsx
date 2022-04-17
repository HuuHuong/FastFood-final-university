import {View, Text} from 'react-native';
import React from 'react';
import {ScreenWrapper} from '@components/Screen/ScreenWrapper';
import {AppText, DebounceButton} from '@components';
import {colors, Spacing} from '@theme';
import {NavigationUtils} from '@navigation';
import {IconBack} from '@assets/icons/icon_back';

export const DetailFood = () => {
  return (
    <ScreenWrapper
      unsafe
      scroll
      style={{paddingTop: Spacing.height44, marginHorizontal: Spacing.width20}}>
      <DebounceButton onPress={() => NavigationUtils.goBack()}>
        <IconBack strokeColor={colors.black} />
      </DebounceButton>
      <View>
        <AppText>{'Detail Food'}</AppText>
      </View>
    </ScreenWrapper>
  );
};
