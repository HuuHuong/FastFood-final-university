import {colors, commonStyles, FontSize, Poppins, Spacing} from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  form_input: {
    marginTop: Spacing.height16,
  },
  forgot_password: {
    ...commonStyles.commonText600_14,
    marginTop: Spacing.height16,
    marginBottom: Spacing.height24,
    color: colors.mainColor,
  },

  or: {
    ...Poppins.Bold_Poppins_600,
    fontSize: FontSize.Font16,
    color: colors.black,
    textAlign: 'center',
    marginTop: Spacing.height12,
    marginBottom: Spacing.height16,
  },
  login_face: {
    color: colors.white,
    marginLeft: Spacing.width12,
  },
  login_google: {
    color: 'rgba(0,0,0,0.54)',
    marginLeft: Spacing.width12,
  },
});
