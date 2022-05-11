import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React, {useEffect} from 'react';
import {
  jsonToArray,
  MAIN_TAB_BAR,
  SCREEN_ROUTER_APP,
  TAB_BAR,
  // TAB_BAR,
} from '@utils';
import {colors, DEVICE, NotoSansFont, Nunitos, Spacing} from '@theme';
import {NavigationUtils} from '@navigation/NavigationUtils';
import {DebounceButton} from '@components/Button/Button';
import trans from '@assets';
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
const Tab = createBottomTabNavigator();
const renderTabScreens = () => {
  const tabArray = jsonToArray(TAB_BAR);
  return (
    <>
      {tabArray.map((item, index) => {
        return (
          <Tab.Screen key={index} name={item?.name} component={item?.route} />
        );
      })}
    </>
  );
};
const getTabTitle = (route: string) => {
  switch (route) {
    case SCREEN_ROUTER_APP.HOME:
      return trans().HOME;
    case SCREEN_ROUTER_APP.OFFERS:
      return trans().OFFERS;
    case SCREEN_ROUTER_APP.CART:
      return trans().CART;
    case SCREEN_ROUTER_APP.PROFILE:
      return trans().USER;
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
        NavigationUtils.navigate(title);
      }}>
      <View style={styles.bottomBtn}>
        <View
          style={{
            backgroundColor: focused ? colors.mainColor : undefined,
            marginTop: 10,
            padding: 4,
            borderRadius: 30,
          }}>
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
        </View>
        {focused && (
          <Text style={styles.buttonTittle} children={getTabTitle(title)} />
        )}
      </View>
    </DebounceButton>
  );
};
const BottomTab = ({route}: {route: RouteProps}) => {
  return (
    <Tab.Navigator
      screenOptions={({navigation, route}) => ({
        headerShown: false,
        tabBarStyle: styles.barStyle,
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? colors.white : colors.black;
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
  },
  navigatorContainer: {},
  barStyle: {
    height: Spacing.width94,
    borderTopWidth: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: Spacing.width12,
  },
  buttonTittle: {
    marginTop: 8,
    marginLeft: Spacing.width4,
    ...Nunitos.Bold_Nunitos_600,
    fontSize: Spacing.width14,
    color: colors.mainColor,
  },
  bottomBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: DEVICE.width / 5,
    flexDirection: 'row',
  },
  focusedBtn: {
    height: 5,
    width: DEVICE.width / 5,
    position: 'absolute',
    top: 3,
  },
});
