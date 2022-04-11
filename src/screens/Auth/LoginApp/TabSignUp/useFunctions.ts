import {validators} from '@utils';
import * as yup from 'yup';
import auth from '@react-native-firebase/auth';
import {useState} from 'react';
export const useFunctions = () => {
  const [confirmCode, setConfirmCode] = useState<any>(0);
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
  const onSubmit = (values: any) => {};

  const SignUpWithPhone = async (phoneNumber: string) => {
    try {
      const response = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirmCode(response);
    } catch (error) {
      console.log(error);
    }
  };
  const verifyCode = async () => {
    try {
      const response = await confirmCode.confirm();
    } catch (error) {
      console.log('Invalid code');
    }
  };
  return {initialValues, validationSchema, onSubmit};
};
