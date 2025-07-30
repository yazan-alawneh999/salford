import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../constants/color';

const { height, width } = Dimensions.get('window');

export const getstartedStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 20,
    fontFamily: 'ClashDisplay-Regular',
  },
  imageContainer: {
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: COLORS.card,
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.2,
    shadowRadius: 16,

    height: height * 0.5,
    marginTop: height * 0.02,
    marginBottom: height * 0.06,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  welcomTxt: {
    fontSize: 22,
    fontWeight: '400',
    color: COLORS.text,
    letterSpacing: 1.5,
    marginBottom: -height * 0.01,
  },
  title: {
    fontSize: 60,
    fontWeight: '900',
    fontStyle: 'bold',
    letterSpacing: 0.8,
    color: COLORS.primary,
    marginBottom: height * 0.01,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.textLight,
    letterSpacing: 1.2,

    marginBottom: height * 0.05,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,

    textAlign: 'center',
  },
  next: { fontSize: 16, color: '#000' },
  slide: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: COLORS.background,
  },
  dots: { flexDirection: 'row' },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 3,
  },
  activeDot: { width: 20, backgroundColor: '#0f9ea8' },
});
