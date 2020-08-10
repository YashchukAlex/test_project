import React from 'react';
import { View, StyleSheet } from 'react-native';

export default (props) => {
  const { headerLeft, headerRight, headerTitle, headerColor, navigation, title } = props;
  let header = {
    headerLeft: () => {
      return <View style={styles.container}>{headerLeft}</View>;
    },
    headerRight: () => {
      return <View style={styles.container}>{headerRight}</View>;
    },
    headerTitle: () => {
      return <View style={[styles.container, { alignSelf: 'center' }]}>{headerTitle}</View>;
    },
    headerColor,
    title,
  };
  navigation.setOptions(header);
};

const styles = StyleSheet.create({
  container: { marginTop: 10, marginHorizontal: 20 },
});
