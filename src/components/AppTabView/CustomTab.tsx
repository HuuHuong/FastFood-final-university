// import R from '@assets/R';
// import {Block} from '@components/Block/Block';
import {DebounceButton} from '@components/Button/Button';
import {
  colors,
  commonStyles,
  FontSize,
  NotoSansFont,
  Poppins,
  Spacing,
} from '@theme';
// import {colors} from '@utils/colors';
import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface CustomTabProps {
  navigationState?: any;
  onChange?: any;
  indexTab?: any;
  disableScroll?: boolean;
  containerStyle?: ViewStyle;
  activeTextStyle?: TextStyle;
  activeViewStyle?: ViewStyle;
  inactiveViewStyle?: ViewStyle;
  inactiveTextStyle?: TextStyle;
  reviewNumber?: number;
}

const width_screen = Dimensions.get('window').width;

const CustomTab = React.memo((props: CustomTabProps) => {
  const {navigationState, onChange, indexTab, reviewNumber} = props;
  return (
    <View style={[styles.container, props.containerStyle]}>
      {navigationState.routes.map((route: any, i: any) => {
        const isFocused = indexTab === i;
        return (
          <DebounceButton
            key={i}
            style={[styles.button, {width: '50%', alignSelf: 'center'}]}
            onPress={() => {
              onChange(i);
            }}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.text_tab}>{route.title}</Text>
              {isFocused && <View style={styles.line}></View>}
            </View>
          </DebounceButton>
        );
      })}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: width_screen,
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // ...commonStyles.shadow,
    shadowRadius: 12,
    borderBottomLeftRadius: Spacing.width30,
    borderBottomRightRadius: Spacing.width30,
  },
  // button: {
  //   alignItems: 'center',
  //   paddingTop: Spacing.width16,
  // },
  line: {
    backgroundColor: colors.mainColor,
    height: 3,
    width: Spacing.width100,
  },
  text_tab: {
    ...Poppins.Bold_Poppins_600,
    fontSize: FontSize.Font18,
    color: colors.black,
    marginBottom: Spacing.height8,
  },
});

export default CustomTab;
