import {View, Animated, Image} from 'react-native';
import React, {useRef} from 'react';
import {AppLoading} from '@components/Loading';
import {AppSearch, AppText, DebounceButton} from '@components';
import {ScreenWrapper} from '@components/Screen/ScreenWrapper';
import FastImage from 'react-native-fast-image';
import {
  DATA_BREAKFAST,
  IconArrowRight,
  IconDiscount,
  IconFilter,
  IconHome2,
  IconNext,
  IconPencil,
  IconSearch,
  Images,
  LIST_TYPE_FASTFOOD,
  RESTAURANTS,
} from '@assets';
import {colors, commonStyles, DEVICE, deviceWidth, Spacing} from '@theme';
import {styles} from './styles';
import {useFunctions} from './useFunctions';
import {VirtualList} from '@components/Flatlist';
import {BANNER_HOME, USER} from '@utils';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';

const AnimationVirtualist = Animated.createAnimatedComponent(VirtualList);

export const HomeScreen = () => {
  const {
    text,
    setText,
    onFilter,
    index,
    setIndex,
    isCarousel,
    onDetailFood,
    onNavigateOrderAgain,
    onNavigateListFood,
    translateX,
  } = useFunctions();
  const refWidht = useRef(DEVICE.width);

  const animatedScrollX = translateX.interpolate({
    inputRange: [0, refWidht.current],
    outputRange: [0, 80],
    extrapolate: 'clamp',
  });
  const renderBanner = ({item, index}: any) => {
    return (
      <LinearGradient
        key={index}
        style={styles.view_banner}
        start={{x: 1, y: 0}}
        end={{x: -1, y: 0}}
        colors={['#6AF0E0', '#51B698']}>
        <View style={{width: '65%'}}>
          <AppText style={styles.content_banner}>{item.content}</AppText>
          <AppText style={styles.for_who}>{'For multiple users.'}</AppText>
          <AppText numberOfLines={2} style={styles.title_banner}>
            {item.title}
          </AppText>
        </View>
        <View>
          <FastImage source={item.img} style={styles.img_banner} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: Spacing.height4,
            }}>
            <IconNext />
            <AppText style={styles.set_them_now}>{'SET THEM NOW'}</AppText>
          </View>
        </View>
      </LinearGradient>
    );
  };
  const ListMenu = React.memo(() => {
    return (
      <View style={styles.list_type_food}>
        {LIST_TYPE_FASTFOOD.map((item: any, index: number) => {
          return (
            <DebounceButton
              key={index}
              activeOpacity={0.6}
              onPress={() => {}}
              style={{width: '24.5%'}}>
              <FastImage source={item.img} style={styles.type_food} />
              <AppText style={styles.title_type_food}>{item.title}</AppText>
            </DebounceButton>
          );
        })}
      </View>
    );
  });
  const renderFoodTimeZone = ({item, index}: any) => {
    return (
      <DebounceButton
        activeOpacity={1}
        onPress={onDetailFood}
        viewStyle={styles.view_food_time_zone}>
        <View>
          <FastImage source={item.img} style={styles.img_food_time_zone} />
          {!!item.discount && (
            <View style={styles.view_discount}>
              <Image source={Images.img_discount} style={styles.img_discount} />
              <AppText
                style={styles.num_discount}>{`${item.discount} OFF`}</AppText>
            </View>
          )}
        </View>
        <View
          style={{
            marginHorizontal: Spacing.width12,
          }}>
          <AppText numberOfLines={2} style={styles.name_food_time_zone}>
            {item.name}
          </AppText>
          <AppText style={styles.restaurant_food_time_zone}>
            {item.restaurant}
          </AppText>
        </View>
        <View style={styles.view_price_food_time_zone}>
          <AppText
            style={styles.offer_price}>{`${item.offerPrice}VND`}</AppText>
          <AppText style={styles.real_price}>{`${item.realPrice}VND`}</AppText>
        </View>
      </DebounceButton>
    );
  };
  const renderOrderAgain = ({item, index}: any) => {
    return (
      <DebounceButton
        activeOpacity={1}
        onPress={onDetailFood}
        viewStyle={[
          styles.view_food_time_zone,
          {borderWidth: Spacing.width1, borderColor: colors.border_C4},
        ]}>
        <View>
          <FastImage source={item.img} style={styles.img_food_time_zone} />
          {!!item.discount && (
            <View style={styles.view_discount}>
              <Image source={Images.img_discount} style={styles.img_discount} />
              <AppText
                style={styles.num_discount}>{`${item.discount} OFF`}</AppText>
            </View>
          )}
        </View>
        <View
          style={{
            marginHorizontal: Spacing.width12,
          }}>
          <AppText numberOfLines={2} style={styles.name_food_time_zone}>
            {item.name}
          </AppText>
          <AppText style={styles.restaurant_food_time_zone}>
            {item.restaurant}
          </AppText>
        </View>
        <View style={styles.view_price_food_time_zone}>
          <AppText
            style={styles.offer_price}>{`${item.offerPrice}VND`}</AppText>
          <AppText style={styles.real_price}>{`${item.realPrice}VND`}</AppText>
        </View>
      </DebounceButton>
    );
  };
  const ListRestaurant = React.memo(() => {
    return (
      <View
        style={{
          marginHorizontal: Spacing.width20,
          marginVertical: Spacing.height12,
        }}>
        {RESTAURANTS.map((item: any) => (
          <DebounceButton
            activeOpacity={1}
            onPress={() => {}}
            viewStyle={{flexDirection: 'row'}}>
            <View style={{marginTop: Spacing.height16}}>
              <FastImage source={item.img} style={styles.img_restaurant} />
              {item.closed && (
                <View style={styles.view_closed_restaurant}>
                  <AppText style={styles.close_restaurant}>{'CLOSED'}</AppText>
                </View>
              )}
            </View>
            <View style={styles.view_infor_restaurant}>
              {!!item.timeOpen.length && (
                <AppText
                  style={
                    styles.time_open
                  }>{`Open at ${item.timeOpen} `}</AppText>
              )}
              <AppText style={styles.name_restaurant}>{item.name}</AppText>
              <AppText numberOfLines={2} style={styles.des_restaurant}>
                {item.description}
              </AppText>
              {(item.rescued || item.freeDelivery) && (
                <View
                  style={{
                    ...commonStyles.row_align_center,
                    marginVertical: Spacing.height20,
                  }}>
                  {item.rescued && (
                    <View
                      style={[
                        styles.type_restaurant,
                        {borderColor: colors.border_4F},
                      ]}>
                      <AppText style={styles.rescued}>{'RESCUED'}</AppText>
                    </View>
                  )}
                  {item.freeDelivery && (
                    <View
                      style={[
                        styles.type_restaurant,
                        {borderColor: colors.border_C4},
                      ]}>
                      <AppText style={styles.free_delivery}>
                        {'FREE DELIVERY'}
                      </AppText>
                    </View>
                  )}
                </View>
              )}

              {!!item.offers.length && (
                <View style={{...commonStyles.row_align_center}}>
                  <FastImage
                    source={Images.ic_discount}
                    style={{width: Spacing.width20, height: Spacing.width20}}
                  />
                  <AppText
                    style={
                      styles.offer_restaurant
                    }>{`${item.offers} OFF`}</AppText>
                </View>
              )}
            </View>
          </DebounceButton>
        ))}
      </View>
    );
  });
  return (
    <ScreenWrapper
      unsafe
      scroll
      backgroundColor={colors.white}
      backgroundHeader={colors.white}
      style={{paddingTop: Spacing.height44}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: Spacing.width24,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IconHome2 />
          <View style={{marginLeft: Spacing.width4}}>
            <AppText style={styles.content_header}>{'Home'}</AppText>
            <AppText style={styles.location}>
              {'21-42-34, Banjara Hills, Hyder....'}
            </AppText>
          </View>
        </View>
      </View>
      <DebounceButton
        activeOpacity={0.5}
        onPress={onNavigateListFood}
        viewStyle={styles.view_search}>
        <IconSearch />
        <AppText style={styles.search_food}>{'Search food'}</AppText>
      </DebounceButton>
      <Carousel
        layout="default"
        layoutCardOffset={0}
        ref={isCarousel}
        data={BANNER_HOME}
        renderItem={renderBanner}
        sliderWidth={deviceWidth}
        itemWidth={deviceWidth}
        loop={false}
        onSnapToItem={index => {
          console.log({index});
          setIndex(index);
        }}
      />
      <Pagination
        dotsLength={BANNER_HOME.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={styles.dot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={1}
        animatedDuration={50}
        animatedFriction={4}
      />
      <ListMenu />
      <View style={styles.view_looking_for}>
        <AppText style={styles.looking_for_content}>
          {'Looking for '}
          <AppText style={styles.time_zone}>{'Breakfast'}</AppText>
        </AppText>
        <AppText numberOfLines={2} style={styles.description_time_zone}>
          {"Here's what you might like to taste"}
        </AppText>
        <AnimationVirtualist
          data={DATA_BREAKFAST}
          renderItem={renderFoodTimeZone}
          horizontal
          onContentSizeChange={(width: number) => {
            refWidht.current = width;
          }}
          style={styles.list_food_time_zone}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: translateX}}}],
            {
              useNativeDriver: true,
            },
          )}
        />
        <View style={{width: 75, height: Spacing.height2}}>
          <View style={styles.line_length_food}></View>
          <Animated.View
            style={[
              styles.line_animation,
              {transform: [{translateX: animatedScrollX}]},
            ]}></Animated.View>
        </View>
      </View>
      <View style={styles.session_main}>
        <View>
          <AppText style={styles.content_session}>{'Order Again'}</AppText>
          <AppText numberOfLines={2} style={styles.title_session}>
            {'You Ordered from 17 Restaurants'}
          </AppText>
        </View>
        <DebounceButton
          activeOpacity={1}
          onPress={onNavigateOrderAgain}
          viewStyle={styles.view_btn_all}>
          <AppText style={styles.all_txt}>{'All'}</AppText>
          <IconArrowRight />
        </DebounceButton>
      </View>
      <VirtualList
        data={DATA_BREAKFAST}
        renderItem={renderOrderAgain}
        horizontal
        style={{marginLeft: Spacing.width20, marginTop: Spacing.height20}}
      />
      <View style={styles.session_main}>
        <View>
          <AppText style={styles.content_session}>{'All Restaurants'}</AppText>
          <AppText style={styles.title_session}>
            {'11 Restaurants near you'}
          </AppText>
        </View>
        <DebounceButton
          activeOpacity={1}
          onPress={() => {}}
          viewStyle={styles.view_btn_all}>
          <AppText style={styles.all_txt}>{'All'}</AppText>
          <IconArrowRight />
        </DebounceButton>
      </View>
      <ListRestaurant />
    </ScreenWrapper>
  );
};