import { StyleSheet } from 'react-native';
import { constants, constantStyles } from '@constants';

export default StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#EFF7F6',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    ...constantStyles.defaultShadow,
  },
});
