import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { getstartedStyles } from '../../assets/styles/getstarted.style';
import LinearGradient from 'react-native-linear-gradient';
import { ROUTES } from '../../constants/routes';

const StartLearningScreen = ({ navigation }) => {
  const onPress = () => {
    navigation.getParent()?.replace(ROUTES.AUTH);
  };
  return (
    <View style={getstartedStyles.container}>
      <View style={getstartedStyles.imageContainer}>
        <Image
          source={require('../../assets/images/slider3-img.png')}
          style={getstartedStyles.image}
          resizeMode="cover"
        />
      </View>
      <Text style={getstartedStyles.welcomTxt}>Ready to dive into </Text>
      <Text style={getstartedStyles.title}>Learning?</Text>
      <Text style={getstartedStyles.description}>
        Access courses on the go, anytime, from anywhere.
      </Text>
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <LinearGradient
          colors={['#0f9ea8', '#08304d']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={getstartedStyles.button}
        >
          <Text style={getstartedStyles.buttonText}>Start Learning</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default StartLearningScreen;
