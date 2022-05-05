import {View, Text, ScrollView, TouchableOpacity, Keyboard} from 'react-native';
import React from 'react';
import {
  AppInput,
  AppSearch,
  AppText,
  BackButton,
  DebounceButton,
} from '@components';
import {ScreenWrapper} from '@components/Screen/ScreenWrapper';
import {colors, commonStyles, Spacing} from '@theme';
import {styles} from './styles';
import {IconBack} from '@assets/icons/icon_back';
import {useFunctions} from './useFunctions';
import trans, {
  IconDelete,
  IconFilter,
  IconFire,
  IconSearch,
  IconStar,
  Images,
  LIST_FOOD_APP,
} from '@assets';
import {NavigationUtils} from '@navigation';
import {VirtualList} from '@components/Flatlist';
import FastImage from 'react-native-fast-image';

export const ListFood = (props: any) => {
  const {
    text,
    setText,
    focusSearch,
    onSearch,
    onFilter,
    listTextSearched,
    onDeleteTextSearch,
    setFocusSearch,
    onDetailFood,
  } = useFunctions(props);
  const renderListFood = ({item, index}: any) => {
    return (
      <DebounceButton
        activeOpacity={1}
        onPress={() => onDetailFood(item)}
        viewStyle={styles.view_item_food}>
        <View>
          <FastImage source={item.img} style={styles.img_food} />
          {item.offers && (
            <View style={styles.view_discount}>
              <FastImage
                source={Images.img_discount}
                style={styles.img_discount}
              />
              <AppText
                style={styles.num_discount}>{`${item.offers}% OFF`}</AppText>
            </View>
          )}
        </View>
        <View style={styles.view_info}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <AppText style={styles.name_food}>{item.name}</AppText>
              <AppText style={styles.name_restaurant}>
                {item.restaurant}
              </AppText>
            </View>
            <View style={styles.view_star}>
              <AppText style={styles.count_star}>{item.star}</AppText>
              <IconStar />
            </View>
          </View>

          <View style={styles.view_price}>
            <View style={{...commonStyles.row_align_center}}>
              <AppText
                style={item.offers ? styles.real_price : styles.offer_prices}>
                {`${item.realPrice}VND`}
              </AppText>
              {item.offers && (
                <AppText style={styles.offer_prices}>
                  {`${(item.realPrice * item.offers) / 100}VND`}
                </AppText>
              )}
            </View>
            <View style={{...commonStyles.row_align_center}}>
              <IconFire />
              <AppText>{`${item.calo} Cal`}</AppText>
            </View>
          </View>
        </View>
        {item.offers && (
          <AppText style={styles.title_offer}>{item.title_offer}</AppText>
        )}
      </DebounceButton>
    );
  };
  const RecentSearch = React.memo(() => {
    return (
      <View>
        <AppText style={styles.recent_search_heading}>
          {trans().recent_search}
        </AppText>
        {listTextSearched?.map((item: any, index: number) => (
          <View key={index} style={styles.item_recent}>
            <View style={{...commonStyles.row_align_center}}>
              <IconSearch />
              <AppText style={styles.text_search}>{item}</AppText>
            </View>
            <DebounceButton onPress={() => onDeleteTextSearch(item)}>
              <IconDelete />
            </DebounceButton>
          </View>
        ))}
      </View>
    );
  });
  const ListFoodItem = React.memo(() => {
    return (
      <VirtualList
        data={LIST_FOOD_APP}
        renderItem={renderListFood}
        contentContainerStyle={{paddingTop: Spacing.height36}}
      />
    );
  });
  return (
    <ScreenWrapper
      back
      unsafe
      style={{paddingTop: Spacing.height44}}
      backgroundColor={colors.mainColor}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          Keyboard.dismiss();
          setFocusSearch(false);
        }}>
        <View style={styles.view_header}>
          <DebounceButton onPress={() => NavigationUtils.goBack()}>
            <IconBack
              strokeColor={colors.black}
              width={Spacing.width24}
              height={Spacing.width24}
            />
          </DebounceButton>
          <View style={styles.view_search}>
            <AppInput
              placeholder={trans().search_food}
              onValueChange={setText}
              value={text}
              containerStyle={{width: '85%'}}
              autoFocus={focusSearch}
              returnKeyType={'search'}
              onEndEditing={() => {
                setFocusSearch(false);
                onSearch();
              }}
              onForcus={() => setFocusSearch(true)}
              onBlur={() => setFocusSearch(false)}
            />
            <DebounceButton activeOpacity={0.5} onPress={onSearch}>
              <IconSearch />
            </DebounceButton>
          </View>
          <DebounceButton onPress={onFilter} viewStyle={styles.filter}>
            <IconFilter />
          </DebounceButton>
        </View>
      </TouchableOpacity>
      {focusSearch ? (
        <ScrollView style={styles.view_body}>
          <RecentSearch />
        </ScrollView>
      ) : (
        <View style={styles.view_list_food}>
          <ListFoodItem />
        </View>
      )}
    </ScreenWrapper>
  );
};
