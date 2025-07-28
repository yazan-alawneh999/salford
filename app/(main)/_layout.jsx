import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '../../constants/routes';
import HomeScreen from './home';
import SearchScreen from './all-courses';

const MainStack = createNativeStackNavigator();

const MainRoot = () => {
  return (
    <MainStack.Navigator initialRouteName={ROUTES.HOME}>
      <MainStack.Screen
        name={ROUTES.HOME}
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <MainStack.Screen
        name={ROUTES.SEARCH}
        options={{ headerShown: false }}
        component={SearchScreen}
      />
    </MainStack.Navigator>
  );
};

export default MainRoot;
