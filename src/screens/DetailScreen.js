import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getByCode} from '../api/api';
import ItemListDetailsComponent from '../components/ItemListDetailsComponent';

const DetailScreen = ({route}) => {
  const {id} = route.params;
  const [data, setData] = useState([]);

  const getData = async () => {
    await getByCode(id).then(response => {
      const {serie} = response.data;
      setData(serie);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.container}
        data={data}
        renderItem={item => <ItemListDetailsComponent info={item} />}
      />
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
