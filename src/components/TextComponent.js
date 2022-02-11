import {Text} from 'react-native';
import React from 'react';
import {Colors} from 'react-native-paper';

const TextComponent = ({
  children,
  size = 14,
  color = Colors.grey800,
  textAlign = 'justify',
}) => {
  return (
    <Text
      style={{
        fontSize: size,
        color: color,
        textAlign: textAlign,
      }}>
      {children}
    </Text>
  );
};

export default TextComponent;
