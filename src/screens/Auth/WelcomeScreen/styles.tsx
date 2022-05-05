import {colors, commonStyles, FontSize, Nunitos, Spacing} from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header_swipper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginHorizontal: Spacing.width20,
    opacity: 0.6,
    marginTop: Spacing.height20,
  },
  skip: {
    ...Nunitos.Bold_Nunitos_700,
    fontSize: FontSize.Font18,
    color: colors.white,
  },
  logo: {
    width: Spacing.width160,
    height: Spacing.height160,
    backgroundColor: 'white',
    borderRadius: Spacing.width100,
    alignSelf: 'center',
    marginTop: Spacing.height40,
    marginBottom: Spacing.height36,
  },
  welcome: {
    ...Nunitos.Bold_Nunitos_500,
    fontSize: FontSize.Font40,
    color: colors.white,
    textAlign: 'center',
  },
  welcome_title: {
    ...commonStyles.nunito_600_20,
    color: 'rgba(255,255,255,0.6)',
    textAlign: 'center',
    marginTop: Spacing.height20,
  },
  icon_location: {
    width: Spacing.width36,
    height: Spacing.width36,
  },
  icon_maker: {
    width: Spacing.width28,
    height: Spacing.height36,
  },
  select_location: {
    ...commonStyles.nunito_600_20,
    color: 'rgba(255,255,255,0.6)',
    marginLeft: Spacing.width60,
  },
  view_btn: {
    backgroundColor: colors.white,
    justifyContent: 'flex-start',
    marginHorizontal: Spacing.width32,
    marginTop: Spacing.height20,
    paddingHorizontal: Spacing.width20,
  },
});
