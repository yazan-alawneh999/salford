import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '../../constants/routes';
import HomeScreen from './home';
import SearchScreen from './all-courses';
import CourseDetailsScreen from './coures-details';

import ProfileScreen from './profile';
import CurrentCoursesScreen from './my-courses';
import SubjectDetailsScreen from './subject-details';
import PlansScreen from './subscription-plans';
import PaymentMethod from './payment';

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
      <MainStack.Screen
        name={ROUTES.DETAILS}
        options={{ headerShown: false }}
        component={CourseDetailsScreen}
      />
      <MainStack.Screen
        name={ROUTES.PROFILE}
        options={{ headerShown: false }}
        component={ProfileScreen}
      />
      <MainStack.Screen
        name={ROUTES.CURRENT_COURSES}
        options={{ headerShown: false }}
        component={CurrentCoursesScreen}
      />
      <MainStack.Screen
        name={ROUTES.SUBJECT_DETAILS}
        options={{ headerShown: false }}
        component={SubjectDetailsScreen}
      />
      <MainStack.Screen
        name={ROUTES.SUBSCRIPTIONS_PLAN}
        options={{ headerShown: false }}
        component={PlansScreen}
      />
      <MainStack.Screen
        name={ROUTES.PAYMENT_METHOD}
        options={{ headerShown: false }}
        component={PaymentMethod}
      />
    </MainStack.Navigator>
  );
};

export default MainRoot;
