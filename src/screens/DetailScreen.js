import {Animated, Image, SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {getByCode} from '../api/api';
import ItemListDetailsComponent from '../components/ItemListDetailsComponent';
import {ActivityIndicator, Colors} from 'react-native-paper';

const IMG_BG =
  'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4386321.jpg&fm=jpg';

const SPACING = 20;
const HEIGHT = 30;
const ITEM_SIZE = HEIGHT + SPACING * 3;

const DetailScreen = ({route, navigation}) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [title, setTitle] = useState('');
  const {id} = route.params;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    await getByCode(id).then(response => {
      const {serie, nombre} = response.data;
      setData(serie);
      setTitle(nombre);
      setLoading(false);
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title === '' ? 'No title' : title,
    });
  }, [navigation, title]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{uri: IMG_BG}}
        style={StyleSheet.absoluteFillObject}
        blurRadius={80}
      />
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={Colors.grey700} />
        </View>
      ) : (
        <Animated.FlatList
          style={styles.container}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {
              useNativeDriver: true,
            },
          )}
          contentContainerStyle={{
            padding: SPACING,
          }}
          data={data}
          renderItem={({item, index}) => {
            const inputRange = [
              -1,
              0,
              ITEM_SIZE * index,
              ITEM_SIZE * (index + 2),
            ];
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
                <ItemListDetailsComponent info={item} />
              </Animated.View>
            );
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
});
