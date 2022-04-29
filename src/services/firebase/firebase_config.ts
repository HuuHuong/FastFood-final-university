import {NavigationUtils} from '@navigation';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {SCREEN_ROUTER_APP} from '@utils';
import {User} from './interfacesFireBase';

export const addUserFirebase = (props: User) => {
  return firestore()
    .collection('users')
    .add({
      name: props.name,
      phoneNumber: props.phoneNumber,
      password: props.password,
      // // id: props.id,
      // accessToken: props.accessToken,
      createdAt: firestore.FieldValue.serverTimestamp(),
    })
    .then((data: any) => console.log({data}))
    .catch((error: any) => console.log(error, 'nhh'));
};
export const getDataUser = async (props: {
  phoneNumber: string;
  password: string;
}) => {
  const dataUser: any = [];
  const response = await firestore()
    .collection('users')
    .where('phoneNumber', '==', props.phoneNumber)
    .where('password', '==', props.password)
    .get()
    .then((data: any) => console.log({data}))
    .catch((error: any) => console.log(error, 'login'));
};
export const loginFirebase = (props: {
  phoneNumber: string;
  password: string;
}) => {
  return firestore()
    .collection('users')
    .where('phoneNumber', '==', props.phoneNumber)
    .where('password', '==', props.password)
    .onSnapshot((data: any) => {
      console.log(data, 'nhh');
      // NavigationUtils.navigate(SCREEN_ROUTER_APP.MAIN);
      // data.docs.map((item: any) => console.log({item}));
    });
};
