import React from 'react';
import { ActivityIndicator } from 'react-native';

import styles from './styles';

export default (props) => {
  const { isLoading } = props;
  return <ActivityIndicator animating={isLoading} size={'large'} color={'#02C5B4'} style={styles.container} />;
};
