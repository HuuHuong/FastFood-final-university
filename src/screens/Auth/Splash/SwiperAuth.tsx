import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScreenWrapper} from '@components/Screen/ScreenWrapper';
import {AppText, DebounceButton, MainButtonApp} from '@components';
import {colors, deviceWidth, Spacing} from '@theme';
import {IconArrowRight, Images} from '@assets';
import {styles} from './styles';
import FastImage from 'react-native-fast-image';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import {NavigationUtils} from '@navigation';
import {SCREEN_ROUTER_APP} from '@utils';
import trans from '@assets';
import {useDispatch} from 'react-redux';
import {setIsFirst} from '@redux/slices/accountSlice';
export const SwiperAuth = () => {
  const dataSwipper = [
    {
      id: 1,
      title: trans().save_food_new,
      img: Images.splash_1,
    },
    {
      id: 2,
      title: trans().set_preferences,
      img: Images.splash_2,
    },
    {
      id: 3,
      title: trans().fast_rescued,
      img: Images.splash_3,
    },
  ];
  const isCarousel: any = React.useRef(null);
  const [index, setIndex] = useState<number>(0);
  const onStart = () => {
    NavigationUtils.replace(SCREEN_ROUTER_APP.LOGIN);
  };

  const renderItem = ({item, index}: any) => {
    return (
      <View key={index}>
        <AppText style={styles.title_swipper}>{item?.title}</AppText>
        <FastImage source={item?.img} style={styles.image_swipper} />
        {index === 2 && (
          <MainButtonApp
            style={{
              backgroundColor: colors.white,
              marginHorizontal: Spacing.width40,
            }}
            onPress={onStart}
            title={trans().get_started}
            titleStyle={{
              color: colors.mainColor,
            }}
          />
        )}
      </View>
    );
  };
  return (
    <LinearGradient
      colors={['#FF4B3A', '#FF4B3A', '#FF4A1F']}
      style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <DebounceButton onPress={onStart} viewStyle={styles.header_swipper}>
          <AppText style={styles.skip}>{trans().skip}</AppText>
          <IconArrowRight strokeColor={colors.white} />
        </DebounceButton>
        <FastImage source={Images.ic_logo} style={styles.logo} />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Carousel
            layout="default"
            layoutCardOffset={0}
            ref={isCarousel}
            data={dataSwipper}
            renderItem={renderItem}
            sliderWidth={deviceWidth}
            itemWidth={deviceWidth}
            onSnapToItem={index => setIndex(index)}
          />
          <Pagination
            dotsLength={3}
            activeDotIndex={index}
            carouselRef={isCarousel}
            dotStyle={styles.dot}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            animatedDuration={50}
            animatedFriction={4}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};
