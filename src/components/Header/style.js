import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {scaleFontSize} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appIcon: {
    height: 28,
    width: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appIconContainer: {
    backgroundColor: '#FFFFFF',
    height: 44,
    width: 44,
    borderRadius: 22,
    justifyContent:'center',
    alignItems:'center',
  },
  dpImage: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
});

export default style;
