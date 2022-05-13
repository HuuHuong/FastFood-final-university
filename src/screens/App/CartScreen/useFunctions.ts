import {NavigationUtils} from '@navigation';
import {useIsFocused} from '@react-navigation/native';
import {setAddCart, setListOrders} from '@redux/slices/accountSlice';
import {SCREEN_ROUTER_APP, TYPE_QUANTITY} from '@utils';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import reactotron from 'reactotron-react-native';

export const useFunctions = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const listCart = useSelector((state: any) => state.accountSlice?.listCart);
  const [listFoodCart, setListFoodCart] = useState<any>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [itemSelect, setItemSelect] = useState<any>([]);
  const [countShip, setCountShip] = useState<number>(0);
  const isFocus = useIsFocused();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isFocus) setListFoodCart(listCart);
  }, [isFocus]);
  reactotron.log!({listCart});
  const onDetailFood = (idFood: number) => {
    NavigationUtils.navigate(SCREEN_ROUTER_APP.DETAIL_FOOD, {idFood});
  };
  const onEditQuantity = (props: {item: any; type_edit: number}) => {
    const newList = listFoodCart?.map((item: any) => {
      if (item?.id === props?.item?.id) {
        if (props.type_edit === TYPE_QUANTITY.INCREASE)
          return {...item, quantity: item?.quantity + 1};
        else {
          if (item?.quantity > 1)
            return {...item, quantity: item?.quantity - 1};
          else if (item?.quantity === 1) {
            setItemSelect(props.item);
            setIsVisible(true);
          }
        }
      }
      return {...item};
    });
    setListFoodCart(newList);
    dispatch(setAddCart(newList));
  };
  const onRemoveItem = () => {
    const newArr = listFoodCart?.filter(
      (item: any) => item.id !== itemSelect?.id,
    );
    const listCartStore = listCart?.filter(
      (item: any) => item.id !== itemSelect?.id,
    );
    setListFoodCart(newArr);
    dispatch(setAddCart(listCartStore));
    setIsVisible(false);
  };
  const calculationPrice = () => {
    const initialValue = 0;
    const arrPrice = listFoodCart?.map(
      (item: any) => item?.quantity * item?.price,
    );
    setTotalPrice(
      arrPrice?.reduce(
        (previousValue: any, currentValue: any) => previousValue + currentValue,
        initialValue,
      ),
    );
  };
  useEffect(() => {
    calculationPrice();
    setCountShip(listFoodCart.length ? 15000 : 0);
  }, [onEditQuantity]);
  const onPayment = () => {
    dispatch(setAddCart([]));
    dispatch(setListOrders(listCart));
    NavigationUtils.navigate(SCREEN_ROUTER_APP.YOUR_ORDERS);
  };
  return {
    listFoodCart,
    onEditQuantity,
    TYPE_QUANTITY,
    isVisible,
    setIsVisible,
    onDetailFood,
    totalPrice,
    onRemoveItem,
    countShip,
    itemSelect,
    onPayment,
  };
};
