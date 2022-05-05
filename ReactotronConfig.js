import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { reactotronRedux } from 'reactotron-redux';
import { NativeModules } from 'react-native';
let scriptHostname = 'localhost';
if (__DEV__) {
    const { scriptURL } = NativeModules.SourceCode;
    scriptHostname = scriptURL.split('://')[1].split(':')[0];
}
export const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
    .configure({ host: scriptHostname }) // controls connection & communication settings
    .useReactNative()
    .use(reactotronRedux())
    .useReactNative({
        networking: {
            ignoreUrls: /symbolicate/,
        },
    })
    // add all built-in react native plugins
    .connect();
// let's connect!
console.tron=reactotron

