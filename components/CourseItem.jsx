import { View, Text, Image } from 'react-native';
import React from 'react';
import { homeStyles } from '../assets/styles/home.style';

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
