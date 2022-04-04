import {createSlice} from '@reduxjs/toolkit';
import {APP_SLICE} from '@types';
import {accountInterface} from '../types';

const initialState = {
  token: '',
  userProfile: {},
  dataUser: [],
  localLang: '',
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
  },
});

export const {setAccountToken, setDataProfile} = accountSlice.actions;
export default accountSlice.reducer;
