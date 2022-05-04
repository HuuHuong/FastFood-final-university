import {View, Text} from 'react-native';
import React from 'react';
import {ScreenWrapper} from '@components/Screen/ScreenWrapper';
import {AppText, DebounceButton, MainButtonApp} from '@components';
import trans, {
  IconArrowRight,
  IconHome,
  IconNext,
  IconTicket,
  Images,
} from '@assets';
import {colors, commonStyles, FontSize, Spacing} from '@theme';
import {styles} from './styles';
import {useFunctions} from './useFunctions';
import FastImage from 'react-native-fast-image';
import Modal from 'react-native-modal';
export const CartScreen = () => {
  const {
    listCart,
    quantity,
    TYPE_QUANTITY,
    onEditQuantity,
    isVisible,
    setIsVisible,
  } = useFunctions();
  const renderItemCart = () => {
    return (
      <View style={{...commonStyles.row_center_space_between}}>
        <View style={{...commonStyles.row_align_center}}>
          <View style={styles.view_img}>
            <FastImage
              source={Images.img_coffee}
              style={styles.img_food}
              resizeMode={'cover'}
            />
          </View>
          <View style={{marginLeft: Spacing.width12}}>
            <AppText style={styles.name_food}>{'Fried Rice'}</AppText>
            <AppText style={styles.name_restaurant}>{'Pista House'}</AppText>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.view_quantity}>
            <DebounceButton
              onPress={() => onEditQuantity(TYPE_QUANTITY.REDUCTION)}>
              <AppText style={styles.edit_quantity}>{'-'}</AppText>
            </DebounceButton>
            <AppText style={styles.edit_quantity}>{quantity}</AppText>
            <DebounceButton
              onPress={() => onEditQuantity(TYPE_QUANTITY.INCREASE)}>
              <AppText style={styles.edit_quantity}>{'+'}</AppText>
            </DebounceButton>
          </View>
          <AppText style={styles.money_food}>{`${
            quantity * 20000
          } VND`}</AppText>
        </View>
      </View>
    );
  };
  const CountMoney = React.memo(
    (props: {title: string; money: number; final?: boolean}) => {
      const {title, money, final} = props;
      return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <AppText
            numberOfLines={2}
            style={[
              styles.count_money,
              {width: '70%'},
              final && {color: colors.mainColor},
            ]}>
            {title}
          </AppText>
          <AppText
            style={[
              styles.count_money,
              final && {color: colors.mainColor},
            ]}>{`${money} VND`}</AppText>
        </View>
      );
    },
  );
  return (
    <ScreenWrapper
      unsafe
      style={{
        paddingVertical: Spacing.height44,
        paddingHorizontal: Spacing.width20,
      }}
      backgroundColor={colors.white}>
      <AppText style={styles.heading_txt}>{trans().cart}</AppText>
      <View style={styles.view_address}>
        <View style={{flexDirection: 'row', width: '70%'}}>
          <IconHome />
          <AppText numberOfLines={3} style={styles.address}>
            {'21-42-34, Banjara Hills, Hyderabad, 500072'}
          </AppText>
        </View>
        <DebounceButton>
          <AppText style={styles.edit_address}>{trans().edit_address}</AppText>
        </DebounceButton>
      </View>
      <View style={{marginTop: Spacing.height20}}>
        {/* {listCart?.map((item: any, index: number) =>
          renderItemCart(item, index),
        )} */}
        {renderItemCart()}
      </View>
      <DebounceButton
        onPress={() => {}}
        activeOpacity={0.5}
        viewStyle={styles.view_voucher}>
        <View style={{...commonStyles.row_align_center}}>
          <IconTicket />
          <AppText style={styles.txt_voucher}>{trans().voucher}</AppText>
        </View>
        <IconNext strokeColor={colors.black} />
      </DebounceButton>
      <View style={styles.view_total}>
        <CountMoney title={trans().total_food} money={quantity * 20000} />
        <CountMoney title={trans().delivery} money={15000} />
        <CountMoney
          title={trans().total}
          money={quantity * 20000 + 15000}
          final
        />
      </View>
      <MainButtonApp
        title={trans().payment}
        titleStyle={{marginRight: Spacing.width16}}
        icon={<IconArrowRight />}
        onPress={() => {}}
        viewStyle={{paddingHorizontal: Spacing.width36}}
        style={{marginTop: Spacing.height32, alignSelf: 'center'}}
      />

      <Modal
        onBackdropPress={() => setIsVisible(false)}
        isVisible={isVisible}
        animationIn={'zoomIn'}
        animationOut={'fadeOut'}>
        <View style={styles.view_modal}>
          <AppText style={styles.title_modal}>{trans().delete_food}</AppText>
          <View
            style={{
              ...commonStyles.row_align_center,
              justifyContent: 'space-around',
              marginTop: Spacing.height20,
            }}>
            <MainButtonApp
              onPress={() => setIsVisible(false)}
              title={trans().cancel}
              titleStyle={{paddingHorizontal: Spacing.width32}}
            />
            <MainButtonApp
              onPress={() => {}}
              title={trans().confirm}
              titleStyle={{paddingHorizontal: Spacing.width32}}
            />
          </View>
        </View>
      </Modal>
    </ScreenWrapper>
  );
};
