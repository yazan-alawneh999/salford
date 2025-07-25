import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import { MainStyle } from '../../assets/styles/main.styles';

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <View style={MainStyle.categoryFilterContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={MainStyle.categoryFilterScrollContent}
      >
        {categories.map(category => {
          const isSelected = selectedCategory === category.name;
          return (
            <TouchableOpacity
              key={category.id}
              style={[
                MainStyle.categoryButton,
                isSelected && MainStyle.selectedCategory,
              ]}
              onPress={() => onSelectCategory(category.name)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  MainStyle.categoryText,
                  isSelected && MainStyle.selectedCategoryText,
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
