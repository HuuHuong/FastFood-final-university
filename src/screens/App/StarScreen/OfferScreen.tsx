import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {ScreenWrapper} from '@components/Screen/ScreenWrapper';
import {colors, Spacing} from '@theme';
import {AppText} from '@components';
import trans, {IconNext, Images} from '@assets';
import {VirtualList} from '@components/Flatlist';
import {styles} from './styles';
import FastImage from 'react-native-fast-image';

export const OfferScreen = () => {
  const renderHappyDeals = ({item, index}: any) => {
    return (
      <ImageBackground
        source={Images.img_coffee}
        imageStyle={styles.img_item_deals}
        style={styles.view_item}>
        <View
          style={{marginTop: Spacing.height20, marginLeft: Spacing.width12}}>
          <AppText style={styles.content_discount}>{'Try new'}</AppText>
          <AppText style={styles.title_discount}>{'Laaarge Discounts'}</AppText>
          <View style={styles.view_icon}>
            <IconNext strokeColor={colors.black} />
          </View>
        </View>
      </ImageBackground>
    );
  };
  const renderExclusively = ({item, index}: any) => {
    return (
      <View style={styles.view_exclusively}>
        <FastImage source={Images.img_kfc} style={styles.img_brands} />
        <AppText style={styles.discounts}>{'UP TO 60%'}</AppText>
        <AppText style={styles.title_exclusively}>{'on KFC'}</AppText>
      </View>
    );
  };
  const BigOffers = React.memo(() => (
    <VirtualList
      data={[1, 2, 3]}
      renderItem={renderHappyDeals}
      horizontal
      contentContainerStyle={{
        paddingHorizontal: Spacing.width12,
      }}
    />
  ));
  const ExclusivelyFood = React.memo(() => (
    <VirtualList
      data={[1, 2, 3]}
      renderItem={renderExclusively}
      horizontal
      contentContainerStyle={{
        paddingHorizontal: Spacing.width12,
        marginTop: Spacing.height52,
      }}
    />
  ));

  return (
    <ScreenWrapper
      backgroundColor={colors.white}
      unsafe
      scroll
      style={{paddingTop: Spacing.height44}}>
      <View
        style={{
          marginHorizontal: Spacing.width20,
          marginBottom: Spacing.height24,
        }}>
        <AppText style={styles.content_header}>{trans().big_offers}</AppText>
        <AppText style={styles.title_header}>{trans().a_big_binge}</AppText>
      </View>
      <BigOffers />
      <View
        style={{
          marginTop: Spacing.height24,
          marginHorizontal: Spacing.width20,
          backgroundColor: colors.gray_F3,
          height: Spacing.height2,
        }}></View>
      <View
        style={{
          marginHorizontal: Spacing.width20,
          marginTop: Spacing.height28,
        }}>
        <AppText style={styles.content_header}>{trans().exclusively}</AppText>
        <AppText style={styles.title_header}>{trans().deal_icious}</AppText>
      </View>
      <ExclusivelyFood />
      <View
        style={{
          marginTop: Spacing.height24,
          marginHorizontal: Spacing.width20,
          backgroundColor: colors.gray_F3,
          height: Spacing.height2,
        }}></View>
      {/* <View
        style={{
          marginHorizontal: Spacing.width20,
          marginTop: Spacing.height28,
        }}>
        <AppText style={styles.content_header}>{trans().best_offers}</AppText>
        <AppText style={styles.title_header}>{trans().just_for_you}</AppText>
      </View> */}
    </ScreenWrapper>
  );
};
