import {createSlice} from '@reduxjs/toolkit';
import {APP_SLICE} from '@types';
import {accountInterface} from '../types';

const initialState = {
  token: '',
  userProfile: {},
  dataUser: [],
  localLang: '',
  listTextSearched: [],
} as accountInterface;

const accountSlice = createSlice({
  name: APP_SLICE.ACCOUNT_SLICE,
  initialState,
  reducers: {
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

export const {setAccountToken, setDataProfile, setItemSearch, setLocalLang} =
  accountSlice.actions;
export default accountSlice.reducer;
