import {
  View,
  Text,
  TouchableOpacity,
  RefreshControl,
  FlatList,
  Image,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from '../../assets/styles/currentCourse.style';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../constants/color';
import { getCurrentCourses } from '../../services/apiService';
import LoadingSpinner from '../../components/LoadingSpinner';
import { IMAGE_BASE_URL } from '../../services/api';
import FloatingMenu from '../../components/FloatingMenu';

const CurrentCoursesScreen = ({ navigation }) => {
  const [courses, setCourses] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadCourses = async () => {
    try {
      setLoading(true);
      const response = await getCurrentCourses();
      setCourses(response);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };
  useEffect(() => {
    loadCourses();
  }, []);

  if (loading && !refreshing) {
    return (
      <View style={styles.centerContainer}>
        <LoadingSpinner message="laoding courses..." size="small" />
      </View>
    );
  }

  const onRefresh = () => {
    setRefreshing(true);
    loadCourses();
    setRefreshing(false);
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconCircle}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back-outline" size={20} color={COLORS.shadow} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>My Courses</Text>

        <TouchableOpacity style={styles.iconCircle}>
          <Icon name="notifications-outline" size={20} color={COLORS.shadow} />
        </TouchableOpacity>
      </View>

      {/* courses list   */}
      <FlatList
        data={courses}
        renderItem={({ item }) => <ProgressCourseCard course={item} />}
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
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Icon name="book-outline" size={64} color={COLORS.primary} />
            <Text style={styles.emptyTitle}>No Courses lessons</Text>
            <Text style={styles.emptyDescription}>Try a different course</Text>
          </View>
        }
      />
      <FloatingMenu navigation={navigation} />
    </View>
  );
};

export default CurrentCoursesScreen;

const ProgressCourseCard = ({ course }) => {
  return (
    <View style={styles.cardUserContainer}>
      <Text style={styles.hint}>your progresses</Text>
      <View style={styles.progressRow}>
        <Text style={styles.progressPercentageIndicator}>
          {`${parseInt(((100 - course.progress_percent) * 100) / 100)}%   `}
          to complete
        </Text>
        <View style={styles.timeHintRow}>
          <Icon name="time-outline" size={11} color={COLORS.textLight} />
          <Text style={styles.timeHintText}>39min</Text>
        </View>
      </View>
      <ProgressBar progressPercent={course.progress_percent} />

      <View style={styles.courseMetaRow}>
        <View style={styles.courseTitleColumn}>
          <View style={styles.titleLayout}>
            <Text style={styles.courseTitle}>{course.title_name}</Text>

            <Text>
              By :{' '}
              <Text style={styles.lectureName}>{course.lecturer_name}</Text>
            </Text>
          </View>
          <View style={styles.lessonsMetaRow}>
            <Icon name="book-outline" size={18} color={COLORS.text} />
            <Text style={styles.lessonsNumTxt}>48 Lessons</Text>
            <View style={styles.lessonsDotSeparator} />
            <Text style={styles.estimatedCourseTime}>2hr 45min</Text>
          </View>
        </View>
        <View style={styles.courseImageContainer}>
          <Image
            source={{ uri: `${IMAGE_BASE_URL}/${course.image_url}` }}
            resizeMethod="cover"
            style={styles.image}
          />
        </View>
      </View>
    </View>
  );
};

const ProgressBar = ({ progressPercent }) => {
  return (
    <View style={styles.progressBarContainer}>
      <View style={[styles.progressBar, { width: `${progressPercent}%` }]} />
      {/* Dot indicators */}
      <View style={[styles.dot, { left: '10%' }]} />
      <View style={[styles.dot, { left: '30%' }]} />
      <View style={[styles.dot, { left: '60%' }]} />
      <View style={[styles.dot, { left: '90%' }]} />
    </View>
  );
};
