import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ReusableComponents } from '@components';
import { images } from '@assets';

const { TouchableIconSVG, IconSVG, TouchableOpacityHOC } = ReusableComponents;
const { x_icon, heartBoob } = images;

import styles from './styles';

export default ({ activeItem, changeActiveItem, navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.drawerTitle}>
          <Text style={styles.drawerText}>we’re glad you’re here.</Text>
          <TouchableIconSVG
            hitSlop={10}
            source={x_icon}
            size={20}
            onPress={() => {
              navigation.closeDrawer();
            }}
          />
        </View>
        <View style={styles.menu}>
          <IconSVG source={heartBoob} size={40} />
          {itemsMenu.map((item, index) => {
            return (
              <TouchableOpacityHOC
                hitSlop={0}
                onPress={() => {
                  changeActiveItem(index);
                }}
                key={index}
              >
                <View
                  style={[
                    styles.menuItem,
                    { marginTop: index ? 0 : 30, backgroundColor: activeItem === index ? '#EFF7F6' : 'white' },
                  ]}
                >
                  <Text style={styles.menuText}>{item}</Text>
                </View>
              </TouchableOpacityHOC>
            );
          })}
        </View>
        <Text style={styles.logOut}>log out</Text>
      </View>
    </ScrollView>
  );
};

const itemsMenu = ['home', 'give us deedback', 'invite a mama', 'about pumpspotting', 'privacy policy', 'terms of use'];
