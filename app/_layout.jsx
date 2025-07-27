import React from 'react';

import IntroRoot from './(intro)/_layout';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { ROUTES } from '../constants/routes';
import AuthRoot from './(auth)/_layout';
import MainRoot from './(main)/_layout';
import FlashMessage from 'react-native-flash-message';
const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ROUTES.INTRO}
          component={IntroRoot}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.AUTH}
          component={AuthRoot}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.Main}
          component={MainRoot}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}
