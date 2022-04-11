import {colors, FontSize, Nunitos, Spacing} from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header_content: {
    ...Nunitos.Bold_Nunitos_700,
    fontSize: FontSize.Font32,
    color: colors.mainColor,
  },
  header_signup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.height24,
  },
  logo_social: {
    padding: Spacing.width8,
    backgroundColor: colors.white,
    borderRadius: Spacing.width10,
    marginLeft: Spacing.width16,
  },
  form_input: {
    marginBottom: Spacing.height20,
  },
  footer_tittle: {
    width: '42%',
    ...Nunitos.Normal_Nunitos_400,
    fontSize: FontSize.Font16,
    color: colors.gray_B3,
  },
});
