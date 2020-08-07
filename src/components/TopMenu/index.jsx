import React from 'react';
import { View } from 'react-native';

import { images } from '@assets';
import { ReusableComponents } from '@components';

import styles from './styles';

const { IconSVG } = ReusableComponents;
const { oval, oval2, messageIcon, locationMenuIcon, glassesIcon } = images;

export default (props) => {
  console.log(oval);
  return (
    <View style={styles.container}>
      {menu.map((item, index) => (
        <IconSVG source={item.source} size={25} key={index} />
      ))}
    </View>
  );
};

const menu = [
  { source: oval },
  { source: messageIcon },
  { source: glassesIcon },
  { source: locationMenuIcon },
  { source: oval2 },
];
