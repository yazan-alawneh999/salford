import { View, Text, Image } from 'react-native';
import React from 'react';
import { homeStyles } from '../assets/styles/home.style';

const course = {
  id: 1,
  category_id: 2,
  title_name: 'UI & UX Design Basics',
  lecturer_name: 'Jane Smith',
  price: 49.99,
  image_url:
    'https://images.unsplash.com/photo-1581091870627-3c74df72b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  video_url: 'https://www.w3schools.com/html/mov_bbb.mp4',
  total_chapters: 12,
  popularity_type: 'popular',
};

const CourseItem = ({ course }) => {
  return (
    <View style={homeStyles.courseContainer}>
      <View style={homeStyles.courseCard}>
        <Image
          source={{ uri: course.image_url }}
          style={homeStyles.courseImage}
          resizeMode="cover"
        />
        <View style={homeStyles.courseCardstackLayout}>
          <View style={homeStyles.priceContainer}>
            <Text style={homeStyles.textPrice}> ${course.price}</Text>
          </View>
        </View>
      </View>
      <Text>{course.title_name}</Text>
    </View>
  );
};

export default CourseItem;
