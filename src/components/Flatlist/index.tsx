import {AppText} from '@components';
import {colors, Spacing} from '@theme';
import React, {forwardRef, useEffect} from 'react';
import {
  View,
  RefreshControl,
  ListRenderItem,
  ActivityIndicator,
  NativeSyntheticEvent,
  NativeScrollEvent,
  StyleProp,
  ViewStyle,
  FlatList,
  TextStyle,
  Animated,
} from 'react-native';
import {FlatList as ListForDrag} from 'react-native-gesture-handler';
const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);
interface VirtualListProps {
  renderItem: ListRenderItem<any> | null | undefined;
  onRefresh?: () => void;
  style?: StyleProp<ViewStyle>;
  data: Array<Object | string>;
  onLoadmore?: () => void;
  isLoading?: boolean;
  emptyText?: string;
  styleEmtyText?: TextStyle | TextStyle[] | undefined;
  emptyView?: any;
  numColumns?: number | undefined;
  scrollEnabled?: boolean;
  contentContainerStyle?: StyleProp<ViewStyle>;
  horizontal?: boolean;
  onMomentumScrollEnd?: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
  isShort?: boolean;
  onPress?: () => void;
  title?: string;
  ListHeaderComponent?: any;
  rootStyle?: StyleProp<ViewStyle>;
  type?: 'GESTURE' | 'RN';
  onScrollToIndexFailed?: any;
  customViewMore?: StyleProp<ViewStyle>;
  columnWrapperStyle?: any;
  disableViewMore?: any;
  perPage?: number;
  pagingEnabled?: boolean;
  initialScrollIndex?: number;
  onEndReachedThreshold?: number;
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  ListEmptyComponent?: any;
  ListFooterComponent?: any;
  inverted?: boolean;
  bounces?: boolean;
  onLayout?: any;
  isAnimation?: any;
  onContentSizeChange?: any;
}

const VirtualList = React.memo(
  forwardRef((props: VirtualListProps, ref: any) => {
    const {
      rootStyle,
      renderItem,
      onRefresh,
      data = [],
      onLoadmore,
      isLoading,
      isShort,
      columnWrapperStyle,
      type = 'RN',
      perPage = 14,
      pagingEnabled,
      initialScrollIndex,
      onEndReachedThreshold = 0.5,
      emptyText,
      styleEmtyText,
      inverted,
      isAnimation,
      onLayout,
      onContentSizeChange,
    } = props;
    const [isFirst, setFirst] = React.useState(true);

    useEffect(() => {
      if (isFirst && !isLoading) setFirst(false);
    }, [isFirst, isLoading]);

    const NEW_LIST = isAnimation
      ? AnimatedFlatlist
      : type === 'RN'
      ? Animated.FlatList
      : ListForDrag;

    const ListHeaderComponent = React.useCallback(() => {
      if (!isLoading && data?.length < 1) {
        return (
          <View
            style={{
              flex: 1,
              paddingTop: Spacing.height15,
              paddingHorizontal: Spacing.width40,
            }}>
            <AppText
              style={[
                {
                  textAlign: 'center',
                  color: colors.black,
                },
                styleEmtyText,
              ]}>
              {emptyText}
            </AppText>
          </View>
        );
      }
      return null;
    }, [isLoading, data?.length, emptyText]);

    return (
      <View style={[{flex: 1}, rootStyle]}>
        {isFirst && isLoading && data.length < 1 && (
          <View
            style={{
              position: 'absolute',
              top: 0,
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}>
            <ActivityIndicator size="large" color={colors.rose} />
          </View>
        )}
        <NEW_LIST
          onContentSizeChange={onContentSizeChange}
          bounces={props.bounces}
          ListHeaderComponent={props.ListHeaderComponent || ListHeaderComponent}
          contentContainerStyle={props.contentContainerStyle}
          style={props.style}
          horizontal={props.horizontal}
          numColumns={props.numColumns}
          scrollEnabled={props.scrollEnabled}
          onMomentumScrollEnd={props.onMomentumScrollEnd}
          onScrollToIndexFailed={props.onScrollToIndexFailed}
          // {...props}
          data={isShort ? data.slice(0, 5) : data}
          renderItem={renderItem}
          refreshing={isLoading && data.length > 1}
          refreshControl={
            onRefresh && (
              <RefreshControl
                refreshing={(isLoading && data.length > 1) || false}
                onRefresh={onRefresh}
                tintColor={colors.rose}
              />
            )
          }
          columnWrapperStyle={columnWrapperStyle}
          onEndReachedThreshold={onEndReachedThreshold}
          onEndReached={onLoadmore}
          keyExtractor={(item: any, index) =>
            `${index}_${item?.id || JSON.stringify(item)}`
          }
          ListFooterComponent={
            props.ListFooterComponent ? (
              props.ListFooterComponent
            ) : isShort ? (
              data?.length >= 4 ? null : null // <ViewMore onPress={onPress} customViewMore={customViewMore} />
            ) : data && data?.length > perPage - 1 && isLoading ? (
              <View>
                <ActivityIndicator size={'small'} color={colors.rose} />
              </View>
            ) : null
          }
          extraData={props}
          ref={ref}
          // removeClippedSubviews={!isShort}
          maxToRenderPerBatch={20}
          updateCellsBatchingPeriod={0}
          decelerationRate={isShort ? 'normal' : 0.6}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          pagingEnabled={pagingEnabled}
          initialScrollIndex={initialScrollIndex}
          onScroll={props.onScroll}
          ListEmptyComponent={props.ListEmptyComponent}
          inverted={inverted}
          onLayout={onLayout}
        />
      </View>
    );
  }),
);

export {VirtualList};
