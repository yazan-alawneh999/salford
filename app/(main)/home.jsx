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
  useCoursesByCategoryIdQuery,
} from '../../services/apiService';
import CourseItem from '../../components/CourseItem';
import { IMAGE_BASE_URL } from '../../services/api';
import { ROUTES } from '../../constants/routes';
import FloatingMenu from '../../components/FloatingMenu';
import CourseEmptyState from '../../components/CourseEmptyState';

const HomeScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { data: categories, isLoading: categoriesLoading } =
    useCategoriesQuery();
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
  const { data: profile } = useProfileQuery();
  const {
    data: categoryCourses,
    isLoading: categoryCoursesLoading,
    refetch: refetchCategoryCourses,
  } = useCoursesByCategoryIdQuery(selectedCategory?.id);

  const handleGoSearch = useCallback(() => {
    navigation.navigate(ROUTES.SEARCH);
  }, [navigation]);

  const handleCategorySelect = useCallback(
    async category => {
      setSelectedCategory(category);
      refetchCategoryCourses();
    },
    [refetchCategoryCourses],
  );

  const handleCoursePressed = useCallback(
    course => {
      navigation.navigate(ROUTES.DETAILS, { courseId: course.id });
    },
    [navigation],
  );

  const onRefresh = useCallback(async () => {
    refetchTrending();
    refetchPopular();
  }, [refetchTrending, refetchPopular]);

  const renderCourseItem = useCallback(
    ({ item }) => <CourseItem course={item} onClick={handleCoursePressed} />,
    [handleCoursePressed],
  );

  const getItemLayout = (data, index) => ({
    length: 200,
    offset: 200 * index,
    index,
  });

  if (categoriesLoading || trendingLoading || popularLoading) {
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
            refreshing={trendingLoading || popularLoading}
            onRefresh={onRefresh}
          />
        }
        contentContainerStyle={homeStyles.scrollContent}
      >
        {/* header section  */}
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
                  transition={300}
                />
              )}
            </View>
          </TouchableOpacity>
        </View>

        {/* titles section */}
        <View style={homeStyles.titlesContainer}>
          {/* regulart title section */}
          <View style={homeStyles.regularTitleContainer}>
            <Text style={homeStyles.regularTitleTxt}>Let's Learn</Text>
            <Graduation
              width={50}
              height={50}
              style={homeStyles.graduationVectorStyle}
            />
          </View>
          {/* bold title */}
          <Text style={homeStyles.boldTitle}>something new</Text>
        </View>

        {/* search section */}
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
            editable={false} // prevent typing
            pointerEvents="none" // prevent touch
          />
          <TouchableOpacity>
            <Icon name="options-outline" size={20} color={COLORS.primary} />
          </TouchableOpacity>
        </TouchableOpacity>
        {/* categories section */}
        <View style={homeStyles.section}>
          {categories && categories.length > 0 && (
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory?.name}
              onSelectCategory={handleCategorySelect}
            />
          )}
        </View>
        {/*trending  courses section */}
        <View style={homeStyles.section}>
          {/*  courses header  */}
          <View style={homeStyles.courseHeaderContainer}>
            <Text style={homeStyles.courseHeaderLabel}>Trending Courses</Text>
            <Fire width={25} height={25} />
            <Text style={homeStyles.seeAllText}>See All</Text>
          </View>

          {trendingLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : trendingCourses && trendingCourses.length > 0 ? (
            <FlatList
              data={trendingCourses}
              renderItem={renderCourseItem}
              keyExtractor={item => item.id.toString()}
              horizontal
              contentContainerStyle={[
                homeStyles.courseRow,
                trendingCourses.length === 0 && homeStyles.center,
              ]}
              showsHorizontalScrollIndicator={false}
              getItemLayout={getItemLayout}
              ListEmptyComponent={<CourseEmptyState />}
            />
          ) : (
            <CourseEmptyState />
          )}
        </View>
        {/*Popular  courses section */}
        <View style={homeStyles.section}>
          {/*  courses header  */}
          <View style={homeStyles.courseHeaderContainer}>
            <Text style={homeStyles.courseHeaderLabel}>Popular Courses</Text>
            {/* <Fire width={25} height={25} /> */}
            <Text style={homeStyles.seeAllText}>See All</Text>
          </View>

          {popularLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : popularCourses && popularCourses.length > 0 ? (
            <FlatList
              data={popularCourses}
              renderItem={renderCourseItem}
              keyExtractor={item => item.id.toString()}
              horizontal
              contentContainerStyle={[
                homeStyles.courseRow,
                popularCourses.length === 0 && homeStyles.center,
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
