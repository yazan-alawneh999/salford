import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import LoadingSpinner from '../../components/LoadingSpinner.jsx';
import { getCourseDetails } from '../../services/apiService.js';
import { styles } from '../../assets/styles/lessonsDetails.js';
import Video from 'react-native-video';
import { COLORS } from '../../constants/color.js';

const lessonsDetailsScreen = ({ navigation, route }) => {
  const [courseDetails, setCourseDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const video = React.useRef(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await getCourseDetails(route.params.courseId);
      setCourseDetails(response);
      setError(null);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch course details. Please try again.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  if (loading && !refreshing) {
    return (
      <View style={styles.centerContainer}>
        <LoadingSpinner size="small" />
      </View>
    );
  }

  if (!courseDetails) {
    return (
      <View style={styles.centerContainer}>
        <Text>{error || 'Something went wrong.'}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Video Section */}
        <View style={styles.videoContainer}>
          <Video
            ref={video}
            source={{ uri: courseDetails.course.video_url }}
            style={styles.videoImage}
            useNativeControls
            resizeMode="contain"
            isLooping
          />
          <TouchableOpacity style={styles.playButton}>
            <Icon name="play-circle" size={60} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-back" size={20} color="black" />
          </TouchableOpacity>
        </View>

        {/* Info Section */}
        <View style={styles.content}>
          {/* <Text style={styles.lessonInfo}>
            {courseDetails.lessonCount} Lessons • {courseDetails.chapterCount}{' '}
            Chapters
          </Text>
          <Text style={styles.title}>{courseDetails.title}</Text> */}
          <View style={styles.content}>
            <Text style={styles.title}>{courseDetails.subjects.title}</Text>

            <View style={styles.metaRow}>
              <Icon name="book-outline" size={16} color={COLORS.textLight} />
              <Text style={styles.metaText}>
                {courseDetails.totalLessons} Lessons
              </Text>

              <View style={styles.dot} />
              <Text style={styles.metaText}>
                {courseDetails.course.total_chapters} Chapters
              </Text>
            </View>
          </View>
          {/* Avatars */}
          <View style={styles.avatarsRow}>
            {courseDetails.instructors?.slice(0, 3).map((instructor, index) => (
              <Image
                key={index}
                source={{ uri: instructor.avatar }}
                style={styles.avatar}
              />
            ))}
            <View style={styles.moreCircle}>
              <Text style={styles.moreText}>
                {courseDetails.enrolledCount}+
              </Text>
            </View>
          </View>

          {/* Description */}
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{courseDetails.description}</Text>

          {/* Weekly Lessons */}
          {courseDetails.weeks?.map((week, index) => (
            <View key={index} style={styles.weekItem}>
              <MaterialCommunityIcons
                name="book-open"
                size={24}
                color="#00758F"
              />
              <View style={styles.weekText}>
                <Text style={styles.weekTitle}>Week {week.number}:</Text>
                <Text>{week.topic}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default lessonsDetailsScreen;
