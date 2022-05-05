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
import {SocialUserInfo} from './SignInGeneric';
import {ConfirmOTPCodeApi, LoginApi, SignUpApi} from '@services/Networks';
import AsyncStorageService from '@services/AsyncStorage/AsyncStorageService';
import {setAccountToken} from '@redux/slices/accountSlice';
import {useDispatch} from 'react-redux';
import {showMessage} from 'react-native-flash-message';
interface FakeAuthen {
  id: number;
  phone_number: string;
  password: string;
}
export const useFunctions = () => {
  const dispatch = useDispatch();
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const initialValues = {
    email: __DEV__ ? 'thecong1996@gmail.com' : '',
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
    onSubmit: values => {
      onLogin(values);
    },
  });
  const onLogin = async (values: any) => {
    try {
      setShowDialog(true);
      const response = await LoginApi({
        email: values.email,
        password: values.password,
      });
      console.log({response});
      AsyncStorageService.putToken(response.data.token);
      dispatch(setAccountToken(response.data.token));
      NavigationUtils.replace(SCREEN_ROUTER_APP.WELCOME, {
        name: response.data.name.name,
      });
      setShowDialog(false);
    } catch (error) {
      setShowDialog(false);
      console.log({error});
    }
  };
  const onSubmit = async (values: any) => {
    try {
      setShowDialog(true);
      const response = await SignUpApi({
        name: values.full_name,
        email: values.email,
        password: values.password,
      });
      console.log(response, 'abc');
      setShowDialog(false);
      setIsVisible(true);
    } catch (error) {
      setShowDialog(false);
      console.log(error);
    }
  };
  const verifyCode = async (param: {code: string; email: string}) => {
    try {
      const response = await ConfirmOTPCodeApi({
        code: param.code,
        email: param.email,
      });
      console.log({response});
      showMessage({
        type: 'success',
        message: trans().sign_up_success,
      });
    } catch (error) {
      console.log('Invalid code');
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
      NavigationUtils.navigate(SCREEN_ROUTER_APP.MAIN);
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
          NavigationUtils.navigate(SCREEN_ROUTER_APP.MAIN);
          // loginWithThirdParty(socialUserInfo);
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
  // const loginWithThirdParty = async (userInfo: SocialUserInfo) => {
  //   try {
  //     setDialogLoading(true);
  //     const res: LoginRootResponse = await requestSignInWithThirdParty(
  //       userInfo,
  //     );
  //     setDialogLoading(false);
  //     AsyncStorageService.putToken(res.data.access_token);
  //     dispatch(setAccountToken(res.data.access_token));
  //     NavigationUtils.reset(SCREEN_ROUTER_APP.MAIN);
  //   } catch (error) {
  //     setDialogLoading(false);
  //     console.log({error});
  //   }
  // };

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
