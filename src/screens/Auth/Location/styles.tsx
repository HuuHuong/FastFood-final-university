import {Spacing} from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  logo: {
    width: Spacing.width68,
    height: Spacing.height68,
    backgroundColor: 'white',
    borderRadius: Spacing.width100,
    alignSelf: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: Spacing.width24,
    flex: 1,
    marginBottom: Spacing.height28,
  },
});
