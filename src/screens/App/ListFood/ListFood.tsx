import {View, Text} from 'react-native';
import React from 'react';
import {BackButton} from '@components';
import {ScreenWrapper} from '@components/Screen/ScreenWrapper';
import {Spacing} from '@theme';

export const ListFood = () => {
  return (
    <ScreenWrapper back unsafe style={{paddingTop: Spacing.height44}}>
      <BackButton />
    </ScreenWrapper>
  );
};
