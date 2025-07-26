import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../constants/color';

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2;

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeSection: {
    paddingTop: 20,
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  profileImgContainer: {
    borderRadius: 100,
    overflow: 'hidden',
    backgroundColor: 'gray',
    borderColor: COLORS.white,
    borderWidth: 2,
  },

  homeProfileImg: {
    height: 40,
    width: 40,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: '400',
    color: COLORS.text,
    letterSpacing: -0.5,
    flex: 1,
  },
  notificationIconWraper: {
    marginHorizontal: 8,
    borderRadius: 1000,
    backgroundColor: COLORS.white,
    padding: 8,
  },

  titlesContainer: {
    paddingHorizontal: 20,

    marginBottom: 40,
  },
  regularTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  regularTitleTxt: {
    fontSize: 42,
    fontWeight: '200',
    color: COLORS.shadow,
  },
  boldTitle: {
    fontSize: 42,
    fontWeight: '600',
    color: COLORS.shadow,
    marginTop: -8,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 50,
    paddingHorizontal: 16,
    marginHorizontal: 20,
  },
  input: {
    paddingVertical: 8,
    flex: 1,
    marginEnd: 2,
    fontWeight: '200',
    paddingHorizontal: 8,
  },
  section: {
    marginBottom: 30,
  },
  courseHeaderContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  courseHeaderLabel: {
    fontWeight: '600',
    color: COLORS.shadow,
    fontSize: 21,
  },
  seeAllText: {
    flex: 1,
    textAlign: 'right',
    alignItems: 'center',
    letterSpacing: -0.5,
    color: COLORS.primary,
    fontWeight: '400',
  },
  featuredCard: {
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: COLORS.card,
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 12,
  },
  featuredImageContainer: {
    height: 240,
    backgroundColor: COLORS.primary,
    position: 'relative',
  },
  featuredImage: {
    width: '100%',
    height: '100%',
  },
  featuredOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'space-between',
    padding: 20,
  },
  featuredBadge: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  featuredBadgeText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '600',
  },
  featuredContent: {
    justifyContent: 'flex-end',
  },
  featuredTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.white,
    marginBottom: 12,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  featuredMeta: {
    flexDirection: 'row',
    gap: 16,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 14,
    color: COLORS.white,
    fontWeight: '600',
  },
  recipesSection: {
    paddingHorizontal: 16,
    marginTop: 8,
  },
  sectionHeader: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: COLORS.text,
    letterSpacing: -0.5,
  },
  recipesGrid: {
    gap: 16,
  },
  row: {
    justifyContent: 'space-between',
    gap: 16,
  },
  emptyState: {
    alignItems: 'center',
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
  categoryFilterContainer: {
    marginVertical: 16,
  },
  categoryFilterScrollContent: {
    paddingHorizontal: 20,

    gap: 4,
  },
  categoryButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.card,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 50,

    minWidth: 80,
  },
  selectedCategory: {
    backgroundColor: COLORS.primaryDark,

    shadowOpacity: 0.15,
  },

  categoryText: {
    fontSize: 12,
    fontWeight: '400',
    color: COLORS.primary,
    textAlign: 'center',
  },
  selectedCategoryText: {
    color: COLORS.white,
  },
});

export const recipeCardStyles = StyleSheet.create({
  container: {
    width: cardWidth,
    backgroundColor: COLORS.card,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
    height: 140,
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.border,
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 4,
    lineHeight: 20,
  },
  description: {
    fontSize: 12,
    color: COLORS.textLight,
    marginBottom: 8,
    lineHeight: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 11,
    color: COLORS.textLight,
    marginLeft: 4,
    fontWeight: '500',
  },
  servingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  servingsText: {
    fontSize: 11,
    color: COLORS.textLight,
    marginLeft: 4,
    fontWeight: '500',
  },
});
