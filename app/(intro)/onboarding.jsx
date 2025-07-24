import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState, useRef } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { getstartedStyles } from '../../assets/styles/getstarted.style';
import { ROUTES } from '../../constants/routes';

const slides = [
  {
    key: 'one',
    welcomTxt: 'Explore a wide range of ',
    image: require('../../assets/images/slider1-img.png'),
    title: 'IT Courses',
    description: 'From coding to cybersecurity, we have it all!',
  },
  {
    key: 'two',
    image: require('../../assets/images/slider2-img.png'),
    welcomTxt: 'Learn on your own  ',
    title: 'Schedule',
    description: 'Access courses on the go, anytime, from anywhere.',
  },
  // {
  //   key: 'three',
  //   welcomTxt: 'Ready to dive into ',
  //   title: 'Learning?',
  //   description: 'Access courses on the go, anytime, from anywhere.',
  // },
];
const OnboardingScreen = ({ navigation }) => {
  const [showRealApp, setShowRealApp] = useState(false);
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (showRealApp) {
    // Navigate to main screen
    navigation.navigate(ROUTES.STARTLEARNING);
    return null;
  }

  const onNext = () => {
    if (activeIndex === slides.length - 1) return onSkip();
    sliderRef.current?.goToSlide(activeIndex + 1, true);
  };
  // async
  const onSkip = () => {
    // await AsyncStorage.setItem('introShown', 'true');
    navigation.navigate(ROUTES.STARTLEARNING);
  };

  return (
    <AppIntroSlider
      ref={sliderRef}
      showSkipButton
      dotStyle={{
        backgroundColor: '#ccc', // inactive dot color
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 3,
      }}
      activeDotStyle={{
        backgroundColor: '#0f9ea8', // active dot color
        width: 20, // elongated active dot
        height: 8,
        borderRadius: 4,
      }}
      renderItem={({ item }) => (
        <View style={getstartedStyles.container}>
          <View style={getstartedStyles.imageContainer}>
            <Image
              source={item.image}
              style={getstartedStyles.image}
              resizeMode="cover"
            />
          </View>
          <Text style={getstartedStyles.welcomTxt}>{item.welcomTxt}</Text>
          <Text style={getstartedStyles.title}>{item.title}</Text>
          <Text style={getstartedStyles.description}>{item.description}</Text>
        </View>
      )}
      onSlideChange={setActiveIndex}
      renderPagination={() => (
        <View style={getstartedStyles.pagination}>
          <TouchableOpacity onPress={onSkip}>
            <Text>Skip</Text>
          </TouchableOpacity>

          <View style={getstartedStyles.dots}>
            {slides.map((_, i) => (
              <View
                key={i}
                style={[
                  getstartedStyles.dot,
                  i === activeIndex && getstartedStyles.activeDot,
                ]}
              />
            ))}
          </View>

          <TouchableOpacity onPress={onNext}>
            <Text>{'Next'}</Text>
          </TouchableOpacity>
        </View>
      )}
      data={slides}
      // onDone={() => setShowRealApp(true)}
    />
  );
};

export default OnboardingScreen;
