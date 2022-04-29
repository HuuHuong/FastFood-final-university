import {NavigationUtils} from '@navigation';
import {setItemSearch} from '@redux/slices/accountSlice';
import {SCREEN_ROUTER_APP, useDebounce} from '@utils';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export const useFunctions = (props: any) => {
  const dispacth = useDispatch();
  const listTextSearched = useSelector(
    (state: any) => state?.accountSlice?.listTextSearched,
  );
  const {autoFocus} = props?.route?.params;
  const [text, setText] = useState<string>('');
  const [focusSearch, setFocusSearch] = useState<boolean>(autoFocus || false);
  const textSearch = useDebounce(text, 250);
  const onSearch = () => {
    if (!!textSearch)
      if (!!listTextSearched) {
        const indexText = listTextSearched?.findIndex(
          (item: any) => item === textSearch,
        );
        if (indexText === -1)
          dispacth(setItemSearch([textSearch, ...listTextSearched]));
      } else dispacth(setItemSearch([textSearch]));
    setFocusSearch(false);
  };
  const onFilter = () => {};
  const onDeleteTextSearch = (itemSearch: string) => {
    const newList = listTextSearched?.filter(
      (item: any) => item !== itemSearch,
    );
    dispacth(setItemSearch(newList));
  };
  const onDetailFood = (item: any) => {
    NavigationUtils.navigate(SCREEN_ROUTER_APP.DETAIL_FOOD, {foodDetail: item});
  };
  return {
    text,
    setText,
    focusSearch,
    onSearch,
    onFilter,
    listTextSearched,
    onDeleteTextSearch,
    setFocusSearch,
    onDetailFood,
  };
};
