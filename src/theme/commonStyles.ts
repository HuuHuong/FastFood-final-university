import {StyleSheet} from 'react-native';
import {colors} from './colors';
import {NotoSansFont} from './fontWithBold';
import {FontSize, Spacing} from './size';

export const commonStyles = StyleSheet.create({
  commonText14_Bold: {
    ...NotoSansFont.Bold_Poppins_600,
    fontSize: FontSize.Font14,
    color: colors.mainColor,
  },
});
