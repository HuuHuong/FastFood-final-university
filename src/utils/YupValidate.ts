import trans from '@assets';
import * as yup from 'yup';
export const validators = () => {
  return {
    email: yup
      .string()
      .required(trans().invalid_email)
      .email(trans().invalid_email),
    password: yup.string().required(trans().invalid_pass),
    // .matches(/^(?=.{10,}$)(?=.*[a-zA-Z])(?=.*[0-9]).*$/, trans().length_pass),
    confirm_password: yup
      .string()
      .required(trans().invalid_confirm_pass)
      .oneOf([yup.ref('password'), null], trans().match_pass),
    full_name: yup
      .string()
      .required(trans().enter_name)
      .matches(
        /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/,
        trans().invalid_name,
      ),
    mobile_number: yup
      .string()
      .required(trans().enter_phone)
      .matches(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{4}[-\s\.]?[0-9]{3,8}$/,
        trans().invalid_phone,
      ),
  };
};
