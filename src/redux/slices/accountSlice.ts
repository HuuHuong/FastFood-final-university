import {createSlice} from '@reduxjs/toolkit';
import {APP_SLICE} from '@types';
import {accountInterface} from '../types';

const initialState = {
  token: '',
  userProfile: {},
  dataUser: [],
  localLang: '',
  listTextSearched: [],
  isFirst: true,
} as accountInterface;

const accountSlice = createSlice({
  name: APP_SLICE.ACCOUNT_SLICE,
  initialState,
  reducers: {
    setIsFirst(state, action) {
      state.isFirst = action.payload;
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
  },
});

export const {
  setAccountToken,
  setDataProfile,
  setItemSearch,
  setLocalLang,
  setIsFirst,
} = accountSlice.actions;
export default accountSlice.reducer;
