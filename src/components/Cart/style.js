import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  image: {
    height: 125,
    width: '30%',
    resizeMode: 'contain',
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#444444',
  },
  price: {
    fontSize: 18,
    color: '#797979',
    marginVertical: 7,
    fontWeight: '700',
  },
  content: {
    flex: 1,
    padding: 5,
  },
  circle: {
    height: 32,
    width: 32,
    borderRadius: 16,
  },
  sizeContainer: {
    backgroundColor: '#FFFFFF',
    height: 32,
    width: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  sizeText: {
    fontSize: 18,
    fontWeight: '700',
  },
  textCircleContainer: {
    flexDirection: 'row',
  },
  deleteIcon: {
    height: 30,
    width: 30,
    marginTop: 10,
  },
});

export default styles;
