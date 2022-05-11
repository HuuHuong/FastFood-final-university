import {StyleSheet} from 'react-native';
import {colors} from './colors';
import {Nunitos, Poppins} from './fontWithBold';
import {FontSize, Spacing} from './size';

export const commonStyles = StyleSheet.create({
  commonText600_16: {
    ...Poppins.Bold_Poppins_600,
    fontSize: FontSize.Font16,
  },
  commonText600_12: {
    ...Poppins.Bold_Poppins_600,
    fontSize: FontSize.Font12,
  },
  commonText600_14: {
    ...Poppins.Bold_Poppins_600,
    fontSize: FontSize.Font14,
  },
  commonText600_20: {
    ...Poppins.Bold_Poppins_600,
    fontSize: FontSize.Font20,
  },
  commonText400_20: {
    ...Poppins.Normal_Poppins_400,
    fontSize: FontSize.Font20,
  },
  commonText400_16: {
    ...Poppins.Normal_Poppins_400,
    fontSize: FontSize.Font16,
  },
  commonText400_14: {
    ...Poppins.Normal_Poppins_400,
    fontSize: FontSize.Font14,
  },
  commonText400_12: {
    ...Poppins.Normal_Poppins_400,
    fontSize: FontSize.Font12,
  },
  commonText700_20: {
    ...Poppins.Bold_Poppins_700,
    fontSize: FontSize.Font20,
  },
  text_600_16_black: {
    ...Poppins.Bold_Poppins_600,
    fontSize: FontSize.Font16,
    color: colors.black,
  },
  text_600_16_white: {
    ...Poppins.Bold_Poppins_600,
    fontSize: FontSize.Font14,
    color: colors.white,
  },
  row_align_center: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  row_center_space_between: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nunito_600_12: {
    ...Nunitos.Bold_Nunitos_600,
    fontSize: FontSize.Font12,
  },
  nunito_600_14: {
    ...Nunitos.Bold_Nunitos_600,
    fontSize: FontSize.Font14,
  },
  nunito_600_16: {
    ...Nunitos.Bold_Nunitos_600,
    fontSize: FontSize.Font16,
  },
  nunito_600_18: {
    ...Nunitos.Bold_Nunitos_600,
    fontSize: FontSize.Font18,
  },
  nunito_600_20: {
    ...Nunitos.Bold_Nunitos_600,
    fontSize: FontSize.Font20,
  },
});
