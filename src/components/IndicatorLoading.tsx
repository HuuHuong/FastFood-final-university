import {colors} from '@theme';
import React, {Component} from 'react';
import {View} from 'react-native';
import {BarIndicator} from 'react-native-indicators';

export default class IndicatorLoading extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <BarIndicator color={colors.mainColor} />
      </View>
    );
  }
}
