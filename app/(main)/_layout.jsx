import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '../../constants/routes';
import HomeScreen from './home';

const MainStack = createNativeStackNavigator();

const MainRoot = () => {
  return (
    <MainStack.Navigator initialRouteName={ROUTES.HOME}>
      {/* <MainStack.Screen
        name={ROUTES.HOME}
        options={{ headerShown: false }}
        component={HomeScreen}
      /> */}
    </MainStack.Navigator>
  );
};

export default MainRoot;
