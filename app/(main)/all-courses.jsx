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
import { getCourseByName, getCourses } from '../../services/apiService';
import AllCoursesItem from '../../components/AllCoursesItem';
import LoadingSpinner from '../../components/LoadingSpinner';
import { useDebounce } from '../../hooks/useDebounce';
import { useEffect, useState } from 'react';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  // const [initialLoading, setInitialLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const performSearch = async query => {
    // if no search query
    if (!query.trim()) {
      return await getCourses();
    }

    // search by name first, then by ingredient if no results

    const nameResults = await getCourseByName(query);

    return nameResults;
  };

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const results = await performSearch('');
        setCourses(results);
      } catch (error) {
        console.error('Error loading initial data:', error);
      } finally {
        setInitialLoading(false);
      }
    };

    loadInitialData();
  }, []);

  useEffect(() => {
    // if (initialLoading) return;

    const handleSearch = async () => {
      setLoading(true);

      try {
        const results = await performSearch(debouncedSearchQuery);
        setCourses(results);
      } catch (error) {
        console.error('Error searching:', error);
        setCourses([]);
      } finally {
        setLoading(false);
      }
    };

    handleSearch();
  }, [debouncedSearchQuery]);

  // if (initialLoading) return <LoadingSpinner message="Loading courses..." />;
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
        {/* <View style={searchStyles.resultsHeader}>
          <Text style={searchStyles.resultsTitle}>
            {searchQuery ? `Results for "${searchQuery}"` : 'Popular courses'}
          </Text>
          <Text style={searchStyles.resultsCount}>{courses.length} found</Text>
        </View> */}

        {loading ? (
          <View style={searchStyles.loadingContainer}>
            <LoadingSpinner message="Searching courses..." size="small" />
          </View>
        ) : (
          <FlatList
            data={courses}
            renderItem={({ item }) => <AllCoursesItem course={item} />}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={searchStyles.coursesGrid}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<NoResultsFound />}
          />
        )}
      </View>
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
