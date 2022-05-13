import {colors, commonStyles, Spacing} from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  heading_txt: {
    ...commonStyles.commonText600_20,
    color: colors.black,
    marginLeft: Spacing.width8,
  },
  view_item: {
    borderWidth: Spacing.width1,
    borderColor: colors.gray_B2,
    borderRadius: Spacing.width20,
  },
  view_header_item: {
    paddingVertical: Spacing.height16,
    borderBottomColor: colors.gray_B2,
    borderBottomWidth: Spacing.width1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image_food: {
    width: Spacing.width44,
    height: Spacing.width44,
    borderRadius: Spacing.width12,
  },
  name_food: {
    ...commonStyles.commonText600_14,
    color: colors.black,
  },
  name_store: {
    ...commonStyles.commonText400_14,
    color: colors.gray_7D,
  },
  title_item: {
    ...commonStyles.commonText400_14,
    color: colors.gray_7D,
  },
  count_item: {
    ...commonStyles.commonText400_14,
    color: colors.black,
  },
  view_bottom_item: {
    paddingVertical: Spacing.height16,
    borderTopWidth: Spacing.width1,
    borderTopColor: colors.gray_B2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  status_item: {
    ...commonStyles.commonText400_14,
    color: colors.gray_7D,
    marginLeft: Spacing.width12,
  },
  repeat_order: {
    ...commonStyles.commonText600_14,
    color: colors.gray_7D,
    marginRight: Spacing.width12,
  },
  no_cart: {
    ...commonStyles.commonText600_20,
    color: colors.black,
    textAlign: 'center',
    marginVertical: Spacing.height20,
  },
});
