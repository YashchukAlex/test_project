import React from 'react';
import { View, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';

import { images } from '@assets';
import { ReusableComponents } from '@components';

import styles from './styles';

const { IconSVG, TouchableOpacityHOC } = ReusableComponents;
const { line, heartIcon } = images;

export default ({ item }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.topBlock}>
          <View style={styles.wherefrom}>
            <Text style={styles.wherefromTitle}>{item.wherefrom.title}</Text>
            <Text style={styles.wherefromdate}>{item.wherefrom.date}</Text>
          </View>
          <View style={styles.brands}>
            <View style={styles.linesContainer}>
              <SvgXml xml={line} width={50} height={13} />
              <SvgXml xml={line} width={50} height={13} />
              <SvgXml xml={line} width={50} height={13} />
            </View>
            <View style={styles.heartContainer}>
              <IconSVG source={heartIcon} size={30} />
            </View>
          </View>
        </View>
        <View style={styles.middleBlock}>
          <Text style={styles.titleText}>{item.body.name}</Text>
          <Text style={styles.topicText}>{item.body.topic}</Text>
        </View>
        <View style={styles.bottomBlock}>
          <TouchableOpacityHOC
            hitSlop={10}
            onPress={() => {
              navigation.navigate('LetterDetails', { title: `to ${item.body.name}`.toLowerCase() });
            }}
          >
            <Text style={styles.noteText}>Tap to open note</Text>
          </TouchableOpacityHOC>
        </View>
      </View>
    </View>
  );
};
