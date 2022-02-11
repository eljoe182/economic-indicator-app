import {StyleSheet, View} from 'react-native';
import React from 'react';
import TextComponent from './TextComponent';
import {convertToNumber, convertToDate} from '../utils/utils';
import useLocale from '../hooks/useLocale';
import {Colors} from 'react-native-paper';

const SPACING = 20;

const ItemListDetailsComponent = ({info}) => {
  const locale = useLocale();
  const {fecha, valor} = info;

  return (
    <View style={styles.container}>
      <TextComponent size={16}>{convertToDate(locale, fecha)}</TextComponent>
      <TextComponent size={16}>{convertToNumber(locale, valor)}</TextComponent>
    </View>
  );
};

export default ItemListDetailsComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: SPACING,
    marginBottom: SPACING,
    backgroundColor: Colors.white,
    borderRadius: 12,
    shadowColor: Colors.grey900,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    height: 70,
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
});
