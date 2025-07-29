import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '../../constants/routes';
import HomeScreen from './home';
import SearchScreen from './all-courses';
import CourseDetailsScreen from './coures-details';
import FloatingMenu from '../../components/FloatingMenu';
import { View } from 'react-native';
import ProfileScreen from './profile';
import { useNavigation } from '@react-navigation/native';
import CurrentCoursesScreen from './my-courses';

const MainStack = createNativeStackNavigator();

const MainRoot = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <MainStack.Navigator initialRouteName={ROUTES.PROFILE}>
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
      </MainStack.Navigator>
      <FloatingMenu navigation={navigation} />
    </View>
  );
};

export default MainRoot;
