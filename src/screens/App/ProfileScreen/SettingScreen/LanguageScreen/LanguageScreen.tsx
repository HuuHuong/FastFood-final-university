import {View, Text} from 'react-native';
import React from 'react';
import {ScreenWrapper} from '@components/Screen/ScreenWrapper';
import {AppText, BackButton} from '@components';
import trans from '@assets';
import {colors, commonStyles, Spacing} from '@theme';
import {styles} from './styles';
import {VirtualList} from '@components/Flatlist';
import {useFunctions} from './useFunctions';
import {RadioButton} from '@components/RadioButton/RadioButton';

export const LanguageScreen = () => {
  const {language, onSelectlanguage} = useFunctions();
  const renderItem = ({item, index}: any) => {
    return (
      <>
        <RadioButton
          onToggle={() => onSelectlanguage(item, index)}
          key={index}
          title={item?.lang}
          value={item?.isChecked}
          style={{marginBottom: Spacing.height16}}
        />
        {/* <View
          style={{
            height: Spacing.width1,
            // backgroundColor: colors.disabledBg,
          }}>
          
          </View> */}
      </>
    );
  };
  return (
    <ScreenWrapper
      unsafe
      style={{
        paddingVertical: Spacing.height44,
        marginHorizontal: Spacing.width20,
      }}>
      <View
        style={{
          ...commonStyles.row_align_center,
          marginBottom: Spacing.height24,
        }}>
        <BackButton />
        <AppText style={styles.heading_txt}>{trans().language}</AppText>
      </View>
      <VirtualList
        data={language}
        renderItem={renderItem}
        contentContainerStyle={{marginHorizontal: Spacing.width20}}
      />
    </ScreenWrapper>
  );
};
