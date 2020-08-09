import { StyleSheet } from 'react-native';
import { constants, constantStyles } from '@constants';

const width = constants.dimensionsWindow.width * 0.95;
const height = 370;

export default StyleSheet.create({
  container: {
    width: width,
    height: height,
    borderRadius: 8,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10,
    ...constantStyles.defaultShadow,
  },
  imageContainer: {
    height: '50%',
    width: '100%',
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  contentContainer: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentInsideContainer: {
    width: '90%',
    height: '80%',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  titleText: {
    color: '#494949',
    fontSize: 14,
    fontFamily: 'Geomanist-Medium',
  },
  bodyText: {
    color: '#4A4A4A',
    fontSize: 14,
    fontFamily: 'Geomanist-Regular',
  },
  noteText: {
    color: '#A4A4A4',
    fontSize: 14,
    fontFamily: 'Geomanist-Medium',
  },
});
