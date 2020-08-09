import React from 'react';
import { View, Text } from 'react-native';

import { images } from '@assets';
import { ReusableComponents } from '@components';

import styles from './styles';

const { IconSVG } = ReusableComponents;
const { locationIcon } = images;

export default (props) => {
  return (
    <View style={styles.container}>
      <IconSVG source={locationIcon} size={15} />
      <Text style={styles.text}> pumpspots @work</Text>
    </View>
  );
};
