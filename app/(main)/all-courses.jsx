import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import { searchStyles } from '../../assets/styles/search.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../constants/color';
import {
  useCoursesQuery,
  useCourseByNameQuery,
} from '../../services/apiService';
import AllCoursesItem from '../../components/AllCoursesItem';
import LoadingSpinner from '../../components/LoadingSpinner';
import { useDebounce } from '../../hooks/useDebounce';
import { useEffect, useState } from 'react';
import FloatingMenu from '../../components/FloatingMenu';

const SearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const {
    data: courses,
    isLoading,
    isFetching,
  } = useCourseByNameQuery(debouncedSearchQuery);
  const { data: initialCourses, isLoading: initialLoading } = useCoursesQuery();

  const displayCourses = searchQuery ? courses : initialCourses;

  return (
    <View style={searchStyles.container}>
      <View style={searchStyles.searchSection}>
        <View style={searchStyles.searchInputContainer}>
          <Icon
            name="search-outline"
            size={20}
            color={COLORS.textLight}
            style={searchStyles.searchIcon}
          />
          <TextInput
            style={searchStyles.input}
            placeholder="Search courses ..."
            placeholderTextColor={COLORS.textLight}
            value={searchQuery}
            onChangeText={setSearchQuery}
            returnKeyType="search"
          />

          {searchQuery.length > 0 && (
            <TouchableOpacity
              onPress={() => setSearchQuery('')}
              style={searchStyles.clearButton}
            >
              <Icon name="close-circle" size={20} color={COLORS.textLight} />
            </TouchableOpacity>
          )}

          <TouchableOpacity>
            <Icon name="options-outline" size={20} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={searchStyles.resultsSection}>
        {isLoading || isFetching ? (
          <View style={searchStyles.loadingContainer}>
            <LoadingSpinner message="Searching courses..." size="small" />
          </View>
        ) : (
          <FlatList
            data={displayCourses}
            renderItem={({ item }) => <AllCoursesItem course={item} />}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={searchStyles.coursesGrid}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<NoResultsFound />}
          />
        )}
      </View>
      <FloatingMenu navigation={navigation} />
    </View>
  );

  function NoResultsFound() {
    return (
      <View style={searchStyles.emptyState}>
        <Icon name="search-outline" size={64} color={COLORS.textLight} />
        <Text style={searchStyles.emptyTitle}>No courses found</Text>
        <Text style={searchStyles.emptyDescription}>
          Try adjusting your search or try different keywords
        </Text>
      </View>
    );
  }
};
export default SearchScreen;
