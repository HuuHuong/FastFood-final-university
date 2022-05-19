import trans from '@assets';
import {NavigationUtils} from '@navigation';
import {setListOrders} from '@redux/slices/accountSlice';
import {ListOrdersApi} from '@services/Networks';
import {SCREEN_ROUTER_APP, STATUS_ITEM_ORDER} from '@utils';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import reactotron from 'reactotron-react-native';

export const useFunction = () => {
  const dispatch = useDispatch();
  const listOrderCart = useSelector(
    (state: any) => state.accountSlice.listOrder,
  );
  const [listOrders, setListOrdersCart] = useState<any>([]);
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [itemSelect, setItemSelect] = useState<any>(false);
  const getListOrder = async (page: number) => {
    try {
      setShowDialog(true);
      const response = await ListOrdersApi(page);
      const data = response.data.data;
      setPage(response.data.paging.current_page);
      setLastPage(response.data.paging.last_page);
      reactotron.log!({response});
      setShowDialog(false);
      !!data.length
        ? setListOrdersCart(data)
        : setListOrdersCart(listOrderCart);
    } catch (error) {
      setShowDialog(false);
      reactotron.log!({error});
    }
  };
  useEffect(() => {
    getListOrder(page);
    reactotron.log!({listOrderCart});
  }, []);
  const onStartOrder = () => {
    NavigationUtils.navigate(SCREEN_ROUTER_APP.LIST_FOOD, {autoFocus: false});
  };
  const onDetailFood = (idFood: number) => {
    NavigationUtils.navigate(SCREEN_ROUTER_APP.DETAIL_FOOD, {idFood});
  };
  const statusItem = (status: number) => {
    if (status === STATUS_ITEM_ORDER.REJECTED) return trans().rejected;
    else if (status === STATUS_ITEM_ORDER.DELIVERED) trans().delivered;
    return trans().delivering;
  };
  const rejectProduct = (item: any) => {
    setIsVisible(true);
    setItemSelect(item);
  };
  const onRemoveItem = () => {
    const newArr = listOrders?.filter(
      (item: any) => item?.id !== itemSelect?.id,
    );
    setListOrdersCart(newArr);
    setIsVisible(false);
    dispatch(setListOrders(newArr));
  };
  return {
    listOrders,
    showDialog,
    onStartOrder,
    onDetailFood,
    statusItem,
    rejectProduct,
    setIsVisible,
    isVisible,
    onRemoveItem,
  };
};
