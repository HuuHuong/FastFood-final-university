import {colors, commonStyles, DEVICE, Spacing} from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  personal_detail: {
    ...commonStyles.commonText600_20,
    color: colors.black,
  },
  edit: {
    ...commonStyles.commonText400_16,
    color: colors.mainColor,
  },
  view_user: {
    backgroundColor: colors.white,
    borderRadius: Spacing.width20,
    marginVertical: Spacing.height24,
    paddingVertical: Spacing.height16,
    paddingHorizontal: Spacing.width20,
    flexDirection: 'row',
  },
  avatar: {
    width: Spacing.width92,
    height: Spacing.width92,
    borderRadius: Spacing.width20,
  },
  name: {
    ...commonStyles.commonText600_16,
    color: colors.black,
  },
  phone_address: {
    ...commonStyles.commonText400_14,
    color: colors.gray_4F,
  },
  view_option: {
    backgroundColor: colors.white,
    borderRadius: Spacing.width16,
    alignItems: 'center',
    paddingVertical: Spacing.height16,
    width: (DEVICE.width - Spacing.width40 - Spacing.width24) / 4,
  },
  icon_option: {
    width: Spacing.width16,
    height: Spacing.width16,
  },
  title_option: {
    ...commonStyles.commonText400_12,
    color: colors.black,
    marginTop: Spacing.height4,
  },
  view_option_menu: {
    ...commonStyles.row_center_space_between,
    paddingVertical: Spacing.height16,
    paddingHorizontal: Spacing.width24,
    backgroundColor: colors.white,
    borderRadius: Spacing.width20,
    marginBottom: Spacing.height20,
  },
  title_option_menu: {
    ...commonStyles.commonText600_16,
    color: colors.black,
  },
  title_option_admin: {
    ...commonStyles.commonText400_16,
    color: colors.black,
  },
  view_about: {
    ...commonStyles.row_align_center,
    backgroundColor: colors.white,
    alignSelf: 'baseline',
    paddingHorizontal: Spacing.width16,
    paddingVertical: Spacing.height8,
    borderRadius: Spacing.width20,
  },
  about: {
    ...commonStyles.commonText400_14,
    color: colors.black,
    marginLeft: Spacing.width8,
  },
});
