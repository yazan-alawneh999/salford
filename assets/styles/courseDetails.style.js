import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 20,
  },
  listContent: {
    paddingBottom: 84,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    paddingVertical: 40,
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '400',
    color: '#333',
  },
  featuredCourse: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  courseTag: {
    color: '#6c757d',
    fontSize: 14,
    marginBottom: 5,
  },
  courseTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 10,
  },
  courseDescription: {
    color: '#495057',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
    paddingTop: 15,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212529',
  },
  statLabel: {
    color: '#6c757d',
    fontSize: 14,
  },
  courseCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 24,
  },
  courseInfo: {
    flex: 1,
  },
  courseName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#212529',
    marginBottom: 5,
  },
  courseMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  metaText: {
    color: '#6c757d',
    fontSize: 14,
  },
  errorText: {
    color: '#dc3545',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  retryButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  retryText: {
    color: '#fff',
    fontSize: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: 10,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#000',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaText: {
    fontSize: 13,
    color: '#666',
    marginLeft: 4,
    marginRight: 8,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#999',
    marginHorizontal: 4,
  },
  rightColumn: {
    alignItems: 'flex-end',
    gap: 12,
  },
  duration: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  iconCircle: {
    backgroundColor: COLORS.white, // teal color
    padding: 8,
    borderRadius: 100,
  },

  iconCircleCard: {
    backgroundColor: COLORS.primary, // teal color
    padding: 4,
    borderRadius: 50,
  },
  titles: {
    marginBottom: 30,
  },
  courseNumTile: {
    fontWeight: '600',
    fontSize: 14,
  },
  courseTitleName: {
    fontWeight: '700',
    fontSize: 22,
    color: COLORS.shadow,
    marginBottom: 4,
  },
  courseDesc: {
    fontWeight: '300',
    marginBottom: 12,
  },
  titleChippers: {
    flexDirection: 'row',
    gap: 12,
  },
  courseCount: {
    backgroundColor: COLORS.primaryDark,
    color: COLORS.white,
    fontWeight: '400',
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  lessonsCount: {
    backgroundColor: '#FAAD3B',
    color: COLORS.white,
    fontWeight: '400',
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
});
