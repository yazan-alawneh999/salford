import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { homeStyles } from '../assets/styles/home.style';
import { COLORS } from '../constants/color';

const CourseEmptyState = () => (
  <View style={homeStyles.emptyState}>
    <Icon name="book-outline" size={64} color={COLORS.primary} />
    <Text style={homeStyles.emptyTitle}>No Courses found</Text>
    <Text style={homeStyles.emptyDescription}>Try a different category</Text>
  </View>
);

export default CourseEmptyState;
