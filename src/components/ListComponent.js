import {StyleSheet, Animated} from 'react-native';
import React, {useRef} from 'react';
import ItemListComponent from './ItemListComponent';

const SPACING = 20;
const HEIGHT = 30;
const ITEM_SIZE = HEIGHT + SPACING * 3;

const ListComponent = ({dataIndicators, onPress, onPressInfo}) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <Animated.FlatList
      style={styles.container}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
        useNativeDriver: true,
      })}
      contentContainerStyle={{
        padding: SPACING,
      }}
      data={dataIndicators}
      renderItem={({item, index}) => {
        const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
        const scale = scrollY.interpolate({
          inputRange,
          outputRange: [1, 1, 1, 0],
        });
        const opacityInputRange = [
          -1,
          0,
          ITEM_SIZE * index,
          ITEM_SIZE * (index + 1),
        ];
        const opacity = scrollY.interpolate({
          inputRange: opacityInputRange,
          outputRange: [1, 1, 1, 0],
        });

        return (
          <Animated.View
            style={{
              transform: [{scale}],
              opacity,
            }}>
            <ItemListComponent
              info={item}
              onPress={onPress}
              onPressInfo={onPressInfo}
            />
          </Animated.View>
        );
      }}
    />
  );
};

export default ListComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
