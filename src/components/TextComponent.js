import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../constants/colors';

const TextComponent = ({children, size, color}) => {
  return (
    <Text
      style={{
        fontSize: size,
        color: color,
      }}>
      {children}
    </Text>
  );
};

export default TextComponent;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
});
