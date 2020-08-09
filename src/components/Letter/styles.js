import { StyleSheet } from 'react-native';
import { constants, constantStyles } from '@constants';

const width = constants.dimensionsWindow.width * 0.95;
const height = 240;

export default StyleSheet.create({
  container: {
    width: width,
    height: height,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    ...constantStyles.defaultShadow,
  },
  contentContainer: {
    width: '90%',
    height: '80%',
  },
  topBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '30%',
  },
  middleBlock: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '35%',
    width: '100%',
    alignItems: 'center',
  },
  bottomBlock: { flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end', height: '35%' },
  wherefrom: {
    width: '35%',
  },
  brands: {
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  wherefromTitle: {
    fontSize: 12,
    fontFamily: 'Geomanist-Book',
    color: '#424040',
  },
  wherefromdate: {
    fontSize: 12,
    fontFamily: 'Geomanist-Light',
    color: '#424040',
  },
  heartContainer: {
    height: 40,
    width: 40,
    backgroundColor: '#FCDBC3',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linesContainer: {
    height: 40,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  titleText: {
    color: '#424040',
    fontSize: 20,
    fontFamily: 'Geomanist-Book',
  },
  topicText: {
    color: '#424040',
    fontSize: 12,
    fontFamily: 'Geomanist-Book',
  },
  noteText: {
    color: '#949494',
    fontSize: 10,
    fontFamily: 'Avenir',
  },
});
