import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './splash';
import { ROUTES } from '../../constants/routes';
import GetStartedScreen from './getstarted';
import OnboardingScreen from './onboarding';
import StartLearningScreen from './start-learning';

const IntroStack = createNativeStackNavigator();

const IntroRoot = () => {
  return (
    <IntroStack.Navigator>
      <IntroStack.Screen
        name={ROUTES.SPLASH}
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <IntroStack.Screen
        name={ROUTES.GET_STARTED}
        component={GetStartedScreen}
        options={{ headerShown: false }}
      />
      <IntroStack.Screen
        name={ROUTES.ONBOARDING}
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
      <IntroStack.Screen
        name={ROUTES.STARTLEARNING}
        component={StartLearningScreen}
        options={{ headerShown: false }}
      />
    </IntroStack.Navigator>
  );
};

export default IntroRoot;
