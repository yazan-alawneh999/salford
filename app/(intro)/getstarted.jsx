import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { getstartedStyles } from '../../assets/styles/getstarted.style';
import LinearGradient from 'react-native-linear-gradient';
import { ROUTES } from '../../constants/routes';

const GetStartedScreen = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate(ROUTES.ONBOARDING);
  };
  return (
    <View style={getstartedStyles.container}>
      <View style={getstartedStyles.imageContainer}>
        <Image
          source={require('../../assets/images/getstarted-img.png')}
          style={getstartedStyles.image}
          resizeMode="cover"
        />
      </View>
      <Text style={getstartedStyles.welcomTxt}>Welcome to</Text>
      <Text style={getstartedStyles.title}>SALFORD</Text>
      <Text style={getstartedStyles.description}>
        Unlock the best IT courses for your career growth.
      </Text>
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <LinearGradient
          colors={['#0f9ea8', '#08304d']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={getstartedStyles.button}
        >
          <Text style={getstartedStyles.buttonText}>Get Started</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default GetStartedScreen;
