import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ItemListComponent from './ItemListComponent';

const ListComponent = ({dataIndicators, onPress, onPressInfo}) => {
  return (
    <FlatList
      style={styles.container}
      data={dataIndicators}
      renderItem={item => (
        <ItemListComponent
          info={item}
          onPress={onPress}
          onPressInfo={onPressInfo}
        />
      )}
    />
  );
};

export default ListComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
