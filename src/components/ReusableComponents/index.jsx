import React, { Children } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';

const Icon = (props) => <Image source={props.source} style={{ width: props.size, height: props.size }} />;
const IconSVG = (props) => <SvgXml xml={props.source} width={props.size} height={props.size} />;

const TouchableIcon = (props) => {
  return (
    <TouchableOpacity hitSlop={{ top: props.hitSlop, bottom: props.hitSlop, left: props.hitSlop, right: props.hitSlop }}>
      <Icon {...props} />
    </TouchableOpacity>
  );
};

const TouchableIconSVG = (props) => {
  return (
    <TouchableOpacity
      hitSlop={{ top: props.hitSlop, bottom: props.hitSlop, left: props.hitSlop, right: props.hitSlop }}
      onPress={props.onPress}
    >
      <IconSVG {...props} />
    </TouchableOpacity>
  );
};

const TouchableOpacityHOC = ({ children, hitSlop, style, onPress }) => {
  return (
    <TouchableOpacity
      hitSlop={{ top: hitSlop, bottom: hitSlop, left: hitSlop, right: hitSlop }}
      style={style}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

export default {
  IconSVG,
  TouchableIconSVG,
  Icon,
  TouchableIcon,
  TouchableOpacityHOC,
};
