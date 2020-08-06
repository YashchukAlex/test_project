import { Dimensions } from 'react-native';

export default {
  dimensionsWindow: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  dimensionsScreen: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },
};
