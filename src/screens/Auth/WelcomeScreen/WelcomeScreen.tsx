import {View, Text} from 'react-native';
import React from 'react';
import {ScreenWrapper} from '@components/Screen/ScreenWrapper';
import {colors, Spacing} from '@theme';
import {AppText, DebounceButton, MainButtonApp} from '@components';
import trans, {IconArrowRight, Images} from '@assets';
import {styles} from './styles';
import {useFunctions} from './useFunctions';
import FastImage from 'react-native-fast-image';

export const WelcomeScreen = (props: any) => {
  const {onStart, name, onNavigationLocation} = useFunctions(props);
  return (
    <ScreenWrapper
      unsafe
      backgroundColor={colors.mainColor}
      style={{paddingVertical: Spacing.height44}}>
      <DebounceButton onPress={onStart} viewStyle={styles.header_swipper}>
        <AppText style={styles.skip}>{trans().skip}</AppText>
        <IconArrowRight strokeColor={colors.white} />
      </DebounceButton>
      <FastImage source={Images.ic_logo} style={styles.logo} />
      <AppText style={styles.welcome}>{trans().welcome}</AppText>
      <AppText style={styles.welcome}>{`${name}!`}</AppText>
      <View style={{width: '80%', alignSelf: 'center'}}>
        <AppText style={styles.welcome_title}>{trans().welcome_title}</AppText>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: Spacing.height52,
          width: '100%',
        }}>
        <AppText style={styles.select_location}>
          {trans().select_location}
        </AppText>
        <MainButtonApp
          onPress={() => onNavigationLocation()}
          activeOpacity={0.7}
          style={styles.view_btn}
          socialIcon={
            <FastImage
              source={Images.ic_location}
              style={styles.icon_location}
            />
          }
          title={trans().locate_me}
          titleStyle={{color: colors.mainColor, marginLeft: Spacing.width12}}
        />
        <MainButtonApp
          activeOpacity={0.7}
          style={styles.view_btn}
          socialIcon={
            <FastImage source={Images.ic_maker} style={styles.icon_maker} />
          }
          title={trans().provide_delivery}
          titleStyle={{color: colors.mainColor, marginLeft: Spacing.width12}}
        />
      </View>
    </ScreenWrapper>
  );
};
