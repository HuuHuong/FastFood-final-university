import {colors, commonStyles, Spacing} from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  heading_txt: {
    ...commonStyles.commonText600_20,
    color: colors.black,
    marginLeft: Spacing.width8,
  },
});
