import {validators} from '@utils';
import * as yup from 'yup';
import auth from '@react-native-firebase/auth';
import {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {addUserFirebase} from '@services/firebase/firebase_config';
export const useFunctions = () => {
  const [confirmCode, setConfirmCode] = useState<any>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const initialValues = {
    full_name: '',
    mobile_number: '',
    password: '',
    confirm_password: '',
  };
  const validationSchema = yup.object().shape({
    full_name: validators().full_name,
    mobile_number: validators().mobile_number,
    password: validators().password,
    confirm_password: validators().confirm_password,
  });
  const onSubmit = async (values: any) => {
    try {
      const response = await auth().signInWithPhoneNumber(values.phone_number);
      console.log(response, 'abc');
      setIsVisible(true);
      setConfirmCode(response);
    } catch (error) {
      console.log(error);
    }
  };
  const verifyCode = async (code: string) => {
    try {
      const response = await confirmCode.confirm(code);
      console.log({confirmCode});
      addUserFirebase({
        name: initialValues.full_name,
        password: initialValues.password,
        phoneNumber: initialValues.mobile_number,
        accessToken: confirmCode._verificationId,
        id: response.user.uid,
      });
      console.log({response: response.user});
    } catch (error) {
      console.log('Invalid code');
    }
  };
  return {
    initialValues,
    validationSchema,
    onSubmit,
    verifyCode,
    isVisible,
    setIsVisible,
  };
};
