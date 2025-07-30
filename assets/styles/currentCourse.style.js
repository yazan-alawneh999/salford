import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 20,
    fontFamily: 'ClashDisplay-Regular',
  },
  iconCircle: {
    backgroundColor: COLORS.white,
    borderRadius: 100,
    padding: 8,
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
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 64,
    paddingHorizontal: 32,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.text,
    marginTop: 16,
    marginBottom: 8,
  },
  emptyDescription: {
    fontSize: 14,
    color: COLORS.textLight,
    textAlign: 'center',
  },
  cardUserContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 24,
    padding: 12,
    marginBottom: 30,
  },
  hint: {
    fontSize: 10,
    marginBottom: 6,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  progressPercentageIndicator: {
    marginBottom: 8,
    fontWeight: '700',
    color: COLORS.primary,
  },
  timeHintRow: {
    flexDirection: 'row',
    alignItems: 'center',

    gap: 4,
  },
  timeHintText: {
    fontSize: 10,
    color: COLORS.textLight,
  },

  courseMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  courseTitleColumn: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
  titleLayout: {
    gap: 2,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.shadow,
  },
  lectureName: {
    fontSize: 12,
    fontWeight: '800',
    color: COLORS.primary,
  },
  lessonsMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 10,
  },
  lessonsNumTxt: {
    fontWeight: '700',
    fontSize: 12,
    color: COLORS.text,
    marginStart: 4,
  },
  lessonsDotSeparator: {
    width: 5,
    height: 5,
    backgroundColor: COLORS.text,
    marginHorizontal: 4,
    borderRadius: 8,
    marginTop: 2,
  },
  estimatedCourseTime: {
    fontSize: 11,
    color: COLORS.text,
    fontWeight: '600',
  },
  progressBarContainer: {
    height: 10,
    borderRadius: 6,
    backgroundColor: '#e0e0e0',
    position: 'relative',
    overflow: 'hidden',
    marginBottom: 20,
  },
  progressBar: {
    position: 'absolute',
    height: '100%',
    backgroundColor: '#004e66',
    borderRadius: 6,
  },
  dot: {
    position: 'absolute',
    top: '55%',

    width: 4,
    height: 4,
    borderRadius: 3,
    backgroundColor: COLORS.white,
    transform: [{ translateY: -3 }],
  },
  courseImageContainer: {
    borderRadius: 24,
    overflow: 'hidden',
    width: 114,
    height: 105,
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.primary,
  },
  listContent: {
    paddingBottom: 70,
  },
});
