import {colors, commonStyles, Spacing} from '@theme';
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
    zIndex: -1,
  },
  view_back: {
    ...commonStyles.row_align_center,
    backgroundColor: colors.white,
    borderWidth: Spacing.width1,
    borderColor: 'rgba(0,0,0,0.48)',
    borderRadius: Spacing.width20,
    paddingVertical: Spacing.height12,
    paddingHorizontal: Spacing.width12,
    position: 'absolute',
    zIndex: 99,
    top: Spacing.height40,
    left: Spacing.width20,
  },
  deliver: {
    ...commonStyles.commonText600_16,
    color: colors.black,
    marginLeft: Spacing.width16,
  },
  view_bottom: {
    position: 'absolute',
    zIndex: 99,
    backgroundColor: colors.white,
    paddingHorizontal: Spacing.width32,
    // paddingVertical: Spacing.height40,
    paddingTop: Spacing.height20,
    paddingBottom: Spacing.height32,
    borderTopLeftRadius: Spacing.width30,
    borderTopRightRadius: Spacing.width30,
    width: '100%',
    bottom: 0,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  location: {
    ...commonStyles.commonText400_16,
    color: colors.gray_B2,
    marginLeft: Spacing.width24,
    width: '70%',
  },
});
