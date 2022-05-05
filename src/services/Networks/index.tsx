import ApiClient from './Api';
import {LOGIN, OTP_CODE, SIGN_UP} from './type';

export const LoginApi = async (param: any) => {
  const response = await ApiClient.post(LOGIN, param);
  return response;
};
export const SignUpApi = async (param: any) => {
  const response = await ApiClient.post(SIGN_UP, param);
  return response;
};
export const ConfirmOTPCodeApi = async (param: any) => {
  const response = await ApiClient.post(OTP_CODE, param);
  return response;
};
