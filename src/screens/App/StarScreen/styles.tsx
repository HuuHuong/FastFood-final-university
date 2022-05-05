import {colors, commonStyles, Spacing} from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  content_header: {
    ...commonStyles.commonText700_20,
    color: colors.black,
  },
  title_header: {
    ...commonStyles.commonText400_16,
    color: colors.brown_5E,
  },
  view_item: {
    width: Spacing.width180,
    height: Spacing.height160,
    borderRadius: Spacing.width20,
    marginHorizontal: Spacing.width8,
  },
  img_item_deals: {
    width: '100%',
    height: '100%',
    borderRadius: Spacing.width20,
  },
  content_discount: {
    ...commonStyles.commonText600_16,
    color: colors.white,
  },
  title_discount: {
    ...commonStyles.commonText400_16,
    color: colors.white,
  },
  view_icon: {
    backgroundColor: colors.white,
    padding: Spacing.width8,
    borderRadius: Spacing.width20,
    alignSelf: 'baseline',
  },
  view_exclusively: {
    marginHorizontal: Spacing.width8,
    width: Spacing.width136,
    height: Spacing.height84,
    backgroundColor: 'red',
    borderRadius: Spacing.width20,
    alignItems: 'center',
  },
  img_brands: {
    width: Spacing.width48,
    height: Spacing.width48,
    borderRadius: Spacing.width100,
    marginTop: -Spacing.height24,
    borderWidth: Spacing.width1,
    borderColor: colors.mainColor,
  },
  discounts: {
    ...commonStyles.commonText600_16,
    color: colors.white,
  },
  title_exclusively: {
    ...commonStyles.commonText400_14,
    color: colors.white,
  },
});
