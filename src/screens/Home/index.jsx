import React from 'react';
import { View, ScrollView } from 'react-native';
import { ReusableComponents, generateHeader, TopMenu, Carusel, SupportButton, Article } from '@components';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { images } from '@assets';

const { burgerMenu, heartBoobLogo, avatar } = images;
const { IconSVG, TouchableIconSVG, Icon } = ReusableComponents;

import styles from './styles';
import { letters, articles } from './fakeData';

export default (props) => {
  const navigation = useNavigation();
  useFocusEffect(() => {
    generateHeader({
      headerLeft: <TouchableIconSVG source={burgerMenu} size={25} hitSlop={5} />,
      headerTitle: <IconSVG source={heartBoobLogo} size={35} />,
      headerRight: <Icon source={avatar} size={35} hitSlop={5} />,
      navigation: navigation,
    });
  });
  return (
    <ScrollView style={styles.container}>
      <TopMenu />
      <Carusel data={letters} />
      <SupportButton />
      <Article item={articles[0]} />
    </ScrollView>
  );
};
