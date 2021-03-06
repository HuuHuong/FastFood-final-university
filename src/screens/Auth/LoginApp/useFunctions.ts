import trans, {FAKE_AUTHEN} from '@assets';
import {NavigationUtils} from '@navigation';
import {
  CREDENTIALS,
  GOOGLE_CONFIG,
  SCREEN_ROUTER_APP,
  SOCIAL_NETWORK,
  validators,
} from '@utils';
import {useFormik} from 'formik';
import {useEffect, useState} from 'react';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
  Settings,
} from 'react-native-fbsdk-next';
import * as yup from 'yup';
import {LoginRootResponse, SocialUserInfo} from './SignInGeneric';
import {
  ConfirmOTPCodeApi,
  LoginApi,
  LoginSocialApi,
  SignUpApi,
} from '@services/Networks';
import AsyncStorageService from '@services/AsyncStorage/AsyncStorageService';
import {
  setAccountToken,
  setDataProfile,
  setIsFirst,
} from '@redux/slices/accountSlice';
import {useDispatch} from 'react-redux';
import {showMessage} from 'react-native-flash-message';
import reactotron from 'reactotron-react-native';
import {Alert} from 'react-native';
interface FakeAuthen {
  id: number;
  phone_number: string;
  password: string;
}
export const useFunctions = () => {
  const dispatch = useDispatch();
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const initialValues = {
    email: __DEV__ ? 'nhhuong062@gmail.com' : '',
    password: __DEV__ ? '123456' : '',
  };
  const validationSchema = yup.object().shape({
    email: validators().email,
    password: validators().password,
  });
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: async (values: any) => {
      onLogin(values);
      try {
        setShowDialog(true);
        const response = await LoginApi({
          email: values.email,
          password: values.password,
        });
        console.log({response});
        AsyncStorageService.putToken(response.data.token);
        dispatch(setAccountToken(response.data.token));
        dispatch(setIsFirst(false));
        dispatch(setDataProfile(response.data.name));
        NavigationUtils.replace(SCREEN_ROUTER_APP.WELCOME, {
          name: response.data.name.name,
        });
        setShowDialog(false);
      } catch (error) {
        setShowDialog(false);
        console.log({error});
      }
    },
  });
  const onLogin = async (values: any) => {};
  const onSubmit = async (values: any) => {
    try {
      console.log(parseInt(values.phone_number));
      setShowDialog(true);
      const response = await SignUpApi({
        name: values.full_name,
        email: values.email,
        password: values.password,
        phone_number: `+84${parseInt(values.phone_number)}`,
      });
      console.log(response, 'abc');
      setEmail(values?.email);
      setShowDialog(false);
      setIsVisible(true);
    } catch (error) {
      setShowDialog(false);
      console.log(error);
    }
  };
  const verifyCode = async (code: number) => {
    try {
      setShowDialog(true);
      const response = await ConfirmOTPCodeApi({
        code: code,
        email: email,
      });
      setShowDialog(false);
      Alert.alert(trans().notification, trans().sign_up_success);
    } catch (error) {
      console.log('Invalid code');
      setShowDialog(false);
    }
  };
  const signInGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const res = await GoogleSignin.signIn();
      const socialUserInfo: SocialUserInfo = {
        social_type: SOCIAL_NETWORK.FACEBOOK,
        social_id: res?.user?.id,
        name: res?.user?.name as string,
        avatar: res?.user?.photo as string,
        email: res?.user?.email,
      };
      console.log({res});
      // NavigationUtils.reset(SCREEN_ROUTER_APP.MAIN);
      loginWithThirdParty(socialUserInfo);
    } catch (error: any) {
      console.log(error.code);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  const signInFacebook = async () => {
    LoginManager.logOut();
    try {
      let result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);
      if (!result.isCancelled) {
        AccessToken.getCurrentAccessToken()
          .then(data => {
            getInfoFromToken(data?.accessToken);
          })
          .catch(error => {
            console.log(error);
          });
      } else {
      }
    } catch (error) {
      console.log(error, 'ndh');
    }
  };
  const getInfoFromToken = (token?: string) => {
    const profileRequest = new GraphRequest(
      '/me?fields=name,first_name,last_name,picture.width(400),email,gender',
      {accessToken: token},
      async (error, result) => {
        if (error) {
        } else {
          const socialUserInfo: SocialUserInfo = {
            social_type: SOCIAL_NETWORK.FACEBOOK,
            social_id: result?.id as string,
            // type_model: TUTORS_ROLE,
            name: result?.name as string,
            //@ts-ignore
            avatar: result?.picture?.data?.url,
            email: result?.email as string,
          };
          console.log!(result, 'result');
          // NavigationUtils.reset(SCREEN_ROUTER_APP.MAIN);
          loginWithThirdParty(socialUserInfo);
        }
      },
    );
    new GraphRequestManager().addRequest(profileRequest).start();
  };
  const configGoogleSignIn = () => {
    GoogleSignin.configure({
      webClientId:
        '178946544364-sb94rpoafoe1geoq2tnd3m3kufg724kf.apps.googleusercontent.com',
      offlineAccess: false,
      profileImageSize: GOOGLE_CONFIG.PROFILE_IMAGE_SIZE,
    });
  };
  const loginWithThirdParty = async (userInfo: SocialUserInfo) => {
    try {
      setShowDialog(true);
      const response: any = await LoginSocialApi(userInfo);
      setShowDialog(false);
      reactotron.log!({response});
      AsyncStorageService.putToken(response.access_token);
      dispatch(setAccountToken(response.profile));
      NavigationUtils.reset(SCREEN_ROUTER_APP.MAIN);
    } catch (error) {
      setShowDialog(false);
      console.log({error});
    }
  };

  useEffect(() => {
    Settings.initializeSDK();
    configGoogleSignIn();
  }, []);
  return {
    formik,
    showDialog,
    signInFacebook,
    signInGoogle,
    isVisible,
    setIsVisible,
    onSubmit,
    verifyCode,
  };
};
