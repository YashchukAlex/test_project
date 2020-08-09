import { StyleSheet } from 'react-native';
import { constants, constantStyles } from '@constants';

const width = constants.dimensionsWindow.width * 0.95;
const height = 70;

export default StyleSheet.create({
  container: {
    width: width,
    height: height,
    flexDirection: 'row',
    borderRadius: 8,
    marginTop: -10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#68A4B4',
    ...constantStyles.defaultShadow,
  },
  text: {
    fontFamily: 'Geomanist-Medium',
    fontSize: 15,
    color: '#EFF7F6',
  },
});
