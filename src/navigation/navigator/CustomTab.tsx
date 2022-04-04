import React, { memo, useCallback } from 'react';
import {
  InteractionManager,
  TouchableWithoutFeedback,
  View,
  Text,
  Image,
} from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { styles } from './styles';
import {
  DiscoverIcon,
  MainIcon,
  SessionIcon,
  TradeIcon,
  UserIcon,
} from '@assets';
import { SCREEN_ROUTE } from '@navigation';
import { useTheme } from '@theme';
import { AppText } from '@components';

let SourceImage = (props: { label?: string; isFocused: boolean }) => {
  const { label, isFocused } = props;
  const { themeColor } = useTheme();

  switch (label) {
    case SCREEN_ROUTE.HOME_PAGE:
      return (
        <SessionIcon
          iconFillColor={
            isFocused
              ? themeColor.color_Icon_Selected
              : themeColor.color_Tab_Unselected
          }
        />
      );
    case SCREEN_ROUTE.TRADE_PAGE:
      return (
        <TradeIcon
          iconFillColor={
            isFocused
              ? themeColor.color_Icon_Selected
              : themeColor.color_Tab_Unselected
          }
        />
      );
    case SCREEN_ROUTE.MAIN_PAGE:
      return (
        <MainIcon
          iconFillColor={
            isFocused
              ? themeColor.color_Icon_Selected
              : themeColor.color_Tab_Unselected
          }
        />
      );
    case SCREEN_ROUTE.DISCOVER_PAGE:
      return (
        <DiscoverIcon
          iconFillColor={
            isFocused
              ? themeColor.color_Icon_Selected
              : themeColor.color_Tab_Unselected
          }
        />
      );
    case SCREEN_ROUTE.ACCOUNT_PAGE:
      return (
        <UserIcon
          iconFillColor={
            isFocused
              ? themeColor.color_Icon_Selected
              : themeColor.color_Tab_Unselected
          }
        />
      );
    default:
      return null;
  }
};

export const CustomTabBar = memo(function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const arrayLable = ['Market', 'Trade', '', 'Discover', 'Me'];
  const { themeColor } = useTheme();
  return (
    <View
      style={[
        styles.containerAbsolute,
        { backgroundColor: themeColor.backgroundColorTab },
      ]}
    >
      <View style={styles.contentContainer} pointerEvents="box-none">
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label: any =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            InteractionManager.runAfterInteractions(() => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            });
          };

          return (
            <TouchableWithoutFeedback
              key={'tab-' + index.toString()}
              accessibilityRole="button"
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
            >
              <View style={styles.bottomBarIcon}>
                {options &&
                  options.tabBarIcon &&
                  options.tabBarIcon({
                    focused: isFocused,
                    color: '',
                    size: 0,
                  })}
                <SourceImage label={label} isFocused={isFocused} />
                {index !== 2 && (
                  <AppText
                    numberOfLines={1}
                    style={[
                      styles.txtTabName,
                      {
                        color: isFocused
                          ? themeColor.color_Tab_Selected
                          : themeColor.color_Tab_Unselected,
                      },
                    ]}
                  >
                    {arrayLable[index]}
                  </AppText>
                )}
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    </View>
  );
});
