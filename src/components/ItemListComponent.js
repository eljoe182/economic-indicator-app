import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import TextComponent from './TextComponent';
import colors from '../constants/colors';

const ItemListComponent = ({info: {item}, onPress, onPressInfo}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(item.codigo)}>
      <View style={styles.description}>
        <View style={styles.descriptionContainer}>
          <TextComponent size={18}>{item.nombre}</TextComponent>
        </View>
        <View style={styles.unitContainer}>
          <TextComponent size={14} color={colors.textSecond}>
            {item.unidad_medida}
          </TextComponent>
        </View>
      </View>
      <TouchableOpacity style={styles.info} onPress={onPressInfo}>
        <TextComponent size={18}>¡</TextComponent>
      </TouchableOpacity>
      <View style={styles.chevron}>
        <TextComponent size={18} color={colors.divider}>
          &gt;
        </TextComponent>
      </View>
    </TouchableOpacity>
  );
};

export default ItemListComponent;

const styles = StyleSheet.create({
  container: {
    height: 65,
    paddingHorizontal: 30,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#C2C2C2',
  },
  description: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 10,
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
