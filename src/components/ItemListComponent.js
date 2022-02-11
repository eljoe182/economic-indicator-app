import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import TextComponent from './TextComponent';
import colors from '../constants/colors';
import {Button, Colors} from 'react-native-paper';
import IconComponent from './IconComponent';

const SPACING = 20;

const ItemListComponent = ({info, style, onPress, onPressInfo}) => {
  const {codigo, nombre, unidad_medida} = info;
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => onPress(codigo)}>
      <View style={styles.description}>
        <View style={styles.descriptionContainer}>
          <TextComponent size={16}>{nombre}</TextComponent>
        </View>
        <View style={styles.unitContainer}>
          <TextComponent size={14} color={Colors.grey500}>
            {unidad_medida}
          </TextComponent>
        </View>
      </View>
      <TouchableOpacity style={styles.info} onPress={() => onPressInfo(info)}>
        <IconComponent iconName={'info'} color={Colors.blue400} />
      </TouchableOpacity>
      <View style={styles.chevron}>
        <IconComponent iconName={'angleRight'} color={Colors.grey300} />
      </View>
    </TouchableOpacity>
  );
};

export default ItemListComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
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
  description: {
    flex: 1,
    justifyContent: 'space-between',
  },
  info: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    zIndex: 1,
  },
  chevron: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 10,
  },
});
