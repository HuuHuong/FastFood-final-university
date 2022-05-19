import {NavigationUtils} from '@navigation';
import {setItemSearch} from '@redux/slices/accountSlice';
import {GetListFoodApi} from '@services/Networks';
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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [focusSearch, setFocusSearch] = useState<boolean>(autoFocus || false);
  const [listFood, setListFood] = useState<any>([]);
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const textSearch = useDebounce(text, 1000);

  const getListData = async (page: number) => {
    try {
      setIsLoading(true);
      const response = await GetListFoodApi({textSearch, page});
      setPage(response.data.current_page);
      setListFood(response.data.data);
      setLastPage(response.data.last_page);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  const onSearch = () => {
    if (!!textSearch)
      if (!!listTextSearched) {
        const indexText = listTextSearched?.findIndex(
          (item: any) => item.toLowerCase() === textSearch.toLowerCase(),
        );
        if (indexText === -1)
          dispacth(setItemSearch([textSearch, ...listTextSearched]));
      } else dispacth(setItemSearch([textSearch]));
    setFocusSearch(false);
    setText(textSearch);
  };
  useEffect(() => {
    getListData(page);
  }, [page, textSearch]);
  useEffect(() => {
    getListData(1);
  }, [textSearch]);
  const onFilter = () => {};
  const onDeleteTextSearch = (itemSearch: string) => {
    const newList = listTextSearched?.filter(
      (item: any) => item !== itemSearch,
    );
    dispacth(setItemSearch(newList));
  };
  const onDetailFood = (idFood: any) => {
    NavigationUtils.navigate(SCREEN_ROUTER_APP.DETAIL_FOOD, {idFood});
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
    listFood,
    isLoading,
  };
};
