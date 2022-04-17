import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {NavigationUtils} from '@navigation';
import {SCREEN_ROUTER_APP} from '@utils';

export const useFunctions = () => {
  const [text, setText] = useState<string>('');
  const isCarousel: any = React.useRef(null);
  const [index, setIndex] = useState<number>(0);
  const onFilter = () => {};
  const onDetailFood = () => {
    NavigationUtils.navigate(SCREEN_ROUTER_APP.DETAIL_FOOD);
  };
  const onNavigateOrderAgain = () => {
    NavigationUtils.navigate(SCREEN_ROUTER_APP.ORDER_AGAIN);
  };

  return {
    text,
    setText,
    onFilter,
    index,
    setIndex,
    isCarousel,
    onDetailFood,
    onNavigateOrderAgain,
  };
};
