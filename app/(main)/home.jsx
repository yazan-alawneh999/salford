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
import React, { useEffect, useState } from 'react';
import { homeStyles } from '../../assets/styles/home.style';
import Icon from 'react-native-vector-icons/Ionicons';
import Graduation from '../../assets/images/graduate-bat.svg';
import Fire from '../../assets/images/fire.svg';
import { COLORS } from '../../constants/color';
import CategoryFilter from '../../components/CategoryFilter';
import {
  getCategories,
  getTrendingCourses,
  getPopularCourses,
  getCoursesByCategoryId,
} from '../../services/apiService';
import CourseItem from '../../components/CourseItem';
import { IMAGE_BASE_URL } from '../../services/api';
import { useSelector } from 'react-redux';
import FloatingMenu from '../../components/FloatingMenu';
import { ROUTES } from '../../constants/routes';

const HomeScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [trendingCourses, setTrendingCourses] = useState([]);
  const [popularCourses, setPopularCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { data: profile } = useSelector(state => state.profile);

  console.log(profile);

  const fetchData = async () => {
    try {
      const [catRes, trendingRes, popularRes] = await Promise.all([
        getCategories(),
        getTrendingCourses(),
        getPopularCourses(),
      ]);
      if (!selectedCategory) {
        setSelectedCategory(catRes[0].name);
      }

      setCategories(catRes);
      setTrendingCourses(trendingRes);
      setPopularCourses(popularRes);
    } catch (err) {
      console.error('Failed to load home data:', err.message);
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const loadCategoryCourses = async category => {
    try {
      const courses = await getCoursesByCategoryId(category.id);

      const trendingCourses = courses.filter(
        course => course.popularity_type === 'trending',
      );

      const popularCourses = courses.filter(
        course => course.popularity_type === 'popular',
      );

      setTrendingCourses(trendingCourses);
      setPopularCourses(popularCourses);
    } catch (error) {
      console.error('Error loading category courses:', error);
      setTrendingCourses([]);
      setPopularCourses([]);
    }
  };
  const handleGoSearch = () => {
    navigation.navigate(ROUTES.SEARCH);
  };

  const handleCategorySelect = async category => {
    setSelectedCategory(category.name);
    setCourseLoading(true);
    await loadCategoryCourses(category);
    setCourseLoading(false);
  };

  const handleCoursePressed = course => {
    navigation.navigate(ROUTES.DETAILS, { courseId: course.id });
  };
  if (loading) {
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
            refreshing={refreshing}
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
              <Image
                source={{ uri: `${IMAGE_BASE_URL}/${profile?.image_url}` }}
                style={homeStyles.homeProfileImg}
                resizeMethod="cover"
                transition={300}
              />
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
          {categories.length > 0 && (
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
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

          {trendingCourses.length > 0 ? (
            <FlatList
              data={trendingCourses}
              renderItem={({ item }) => (
                <CourseItem course={item} onClick={handleCoursePressed} />
              )}
              keyExtractor={item => item.id.toString()}
              horizontal
              contentContainerStyle={[
                homeStyles.courseRow,
                trendingCourses.length === 0 && homeStyles.center,
              ]}
              showsHorizontalScrollIndicator={false}
              ListEmptyComponent={
                <View style={homeStyles.emptyState}>
                  <Icon name="book-outline" size={64} color={COLORS.primary} />
                  <Text style={homeStyles.emptyTitle}>No Courses found</Text>
                  <Text style={homeStyles.emptyDescription}>
                    Try a different category
                  </Text>
                </View>
              }
            />
          ) : (
            <View style={homeStyles.emptyState}>
              <Icon name="book-outline" size={64} color={COLORS.primary} />
              <Text style={homeStyles.emptyTitle}>No Courses found</Text>
              <Text style={homeStyles.emptyDescription}>
                Try a different category
              </Text>
            </View>
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

          {popularCourses.length > 0 ? (
            <FlatList
              data={popularCourses}
              renderItem={({ item }) => (
                <CourseItem course={item} onClick={handleCoursePressed} />
              )}
              keyExtractor={item => item.id.toString()}
              horizontal
              contentContainerStyle={[
                homeStyles.courseRow,
                popularCourses.length === 0 && homeStyles.center,
              ]}
              showsHorizontalScrollIndicator={false}
              ListEmptyComponent={
                <View style={homeStyles.emptyState}>
                  <Icon name="book-outline" size={64} color={COLORS.primary} />
                  <Text style={homeStyles.emptyTitle}>No Courses found</Text>
                  <Text style={homeStyles.emptyDescription}>
                    Try a different category
                  </Text>
                </View>
              }
            />
          ) : (
            <View style={homeStyles.emptyState}>
              <Icon name="book-outline" size={64} color={COLORS.primary} />
              <Text style={homeStyles.emptyTitle}>No Courses found</Text>
              <Text style={homeStyles.emptyDescription}>
                Try a different category
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
