import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { COLORS } from '../constants/color';

import { styles } from '../assets/styles/courseDetails.style';

export const CourseCard = ({ subject, totalChapters }) => {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.title}>{subject.title}</Text>

        <View style={styles.metaRow}>
          <Icon name="book-outline" size={16} color={COLORS.primary} />
          <Text style={styles.metaText}>{subject.lessons.length} Lessons</Text>

          <View style={styles.dot} />
          <Text style={styles.metaText}>{totalChapters} Chapters</Text>
        </View>
      </View>

      <View style={styles.rightColumn}>
        <TouchableOpacity style={styles.iconCircleCard}>
          <MaterialCommunityIcons
            name="arrow-top-right"
            size={16}
            color={COLORS.white}
          />
        </TouchableOpacity>
        <Text style={styles.duration}>{subject.estimated_time_text}</Text>
      </View>
    </View>
  );
};
