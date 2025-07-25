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
import MainStyle from '../../assets/styles/main.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Graduation from '../../assets/images/graduate-bat.svg';
import { COLORS } from '../../constants/color';
import CategoryFilter from '../../components/CategoryFilter';
const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  return (
    <View style={MainStyle.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {}}
            tintColor={COLORS.primary}
          />
        }
        contentContainerStyle={MainStyle.scrollContent}
      >
        {/* header section  */}
        <View style={MainStyle.headerSection}>
          <Text style={MainStyle.helloTxt}>Hello,Ahmad</Text>
          <TouchableOpacity style={MainStyle.notificationIconWraper}>
            <Icon name="notification-outline" size={20} />
          </TouchableOpacity>
          <TouchableOpacity style={MainStyle.homePrfilePicContainer}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={MainStyle.homeProfileImg}
              resizeMethod="cover"
            />
          </TouchableOpacity>
        </View>

        {/* titles section */}
        <View style={MainStyle.titlesContainer}>
          {/* regulart title section */}
          <View style={MainStyle.regularTitleContainer}>
            <Text style={MainStyle.regularTitleTxt}>Lets's Learn</Text>
            <Graduation size={20} style={MainStyle.graduationVectorStyle} />
          </View>
          {/* bold title */}
          <Text style={MainStyle.boldTitle}>Let’s learn something new</Text>
        </View>

        {/* search section */}
        <View style={MainStyle.searchInputContainer}>
          <Icon name="search" size={20} />
          <TextInput style={MainStyle.input} placeholder="Search Course" />
          <Icon name="filter" size={20} color={COLORS.primary} />
        </View>
      </ScrollView>

      {/* categories  */}
      {/* {categories.length > 0 && ( */}
      <CategoryFilter
        categories={[]}
        selectedCategory={'selectedCategory'}
        onSelectCategory={() => {}}
      />
      {/* )} */}
    </View>
  );
};

export default HomeScreen;
