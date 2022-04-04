import {
  Alert,
  Dimensions,
  Image,
  ImageSourcePropType,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React, {useEffect} from 'react';
import {
  jsonToArray,
  SCREEN_ROUTER_APP,
  // TAB_BAR,
} from '@utils';
import {colors, DEVICE, NotoSansFont, Spacing} from '@theme';
import {NavigationUtils} from '@navigation/NavigationUtils';
import {DebounceButton} from '@components/Button/Button';
interface History {
  type: string;
  key: string;
}

interface Route {
  name: string;
  key: string;
}
interface State {
  stale: boolean;
  type: string;
  key: string;
  index: number;
  routeNames: string[];
  history: History[];
  routes: Route[];
}
interface RouteProps {
  key: string;
  name: string;
  state: State;
}
const height = Dimensions.get('window').height;
// console.log(MAIN_TAB_BAR.HOME)
const USER_FEATURES = [
  SCREEN_ROUTER_APP.HOME,
  SCREEN_ROUTER_APP.OFFERS,
  SCREEN_ROUTER_APP.CART,
  SCREEN_ROUTER_APP.PROFILE,
];
const Tab = createBottomTabNavigator();
const renderTabScreens = () => {
  const tabArray = jsonToArray(TAB_BAR);
  return (
    <>
      {tabArray.map((item, index) => {
        return (
          <Tab.Screen key={index} name={item.name} component={item.route} />
        );
      })}
    </>
  );
};
const getTabTitle = (route: string) => {
  switch (route) {
    case SCREEN_ROUTER_APP.HOME:
      return 'Home';
    case SCREEN_ROUTER_APP.OFFERS:
      return 'Title';
    case SCREEN_ROUTER_APP.CART:
      return 'Cart';
    case SCREEN_ROUTER_APP.PROFILE:
      return 'Profile';
    default:
      break;
  }
};
const renderTabButtons = (
  title: string,
  tintColor: string,
  focused: boolean,
) => {
  return (
    <DebounceButton
      onPress={() => {
        onHandleNavigation(title);
      }}>
      <View style={[styles.bottomBtn]}>
        <Image
          style={[
            styles.vTabBarIcon,
            {
              tintColor: tintColor,
            },
          ]}
          //@ts-ignore
          source={TAB_BAR[title].icon}
        />
        <Text
          style={[styles.buttonTittle, focused && styles.focusedTitle]}
          children={getTabTitle(title)}
        />
        {focused && <View style={styles.focusedBtn} />}
      </View>
    </DebounceButton>
  );
};
const onHandleNavigation = async (name: string) => {
  if (USER_FEATURES.includes(name)) {
    isUser(() => {
      NavigationUtils.navigate(name);
    });
    return;
  } else NavigationUtils.navigate(name);
};
const BottomTab = ({route}: {route: RouteProps}) => {
  return (
    <Tab.Navigator
      screenOptions={({navigation, route}) => ({
        headerShown: false,
        tabBarStyle: styles.barStyle,
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? colors.BLACK_2 : colors.C4C4C4;
          return renderTabButtons(route.name, tintColor, focused);
        },
      })}>
      {renderTabScreens()}
    </Tab.Navigator>
  );
};

export {BottomTab};

const styles = StyleSheet.create({
  vTabBarIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    marginTop: 10,
  },
  navigatorContainer: {},
  barStyle: {
    height: Spacing.width94,
    borderTopWidth: 0,
  },
  buttonTittle: {
    marginTop: 7,
    // ...NotoSansFont.Normal_NotoSans_400,
    // marginBottom: Spacing.height30,
    color: colors.blackA2,
  },
  focusedTitle: {
    color: colors.BLACK_2,
  },
  bottomBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1
    width: DEVICE.width / 5,
    paddingBottom: Spacing.width34,
    paddingTop: Spacing.width12,
  },
  focusedBtn: {
    backgroundColor: colors.BLACK_2,
    height: 5,
    width: DEVICE.width / 5,
    position: 'absolute',
    top: 3,
  },
});
