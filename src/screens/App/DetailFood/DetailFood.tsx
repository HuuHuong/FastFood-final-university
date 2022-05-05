import {View, Text, ImageBackground} from 'react-native';
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

export const DetailFood = () => {
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
        backgroundColor={colors.white}
        style={{marginBottom: Spacing.height44}}>
        <ImageBackground
          source={Images.img_fried_rice}
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
              <AppText style={styles.count_star}>{'4.5'}</AppText>
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
              <AppText style={styles.name_food}>{'Fried rice'}</AppText>
              <AppText style={styles.name_restaurant}>
                {'Pista House, Kukatpally'}
              </AppText>
            </View>
            <HeartLotie />
          </View>
          <View style={{marginTop: Spacing.height24}}>
            <AppText style={styles.description}>{trans().description}</AppText>
            <AppText numberOfLines={5} style={styles.title}>
              {
                'Our fried rice is made from the finest ingredients and veggies. single dish is made with fresh vegetables, rescued.'
              }
            </AppText>
            <View style={styles.view_type_food}>
              <AppText style={styles.type_food}>{'Rescued'}</AppText>
              <AppText style={styles.type_food}>{'Vegan'}</AppText>
            </View>
          </View>
          <View>
            <View style={{...commonStyles.row_center_space_between}}>
              <AppText style={styles.nutritional_value}>
                {trans().nutritional_value}
              </AppText>
              <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                <IconFire />
                <AppText style={styles.calories}>{`${145} cal`}</AppText>
              </View>
            </View>
            <View style={styles.view_nutritional}>
              <RenderNutrition title={'Protein'} value={'2.5g'} />
              <RenderNutrition title={'Carbohydrates'} value={'2.5g'} />
              <RenderNutrition title={'Sodium'} value={'2.5g'} />
              <RenderNutrition title={'Potassium'} value={'2.5g'} />
            </View>
          </View>
          <View style={styles.view_ingredient}>
            <AppText style={styles.title_ingredient}>
              {trans().ingredients}
            </AppText>
            <VirtualList
              data={[1, 2, 3, 4]}
              renderItem={() => (
                <FastImage
                  source={Images.img_rice}
                  style={styles.img_ingredient}
                />
              )}
              horizontal
              contentContainerStyle={{
                paddingHorizontal: Spacing.width12,
                marginTop: Spacing.height8,
              }}
            />
          </View>
        </View>
      </ScreenWrapper>
      <View style={{backgroundColor: colors.white}}>
        <View style={styles.view_price}>
          <AppText style={styles.price}>{`${25000} VND`}</AppText>
          <View style={{...commonStyles.row_align_center}}>
            <View style={styles.view_quantity}>
              <DebounceButton>
                <AppText style={styles.quantity}>{'-'}</AppText>
              </DebounceButton>
              <AppText
                style={[styles.quantity, {marginHorizontal: Spacing.width24}]}>
                {'1'}
              </AppText>
              <DebounceButton>
                <AppText style={styles.quantity}>{'+'}</AppText>
              </DebounceButton>
            </View>
            <DebounceButton viewStyle={styles.btn_bag}>
              <IconBag />
            </DebounceButton>
          </View>
        </View>
      </View>
    </>
  );
};
