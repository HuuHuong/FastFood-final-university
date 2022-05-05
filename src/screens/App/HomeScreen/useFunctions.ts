import {
  View,
  Text,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Animated,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {NavigationUtils} from '@navigation';
import {SCREEN_ROUTER_APP} from '@utils';
import {GetHomePageApi} from '@services/Networks';

export const useFunctions = () => {
  const [text, setText] = useState<string>('');
  const isCarousel: any = React.useRef(null);
  const [index, setIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const getHomePage = async () => {
    try {
      setIsLoading(true);
      const response = await GetHomePageApi();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getHomePage();
  }, []);
  const onFilter = () => {};
  const onDetailFood = () => {
    NavigationUtils.navigate(SCREEN_ROUTER_APP.DETAIL_FOOD);
  };
  const onNavigateOrderAgain = () => {
    NavigationUtils.navigate(SCREEN_ROUTER_APP.ORDER_AGAIN);
  };
  const onNavigateListFood = () => {
    NavigationUtils.navigate(SCREEN_ROUTER_APP.LIST_FOOD, {autoFocus: true});
  };
  let translateX = useRef(new Animated.Value(0)).current;

  return {
    text,
    setText,
    onFilter,
    index,
    setIndex,
    isCarousel,
    onDetailFood,
    onNavigateOrderAgain,
    onNavigateListFood,
    translateX,
    isLoading,
  };
};
