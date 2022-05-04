import {TYPE_QUANTITY} from '@utils';
import {useState} from 'react';
import {useSelector} from 'react-redux';

export const useFunctions = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const listCart = useSelector((state: any) => state.accountSlice?.listCart);
  const onEditQuantity = (type_edit: number) => {
    if (quantity > 1)
      type_edit === TYPE_QUANTITY.INCREASE
        ? setQuantity(prv => prv + 1)
        : setQuantity(prv => prv - 1);
    else if (quantity === 1 && type_edit === TYPE_QUANTITY.REDUCTION)
      setIsVisible(true);
  };
  return {
    listCart,
    quantity,
    onEditQuantity,
    TYPE_QUANTITY,
    isVisible,
    setIsVisible,
  };
};
