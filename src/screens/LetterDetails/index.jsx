import React, { useEffect } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { ReusableComponents, generateHeader } from '@components';
import { useFocusEffect } from '@react-navigation/native';
import { images } from '@assets';
import { constantStyles } from '@constants';
import { changeSwipeEnabled } from '../../navigation/routes';

const { x_icon } = images;
const { TouchableIconSVG } = ReusableComponents;
const { headerTitle } = constantStyles;

import styles from './styles';
import { article } from './fakeData';

export default ({ navigation, route }) => {
  useFocusEffect(() => {
    generateHeader({
      headerLeft: <TouchableIconSVG source={x_icon} size={25} hitSlop={5} onPress={() => navigation.goBack()} />,
      headerTitle: <Text style={headerTitle}>{route.params && route.params.title}</Text>,
      navigation: navigation,
    });
  });
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.insideContainer}>
        <View style={styles.imageContainer}>
          <Image source={article.image} style={styles.image} />
        </View>
        <Text style={styles.titleText}>{article.title}</Text>
        <Text style={styles.bodyText}>{article.body}</Text>
      </ScrollView>
    </View>
  );
};
