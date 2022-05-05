import {colors, commonStyles, deviceWidth, Spacing} from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  view_img_food: {
    width: '100%',
    height: Spacing.height324,
  },
  img_food: {
    width: '100%',
    height: '100%',
  },
  view_star: {
    ...commonStyles.row_align_center,
    borderRadius: Spacing.width20,
    borderColor: colors.white,
    borderWidth: Spacing.width1,
    paddingVertical: Spacing.height4,
    paddingHorizontal: Spacing.width8,
  },
  count_star: {
    ...commonStyles.commonText600_20,
    color: colors.white,
    marginRight: Spacing.width4,
    marginTop: Spacing.height2,
  },
  view_detail_food: {
    borderTopLeftRadius: Spacing.width24,
    borderTopRightRadius: Spacing.width24,
    paddingHorizontal: Spacing.width20,
    marginTop: -Spacing.height32,
    backgroundColor: colors.white,
  },
  view_name_food: {
    backgroundColor: colors.white,
    paddingHorizontal: Spacing.width20,
    paddingVertical: Spacing.height4,
    marginHorizontal: Spacing.width4,
    borderRadius: Spacing.width32,
    alignSelf: 'baseline',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  name_food: {
    ...commonStyles.commonText700_20,
    color: colors.black,
  },
  name_restaurant: {
    ...commonStyles.commonText400_14,
    color: colors.gray_4F,
  },
  description: {
    ...commonStyles.commonText600_20,
    color: colors.brown_5E,
  },
  title: {
    ...commonStyles.commonText400_12,
    color: colors.brown_5E,
  },
  view_type_food: {
    ...commonStyles.row_center_space_between,
    marginVertical: Spacing.height12,
    paddingVertical: Spacing.height8,
    paddingHorizontal: Spacing.width16,
    borderWidth: Spacing.width1,
    borderColor: colors.gray_C8,
    borderRadius: Spacing.width20,
    width: '50%',
    alignSelf: 'center',
  },
  type_food: {
    ...commonStyles.commonText400_14,
    color: colors.gray_7C,
  },
  nutritional_value: {
    ...commonStyles.commonText600_20,
    color: colors.brown_5E,
  },
  calories: {
    ...commonStyles.commonText400_14,
    color: colors.gray_4F,
  },
  title_nutrition: {
    ...commonStyles.commonText400_12,
    color: colors.black,
    fontStyle: 'italic',
  },
  value_nutrition: {
    ...commonStyles.commonText600_12,
    color: colors.black,
  },
  view_nutritional: {
    marginTop: Spacing.height4,
    paddingVertical: Spacing.height4,
    borderTopWidth: Spacing.width1,
    borderBottomWidth: Spacing.width1,
    borderColor: colors.gray_4F,
  },
  view_ingredient: {
    paddingVertical: Spacing.height4,
    backgroundColor: colors.white,
    marginTop: Spacing.height20,
    borderRadius: Spacing.width24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  title_ingredient: {
    ...commonStyles.commonText600_14,
    color: colors.brown_5E,
    fontStyle: 'italic',
    marginLeft: Spacing.width20,
  },
  img_ingredient: {
    width: Spacing.width60,
    height: Spacing.height40,
    borderRadius: Spacing.width20,
    marginHorizontal: Spacing.width8,
  },
  view_price: {
    backgroundColor: colors.mainColor,
    paddingVertical: Spacing.height12,
    borderRadius: Spacing.width32,
    paddingHorizontal: Spacing.width20,
    ...commonStyles.row_center_space_between,
    marginBottom: Spacing.height40,
    marginHorizontal: Spacing.width20,
  },
  price: {
    ...commonStyles.commonText600_14,
    color: colors.white,
  },
  view_quantity: {
    ...commonStyles.row_align_center,
    paddingVertical: Spacing.height4,
    borderColor: colors.white,
    borderWidth: Spacing.width1,
    borderRadius: Spacing.width20,
    paddingHorizontal: Spacing.width12,
    marginRight: Spacing.width20,
  },
  quantity: {
    ...commonStyles.commonText600_14,
    color: colors.white,
  },
  btn_bag: {
    backgroundColor: colors.white,
    borderRadius: Spacing.width100,
    padding: Spacing.width4,
  },
});
