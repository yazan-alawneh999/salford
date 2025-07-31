import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { memo } from 'react';
import { searchStyles } from '../assets/styles/search.styles';
import { useRoute } from '@react-navigation/native';
import { ROUTES } from '../constants/routes';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../constants/color';
import { IMAGE_BASE_URL } from '../services/api';

const AllCoursesItem = ({ course }) => {
  const router = useRoute();
  return (
    <TouchableOpacity onPress={() => {}} activeOpacity={0.9}>
      {/* <View style={searchStyles.courseCard}> */}
      <View style={searchStyles.courseImageContainer}>
        <Image
          source={{ uri: `${IMAGE_BASE_URL}/${course.image_url}` }}
          style={searchStyles.image}
          contentFit="cover"
          transition={300}
        />

        <View style={searchStyles.courseOverlay}>
          <Text style={searchStyles.textPrice}>${course.price}</Text>
          <View style={searchStyles.saveRow}>
            <TouchableOpacity
              style={searchStyles.saveIconContainer}
              activeOpacity={0.8}
            >
              <Icon name="bookmark-outline" size={18} color={COLORS.primary} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={searchStyles.courseTextContainer}>
        <Text style={searchStyles.title} numberOfLines={1}>
          {course.title_name}
        </Text>
        <Text style={searchStyles.lecturerName} numberOfLines={1}>
          By:{' '}
          <Text style={searchStyles.lecturerNameSpan}>
            {course.lecturer_name}
          </Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(AllCoursesItem);
