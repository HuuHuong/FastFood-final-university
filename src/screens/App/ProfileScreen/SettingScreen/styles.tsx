import {colors, commonStyles, Spacing} from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  heading_txt: {
    ...commonStyles.commonText600_20,
    color: colors.black,
    marginLeft: Spacing.width8,
  },
  view_btn: {
    ...commonStyles.row_center_space_between,
    paddingVertical: Spacing.height16,
    paddingHorizontal: Spacing.width24,
    backgroundColor: colors.white,
    borderRadius: Spacing.width20,
    marginBottom: Spacing.height20,
  },
  title_setting: {
    ...commonStyles.commonText600_16,
    color: colors.black,
  },
  language: {
    ...commonStyles.commonText400_14,
    color: colors.line_gray,
    marginRight: Spacing.width8,
  },
});
