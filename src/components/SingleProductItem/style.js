import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  coverImage: {
    height: 256,
    width: '100%',
    borderRadius: 20,
    marginTop:10,
    position: 'relative',
  },
  contentContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: getFontFamily('Inter', '400'),
    fontWeight: '700',
    color: '#444444',
  },
  price: {
    fontSize: 18,
    fontFamily: getFontFamily('Inter', '500'),
  },
  likeContainer: {
    position: 'absolute',
    padding: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    right: 10,
    top: 20,
  },
  faviorate: {
    height: 20,
    width: 20,
  },
});

export default style;
