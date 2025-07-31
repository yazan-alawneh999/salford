import { View, Text, Image, Dimensions } from 'react-native';
import React, { useEffect } from 'react';
import { splashStyles } from '../../assets/styles/splash.style';
import { ROUTES } from '../../constants/routes';
import Logo from '../../assets/images/logo.svg';
import ESmal from '../../assets/images/E3.svg';
import ELarg from '../../assets/images/E1.svg';
import EMedium from '../../assets/images/E2.svg';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace(ROUTES.GET_STARTED);
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);
  const { width } = Dimensions.get('window');
  return (
    <View style={splashStyles.container}>
      <Logo style={splashStyles.logo} width={200} heigh={200} />
      <ELarg style={splashStyles.ellipse} width={width} />
      <EMedium style={splashStyles.ellipse} width={width} />
      <ESmal style={splashStyles.ellipse} width={width} />
    </View>
  );
};

export default SplashScreen;
