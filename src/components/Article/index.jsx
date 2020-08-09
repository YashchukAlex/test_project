import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

export default ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.contentInsideContainer}>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.bodyText}>{item.body}</Text>
          <Text style={styles.noteText}>read more</Text>
        </View>
      </View>
    </View>
  );
};
