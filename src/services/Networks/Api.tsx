import axios from 'axios';
import {showMessage} from 'react-native-flash-message';
// import {getToken, GlobalService, refreshToken} from '@services';
import {describeErrorResponse, describeSuccessResponse} from '@services/logger';
import AsyncStorageService from '@services/AsyncStorage/AsyncStorageService';

const ApiConfigs: any = {
  baseURL: 'http://54.205.212.77:81/api/',
  responseType: 'json',
  timeout: 30000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    timeout: 30000,
  },
};

const ApiClient = axios.create(ApiConfigs);
let numRecall = 0;

ApiClient.interceptors.request.use(
  async (config: any) => {
    // config.baseURL = getBaseURL();
    // const token = await getToken();
    const token = await AsyncStorageService.getToken();
    if (token) {
      config.headers = {
        // Authorization: 'Bearer ' + token,
        Authorization: token,
        ...config.headers,
      };
    }
    if (config.method.toUpperCase() === 'GET') {
      config.params = {...config.params};
    }
    return config;
  },
  error => Promise.reject(error),
);

ApiClient.interceptors.response.use(
  function (response: any) {
    describeSuccessResponse(response);
    try {
      const message = response?.data?.message;
      if (message && message !== 'OK') {
        showMessage({
          message: message,
          type: 'success',
        });
      }
      if (response.status !== 505) {
        numRecall = 0;
      }
      return response?.data;
    } catch (error) {
      console.log('err2', error);

      return Promise.reject(error);
    }
  },
  function (error) {
    const {response} = error;
    const {message, errors} = response?.data;
    const {status} = response;
    if (status === 401) {
    }

    if (status === 505) {
      // const config = response.config;
      // return Promise.resolve(
      //   refreshToken(numRecall, (token: string) => {
      //     numRecall += 1;
      //     config.headers['Authorization'] = token;
      //     return ApiClient(config);
      //   }),
      // );
    } else if ((status != 400 && errors?.content?.[0]) || message) {
      showMessage({
        message: errors?.content?.[0] || message,
        type: 'danger',
      });
    }
    describeErrorResponse(error);
    return Promise.reject(error);
  },
);

export default ApiClient;
