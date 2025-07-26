import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import { homeStyles } from '../assets/styles/home.style';

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <View style={homeStyles.categoryFilterContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={homeStyles.categoryFilterScrollContent}
      >
        {categories.map(category => {
          const isSelected = selectedCategory === category.name;
          return (
            <TouchableOpacity
              key={category.id}
              style={[
                homeStyles.categoryButton,
                isSelected && homeStyles.selectedCategory,
              ]}
              onPress={() => onSelectCategory(category)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  homeStyles.categoryText,
                  isSelected && homeStyles.selectedCategoryText,
                ]}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
