import { View, Text, Image, Dimensions } from 'react-native';
import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { splashStyles } from '../../assets/styles/splash.style';
import { ROUTES } from '../../constants/routes';
import Logo from '../../assets/images/logo.svg';
import ESmal from '../../assets/images/E3.svg';
import ELarg from '../../assets/images/E1.svg';
import EMedium from '../../assets/images/E2.svg';

const SplashScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'ClashDisplay-Bold': require('../../assets/fonts/ClashDisplay-Bold.otf'),
    'ClashDisplay-ExtraLight': require('../../assets/fonts/ClashDisplay-ExtraLight.otf'),
    'ClashDisplay-Light': require('../../assets/fonts/ClashDisplay-Light.otf'),
    'ClashDisplay-Medium': require('../../assets/fonts/ClashDisplay-Medium.otf'),
    'ClashDisplay-Regular': require('../../assets/fonts/ClashDisplay-Regular.otf'),
    'ClashDisplay-SemiBold': require('../../assets/fonts/ClashDisplay-SemiBold.otf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      const timer = setTimeout(() => {
        navigation.replace(ROUTES.GET_STARTED);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [navigation, fontsLoaded]);
  const { width } = Dimensions.get('window');
  return (
    <View style={splashStyles.container}>
      <Logo style={splashStyles.logo} width={200} heigh={200} />

      {/* <View style={splashStyles.ellipseWrapper}> */}
      <ELarg style={splashStyles.ellipse} width={width} />
      {/* <Image
        style={splashStyles.ellipse}
        source={require('../../assets/images/e1.png')}
        resizeMode="contain"
      /> */}
      <EMedium style={splashStyles.ellipse} width={width} />
      {/* <Image
        style={splashStyles.ellipse}
        source={require('../../assets/images/e2.png')}
        resizeMode="cover"
      /> */}
      <ESmal style={splashStyles.ellipse} width={width} />
      {/* <Image
        style={splashStyles.ellipse}
        source={require('../../assets/images/e3.png')}
        resizeMode="cover"
      /> */}
    </View>
    // </View>
    // <View style={splashStyles.container}>
    //   <Image
    //     source={require('../../assets/images/logo.png')}
    //     style={splashStyles.logo}
    //     resizeMode="contain"
    //   />

    //   <Image
    //     style={splashStyles.elipse}
    //     source={require('../../assets/images/e1.png')}
    //     resizeMode="contain"
    //   />

    //   <Image
    //     style={splashStyles.elipse}
    //     source={require('../../assets/images/e2.png')}
    //     resizeMode="contain"
    //   />

    //   <Image
    //     style={splashStyles.elipse}
    //     source={require('../../assets/images/e3.png')}
    //     resizeMode="contain"
    //   />

    //   {/* </View> */}
    // </View>
  );
};

export default SplashScreen;
