import ApiClient from './Api';
import {
  FOOD_DETAIl,
  HOME_PAGE,
  LIST_FOOD,
  LIST_ORDERS,
  LOGIN,
  LOGIN_SOCIAL,
  LOG_OUT,
  OTP_CODE,
  SIGN_UP,
} from './type';

export const LoginApi = async (param: any) => {
  const response = await ApiClient.post(LOGIN, param);
  return response;
};
export const LoginSocialApi = async (param: any) => {
  const response = await ApiClient.post(LOGIN_SOCIAL, param);
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
export const GetHomePageApi = async () => {
  const response = await ApiClient.get(HOME_PAGE);
  return response;
};
export const DetailFoodApi = async (param: any) => {
  const response = await ApiClient.get(FOOD_DETAIl + param);
  return response;
};
export const GetListFoodApi = async (param: any) => {
  const response = await ApiClient.get(
    LIST_FOOD + `?search=${param?.textSearch || ''}&page=${param?.page || 1}`,
  );
  return response;
};
export const ListOrdersApi = async (param: any) => {
  const response = await ApiClient.get(
    LIST_ORDERS + `?page=${param?.page || 1}`,
  );
  return response;
};
export const LogOutApi = async () => {
  const response = await ApiClient.post(LOG_OUT);
  return response;
};
