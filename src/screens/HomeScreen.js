import {SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ListComponent from '../components/ListComponent';
import {getAll} from '../api/api';

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);

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
      <ListComponent
        dataIndicators={data}
        onPress={onPress}
        onPressInfo={onPressInfo}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
