import {validators} from '@utils';
import * as yup from 'yup';
export const useFunctions = () => {
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
  return {initialValues, validationSchema, onSubmit};
};
