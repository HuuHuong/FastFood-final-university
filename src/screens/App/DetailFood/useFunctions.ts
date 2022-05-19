import {Images} from '@assets';
import {NavigationUtils} from '@navigation';
import {setAddCart} from '@redux/slices/accountSlice';
import {DetailFoodApi} from '@services/Networks';
import {SCREEN_ROUTER_APP, TYPE_QUANTITY} from '@utils';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import reactotron from 'reactotron-react-native';

export const useFunctions = (props: any) => {
  const {idFood} = props?.route?.params;
  const listCart = useSelector((state: any) => state.accountSlice?.listCart);
  const [itemFood, setItemFood] = useState<any>([]);
  const dispatch = useDispatch();
  const [quantityFood, setQuantityFood] = useState<number>(1);
  const [isHeart, setIsHeart] = useState<boolean>(itemFood.isLike);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const getDataDetailFood = async () => {
    try {
      setIsLoading(true);
      const response = await DetailFoodApi(idFood);
      setItemFood(response?.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getDataDetailFood();
  }, []);
  const onEditQuantity = (type_quantity: number) => {
    if (type_quantity === TYPE_QUANTITY.INCREASE)
      setQuantityFood(prv => prv + 1);
    else if (quantityFood > 1) setQuantityFood(prv => prv - 1);
  };
  const onAddCart = () => {
    const newItem = {...itemFood, quantity: quantityFood};
    reactotron.log!({newItem});
    if (!listCart?.length) dispatch(setAddCart([newItem]));
    else {
      const indexItem = listCart?.findIndex(
        (item: any) => item?.id === newItem?.id,
      );
      if (indexItem == -1) dispatch(setAddCart([...listCart, newItem]));
      else {
        const newArr = listCart?.map((item: any) => {
          if (item.id === newItem.id)
            return {...item, quantity: item.quantity + newItem.quantity};
          return {...item};
        });
        dispatch(setAddCart(newArr));
      }
    }
    NavigationUtils.navigate(SCREEN_ROUTER_APP.CART);
  };

  return {
    onEditQuantity,
    quantityFood,
    onAddCart,
    itemFood,
    isHeart,
    setIsHeart,
    isLoading,
  };
};
