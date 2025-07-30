import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../constants/color';

const { height, width } = Dimensions.get('window');

export const splashStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    fontFamily: 'ClashDisplay-Regular',
    // justifyContent: 'space-between',
  },

  logo: {
    alignSelf: 'center',
    marginTop: height * 0.2,
  },

  elipseContainer: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  elipse: {
    width: width,
    position: 'absolute',
    bottom: 0,
  },
  // ellipseWrapper: {
  //   position: 'absolute',
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   height: height * 0.9, // whatever height you want to cover
  //   overflow: 'hidden',
  // },
  ellipse: {
    width: width,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
