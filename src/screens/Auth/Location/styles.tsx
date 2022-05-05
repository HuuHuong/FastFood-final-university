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
  view_map: {
    height: '100%',
    width: '100%',
    borderRadius: Spacing.width30,
    marginTop: Spacing.height12,
  },

  map: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: Spacing.width30,
    flex: 1,
    marginBottom: Spacing.height28,
  },
});
