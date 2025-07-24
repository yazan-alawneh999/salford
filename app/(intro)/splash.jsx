import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';
import { splashStyles } from '../../assets/styles/splash.style';
import { ROUTES } from '../../constants/routes';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace(ROUTES.GET_STARTED);
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={splashStyles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={splashStyles.logo}
        resizeMode="contain"
      />

      {/* <View style={splashStyles.ellipseWrapper}> */}
      <Image
        style={splashStyles.ellipse}
        source={require('../../assets/images/e1.png')}
        resizeMode="contain"
      />
      <Image
        style={splashStyles.ellipse}
        source={require('../../assets/images/e2.png')}
        resizeMode="cover"
      />
      <Image
        style={splashStyles.ellipse}
        source={require('../../assets/images/e3.png')}
        resizeMode="cover"
      />
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
