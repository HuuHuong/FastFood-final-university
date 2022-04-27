import {FAKE_AUTHEN} from '@assets';
import {NavigationUtils} from '@navigation';
import {
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
// import {
//   GoogleSignin,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';
// import {
//   AccessToken,
//   GraphRequest,
//   GraphRequestManager,
//   LoginManager,
//   Settings,
// } from 'react-native-fbsdk-next';
interface FakeAuthen {
  id: number;
  phone_number: string;
  password: string;
}
export const useFunctions = () => {
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const initialValues = {
    phone_number: __DEV__ ? '0978589470' : '',
    password: __DEV__ ? '123456789a' : '',
  };
  const validationSchema = yup.object().shape({
    phone_number: validators().mobile_number,
    password: validators().password,
  });
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: values => {
      const isLogin =
        FAKE_AUTHEN.findIndex(
          (item: FakeAuthen) =>
            // if (
            //   item.phone_number !== values.email ||
            //   item.password !== values.password
            // )
            //   console.log('Your phone number or password is invalid');
            // else if (
            //   item.phone_number === values.email &&
            //   item.password === values.password
            // )
            //   console.log('Login Success');
            item.phone_number === values.phone_number &&
            item.password === values.password,
        ) != -1;
      if (isLogin) {
        setShowDialog(true);
        NavigationUtils.reset(SCREEN_ROUTER_APP.MAIN);
        setTimeout(() => {
          setShowDialog(false);
        }, 2000);
      }
    },
  });

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
          // reactotron.log!('login info has error: ' + JSON.stringify(error));
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
  return {formik, showDialog, signInFacebook, signInGoogle};
};
