import { StyleSheet } from 'react-native';
import { constants, constantStyles } from '@constants';

const width = constants.dimensionsWindow.width * 0.95;
const height = 150;

export default StyleSheet.create({
  container: {
    width: width,
    height: height,
    borderRadius: 7,
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 10,
    ...constantStyles.defaultShadow,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  noteText: {
    color: '#454545',
    fontSize: 14,
    fontFamily: 'Geomanist-Book',
  },
  button: {
    width: width / 2.5,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 17.5,
    marginHorizontal: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonText: {
    fontFamily: 'Geomanist-Book',
    fontSize: 14,
    color: 'white',
  },
});
