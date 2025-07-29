import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/color';

const { height } = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  listContent: {
    paddingBottom: 84,
  },
  centerContainer: {
    flex: 1,

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
  videoImage: {
    width: '100%',
    height: '100%',
  },
  playButton: {
    position: 'absolute',
    top: '40%',
    left: '45%',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: COLORS.white,
    padding: 8,
    borderRadius: 30,
  },
  videoContainer: {
    width: '100%',
    height: height * 0.3,
  },
  content: {
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  lessonInfo: {
    color: '#888',
    fontSize: 13,
    marginBottom: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  avatarsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: -10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  moreCircle: {
    backgroundColor: '#00758F',
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  moreText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 6,
  },
  description: {
    color: '#303030',
    fontSize: 14,
    fontWeight: '300',
  },
  weekItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  weekText: {
    marginLeft: 10,
  },
  weekTitle: {
    fontWeight: 'bold',
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
    gap: 4,
  },
  primaryCircleImage: {
    backgroundColor: COLORS.primary,
    padding: 8,
    borderRadius: 100,
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 4,
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
});
