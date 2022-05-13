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
import reactotron from 'reactotron-react-native';
import trans, {Images} from '@assets';

export const useFunctions = () => {
  const LIST_TYPE_FASTFOOD = [
    {
      id: 1,
      img: Images.img_type_food1,
      title: trans().hot_deal,
    },
    {
      id: 2,
      img: Images.img_type_food2,
      title: trans().new_on_fastfood,
    },
    {
      id: 3,
      img: Images.img_type_food3,
      title: trans().save_food,
    },
    {
      id: 4,
      img: Images.img_type_food4,
      title: trans().set_preference,
    },
  ];
  const [dataHomePage, setDataHomePage] = useState<any>([]);
  const [text, setText] = useState<string>('');
  const isCarousel: any = React.useRef(null);
  const [index, setIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [timeNow, setTimeNow] = useState<number>(0);
  const [listFoodTimeNow, setListFoodTimeNow] = useState<any>([]);
  const [timeZone, setTimeZone] = useState<string>('');
  const getHomePage = async () => {
    try {
      setIsLoading(true);
      const response = await GetHomePageApi();
      setIsLoading(false);
      setDataHomePage(response);
    } catch (error) {
      setIsLoading(false);
    }
  };
  const getTimeCurrent = () => {
    const timeHour = new Date().getHours();
    if (timeHour > 6 && timeHour < 10) setTimeNow(1);
    else if (timeHour >= 10 && timeHour < 14) setTimeNow(2);
    else if (timeHour >= 14 && timeHour < 17) setTimeNow(3);
    else setTimeNow(4);
  };
  const listFoodTimeStamp = () => {
    switch (timeNow) {
      case 1:
        return (
          setListFoodTimeNow(dataHomePage?.list_breakfask),
          setTimeZone(trans().breakfast)
        );
      case 2:
        return (
          setListFoodTimeNow(dataHomePage?.listlunch),
          setTimeZone(trans().lunch)
        );
      case 3:
        return (
          setListFoodTimeNow(dataHomePage?.listdinner),
          setTimeZone(trans().afternoon)
        );
      case 4:
        return (
          setListFoodTimeNow(dataHomePage?.listdinner),
          setTimeZone(trans().dinner)
        );
      default:
        return '';
    }
  };
  useEffect(() => {
    getHomePage();
    getTimeCurrent();
  }, []);
  useEffect(() => {
    listFoodTimeStamp();
  }, [dataHomePage]);
  const onFilter = () => {};
  const onDetailFood = (idFood: number) => {
    NavigationUtils.navigate(SCREEN_ROUTER_APP.DETAIL_FOOD, {idFood});
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
    timeZone,
    listFoodTimeNow,
    dataHomePage,
    LIST_TYPE_FASTFOOD,
  };
};
