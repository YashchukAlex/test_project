import { StyleSheet } from 'react-native';
import { constants, constantStyles } from '@constants';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: constants.dimensionsWindow.height * 0.9,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: '10%',
    paddingBottom: '10%',
  },
  drawerText: {
    fontSize: 15,
    fontFamily: 'Geomanist-Regular',
    color: '#8F8F8F',
  },
  drawerTitle: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
  menu: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuText: {
    fontSize: 15,
    fontFamily: 'Geomanist-Book',
    color: '#424040',
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  menuItem: {
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 18.5,
  },
  logOut: {
    fontSize: 14,
    fontFamily: 'Geomanist-Book',
    color: '#A4A4A4',
  },
});
