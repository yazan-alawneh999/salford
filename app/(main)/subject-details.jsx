import React, { useRef, useState } from 'react';
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
import {
  useSubjectDetailsQuery,
  useSubscriptionsQuery,
} from '../../services/apiService.js';
import { styles } from '../../assets/styles/lessonsDetails.js';
import Video from 'react-native-video';
import { COLORS } from '../../constants/color.js';
import FloatingMenu from '../../components/FloatingMenu.jsx';
import { IMAGE_BASE_URL } from '../../services/api.js';

const SubjectDetailsScreen = ({ navigation, route }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const video = useRef(null);
  const subjectId = route.params.subjectId;

  const {
    data: courseDetails,
    isLoading: courseLoading,
    isFetching: courseFetching,
    refetch: refetchCourse,
    isError: courseError,
  } = useSubjectDetailsQuery(subjectId);
  const { data: subscriptions, isLoading: subsLoading } =
    useSubscriptionsQuery();

  if (courseLoading || subsLoading) {
    return (
      <View style={styles.centerContainer}>
        <LoadingSpinner size="small" />
      </View>
    );
  }

  if (!courseDetails || courseError) {
    return (
      <View style={styles.centerContainer}>
        <Text>Something went wrong.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Video Section */}
        <View style={styles.videoContainer}>
          <Video
            ref={video}
            source={{ uri: courseDetails.course.video_url }}
            style={styles.videoImage}
            useNativeControls
            resizeMode="cover"
            paused={!isPlaying} // This controls whether it's playing
            onEnd={() => setIsPlaying(false)} // Optional: reset on end
          />
          {!isPlaying && (
            <TouchableOpacity
              style={styles.playButton}
              onPress={() => setIsPlaying(true)}
            >
              <Icon
                name={isPlaying ? 'pause-circle' : 'play-circle'}
                size={60}
                color="white"
              />
            </TouchableOpacity>
          )}
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

          <View style={styles.metaRow}>
            <Icon name="book-outline" size={16} color={COLORS.textLight} />
            <Text style={styles.metaText}>
              {courseDetails.lessons.length} Lessons
            </Text>

            <View style={styles.dot} />
            <Text style={styles.metaText}>
              {courseDetails.course.total_chapters} Chapters
            </Text>
          </View>
          <Text style={styles.title}>{courseDetails.subject.title}</Text>
        </View>
        {/* Avatars */}
        {subscriptions && (
          <View style={styles.avatarsRow}>
            {subscriptions?.slice(0, 3).map((subscriber, index) => (
              <Image
                key={index}
                source={{ uri: `${IMAGE_BASE_URL}/${subscriber.image_url}` }}
                style={styles.avatar}
              />
            ))}
            <View style={styles.moreCircle}>
              <Text style={styles.moreText}>{subscriptions.length}+</Text>
            </View>
          </View>
        )}

        {/* Description */}
        <View style={styles.content}>
          <Text style={styles.title}>Description</Text>
          <Text style={styles.description}>
            {courseDetails.subject.description}
          </Text>
        </View>
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
        {courseDetails.lessons.map(less => (
          <Lesson lesson={less} />
        ))}
      </ScrollView>
      <FloatingMenu navigation={navigation} />
    </View>
  );
};

export default SubjectDetailsScreen;

const Lesson = ({ lesson }) => {
  return (
    <View style={styles.content}>
      <View style={styles.metaRow}>
        <Icon
          name="book-outline"
          size={20}
          style={styles.primaryCircleImage}
          color="white"
        />

        <View style={styles.column}>
          <Text
            style={[
              styles.description,
              { ...styles.description, fontWeight: '400' },
            ]}
          >
            {lesson.estimated_weeks}
          </Text>
          <Text style={styles.title}>{lesson.title}</Text>
        </View>
      </View>
    </View>
  );
};
