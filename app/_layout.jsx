import React from 'react';

import IntroRoot from './(intro)/_layout';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '../constants/routes';
import AuthRoot from './(auth)/_layout';
import MainRoot from './(main)/_layout';

import { ActivityIndicator, View } from 'react-native';
import { COLORS } from '../constants/color';
import { homeStyles } from '../assets/styles/home.style';
const Stack = createNativeStackNavigator();

export default function RootStack({ isAuthenticated, isLoading }) {
  console.log(`root : ${isAuthenticated}`);
  if (isLoading)
    return (
      <View style={homeStyles.centered}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  return (
    <Stack.Navigator
      initialRouteName={isAuthenticated ? ROUTES.Main : ROUTES.INTRO}
    >
      <Stack.Screen
        name={ROUTES.INTRO}
        component={IntroRoot}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={ROUTES.Main}
        component={MainRoot}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={ROUTES.AUTH}
        component={AuthRoot}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
