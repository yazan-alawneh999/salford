import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '../../constants/routes';
import SignUpScreen from './sign-up';
import SignInScreen from './sign-in';

const AuthStack = createNativeStackNavigator();

const AuthRoot = () => {
  return (
    <AuthStack.Navigator initialRouteName={ROUTES.SIGNIN}>
      <AuthStack.Screen
        name={ROUTES.SIGNUP}
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name={ROUTES.SIGNIN}
        component={SignInScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthRoot;
