import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { homeStyles } from '../assets/styles/home.style';
import { useRoute } from '@react-navigation/native';
import { ROUTES } from '../constants/routes';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../constants/color';
import { IMAGE_BASE_URL } from '../services/api';

const CourseItem = ({ course }) => {
  const router = useRoute();
  return (
    <TouchableOpacity onPress={() => {}} activeOpacity={0.9}>
      {/* <View style={homeStyles.courseCard}> */}
      <View style={homeStyles.courseImageContainer}>
        <Image
          source={{ uri: `${IMAGE_BASE_URL}/${course.image_url}` }}
          style={homeStyles.image}
          contentFit="cover"
          transition={300}
        />

        <View style={homeStyles.courseOverlay}>
          <Text style={homeStyles.textPrice}>${course.price}</Text>
          <View style={homeStyles.saveRow}>
            <TouchableOpacity
              style={homeStyles.saveIconContainer}
              activeOpacity={0.8}
            >
              <Icon name="bookmark-outline" size={18} color={COLORS.primary} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={homeStyles.courseTextContainer}>
        <Text style={homeStyles.title} numberOfLines={1}>
          {course.title_name}
        </Text>
        <Text style={homeStyles.lecturerName} numberOfLines={1}>
          By:{' '}
          <Text style={homeStyles.lecturerNameSpan}>
            {course.lecturer_name}
          </Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CourseItem;
