import React from 'react';
import {SvgCss} from 'react-native-svg';
import {Icons} from '../assets/icons';
import {Colors} from 'react-native-paper';

const IconComponent = ({
  iconName,
  width = 20,
  height = 20,
  color = Colors.grey900,
}) => {
  return (
    <SvgCss width={width} height={height} xml={Icons[iconName]} fill={color} />
  );
};

export default IconComponent;
