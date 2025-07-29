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
  imageProfile: {
    borderRadius: 100,
  },
  cardUserContainer: {
    flexDirection: 'row',
    gap: 12,
    padding: 12,
    backgroundColor: COLORS.white,
    borderRadius: 24,
    marginBottom: 30,
  },
  imagePro: {
    borderRadius: 100,
  },
  userDataColumn: {
    justifyContent: 'center',
    gap: 4,
  },
  usreName: {
    fontSize: 18,
    color: COLORS.shadow,
    fontWeight: '500',
  },
  userEmail: {
    fontSize: 12,
    color: COLORS.primary,
  },
  profileOptionRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  primaryCircleIcon: {
    backgroundColor: COLORS.primary,
    padding: 6,
    borderRadius: 100,
  },
  optionTitle: {
    fontWeight: '500',
    color: COLORS.shadow,
  },
  description: {
    color: '#303030',
    fontSize: 14,
    marginBottom: 20,
    fontWeight: '400',
  },
  title: {
    color: 'black',
    fontWeight: '600',
    fontSize: 24,
  },
  typeTitle: {
    color: '#6E6E6E',
    fontSize: 16,
    fontWeight: '600',
  },
  optionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radio: {
    width: 12,
    height: 12,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: '#ccc',
    marginRight: 8,
  },
  radioSelected: {
    borderColor: COLORS.primaryDark,
    backgroundColor: COLORS.white,
  },
});
