import {
  colors,
  commonStyles,
  deviceHeight,
  FontSize,
  Poppins,
  Spacing,
} from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  view_header: {
    marginHorizontal: Spacing.width20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filter: {
    padding: Spacing.width16,
    borderRadius: Spacing.width14,
    borderWidth: Spacing.width1,
    borderColor: colors.gray_C8,
    backgroundColor: colors.white,
  },
  view_search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    width: '75%',
    borderRadius: Spacing.width14,
  },
  view_body: {
    backgroundColor: colors.white,
    borderTopLeftRadius: Spacing.width30,
    borderTopRightRadius: Spacing.width30,
    marginTop: Spacing.width75,
    paddingHorizontal: Spacing.width20,
    paddingVertical: Spacing.height32,
  },
  recent_search_heading: {
    ...Poppins.Bold_Poppins_600,
    fontSize: FontSize.Font24,
    color: colors.black_33,
  },
  item_recent: {
    ...commonStyles.row_center_space_between,
    marginTop: Spacing.height4,
  },
  text_search: {
    ...commonStyles.commonText600_16,
    color: colors.gray_7D,
    marginLeft: Spacing.width8,
  },
  view_list_food: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: Spacing.width75,
    paddingHorizontal: Spacing.width20,
    borderTopLeftRadius: Spacing.width30,
    borderTopRightRadius: Spacing.width30,
    paddingVertical: Spacing.height32,
  },
  view_item_food: {
    marginBottom: Spacing.height24,
    borderRadius: Spacing.width24,
    borderColor: colors.border_C4,
    borderWidth: Spacing.width1,
  },
  img_food: {
    width: '100%',
    height: Spacing.height140,
    borderTopLeftRadius: Spacing.width24,
    borderTopRightRadius: Spacing.width24,
  },
  view_info: {
    marginHorizontal: Spacing.width16,
    paddingBottom: Spacing.height8,
    borderBottomWidth: Spacing.width1,
    borderBottomColor: colors.gray_C8,
    marginTop: Spacing.height14,
  },
  name_food: {
    ...commonStyles.commonText600_16,
    color: colors.black_33,
  },
  name_restaurant: {
    ...commonStyles.commonText400_14,
    color: colors.primary_subTitle,
  },
  view_star: {
    ...commonStyles.row_align_center,
    backgroundColor: colors.mainColor,
    alignSelf: 'baseline',
    paddingHorizontal: Spacing.width8,
    borderRadius: Spacing.width20,
  },
  count_star: {
    ...commonStyles.commonText600_14,
    color: colors.white,
    textAlign: 'center',
    marginRight: Spacing.width4,
    marginTop: Spacing.height4,
  },
  real_price: {
    ...commonStyles.commonText400_12,
    color: colors.black_33,
    textDecorationLine: 'line-through',
    marginRight: Spacing.width4,
  },
  offer_prices: {
    ...commonStyles.commonText400_16,
    color: colors.orange_F8,
  },
  view_price: {
    marginTop: Spacing.height12,
    ...commonStyles.row_center_space_between,
  },
  title_offer: {
    ...commonStyles.commonText400_12,
    color: colors.primary_subTitle,
    marginVertical: Spacing.height8,
    marginHorizontal: Spacing.width24,
  },
});
