import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import styles from './styles';

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={[styles.noteText, { fontSize: 25 }]}>☝🏼</Text>
        <Text style={styles.noteText}>need expert help?</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={[styles.button, { backgroundColor: '#B6DDD5' }]}>
            <Text style={styles.buttonText}>dleep</Text>
          </View>
          <View style={[styles.button, { backgroundColor: '#F9C2BD' }]}>
            <Text style={styles.buttonText}>lactation</Text>
          </View>
          <View style={[styles.button, { backgroundColor: '#AEDCE8' }]}>
            <Text style={styles.buttonText}>mental health</Text>
          </View>
          <View style={[styles.button, { backgroundColor: '#68A4B4' }]}>
            <Text style={styles.buttonText}>Rectangle</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
