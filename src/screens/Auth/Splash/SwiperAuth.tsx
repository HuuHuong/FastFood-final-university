import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {ScreenWrapper} from '@components/Screen/ScreenWrapper';
import {AppText} from '@components';
import {colors} from '@theme';
import {IconArrowRight} from '@assets';
import {styles} from './styles';

export const SwiperAuth = () => {
  return (
    // <ScreenWrapper>
    //   <View>
    //     <AppText>{'hello'}</AppText>
    //   </View>
    // </ScreenWrapper>
    <SafeAreaView style={{flex: 1, backgroundColor: colors.mainColor}}>
      <View style={styles.header_swipper}>
        <AppText style={styles.skip}>{'SKIP'}</AppText>
        <IconArrowRight />
      </View>
    </SafeAreaView>
  );
};
