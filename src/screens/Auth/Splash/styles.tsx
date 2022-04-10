import {colors, deviceWidth, FontSize, Nunitos, Poppins, Spacing} from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header_swipper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginHorizontal: Spacing.width20,
    opacity: 0.6,
  },
  skip: {
    ...Nunitos.Bold_Nunitos_700,
    fontSize: FontSize.Font18,
    color: colors.white,
  },
  logo: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: Spacing.width100,
    alignSelf: 'center',
    marginTop: Spacing.height40,
    marginBottom: Spacing.height36,
  },
  title_swipper: {
    ...Nunitos.Bold_Nunitos_600,
    fontSize: FontSize.Font28,
    color: colors.white,
    textAlign: 'center',
  },
  image_swipper: {
    width: deviceWidth - Spacing.width20,
    height: deviceWidth - Spacing.width20,
    alignSelf: 'center',
  },
  dot: {
    width: Spacing.width10,
    height: Spacing.width10,
    borderRadius: Spacing.width10,
    backgroundColor: colors.white,
    opacity: 0.9,
  },
});
