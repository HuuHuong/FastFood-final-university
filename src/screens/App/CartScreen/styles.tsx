import {colors, commonStyles, Spacing} from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  heading_txt: {
    ...commonStyles.commonText600_20,
    color: colors.black,
  },
  view_address: {
    marginTop: Spacing.height16,
    backgroundColor: colors.light_yellow,
    borderRadius: Spacing.width20,
    paddingVertical: Spacing.height16,
    paddingHorizontal: Spacing.width16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  address: {
    ...commonStyles.commonText400_12,
    color: colors.gray_7C,
    width: '70%',
    marginLeft: Spacing.width8,
  },
  edit_address: {
    ...commonStyles.commonText400_12,
    color: colors.black,
  },
  view_img: {
    width: Spacing.width88,
    height: Spacing.height72,
    borderRadius: Spacing.width20,
  },

  img_food: {
    width: '100%',
    height: '100%',
    borderRadius: Spacing.width20,
  },
  name_food: {
    ...commonStyles.commonText600_14,
    color: colors.black,
    width: '70%',
  },
  name_restaurant: {
    ...commonStyles.commonText400_14,
    color: colors.black,
    width: '70%',
  },
  view_quantity: {
    ...commonStyles.row_center_space_between,
    paddingVertical: Spacing.height4,
    paddingHorizontal: Spacing.width8,
    borderColor: colors.mainColor,
    borderWidth: Spacing.width1,
    borderRadius: Spacing.width20,
    width: Spacing.width84,
  },
  edit_quantity: {
    ...commonStyles.commonText400_20,
    color: colors.mainColor,
  },
  money_food: {
    ...commonStyles.commonText400_14,
    color: colors.black,
    marginTop: Spacing.height4,
  },
  view_modal: {
    backgroundColor: colors.white,
    borderRadius: Spacing.width20,
    paddingVertical: Spacing.height16,
    // alignItems: 'center',
  },
  title_modal: {
    ...commonStyles.commonText400_14,
    color: colors.black,
    width: '70%',
    textAlign: 'center',
    alignSelf: 'center',
  },
  view_voucher: {
    ...commonStyles.row_center_space_between,
    marginTop: Spacing.height36,
    backgroundColor: colors.white,
    paddingHorizontal: Spacing.width24,
    paddingVertical: Spacing.height12,
    borderRadius: Spacing.width20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  txt_voucher: {
    ...commonStyles.commonText400_14,
    color: colors.gray_7C,
    marginLeft: Spacing.width8,
  },
  view_total: {
    marginTop: Spacing.height28,
    backgroundColor: colors.white,
    paddingHorizontal: Spacing.width24,
    paddingVertical: Spacing.height12,
    borderRadius: Spacing.width20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  count_money: {
    ...commonStyles.commonText600_14,
    color: colors.black,
    marginBottom: Spacing.height4,
  },
  count_payment: {...commonStyles.commonText600_16, color: colors.black},
});
