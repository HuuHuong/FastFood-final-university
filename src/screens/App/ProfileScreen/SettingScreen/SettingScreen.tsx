import {View, Text} from 'react-native';
import React from 'react';
import {ScreenWrapper} from '@components/Screen/ScreenWrapper';
import {colors, commonStyles, Spacing} from '@theme';
import {AppText, BackButton, DebounceButton} from '@components';
import trans, {IconNext} from '@assets';
import {useFunction} from './useFunction';
import {styles} from './styles';

export const SettingScreen = () => {
  const {onSettingLanguage} = useFunction();
  return (
    <ScreenWrapper
      unsafe
      scroll
      style={{
        paddingVertical: Spacing.height44,
        marginHorizontal: Spacing.width20,
      }}>
      <View
        style={{
          ...commonStyles.row_align_center,
          marginBottom: Spacing.height24,
        }}>
        <BackButton />
        <AppText style={styles.heading_txt}>{trans().setting}</AppText>
      </View>
      <DebounceButton
        onPress={onSettingLanguage}
        viewStyle={styles.view_btn}
        activeOpacity={1}>
        <AppText style={styles.title_setting}>{trans().language}</AppText>
        <View style={{...commonStyles.row_align_center}}>
          <AppText style={styles.language}>{'Việt Nam'}</AppText>
          <IconNext strokeColor={colors.black} />
        </View>
      </DebounceButton>
    </ScreenWrapper>
  );
};
