import React from 'react';
import {TextStyle, useWindowDimensions, ViewStyle} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {StyleSheet} from 'react-native';
import {commonStyles, NotoSansFont, Spacing} from '@theme';
import CustomTab from './CustomTab';

const styles = StyleSheet.create({
  tabBarTextStyle: {
    // fontSize: 16,
    // ...NotoSansFont.Bold_NotoSans_700,
    // color: colors.black0E,
  },
  tabViewTxt: {
    // ...commonStyles.commonText16_black0E,
  },
  focusedTabViewTxt: {
    // ...NotoSansFont.Bold_NotoSans_700,
    // color: colors.black0E,
    // fontSize: 16,
    // marginRight: 8
  },
});

interface ScreenRoutes {
  key: string;
  title: string;
}

const AppTabView = React.memo(
  ({
    screenRoutes,
    components,
    containerStyle,
    activeTextStyle,
    activeViewStyle,
    inactiveViewStyle,
    inactiveTextStyle,
    onIndexChange,
    swipeEnabled = true,
    reviewNumber,
  }: {
    screenRoutes: ScreenRoutes[];
    components: any;
    containerStyle?: ViewStyle;
    activeTextStyle?: TextStyle;
    activeViewStyle?: ViewStyle;
    inactiveViewStyle?: ViewStyle;
    inactiveTextStyle?: TextStyle;
    onIndexChange?: (index: number) => void;
    swipeEnabled?: boolean;
    reviewNumber?: number;
  }) => {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState(screenRoutes);
    const renderScene = SceneMap(components);
    return (
      <TabView
        swipeEnabled={swipeEnabled}
        renderTabBar={props => (
          <CustomTab
            {...props}
            reviewNumber={reviewNumber}
            containerStyle={containerStyle}
            activeTextStyle={activeTextStyle}
            activeViewStyle={activeViewStyle}
            inactiveViewStyle={inactiveViewStyle}
            inactiveTextStyle={inactiveTextStyle}
            indexTab={index}
            onChange={(i: number) => {
              setIndex(i);
              if (!!onIndexChange) onIndexChange(i);
            }}
          />
        )}
        lazy
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    );
  },
);

export default AppTabView;
