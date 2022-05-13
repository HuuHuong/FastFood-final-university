import {View, Text} from 'react-native';
import React from 'react';
import {ScreenWrapper} from '@components/Screen/ScreenWrapper';
import {colors, commonStyles, Spacing} from '@theme';
import {AppText, DebounceButton, MainButtonApp} from '@components';
import trans, {IconAbout, IconNext, Images} from '@assets';
import FastImage from 'react-native-fast-image';
import {styles} from './styles';
import {useFunctions} from './useFunctions';

export const ProfileScreen = () => {
  const {
    OPTION_SETTING,
    OPTION_MENU,
    OPTION_ADMIN,
    onNavigationOptionSetting,
    onPressAdmin,
    dataUser,
    onNavigateMenu,
    onLogOut,
    showDialog,
  } = useFunctions();
  const renderOption = (item: any, index: number) => {
    return (
      <DebounceButton
        key={index}
        viewStyle={styles.view_option}
        onPress={() => onNavigationOptionSetting(item?.navigate)}>
        <FastImage source={item?.icon} style={styles.icon_option} />
        <AppText style={styles.title_option}>{item?.title}</AppText>
      </DebounceButton>
    );
  };
  return (
    <ScreenWrapper
      dialogLoading={showDialog}
      scroll
      unsafe
      style={{
        paddingVertical: Spacing.height44,
        marginHorizontal: Spacing.width20,
      }}>
      <View style={{...commonStyles.row_center_space_between}}>
        <AppText style={styles.personal_detail}>
          {trans().personal_detail}
        </AppText>
        <DebounceButton>
          <AppText style={styles.edit}>{trans().edit}</AppText>
        </DebounceButton>
      </View>
      <View style={styles.view_user}>
        <FastImage source={Images.img_avatar} style={styles.avatar} />
        <View style={{marginLeft: Spacing.width16}}>
          <AppText style={styles.name}>{dataUser?.name}</AppText>
          <AppText style={styles.phone_address}>{dataUser?.email}</AppText>
          <AppText style={styles.phone_address}>
            {dataUser?.phone_number || '*phone_number'}
          </AppText>
          <AppText
            numberOfLines={2}
            style={[styles.phone_address, {width: '80%'}]}>
            {'#21-22-31, Masab Tank, Hyderabad.'}
          </AppText>
        </View>
      </View>
      <View style={{...commonStyles.row_center_space_between}}>
        {OPTION_SETTING.map((item: any, index: number) =>
          renderOption(item, index),
        )}
      </View>
      <View
        style={{marginTop: Spacing.height36, marginBottom: Spacing.height14}}>
        {OPTION_MENU.map((item: any, index: number) => (
          <DebounceButton
            onPress={() => onNavigateMenu(item?.navigate)}
            key={index}
            viewStyle={styles.view_option_menu}>
            <AppText style={styles.title_option_menu}>{item?.title}</AppText>
            <IconNext strokeColor={colors.black} />
          </DebounceButton>
        ))}
      </View>
      <View style={{marginHorizontal: Spacing.width20}}>
        {OPTION_ADMIN.map((item: any, index: number) => (
          <DebounceButton
            onPress={() => onPressAdmin(item)}
            key={index}
            viewStyle={{marginBottom: Spacing.height12}}>
            <AppText style={styles.title_option_admin}>{item?.title}</AppText>
          </DebounceButton>
        ))}
      </View>
      <DebounceButton viewStyle={styles.view_about}>
        <IconAbout />
        <AppText style={styles.about}>{trans().about}</AppText>
      </DebounceButton>
      <MainButtonApp
        onPress={onLogOut}
        title={trans().logout}
        style={{marginTop: Spacing.height52}}
      />
    </ScreenWrapper>
  );
};
