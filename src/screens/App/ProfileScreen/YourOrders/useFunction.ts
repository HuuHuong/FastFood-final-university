import trans from '@assets';
import {NavigationUtils} from '@navigation';
import {ListOrdersApi} from '@services/Networks';
import {SCREEN_ROUTER_APP, STATUS_ITEM_ORDER} from '@utils';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import reactotron from 'reactotron-react-native';

export const useFunction = () => {
  const listOrderCart = useSelector(
    (state: any) => state.accountSlice.listOrder,
  );
  const [listOrders, setListOrders] = useState<any>([]);
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const getListOrder = async (page: number) => {
    try {
      setShowDialog(true);
      const response = await ListOrdersApi(page);
      const data = response.data.data;
      setPage(response.data.paging.current_page);
      setLastPage(response.data.paging.last_page);
      reactotron.log!({response});
      setShowDialog(false);
      !!data.length ? setListOrders(data) : setListOrders(listOrderCart);
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
  return {listOrders, showDialog, onStartOrder, onDetailFood, statusItem};
};
