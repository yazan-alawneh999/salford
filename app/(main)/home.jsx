import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, { useState } from 'react';
import { homeStyles } from '../../assets/styles/home.style';
import Icon from 'react-native-vector-icons/Ionicons';
import Graduation from '../../assets/images/graduate-bat.svg';
import Fire from '../../assets/images/fire.svg';
import { COLORS } from '../../constants/color';
import CategoryFilter from '../../components/CategoryFilter';

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [categories, setCategories] = useState([
    { name: 'test1' },
    { name: 'test1' },
    { name: 'test1' },
    { name: 'test1' },
  ]);
  return (
    <View style={homeStyles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {}}
            tintColor={COLORS.primary}
          />
        }
        contentContainerStyle={homeStyles.scrollContent}
      >
        {/* header section  */}
        <View style={homeStyles.welcomeSection}>
          <Text style={homeStyles.welcomeText}>Hello,Ahmad</Text>
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
                source={require('../../assets/images/logo.png')}
                style={homeStyles.homeProfileImg}
                resizeMethod="cover"
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
        <View style={homeStyles.searchInputContainer}>
          <Icon name="search-outline" size={20} color={COLORS.hint} />

          <TextInput
            style={homeStyles.input}
            placeholder="Search Course"
            placeholderTextColor={COLORS.hint}
          />
          <TouchableOpacity>
            <Icon name="filter-outline" size={20} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
        {/* categories section */}
        <View style={homeStyles.section}>
          {categories.length > 0 && (
            <CategoryFilter
              categories={categories}
              selectedCategory={'selectedCategory'}
              onSelectCategory={() => {}}
            />
          )}
        </View>
        {/* courses section */}
        <View style={homeStyles.section}>
          <View style={homeStyles.courseHeaderContainer}>
            <Text style={homeStyles.courseHeaderLabel}>Trending Courses</Text>
            <Fire width={25} height={25} />
            <Text style={homeStyles.seeAllText}>See All</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
