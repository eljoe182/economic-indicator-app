import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ItemListDetailsComponent = ({info}) => {
  const {fecha, valor} = info.item;
  return (
    <View style={styles.container}>
      <Text>{fecha}</Text>
      <Text>{valor}</Text>
    </View>
  );
};

export default ItemListDetailsComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
});
