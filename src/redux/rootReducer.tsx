import {combineReducers} from 'redux';
// import  from './slices';
import accountSlice from './slices';

const rootReducer = combineReducers({
  accountSlice: accountSlice,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
