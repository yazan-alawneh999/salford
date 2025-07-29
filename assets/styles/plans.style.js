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
  iconCirclePremum: {
    backgroundColor: COLORS.white,
    borderRadius: 100,
    padding: 2,
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
  cardUserContainer: {
    padding: 12,
    backgroundColor: COLORS.white,
    borderRadius: 24,
    marginBottom: 15,
    paddingVertical: 20,
  },
  premumContainer: {
    padding: 15,
    borderRadius: 24,
    marginBottom: 15,
    paddingTop: 30,
  },
  title: {
    fontWeight: '400',
    fontSize: 27,
    color: COLORS.shadow,
    marginBottom: 4,
  },
  dataRow: {
    flexDirection: 'row',
    alignItems: 'start',
    justifyContent: 'space-between',
  },
  priceTitle: {
    fontWeight: 'bold',
    fontSize: 26,
    color: COLORS.primary,
  },
  description: {
    fontSize: 12,
    color: COLORS.hintDark,
    flex: 1,
    paddingEnd: 8,
  },
  duration: {
    fontSize: 13,
    color: COLORS.hintDark,
    flex: 1,
    textAlign: 'right',
    paddingEnd: 8,
  },
  rowFeature: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
  button: {
    backgroundColor: COLORS.white,
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
    marginTop: 16,
  },
  buttonText: {
    fontSize: 14,
    color: '#0B3954',

    fontWeight: '600',
  },
  premiumFeatureTxt: {
    color: COLORS.white,
    fontSize: 14,
  },
});
