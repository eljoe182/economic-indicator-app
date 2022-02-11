import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ListComponent from '../components/ListComponent';
import {getAll} from '../api/api';
import TextComponent from '../components/TextComponent';
import IconComponent from '../components/IconComponent';
import {ActivityIndicator, Colors} from 'react-native-paper';

const IMG_BG =
  'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4386321.jpg&fm=jpg';

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    await getAll().then(response => {
      const indicators = response.data;
      const indicatorData = Object.keys(indicators)
        .filter(item => {
          return item !== 'version' && item !== 'autor' && item !== 'fecha';
        })
        .map(indicator => {
          return indicators[indicator];
        });
      setData(indicatorData);
      setLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const onPress = id => {
    navigation.navigate('DetailScreen', {
      id: id,
    });
  };
  const onPressInfo = info => {
    navigation.navigate('InfoScreen', {
      info: info,
    });
  };

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
        <ListComponent
          dataIndicators={data}
          onPress={onPress}
          onPressInfo={onPressInfo}
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
});
