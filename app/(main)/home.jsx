import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, { useState, useCallback, memo } from 'react';
import { homeStyles } from '../../assets/styles/home.style';
import Icon from 'react-native-vector-icons/Ionicons';
import Graduation from '../../assets/images/graduate-bat.svg';
import Fire from '../../assets/images/fire.svg';
import { COLORS } from '../../constants/color';
import CategoryFilter from '../../components/CategoryFilter';
import {
  useCategoriesQuery,
  useTrendingCoursesQuery,
  usePopularCoursesQuery,
  useProfileQuery,
  useTrendingCoursesByCategoryIdQuery,
  usePopularCoursesByCategoryIdQuery,
} from '../../services/apiService';
import CourseItem from '../../components/CourseItem';
import { IMAGE_BASE_URL } from '../../services/api';
import { ROUTES } from '../../constants/routes';
import FloatingMenu from '../../components/FloatingMenu';
import CourseEmptyState from '../../components/CourseEmptyState';

const HomeScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Fetch profile and categories
  const { data: profile } = useProfileQuery();
  const { data: categories, isLoading: categoriesLoading } =
    useCategoriesQuery();

  // Fetch all trending & popular courses
  const {
    data: trendingCourses,
    isLoading: trendingLoading,
    refetch: refetchTrending,
  } = useTrendingCoursesQuery();

  const {
    data: popularCourses,
    isLoading: popularLoading,
    refetch: refetchPopular,
  } = usePopularCoursesQuery();

  // Fetch trending & popular courses by category
  const {
    data: trendCategoryCourses,
    isLoading: trendCategoryCoursesLoading,
    refetch: refetchTrendingCategoryCourses,
  } = useTrendingCoursesByCategoryIdQuery(selectedCategory?.id);

  const {
    data: popularCategoryCourses,
    isLoading: popularCategoryCoursesLoading,
    refetch: refetchPopularCategoryCourses,
  } = usePopularCoursesByCategoryIdQuery(selectedCategory?.id);

  // Derived data based on selected category

  const displayedPopularCourses = selectedCategory
    ? popularCategoryCourses
    : popularCourses;

  const displayedTrendingCourses = selectedCategory
    ? trendCategoryCourses
    : trendingCourses;

  const isLoading = categoriesLoading || trendingLoading || popularLoading;
  const isRefreshing = trendingLoading || popularLoading;

  // Callbacks
  const handleGoSearch = useCallback(() => {
    navigation.navigate(ROUTES.SEARCH);
  }, [navigation]);

  const handleCategorySelect = useCallback(
    async category => {
      setSelectedCategory(category);
      if (category) {
        await refetchTrendingCategoryCourses();
        await refetchPopularCategoryCourses();
      }
    },
    [refetchTrendingCategoryCourses, refetchPopularCategoryCourses],
  );

  const handleCoursePressed = useCallback(
    course => {
      navigation.navigate(ROUTES.DETAILS, { courseId: course.id });
    },
    [navigation],
  );

  const onRefresh = useCallback(async () => {
    await refetchTrending();
    await refetchPopular();
    await refetchPopularCategoryCourses();
    await refetchTrendingCategoryCourses();
  }, [
    refetchTrending,
    refetchPopular,
    refetchPopularCategoryCourses,
    refetchTrendingCategoryCourses,
  ]);

  const renderCourseItem = useCallback(
    ({ item }) => <CourseItem course={item} onClick={handleCoursePressed} />,
    [handleCoursePressed],
  );

  const getItemLayout = (data, index) => ({
    length: 200,
    offset: 200 * index,
    index,
  });

  // Initial loading state
  if (isLoading) {
    return (
      <View style={homeStyles.centered}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  return (
    <View style={homeStyles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            colors={[COLORS.primary]}
            refreshing={isRefreshing}
            onRefresh={onRefresh}
          />
        }
        contentContainerStyle={homeStyles.scrollContent}
      >
        {/* Header */}
        <View style={homeStyles.welcomeSection}>
          <Text style={homeStyles.welcomeText}>
            Hello, {profile ? profile.display_name : 'Guest'}
          </Text>
          <TouchableOpacity style={homeStyles.notificationIconWraper}>
            <Icon
              name="notifications-outline"
              size={16}
              color={COLORS.shadow}
            />
          </TouchableOpacity>
          <TouchableOpacity style={homeStyles.homePrfilePicContainer}>
            <View style={homeStyles.profileImgContainer}>
              {profile && (
                <Image
                  source={{ uri: `${IMAGE_BASE_URL}/${profile.image_url}` }}
                  style={homeStyles.homeProfileImg}
                  resizeMethod="cover"
                />
              )}
            </View>
          </TouchableOpacity>
        </View>

        {/* Title Section */}
        <View style={homeStyles.titlesContainer}>
          <View style={homeStyles.regularTitleContainer}>
            <Text style={homeStyles.regularTitleTxt}>Let's Learn</Text>
            <Graduation
              width={50}
              height={50}
              style={homeStyles.graduationVectorStyle}
            />
          </View>
          <Text style={homeStyles.boldTitle}>something new</Text>
        </View>

        {/* Search Bar */}
        <TouchableOpacity
          style={homeStyles.searchInputContainer}
          onPress={handleGoSearch}
          activeOpacity={0.8}
        >
          <Icon name="search-outline" size={20} color={COLORS.hint} />
          <TextInput
            style={homeStyles.input}
            placeholder="Search Course"
            placeholderTextColor={COLORS.hint}
            editable={false}
            pointerEvents="none"
          />
          <TouchableOpacity>
            <Icon name="options-outline" size={20} color={COLORS.primary} />
          </TouchableOpacity>
        </TouchableOpacity>

        {/* Categories */}
        <View style={homeStyles.section}>
          {categories && categories.length > 0 && (
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory?.name}
              onSelectCategory={handleCategorySelect}
            />
          )}
        </View>

        {/* Trending Section */}
        <View style={homeStyles.section}>
          <View style={homeStyles.courseHeaderContainer}>
            <Text style={homeStyles.courseHeaderLabel}>Trending Courses</Text>
            <Fire width={25} height={25} />
            <Text style={homeStyles.seeAllText}>See All</Text>
          </View>

          {trendCategoryCoursesLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : displayedTrendingCourses?.length > 0 ? (
            <FlatList
              data={displayedTrendingCourses}
              renderItem={renderCourseItem}
              keyExtractor={item => item.id.toString()}
              horizontal
              contentContainerStyle={[
                homeStyles.courseRow,
                displayedTrendingCourses.length === 0 && homeStyles.center,
              ]}
              showsHorizontalScrollIndicator={false}
              getItemLayout={getItemLayout}
              ListEmptyComponent={<CourseEmptyState />}
            />
          ) : (
            <CourseEmptyState />
          )}
        </View>

        {/* Popular Section */}
        <View style={homeStyles.section}>
          <View style={homeStyles.courseHeaderContainer}>
            <Text style={homeStyles.courseHeaderLabel}>Popular Courses</Text>
            <Text style={homeStyles.seeAllText}>See All</Text>
          </View>

          {popularCategoryCoursesLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : displayedPopularCourses?.length > 0 ? (
            <FlatList
              data={displayedPopularCourses}
              renderItem={renderCourseItem}
              keyExtractor={item => item.id.toString()}
              horizontal
              contentContainerStyle={[
                homeStyles.courseRow,
                displayedPopularCourses.length === 0 && homeStyles.center,
              ]}
              showsHorizontalScrollIndicator={false}
              getItemLayout={getItemLayout}
              ListEmptyComponent={<CourseEmptyState />}
            />
          ) : (
            <CourseEmptyState />
          )}
        </View>
      </ScrollView>

      <FloatingMenu navigation={navigation} />
    </View>
  );
};

export default memo(HomeScreen);
