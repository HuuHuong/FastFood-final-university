import {NavigationUtils} from '@navigation';
// import AsyncStorageService from '@services/AsyncStorage/AsyncStorageService';
import {useEffect, useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Alert, Platform} from 'react-native';
import {SCREEN_ROUTER_APP} from './constants';

type TypesBase =
  | 'bigint'
  | 'boolean'
  | 'function'
  | 'number'
  | 'object'
  | 'string'
  | 'symbol'
  | 'undefined';

export const onShowErrorBase = (msg: string) => {
  Alert.alert(msg);
};
export const onCheckType = (source: any, type: TypesBase) =>
  typeof source === type;
export function onCheckTS<T>(
  arg: any,
  propUnique: string,
  typeOfProps: TypesBase,
): arg is T {
  return arg && arg[propUnique] && typeof arg[propUnique] === typeOfProps;
}
export const isIos = Platform.OS === 'ios';

export function jsonToArray(jsonData: any) {
  var result = [];
  for (var i in jsonData) result.push(jsonData[i]);
  return result;
}
export const enhance = (arrStyle: Array<any>) => {
  return StyleSheet.flatten(arrStyle);
};
export function useInterval(callback: Function, delay: number | null) {
  const savedCallback = useRef<Function>();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    function tick() {
      savedCallback.current && savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
export const showConfirm = (
  title: string,
  content: string,
  action?: () => void,
  actionCandle?: () => void,
  textCancel?: string,
  textConfirm?: string,
) => {
  Alert.alert(
    title,
    content,
    [
      {
        // text: textCancel || R.strings().cancel,
        style: 'cancel',
        onPress: actionCandle,
      },
      {
        // text: textConfirm || R.strings().confirm,
        onPress: action,
      },
    ],
    {cancelable: false},
  );
};
export const isUser = async (action: () => void) => {
  // const token = await AsyncStorageService.getToken();
  // if (!token) {
  //   showConfirm(
  //     R.strings().notification,
  //     R.strings().require_login_message,
  //     () => {
  //       NavigationUtils.navigate(SCREEN_ROUTER_APP.LOGIN);
  //     },
  //     () => {},
  //     '',
  //     R.strings().login,
  //   );
  //   return;
  // }
  // action();
};
export function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const timer: any = setTimeout(() => setDebouncedValue(value), delay || 250);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debouncedValue;
}
