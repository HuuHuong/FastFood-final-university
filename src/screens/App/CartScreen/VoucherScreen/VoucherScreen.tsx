import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScreenWrapper} from '@components/Screen/ScreenWrapper';
import {colors, commonStyles, deviceWidth, Spacing} from '@theme';
import FastImage from 'react-native-fast-image';
import trans, {Images} from '@assets';
import {AppText, BackButton, DebounceButton, MainButtonApp} from '@components';
import {NavigationUtils} from '@navigation';
import {useDispatch} from 'react-redux';
import {setVoucher} from '@redux/slices/accountSlice';

export const VoucherScreen = (props: any) => {
  const DATA = [
    {
      id: 1,
      date: '31/05/2022',
      isSelected: false,
    },
    {
      id: 2,
      date: '31/05/2022',
      isSelected: false,
    },
    {
      id: 3,
      date: '31/05/2022',
      isSelected: false,
    },
  ];
  const {voucher} = props?.route?.params;
  console.log({voucher});
  const dispatch = useDispatch();

  const [listVoucher, setListVoucher] = useState<any>([]);
  console.log({listVoucher});
  const [itemSelect, setItemSelect] = useState<any>([]);
  useEffect(() => {
    setListVoucher(DATA);
  }, []);
  console.log({listVoucher});
  const onSelected = (itemSelect: any) => {
    console.log({itemSelect});
    const newArr = listVoucher.map((item: any) => {
      if (item?.id === itemSelect?.id) return {...item, isSelected: true};
      return {...item, isSelected: false};
    });
    setListVoucher(newArr);
  };
  const onUseVoucher = () => {
    const itemVoucher = listVoucher?.filter((item: any) => item?.isSelected);
    dispatch(setVoucher(itemVoucher));
    NavigationUtils.goBack();
  };
  return (
    <ScreenWrapper
      unsafe
      scroll
      style={{marginTop: Spacing.height44}}
      backgroundColor={colors.white}>
      <View style={{marginHorizontal: Spacing.width20}}>
        <View
          style={{
            ...commonStyles.row_align_center,
            marginBottom: Spacing.height16,
          }}>
          <BackButton />
          <AppText style={styles.heading_txt}>{trans().voucher}</AppText>
        </View>
        {listVoucher?.map((item: any) => (
          <DebounceButton
            onPress={() => onSelected(item)}
            activeOpacity={1}
            viewStyle={styles.view_item}>
            <View style={{...commonStyles.row_center_space_between}}>
              <View style={{...commonStyles.row_align_center}}>
                <FastImage
                  source={Images.ic_logo}
                  style={{width: Spacing.width40, height: Spacing.width40}}
                />
                <AppText style={styles.item_content}>{trans().voucher}</AppText>
              </View>

              <View style={styles.view_dot}>
                {item?.isSelected && <View style={styles.dot_select}></View>}
              </View>
            </View>
            <AppText style={styles.item_title}>
              {'Voucher Free Delivery'}
            </AppText>
            <AppText style={styles.date}>{`${trans().expiration_date}: ${
              item?.date
            }`}</AppText>
          </DebounceButton>
        ))}
      </View>
      <MainButtonApp
        style={{marginHorizontal: Spacing.width20}}
        disabled={listVoucher?.findIndex((item: any) => item?.isSelected) == -1}
        title={trans().select_voucher}
        onPress={onUseVoucher}
      />
    </ScreenWrapper>
  );
};
const styles = StyleSheet.create({
  view_item: {
    borderWidth: Spacing.width1,
    borderColor: colors.gray_B2,
    borderRadius: Spacing.width20,
    paddingHorizontal: Spacing.width16,
    paddingVertical: Spacing.height12,
    marginBottom: Spacing.height16,
  },
  view_dot: {
    backgroundColor: colors.white,
    width: Spacing.width16,
    height: Spacing.width16,
    borderRadius: Spacing.width100,
    borderColor: colors.black,
    borderWidth: Spacing.width1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot_select: {
    backgroundColor: colors.mainColor,
    width: Spacing.width10,
    height: Spacing.width10,
    borderRadius: Spacing.width100,
    borderColor: colors.black,
  },
  heading_txt: {
    ...commonStyles.commonText600_20,
    color: colors.black,
    marginLeft: Spacing.width8,
  },
  item_content: {
    ...commonStyles.commonText600_14,
    color: colors.black,
  },
  item_title: {
    ...commonStyles.commonText400_14,
    color: colors.black,
  },
  date: {
    ...commonStyles.commonText400_14,
    color: colors.mainColor,
    marginTop: Spacing.height12,
  },
});
