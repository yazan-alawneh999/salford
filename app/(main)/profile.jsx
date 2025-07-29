import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from '../../assets/styles/profile.style';
import { homeStyles } from '../../assets/styles/home.style'; // Adjust path if needed
import { useSelector } from 'react-redux';
import { COLORS } from '../../constants/color';
import { IMAGE_BASE_URL } from '../../services/api';
import { ROUTES } from '../../constants/routes';
import FloatingMenu from '../../components/FloatingMenu';

const options = [
  {
    title: 'Your Current Courses',
    onClick: navigation => {
      navigation.navigate(ROUTES.CURRENT_COURSES);
    },
  },

  {
    title: 'Your History',
    onClick: navigation => {},
  },

  {
    title: 'Certifications Earned',
    onClick: navigation => {},
  },

  {
    title: 'Settings',
    onClick: navigation => {},
  },
];

const ProfileScreen = ({ navigation }) => {
  const { profile } = useSelector(state => state.profile);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={homeStyles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.iconCircle}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-back-outline" size={20} color={COLORS.shadow} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Profile</Text>

          <TouchableOpacity style={styles.iconCircle}>
            <Icon
              name="notifications-outline"
              size={20}
              color={COLORS.shadow}
            />
          </TouchableOpacity>
        </View>

        {/* user data card  */}
        <View style={styles.cardUserContainer}>
          {profile && (
            <Image
              style={styles.imageProfile}
              source={{ uri: `${IMAGE_BASE_URL}/${profile.image_url}` }}
              height={60}
              width={60}
              transition={300}
              resizeMethod="cover"
            />
          )}
          <View style={styles.userDataColumn}>
            <Text style={styles.usreName}>
              {profile ? profile.display_name : 'Guest'}
            </Text>
            <Text style={styles.userEmail}>
              {profile ? profile.email : 'Guest'}
            </Text>
          </View>
        </View>
        {/* Options */}
        {options.map(opt => (
          <ProfileCard key={opt.title} opt={opt} navigation={navigation} />
        ))}
      </ScrollView>
      <FloatingMenu navigation={navigation} />
    </View>
  );
};

export default ProfileScreen;

export const ProfileCard = ({ opt, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.cardUserContainer}
      activeOpacity={0.7}
      onPress={() => opt.onClick(navigation)}
    >
      <View style={styles.profileOptionRow}>
        <Text style={styles.optionTitle}>{opt.title}</Text>
        <View style={styles.primaryCircleIcon}>
          <MaterialCommunityIcons
            name="arrow-top-right"
            size={20}
            color={COLORS.white}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
