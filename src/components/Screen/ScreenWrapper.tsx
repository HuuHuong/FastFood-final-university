import IndicatorLoading from '@components/IndicatorLoading';
import {enhance} from '@utils';
import React, {memo, useMemo} from 'react';
import isEqual from 'react-fast-compare';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView as RNSafeArea,
  ScrollView,
  StyleSheet,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {Block} from '../Block/Block';
import LoadingProgress from '../LoadingProgress';
import {ScreenWrapperProps} from './ScreenWrapper.props';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  outer: {
    backgroundColor: 'transparent',
    flex: 1,
  },
  insetBottom: {
    bottom: 0,
  },
  insetLeft: {
    left: 0,
  },
  insetRight: {
    right: 0,
  },
  inner: {
    justifyContent: 'flex-start',
    flex: 1,
    width: '100%',
  },
});
const isIos = Platform.OS === 'ios';

const DismissKeyboard = ({children}: {children: React.ReactNode}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        Keyboard.dismiss();
      }}>
      {children}
    </TouchableOpacity>
  );
};
function ScreenWithoutScrolling(props: ScreenWrapperProps) {
  const inset = useSafeAreaInsets();
  const style = props.style || {};
  const {
    forceInset,
    unsafe = true,
    children,
    backgroundColor,
    needAvoiding = true,
  } = props;

  const backgroundStyle = useMemo(
    () => (backgroundColor ? {backgroundColor} : {}),
    [backgroundColor],
  );
  const Wrapper = unsafe ? Block : SafeAreaView;
  const AvoidWrapper = needAvoiding ? KeyboardAvoidingView : Block;
  return (
    <AvoidWrapper
      style={[styles.outer]}
      behavior={isIos ? 'padding' : undefined}
      keyboardVerticalOffset={-10000}>
      <Wrapper
        edges={forceInset ?? undefined}
        style={[styles.inner, style, backgroundStyle]}>
        {children}
      </Wrapper>
    </AvoidWrapper>
  );
}

function ScreenWithScrolling(props: ScreenWrapperProps) {
  const inset = useSafeAreaInsets();
  const {
    showHorizontal = false,
    showVertical = false,
    backgroundColor,
    style = {},
    forceInset = ['left'],
    unsafe = false,
    children,
    scrollEnabled = true,
  } = props;
  const backgroundStyle = useMemo(
    () => (backgroundColor ? {backgroundColor} : {}),
    [backgroundColor],
  );
  const actualStyle = useMemo(() => enhance([style]), [style]);
  const Wrapper = unsafe ? Block : SafeAreaView;
  return (
    <KeyboardAvoidingView
      style={[styles.root]}
      behavior={isIos ? 'padding' : undefined}
      keyboardVerticalOffset={0}>
      <Wrapper edges={forceInset ?? undefined} style={[styles.inner]} block>
        <Block block>
          <ScrollView
            scrollEnabled={scrollEnabled}
            showsVerticalScrollIndicator={showVertical}
            showsHorizontalScrollIndicator={showHorizontal}
            keyboardShouldPersistTaps="handled"
            style={[styles.outer, backgroundStyle]}
            contentContainerStyle={actualStyle}>
            {children}
          </ScrollView>
        </Block>
      </Wrapper>
    </KeyboardAvoidingView>
  );
}

function ScreenWrapperComponent(props: ScreenWrapperProps) {
  const {scroll = false, dialogLoading, unsafe} = props;
  const renderBody = () => {
    const {isLoading, isError, reload} = props;
    if (isLoading) return <IndicatorLoading />;
    return (
      <>
        {scroll ? (
          <ScreenWithScrolling {...props} />
        ) : (
          <DismissKeyboard>
            <ScreenWithoutScrolling {...props} />
          </DismissKeyboard>
        )}
      </>
    );
  };
  return (
    <Block style={[styles.root]} color={props.backgroundColor}>
      <>
        {!unsafe ? (
          <RNSafeArea style={{flex: 1}}>{renderBody()}</RNSafeArea>
        ) : (
          renderBody()
        )}
        {dialogLoading && <LoadingProgress />}
      </>
    </Block>
  );
}

const ScreenWrapper = memo(ScreenWrapperComponent, isEqual);
export {ScreenWrapper};
