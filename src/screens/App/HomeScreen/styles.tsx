import {
  colors,
  commonStyles,
  deviceWidth,
  FontSize,
  Nunitos,
  Poppins,
  Spacing,
} from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  content_header: {
    ...commonStyles.text_600_16_black,
  },
  location: {
    ...commonStyles.commonText400_16,
    color: colors.gray_B2,
  },
  form_search: {
    marginTop: Spacing.height16,
    marginBottom: Spacing.height20,
  },
  dot: {
    width: Spacing.width10,
    height: Spacing.width10,
    borderRadius: Spacing.width10,
    backgroundColor: colors.mainColor,
    opacity: 0.9,
    marginHorizontal: -Spacing.width4,
    marginTop: -Spacing.height4,
  },
  view_banner: {
    borderRadius: Spacing.width14,
    paddingVertical: Spacing.height10,
    paddingHorizontal: Spacing.width14,
    flexDirection: 'row',
    marginHorizontal: Spacing.width20,
  },
  content_banner: {
    ...Poppins.Bold_Poppins_600,
    fontSize: FontSize.Font20,
    color: colors.white,
  },
  for_who: {
    ...commonStyles.commonText400_14,
    color: colors.white,
    fontStyle: 'italic',
  },
  title_banner: {
    ...commonStyles.commonText400_14,
    color: colors.white,
    marginTop: Spacing.height20,
    width: '90%',
  },
  img_banner: {
    width: Spacing.width128,
    height: Spacing.height88,
  },
  set_them_now: {
    ...commonStyles.text_600_16_white,
    marginLeft: Spacing.width4,
  },
  session_content: {
    ...Poppins.Bold_Poppins_600,
    fontSize: FontSize.Font24,
    color: colors.secondMainColor,
  },
  edit: {
    ...Poppins.Bold_Poppins_600,
    fontSize: FontSize.Font18,
    color: colors.gray_A7,
    marginRight: Spacing.width4,
  },
  title_now_order: {
    ...Nunitos.Normal_Nunitos_400,
    fontSize: Spacing.width18,
    color: colors.gray_A7,
  },
  item_user: {
    ...commonStyles.row_center_space_between,
    borderRadius: Spacing.width20,
    backgroundColor: colors.gray_F3,
    paddingHorizontal: Spacing.width24,
    paddingVertical: Spacing.height16,
    marginBottom: Spacing.height16,
  },
  type_food: {
    width: Spacing.width44,
    height: Spacing.width44,
    alignSelf: 'center',
  },
  list_type_food: {
    ...commonStyles.row_center_space_between,
    marginHorizontal: Spacing.width20,
    marginVertical: Spacing.height24,
    alignItems: 'flex-start',
  },
  title_type_food: {
    ...commonStyles.commonText600_12,
    color: colors.mainColor,
    textAlign: 'center',
    marginTop: Spacing.height4,
  },
  view_looking_for: {
    marginHorizontal: Spacing.width24,
    backgroundColor: colors.background_session,
    paddingHorizontal: Spacing.width20,
    paddingVertical: Spacing.height16,
    borderRadius: Spacing.width20,
  },
  looking_for_content: {
    ...Poppins.Normal_Poppins_400,
    fontSize: FontSize.Font20,
    color: colors.orange_F8,
  },
  time_zone: {
    ...Poppins.Bold_Poppins_600,
  },
  description_time_zone: {
    ...commonStyles.commonText400_14,
    color: colors.gray_7C,
    marginBottom: Spacing.height4,
  },
  view_food_time_zone: {
    width: Spacing.width190,
    height: Spacing.height254,
    marginRight: Spacing.width8,
    backgroundColor: colors.white,
    borderRadius: Spacing.width14,
  },
  img_food_time_zone: {
    width: '100%',
    height: Spacing.height132,
    borderTopLeftRadius: Spacing.width14,
    borderTopRightRadius: Spacing.width14,
  },
  view_discount: {
    position: 'absolute',
    top: Spacing.height12,
    left: -Spacing.width5,
  },
  img_discount: {
    width: Spacing.width80,
    height: Spacing.height28,
  },
  num_discount: {
    ...commonStyles.nunito_600_12,
    color: colors.white,
    position: 'absolute',
    top: Spacing.height4,
    left: Spacing.width8,
  },
  name_food_time_zone: {
    ...Nunitos.Bold_Nunitos_600,
    fontSize: FontSize.Font18,
    color: colors.black,
    marginTop: Spacing.height20,
  },
  restaurant_food_time_zone: {
    ...Poppins.Normal_Poppins_300,
    fontSize: FontSize.Font14,
    color: colors.gray_7C,
  },
  view_price_food_time_zone: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 8,
    marginHorizontal: Spacing.width12,
  },
  offer_price: {
    ...Poppins.Normal_Poppins_400,
    fontSize: FontSize.Font12,
    color: colors.black,
    textDecorationLine: 'line-through',
    marginRight: Spacing.width4,
  },
  real_price: {
    ...commonStyles.commonText400_16,
    color: colors.orange_F8,
  },
  list_food_time_zone: {
    marginHorizontal: -Spacing.width32,
    marginBottom: Spacing.height20,
  },
  line_length_food: {
    backgroundColor: colors.line_length,
    borderRadius: Spacing.width14,
    width: '100%',
    height: '100%',
  },
  line_animation: {
    backgroundColor: colors.mainColor,
    borderRadius: Spacing.width14,
    height: '100%',
    position: 'absolute',
    width: Spacing.width20,
  },
  session_main: {
    ...commonStyles.row_center_space_between,
    marginHorizontal: Spacing.width20,
    marginTop: Spacing.height32,
  },
  content_session: {
    ...commonStyles.commonText600_20,
    color: colors.black_33,
  },
  title_session: {
    ...commonStyles.commonText400_16,
    color: colors.gray_99,
  },
  view_btn_all: {
    ...commonStyles.row_align_center,
    padding: Spacing.width12,
    borderWidth: Spacing.width1,
    borderColor: colors.gray_C8,
    borderRadius: Spacing.width14,
  },
  img_restaurant: {
    width: Spacing.width64,
    height: Spacing.width64,
  },
  view_closed_restaurant: {
    position: 'absolute',
    zIndex: 99,
    backgroundColor: 'rgba(84, 84, 84, 0.8)',
    width: Spacing.width64,
    height: Spacing.width64,
    borderRadius: Spacing.width109,
    alignItems: 'center',
    justifyContent: 'center',
  },
  close_restaurant: {
    ...commonStyles.commonText600_12,
    color: colors.white,
  },
  view_infor_restaurant: {
    borderBottomColor: 'black',
    borderBottomWidth: Spacing.width1,
    marginLeft: Spacing.width14,
    paddingVertical: Spacing.height20,
    width: '100%',
  },
  time_open: {
    ...commonStyles.commonText400_12,
    color: colors.primary_subTitle,
  },
  name_restaurant: {
    ...commonStyles.commonText600_16,
    color: colors.black_33,
  },
  des_restaurant: {
    ...commonStyles.commonText400_16,
    color: colors.gray_4F,
    width: '75%',
  },
  type_restaurant: {
    borderWidth: Spacing.width1,
    borderRadius: Spacing.width14,
    paddingVertical: Spacing.height8,
    paddingHorizontal: Spacing.width10,
    marginRight: Spacing.width4,
  },
  rescued: {
    ...commonStyles.commonText600_12,
    color: colors.border_4F,
  },
  free_delivery: {
    ...commonStyles.commonText600_12,
    color: colors.primary_subTitle,
  },

  offer_restaurant: {
    ...commonStyles.nunito_600_16,
    color: colors.orange_F8,
    marginLeft: Spacing.width8,
  },
});
