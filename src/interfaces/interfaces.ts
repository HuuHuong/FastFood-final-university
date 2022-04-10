import {FormikErrors} from 'formik';
import {KeyboardTypeOptions, TextStyle, ViewStyle} from 'react-native';

export interface IAppInput {
  label?: string;
  placeholder?: string;
  value?: any;
  secureTextEntry?: boolean;
  type?: string;
  containerStyle?: ViewStyle | ViewStyle[];
  style?: ViewStyle | ViewStyle[];
  inputStyle?: TextStyle | TextStyle[];
  customStyleLabel?: TextStyle;
  multiline?: boolean;
  numberOfLines?: number;
  error?:
    | string
    | string[]
    | FormikErrors<any>
    | FormikErrors<any>[]
    | undefined;
  showEye?: boolean;
  onValueChange?: (value: any, name?: string) => void;
  keyboardType?: KeyboardTypeOptions | undefined;
  editable?: boolean;
  name?: string;
  autoFocus?: boolean;
  typeInput?: 'default' | 'price' | 'phone' | 'password' | 'linear';
  delimiter?: string;
  onPressRightIcon?: () => void;
  maxLength?: number;
  callBackOnFocus?: (focus: boolean) => void;
  onEndEditing?: (name?: string) => void;
}
