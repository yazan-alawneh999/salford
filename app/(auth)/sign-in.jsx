import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Switch,
} from 'react-native';
import React, { useState } from 'react';
import { authStyles } from '../../assets/styles/auth.style';
import { COLORS } from '../../constants/color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import Google from '../../assets/images/Google.svg';
import Apple from '../../assets/images/Vector.svg';
import { ROUTES } from '../../constants/routes';
import { signIn } from '../../services/authService';
import { showMessage } from 'react-native-flash-message';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  // Inside component
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      return showMessage({
        message: 'Email and password are required',
        type: 'danger',
      });
    }

    setLoading(true);
    setError('');
    try {
      await signIn({ email, password });
      showMessage({ message: 'Login successful', type: 'success' });
      // Navigate to home/dashboard
      navigation.getParent()?.replace(ROUTES.Main);
    } catch (err) {
      const msg = err.response?.data?.error || 'Login failed';
      setError(msg);
      showMessage({ message: msg, type: 'danger' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={authStyles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={authStyles.keyboardView}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
      >
        <ScrollView
          contentContainerStyle={authStyles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <Text style={authStyles.title}>Login</Text>
          <Text style={authStyles.subtitle}>Enter your details to log in</Text>

          {/* FORM CONTAINER */}
          <View style={authStyles.formContainer}>
            {/* Email Input */}
            <View style={authStyles.inputContainer}>
              <Icon name="email-outline" size={20} color={COLORS.textLight} />

              <TextInput
                style={authStyles.textInput}
                placeholder="Enter email"
                placeholderTextColor={COLORS.textLight}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* PASSWORD INPUT */}
            <View style={authStyles.inputContainer}>
              {/* <View style={authStyles.leaderIconInput}> */}
              <Icon name="lock-outline" size={20} color={COLORS.textLight} />
              {/* </View> */}
              <TextInput
                style={[authStyles.textInput]}
                placeholder="Enter password"
                placeholderTextColor={COLORS.textLight}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
              />

              <TouchableOpacity
                style={authStyles.eyeButton}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Icon
                  name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                  size={22}
                  color={COLORS.textLight}
                />
              </TouchableOpacity>
            </View>

            {/* <TouchableOpacity
              // style={[
              //   authStyles.authButton,
              //   loading && authStyles.buttonDisabled,
              // ]}
              onPress={() => {}}
              disabled={loading}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={['#087E8B', '#0B3954']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[
                  authStyles.authButton,
                  loading && authStyles.buttonDisabled,
                ]}
              >
                <Text style={authStyles.buttonText}>
                  {loading ? 'Login...' : 'Login'}
                </Text>
              </LinearGradient>
            </TouchableOpacity> */}

            <TouchableOpacity
              onPress={handleLogin}
              disabled={loading}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={['#087E8B', '#0B3954']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[
                  authStyles.authButton,
                  loading && authStyles.buttonDisabled,
                ]}
              >
                <Text style={authStyles.buttonText}>
                  {loading ? 'Logging in...' : 'Login'}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            {/* remeber me section */}
            <View style={authStyles.rememberMeSection}>
              <View style={authStyles.switchContainer}>
                <Switch
                  trackColor={{ false: COLORS.textLight, true: COLORS.primary }}
                  thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={setIsEnabled}
                  value={isEnabled}
                />
                <Text style={authStyles.rememberMeTxt}>Remember Me </Text>
              </View>
              <Text style={authStyles.rememberMeTxt}>Forgot Password?</Text>
            </View>

            {/* Or sction  */}
            <View style={authStyles.orSection}>
              <Text style={authStyles.orText}>Or</Text>
            </View>

            {/* social btns */}
            <View style={authStyles.btnsSection}>
              <TouchableOpacity
                style={authStyles.socialStyleContainer}
                activeOpacity={0.6}
              >
                <Google style={authStyles.socialImg} width={18} height={18} />

                <Text style={authStyles.socialBtnsText}>
                  Sign in with Google
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={authStyles.socialStyleContainer}
                activeOpacity={0.6}
              >
                <Apple style={authStyles.socialImg} width={20} height={20} />
                <Text style={authStyles.socialBtnsText}>
                  Sign in with Apple
                </Text>
              </TouchableOpacity>
            </View>

            {/* Sign Up Link */}
            <TouchableOpacity
              style={authStyles.linkContainer}
              onPress={() => {
                navigation.navigate(ROUTES.SIGNUP);
              }}
            >
              <Text style={authStyles.linkText}>
                Don&apos;t have an account?{' '}
                <Text style={authStyles.link}>Sign up</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignInScreen;
