import React from 'react';
import { View, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { ReusableComponents, Letter } from '@components';
import { constants } from '@constants';

import styles from './styles';

export default (props) => {
  const { data = [] } = props;
  const _renderItem = ({ item, index }) => {
    return <Letter item={item} />;
  };
  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={_renderItem}
        sliderWidth={constants.dimensionsWindow.height}
        itemWidth={constants.dimensionsWindow.width / 1.05}
        horizontal
      />
    </View>
  );
};
