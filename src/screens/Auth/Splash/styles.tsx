import {FontSize, Nunitos, Poppins, Spacing} from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header_swipper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginHorizontal: Spacing.width20,
  },
  skip: {
    ...Nunitos.Bold_Nunitos_700,
    fontSize: FontSize.Font18,
  },
});
