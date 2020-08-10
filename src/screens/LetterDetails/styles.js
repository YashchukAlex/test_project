import { StyleSheet } from 'react-native';
import { constants } from '@constants';

const width = constants.dimensionsWindow.width * 0.85;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  insideContainer: {
    width: width,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    marginTop: '5%',
    height: '100%',
  },
  titleText: {
    fontFamily: 'Geomanist-Medium',
    fontSize: 17,
    color: '#424040',
    paddingVertical: 20,
  },
  bodyText: {
    fontFamily: 'Geomanist-Regular',
    fontSize: 14,
    color: '#424040',
    paddingBottom: 50,
  },
  imageContainer: {
    height: width,
    width: '100%',
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    borderRadius: 8,
  },
});
