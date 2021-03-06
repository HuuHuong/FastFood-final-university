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
import {NavigationUtils} from '@navigation';
import {SCREEN_ROUTER_APP} from '@utils';
export const CartScreen = () => {
  const {
    listFoodCart,
    totalPrice,
    TYPE_QUANTITY,
    onEditQuantity,
    isVisible,
    setIsVisible,
    onDetailFood,
    onRemoveItem,
    countShip,
    itemSelect,
    onPayment,
    onVoucher,
    voucher,
  } = useFunctions();
  const renderItemCart = (item: any) => {
    return (
      // <View
      // style={{
      //   ...commonStyles.row_center_space_between,
      //   marginBottom: Spacing.height20,
      // }}>
      //   <DebounceButton
      //     onPress={() => onDetailFood(item?.id)}
      //     viewStyle={{
      //       ...commonStyles.row_align_center,
      //       // width: '70%',
      //     }}>
      //     <View style={styles.view_img}>
      //       <FastImage
      //         source={{uri: item?.image}}
      //         style={styles.img_food}
      //         resizeMode={'cover'}
      //       />
      //     </View>
      //     <View
      //       style={{
      //         // marginLeft: Spacing.width12,
      //         width: '60%',
      //         backgroundColor: 'yellow',
      //       }}>
      //       <AppText numberOfLines={2} style={styles.name_food}>
      //         {item?.name}
      //       </AppText>
      //       <AppText numberOfLines={2} style={styles.name_restaurant}>
      //         {item?.store?.name}
      //       </AppText>
      //     </View>
      //   </DebounceButton>
      //   <View style={{alignItems: 'center'}}>
      //     <View style={styles.view_quantity}>
      //       <DebounceButton
      //         onPress={() =>
      //           onEditQuantity({item, type_edit: TYPE_QUANTITY.REDUCTION})
      //         }>
      //         <AppText style={styles.edit_quantity}>{'-'}</AppText>
      //       </DebounceButton>
      //       <AppText style={styles.edit_quantity}>{item?.quantity}</AppText>
      //       <DebounceButton
      //         onPress={() =>
      //           onEditQuantity({item, type_edit: TYPE_QUANTITY.INCREASE})
      //         }>
      //         <AppText style={styles.edit_quantity}>{'+'}</AppText>
      //       </DebounceButton>
      //     </View>
      //     <AppText style={styles.money_food}>{`${
      //       item?.quantity * item?.price
      //     } VND`}</AppText>
      //   </View>
      // </View>
      <View
        style={{
          ...commonStyles.row_center_space_between,
          marginBottom: Spacing.height20,
        }}>
        <DebounceButton
          onPress={() => onDetailFood(item?.id)}
          viewStyle={{
            ...commonStyles.row_align_center,
            width: '90%',
          }}>
          <View style={styles.view_img}>
            <FastImage
              source={{uri: item?.image}}
              style={styles.img_food}
              resizeMode={'cover'}
            />
          </View>
          <View style={{marginLeft: Spacing.width12, width: '50%'}}>
            <AppText numberOfLines={2} style={styles.name_food}>
              {item?.name}
            </AppText>
            <AppText numberOfLines={2} style={styles.name_restaurant}>
              {item?.store?.name}
            </AppText>
          </View>
        </DebounceButton>
        <View style={{}}>
          <View style={styles.view_quantity}>
            <DebounceButton
              onPress={() =>
                onEditQuantity({item, type_edit: TYPE_QUANTITY.REDUCTION})
              }>
              <AppText style={styles.edit_quantity}>{'-'}</AppText>
            </DebounceButton>
            <AppText style={styles.edit_quantity}>{item?.quantity}</AppText>
            <DebounceButton
              onPress={() =>
                onEditQuantity({item, type_edit: TYPE_QUANTITY.INCREASE})
              }>
              <AppText style={styles.edit_quantity}>{'+'}</AppText>
            </DebounceButton>
          </View>
          <AppText style={styles.money_food}>{`${
            item?.quantity * item?.price
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
  const NoFoodCard = () => (
    <View style={{marginTop: Spacing.height40}}>
      <AppText style={styles.no_cart}>{trans().dont_have_cart}</AppText>
      <MainButtonApp
        onPress={() =>
          NavigationUtils.navigate(SCREEN_ROUTER_APP.LIST_FOOD, {
            autoFocus: false,
          })
        }
        title={trans().start_order}
      />
    </View>
  );
  const ListFoodCart = () => (
    <View>
      <View style={{marginTop: Spacing.height20}}>
        {listFoodCart?.map((item: any, index: number) => renderItemCart(item))}
      </View>
      <DebounceButton
        onPress={onVoucher}
        activeOpacity={0.5}
        viewStyle={styles.view_voucher}>
        <View style={{...commonStyles.row_align_center}}>
          <IconTicket />
          <AppText style={styles.txt_voucher}>
            {!!voucher ? 'FastFood Free Ship' : trans().voucher}
          </AppText>
        </View>
        <IconNext strokeColor={colors.black} />
      </DebounceButton>
      <View style={styles.view_total}>
        <CountMoney title={trans().total_food} money={totalPrice} />
        <CountMoney title={trans().delivery} money={countShip} />
        <CountMoney
          title={trans().total}
          money={totalPrice + countShip}
          final
        />
      </View>
      <MainButtonApp
        title={trans().payment}
        titleStyle={{marginRight: Spacing.width16}}
        icon={<IconArrowRight />}
        onPress={onPayment}
        viewStyle={{paddingHorizontal: Spacing.width36}}
        style={{marginTop: Spacing.height32, alignSelf: 'center'}}
      />
    </View>
  );
  return (
    <ScreenWrapper
      unsafe
      scroll
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

      {!!listFoodCart?.length ? <ListFoodCart /> : <NoFoodCard />}

      <Modal
        onBackdropPress={() => setIsVisible(false)}
        isVisible={isVisible}
        animationIn={'zoomIn'}
        animationOut={'fadeOut'}>
        <View style={styles.view_modal}>
          <AppText style={styles.title_modal}>
            {trans().delete_food}
            <AppText style={{...commonStyles.commonText600_14}}>
              {itemSelect?.name}
            </AppText>
            {trans().from_cart}
          </AppText>
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
              onPress={onRemoveItem}
              title={trans().confirm}
              titleStyle={{paddingHorizontal: Spacing.width32}}
            />
          </View>
        </View>
      </Modal>
    </ScreenWrapper>
  );
};
