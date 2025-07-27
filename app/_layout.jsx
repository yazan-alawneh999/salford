import React from 'react';

import IntroRoot from './(intro)/_layout';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '../constants/routes';
import AuthRoot from './(auth)/_layout';
import MainRoot from './(main)/_layout';
import { useAuth } from '../hooks/useAuth';
const Stack = createNativeStackNavigator();

export default function RootStack() {
  const authToken = useAuth();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.INTRO}
        component={IntroRoot}
        options={{ headerShown: false }}
      />

      {authToken ? (
        <Stack.Screen
          name={ROUTES.Main}
          component={MainRoot}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name={ROUTES.AUTH}
          component={AuthRoot}
          options={{ headerShown: false }}
        />
      )}
      <Stack.Screen
        name={ROUTES.AUTH}
        component={AuthRoot}
        options={{ headerShown: false }}
      />

      {/* <Stack.Screen
        name={ROUTES.Main}
        component={MainRoot}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
}
