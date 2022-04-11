// import R from '@app/assets/R'
// import { colors } from '@app/theme'
import {colors} from '@theme';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {BarIndicator} from 'react-native-indicators';

export default class LoadingProgress extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerLoading}>
          <BarIndicator color={colors.mainColor} />
          <Text
            style={
              {
                // color: colors.text.primary,
              }
            }>
            Loading
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    elevation: Platform.OS == 'android' ? 4 : 0,
  },
  containerLoading: {
    height: 140,
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 10,
  },
});
