import {createSlice} from '@reduxjs/toolkit';
import {APP_SLICE} from '@types';
import reactotron from 'reactotron-react-native';
import {accountInterface} from '../types';

const initialState = {
  token: '',
  userProfile: {},
  dataUser: [],
  localLang: '',
  listTextSearched: [],
  isFirst: true,
  listCart: [],
  listOrder: [],
} as accountInterface;

const accountSlice = createSlice({
  name: APP_SLICE.ACCOUNT_SLICE,
  initialState,
  reducers: {
    setIsFirst(state, action) {
      state.isFirst = action.payload || true;
    },
    setAccountToken(state, action) {
      state.token = action.payload;
    },
    setDataProfile(state, action) {
      state.dataUser = action.payload;
    },
    setItemSearch(state, action) {
      state.listTextSearched = action.payload;
    },
    setLocalLang(state, action) {
      state.localLang = action.payload;
    },
    setAddCart(state, action) {
      state.listCart = action.payload;
    },
    setListOrders(state, action) {
      state.listOrder = action.payload;
    },
  },
});

export const {
  setAccountToken,
  setDataProfile,
  setItemSearch,
  setLocalLang,
  setIsFirst,
  setAddCart,
  setListOrders,
} = accountSlice.actions;
export default accountSlice.reducer;
