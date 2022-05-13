import {View, Text, ImageBackground, ScrollView} from 'react-native';
import React from 'react';
import {ScreenWrapper} from '@components/Screen/ScreenWrapper';
import {AppText, BackButton, DebounceButton, HeartLotie} from '@components';
import {colors, commonStyles, FontSize, Spacing} from '@theme';
import {NavigationUtils} from '@navigation';
import {IconBack} from '@assets/icons/icon_back';
import trans, {IconBag, IconFire, IconStar, Images} from '@assets';
import {styles} from './styles';
import {VirtualList} from '@components/Flatlist';
import FastImage from 'react-native-fast-image';
import {SplashScreen} from '@screens/Auth/Splash/SplashScreen';
import {useFunctions} from './useFunctions';
import {TYPE_QUANTITY} from '@utils';

export const DetailFood = (props: any) => {
  const {
    onEditQuantity,
    quantityFood,
    onAddCart,
    itemFood,
    isHeart,
    setIsHeart,
    isLoading,
  } = useFunctions(props);
  const RenderNutrition = (props: {title: string; value: string}) => {
    const {title, value} = props;
    return (
      <View style={{...commonStyles.row_center_space_between}}>
        <AppText style={styles.title_nutrition}>{title}</AppText>
        <AppText style={styles.value_nutrition}>{value}</AppText>
      </View>
    );
  };
  return (
    <>
      <ScreenWrapper
        unsafe
        scroll
        isLoading={isLoading}
        backgroundColor={colors.white}
        style={{height: '100%'}}>
        <ImageBackground
          source={{uri: itemFood?.image}}
          imageStyle={styles.img_food}
          style={styles.view_img_food}>
          <View
            style={{
              marginHorizontal: Spacing.width20,
              marginTop: Spacing.height44,
              ...commonStyles.row_center_space_between,
            }}>
            <BackButton colorIcon={colors.white} />
            <View style={styles.view_star}>
              <AppText style={styles.count_star}>
                {parseFloat(itemFood?.rating)}
              </AppText>
              <IconStar width={Spacing.width18} height={Spacing.width18} />
            </View>
          </View>
        </ImageBackground>
        <View style={styles.view_detail_food}>
          <View
            style={{
              ...commonStyles.row_center_space_between,
              marginTop: -Spacing.height32,
            }}>
            <View style={styles.view_name_food}>
              <AppText style={styles.name_food}>{itemFood?.name}</AppText>
              <AppText style={styles.name_restaurant}>
                {itemFood?.store?.name}
              </AppText>
            </View>
            <HeartLotie isHeart={isHeart} setIsHeart={setIsHeart} />
          </View>
          <AppText style={styles.description}>{trans().description}</AppText>
          <AppText numberOfLines={5} style={styles.title}>
            {itemFood?.desc}
          </AppText>
          {/* <View
            style={{
              ...commonStyles.row_center_space_between,
              marginTop: Spacing.height24,
            }}>
            <AppText style={styles.nutritional_value}>
              {trans().nutritional_value}
            </AppText>
            <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
              <IconFire />
              <AppText
                style={styles.calories}>{`${itemFood.calo} calo`}</AppText>
            </View>
          </View> */}
          <View style={styles.view_ingredient}>
            <AppText style={styles.title_ingredient}>
              {trans().ingredients}
            </AppText>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: Spacing.width12,
                marginTop: Spacing.height8,
              }}>
              {itemFood?.ingredient?.map((item: any, index: number) => (
                <FastImage
                  key={index}
                  source={{
                    uri: item?.image,
                  }}
                  style={styles.img_ingredient}
                />
              ))}
            </ScrollView>
          </View>
        </View>
        <View
          style={{
            backgroundColor: colors.white,
            flex: 1,
            bottom: 0,
            position: 'absolute',
            width: '100%',
          }}>
          <View style={styles.view_price}>
            <AppText style={styles.price}>{`${
              quantityFood * itemFood.price
            } VND`}</AppText>
            <View style={{...commonStyles.row_align_center}}>
              <View style={styles.view_quantity}>
                <DebounceButton
                  onPress={() => onEditQuantity(TYPE_QUANTITY.REDUCTION)}>
                  <AppText style={styles.quantity}>{'-'}</AppText>
                </DebounceButton>
                <AppText
                  style={[
                    styles.quantity,
                    {marginHorizontal: Spacing.width24},
                  ]}>
                  {quantityFood}
                </AppText>
                <DebounceButton
                  onPress={() => onEditQuantity(TYPE_QUANTITY.INCREASE)}>
                  <AppText style={styles.quantity}>{'+'}</AppText>
                </DebounceButton>
              </View>
              <DebounceButton onPress={onAddCart} viewStyle={styles.btn_bag}>
                <IconBag />
              </DebounceButton>
            </View>
          </View>
        </View>
      </ScreenWrapper>
    </>
  );
};
