import {View, Text} from 'react-native';
import React from 'react';
import {ScreenWrapper} from '@components/Screen/ScreenWrapper';
import {commonStyles, Spacing} from '@theme';
import {AppText, BackButton, DebounceButton, MainButtonApp} from '@components';
import trans from '@assets';
import {styles} from './styles';
import {useFunction} from './useFunction';
import reactotron from 'reactotron-react-native';
import {VirtualList} from '@components/Flatlist';
import FastImage from 'react-native-fast-image';
import {NavigationUtils} from '@navigation';
import {SCREEN_ROUTER_APP} from '@utils';

export const YourOrders = () => {
  const {listOrders, showDialog, onStartOrder, onDetailFood, statusItem} =
    useFunction();
  reactotron.log!({listOrders});
  const renderItem = ({item, index}: any) => (
    <View key={index} style={styles.view_item}>
      <DebounceButton
        onPress={() =>
          NavigationUtils.navigate(SCREEN_ROUTER_APP.DETAIL_FOOD, {
            idFood: item?.id,
          })
        }
        viewStyle={styles.view_header_item}>
        <View
          style={{
            ...commonStyles.row_align_center,
            marginLeft: Spacing.width12,
          }}>
          <FastImage source={{uri: item?.image}} style={styles.image_food} />
          <View style={{marginLeft: Spacing.width12}}>
            <AppText
              numberOfLines={2}
              style={[styles.name_food, {with: '75%'}]}>
              {item?.name}
            </AppText>
            <AppText
              numberOfLines={2}
              style={[styles.name_store, {width: '75%'}]}>
              {item?.store?.name}
            </AppText>
          </View>
        </View>
        <AppText
          style={[
            styles.name_food,
            {marginRight: Spacing.width12, marginTop: Spacing.height4},
          ]}>{`${item?.price * item?.quantity} VND`}</AppText>
      </DebounceButton>
      <View
        style={{
          marginHorizontal: Spacing.width12,
          marginVertical: Spacing.height8,
        }}>
        <AppText style={styles.title_item}>{trans().item}</AppText>
        <AppText
          style={
            styles.count_item
          }>{`${item?.quantity} x ${item?.name}`}</AppText>
        <AppText style={[styles.title_item, {marginTop: Spacing.height8}]}>
          {trans().ordered_on}
        </AppText>
        <AppText style={styles.count_item}>
          {item?.delivery || '2020-05-08 09:00:00'}
        </AppText>
      </View>

      <View style={styles.view_bottom_item}>
        <DebounceButton>
          <AppText style={styles.status_item}>{statusItem(2)}</AppText>
        </DebounceButton>
        <DebounceButton>
          <AppText style={styles.repeat_order}>
            {item?.status === 2 ? trans().reject : trans().repeat_order}
          </AppText>
        </DebounceButton>
      </View>
    </View>
  );
  const ListOrders = () => {
    return <VirtualList data={listOrders} renderItem={renderItem} />;
  };
  const NoListOrders = () => {
    return (
      <View style={{marginTop: Spacing.height40}}>
        <AppText style={styles.no_cart}>{trans().dont_have_order}</AppText>
        <MainButtonApp onPress={onStartOrder} title={trans().start_order} />
      </View>
    );
  };
  return (
    <ScreenWrapper
      isLoading={showDialog}
      unsafe
      style={{
        paddingVertical: Spacing.height44,
        paddingHorizontal: Spacing.width20,
      }}>
      <View
        style={{
          ...commonStyles.row_align_center,
          marginBottom: Spacing.height24,
        }}>
        <BackButton />
        <AppText style={styles.heading_txt}>{trans().your_orders}</AppText>
      </View>
      {!!listOrders?.length ? <ListOrders /> : <NoListOrders />}
    </ScreenWrapper>
  );
};
