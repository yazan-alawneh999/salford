import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '../../constants/routes';
import HomeScreen from './home';
import SearchScreen from './all-courses';
import CourseDetailsScreen from './coures-details';
import FloatingMenu from '../../components/FloatingMenu';
import { View } from 'react-native';

const MainStack = createNativeStackNavigator();

const MainRoot = () => {
  return (
    <View style={{ flex: 1 }}>
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
        <MainStack.Screen
          name={ROUTES.DETAILS}
          options={{ headerShown: false }}
          component={CourseDetailsScreen}
        />
      </MainStack.Navigator>
      <FloatingMenu />
    </View>
  );
};

export default MainRoot;
