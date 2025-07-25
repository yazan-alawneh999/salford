import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../constants/color';

const { height } = Dimensions.get('window');

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  leaderIconInput: {
    marginStart: 8,
  },
  tailIconInput: {
    marginEnd: 8,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  imageContainer: {
    height: height * 0.3,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 320,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginTop: height * 0.04,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textLight,
    textAlign: 'center',
    marginBottom: height * 0.08,
  },
  formContainer: {
    flex: 1,
  },
  switchContainer: {
    flexDirection: 'row',

    alignContent: 'center',
  },
  inputContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    borderWidth: 0.5,
    height: 50,
    borderColor: COLORS.border,
  },
  textInput: {
    fontSize: 16,
    color: COLORS.text,

    flex: 1,
    paddingEnd: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  eyeButton: {
    marginEnd: 8,
  },
  authButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    borderRadius: 50,
    marginTop: 20,
    marginBottom: 18,
  },
  buttonDisabled: {
    opacity: 0.7,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.white,
    textAlign: 'center',
  },
  linkContainer: {
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 30,
  },
  linkText: {
    fontSize: 16,
    color: COLORS.textLight,
  },
  link: {
    color: COLORS.primary,
    fontWeight: '600',
  },
  rememberMeSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rememberMeTxt: {
    fontSize: 12,
    color: COLORS.textLight,
    paddingTop: 5,
  },
  orSection: {
    marginVertical: 30,
  },
  orText: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 20,
  },
  btnsSection: { marginBottom: 8 },
  socialStyleContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    gap: 4,
    marginBottom: 12,
  },
  socialImg: {
    width: 18,
    height: 18,
  },
});
