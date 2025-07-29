import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from '../../assets/styles/courseDetails.style';
import { homeStyles } from '../../assets/styles/home.style';
import { COLORS } from '../../constants/color';
import { getCourseDetails } from '../../services/apiService';
import { CourseCard } from '../../components/CourseCard';
import { ROUTES } from '../../constants/routes';
import FloatingMenu from '../../components/FloatingMenu';

const CourseDetailsScreen = ({ navigation, route }) => {
  const [courseDetails, setCourseDetails] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const courseID = route.params.courseId;

  // Fetch data from server
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await getCourseDetails(courseID);

      // Assuming response.data has featuredCourse and courses array
      setCourseDetails(response);
      //   setLessons(response.data.lessons.slice(3));
      setError(null);
    } catch (err) {
      setError('Failed to fetch courses. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchData();
  }, []);

  // Pull-to-refresh
  const onRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  if (loading && !refreshing) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity onPress={fetchData} style={styles.retryButton}>
          <Text style={styles.retryText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    // header
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconCircle}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back-outline" size={20} color={COLORS.shadow} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Course Details</Text>
        <TouchableOpacity style={styles.iconCircle}>
          <Icon name="notifications-outline" size={20} color={COLORS.shadow} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={courseDetails.subjects}
        renderItem={({ item }) => (
          <CourseCard
            subject={item}
            totalChapters={courseDetails.course.total_chapters}
            totalLessons={courseDetails.totalLessons}
            onClick={() => {
              navigation.navigate(ROUTES.SUBJECT_DETAILS, {
                courseId: courseID,
              });
            }}
          />
        )}
        keyExtractor={item => item.id.toString()}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[COLORS.primary]}
          />
        }
        contentContainerStyle={styles.listContent}
        initialNumToRender={10}
        maxToRenderPerBatch={5}
        windowSize={7}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.titles}>
            <Text style={styles.courseNumTile}>
              Course {courseDetails.course.id}
            </Text>
            <Text style={styles.courseTitleName} numberOfLines={1}>
              {courseDetails.course.title_name}
            </Text>
            <Text style={styles.courseDesc}>
              {courseDetails.course.description}
            </Text>
            <View style={styles.titleChippers}>
              <Text style={styles.courseCount}>
                {courseDetails.numSubjects} Courses
              </Text>
              <Text style={styles.lessonsCount}>
                {courseDetails.totalLessons}+ Leassons
              </Text>
            </View>
          </View>
        }
        ListEmptyComponent={
          <View style={homeStyles.emptyState}>
            <Icon name="book-outline" size={64} color={COLORS.primary} />
            <Text style={homeStyles.emptyTitle}>No Courses lessons</Text>
            <Text style={homeStyles.emptyDescription}>
              Try a different course
            </Text>
          </View>
        }
      />
            <FloatingMenu navigation={navigation} />
      
    </View>
  );
};

export default CourseDetailsScreen;
