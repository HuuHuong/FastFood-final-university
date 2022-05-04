// import { iconActiveCheckBox, iconBack } from '@images';
// import R from '@assets/R';
import {colors, NotoSansFont, Spacing} from '@theme';
// import { colors } from '@utils/colors';
import React, {ReactElement, useRef, useState} from 'react';
import {
  Image,
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  TouchableHighlight,
  TouchableOpacity,
  View,
  ViewComponent,
  ViewStyle,
} from 'react-native';
//@ts-ignore
import ModalDropdown from 'react-native-modal-dropdown';
import {DebounceButton} from './Button/Button';

const renderRow = (
  rowData: any,
  rowID: number,
  highlighted: boolean,
  rowStyle?: ViewStyle,
  rowIconStyle?: ImageStyle,
  rowTextStyle?: TextStyle,
  needCheck?: boolean,
  rowWidth?: number,
  onPress?: () => void,
) => {
  return (
    <View>
      <View style={[styles.rowStyle, rowStyle, {width: rowWidth}]}>
        {/* {needCheck && rowData.isChecked && (
          <Image style={[styles.dropdownImage, rowIconStyle]} source={icon} />
        )} */}
        <Text
          style={[
            styles.dropdownRowText,
            highlighted && {color: colors.primary},
            rowTextStyle,
          ]}>
          {`${rowData.name}`}
        </Text>
      </View>
    </View>
  );
};
const renderSeparator = (
  sectionID: number,
  rowID: number,
  adjacentRowHighlighted: boolean,
  separatorStyle?: ViewStyle,
) => {
  let key = `spr_${rowID}`;
  return <View style={[styles.dropdownSeparator, separatorStyle]} key={key} />;
};
interface AppModalDropdownProps {
  renderModalButtonText?: (
    rowData: any,
    options?: any,
    needChangeText?: boolean,
  ) => string;
  renderModalRow?: (
    rowData: any,
    rowID: number,
    highlighted: boolean,
    rowStyle?: ViewStyle,
    rowIconStyle?: ImageStyle,
    rowTextStyle?: TextStyle,
    needCheck?: boolean,
    rowWidth?: number,
    onPress?: () => void,
  ) => ReactElement;
  renderModalSeparator?: (
    sectionID: number,
    rowID: number,
    adjacentRowHighlighted: boolean,
    separatorStyle?: ViewStyle,
  ) => ReactElement;
  rowStyle?: ViewStyle;
  rowIconStyle?: ImageStyle;
  rowTextStyle?: TextStyle;
  defaultValue?: string;
  separatorStyle?: ViewStyle;
  dropdownContainerStyle?: ViewStyle;
  options: any;
  textStyle?: TextStyle;
  dropdownStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  isUnderlined?: boolean;
  needCheck?: boolean;
  label?: string;
  onSelect?: (index: number, value: any) => void;
  multipleSelect?: boolean;
  styleIconDrop?: any;
  title?: string;
  needChangeText?: boolean;
  labelStyle?: TextStyle;
}
interface Layout {
  height: number;
  width: number;
  x: number;
  y: number;
}
export const AppModalDropdown = ({
  renderModalButtonText,
  renderModalRow,
  renderModalSeparator,
  rowStyle,
  rowIconStyle,
  defaultValue,
  rowTextStyle,
  separatorStyle,
  options,
  textStyle,
  dropdownStyle,
  dropdownContainerStyle,
  isUnderlined,
  needCheck,
  label,
  containerStyle,
  onSelect,
  multipleSelect,
  styleIconDrop,
  title,
  needChangeText,
  labelStyle,
}: AppModalDropdownProps) => {
  const dropdownRef = useRef<any>();
  const [layout, setLayout] = useState<Layout>();
  const onLayout = (event: any) => {
    const {x, y, height, width} = event.nativeEvent.layout;
    setLayout(event.nativeEvent.layout);
  };

  const renderButtonText = (
    rowData?: any,
    options?: any,
    needChangeText?: boolean,
  ) => {
    const {name, isChecked} = rowData;
    return needChangeText ? name : title;
  };
  return (
    <DebounceButton
      onLayout={onLayout}
      onPress={() => {
        dropdownRef.current?.show();
      }}
      style={containerStyle}>
      {!!label && <Text style={[styles.label, labelStyle]} children={label} />}
      <View
        style={[
          styles.container,
          {borderColor: isUnderlined ? colors.borderD8 : colors.background},
        ]}>
        <ModalDropdown
          ref={dropdownRef}
          showsVerticalScrollIndicator={false}
          onSelect={(index: number, value: any) => {
            !!onSelect && onSelect(index, value);
          }}
          multipleSelect={multipleSelect}
          defaultValue={defaultValue ? defaultValue : null}
          style={[styles.dropdownContainerStyle, dropdownContainerStyle]}
          textStyle={[styles.dropdownText, textStyle]}
          dropdownStyle={[
            styles.dropdownStyle,
            dropdownStyle,
            {
              width: layout?.width,
              left: layout?.x + Spacing.width20,
              marginTop: 8,
            },
          ]}
          options={options || []}
          renderRowComponent={TouchableHighlight}
          renderButtonText={(rowData: any) => {
            return !!renderModalButtonText
              ? renderModalButtonText(rowData, options, needChangeText)
              : renderButtonText(rowData, options, needChangeText);
          }}
          renderRow={(rowData: any, rowID: number, highlighted: boolean) => {
            return !!renderModalRow
              ? renderModalRow(
                  rowData,
                  rowID,
                  highlighted,
                  rowStyle,
                  rowIconStyle,
                  rowTextStyle,
                  needCheck,
                )
              : renderRow(
                  rowData,
                  rowID,
                  highlighted,
                  rowStyle,
                  rowIconStyle,
                  rowTextStyle,
                  needCheck,
                );
          }}
          renderSeparator={(
            sectionID: number,
            rowID: number,
            adjacentRowHighlighted: boolean,
          ) => {
            return !!renderModalSeparator
              ? renderModalSeparator(
                  sectionID,
                  rowID,
                  adjacentRowHighlighted,
                  separatorStyle,
                )
              : renderSeparator(
                  sectionID,
                  rowID,
                  adjacentRowHighlighted,
                  separatorStyle,
                );
          }}
        />
        <Image
          style={[styles.iconBack, styleIconDrop]}
          source={R.images.ic_filled_dropdown}
        />
      </View>
    </DebounceButton>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: Spacing.width16,
    borderRadius: 24,
    paddingRight: Spacing.width17,
    height: Spacing.height52,
    backgroundColor: colors.white,
  },
  label: {
    marginBottom: 8,
    ...NotoSansFont.Bold_NotoSans_400,
    fontSize: 12,
    color: colors.black0E,
  },
  dropdownContainerStyle: {},
  dropdownText: {
    ...NotoSansFont.Normal_NotoSans_400,
    fontSize: 16,
    color: colors.blackA2,
  },
  dropdownStyle: {
    // borderRadius: 20,
    height: Spacing.height100,
    // left: 50
    // backgroundColor: 'red'
    // marginLeft: 100
  },
  rowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  dropdownImage: {
    width: 16,
    height: 16,
    marginRight: 10,
  },
  dropdownRowText: {
    fontSize: 16,
    color: colors.black0E,
  },
  dropdownSeparator: {},
  iconBack: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
