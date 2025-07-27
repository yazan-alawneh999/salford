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

import { signUp } from '../../services/authService';
import { showMessage } from 'react-native-flash-message';
import { ROUTES } from '../../constants/routes';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const handleSignUp = async () => {
    if (!email || !password || !confirmPass) {
      return showMessage({
        message: 'All fields are required',
        type: 'danger',
      });
    }

    if (password !== confirmPass) {
      return showMessage({ message: 'Passwords do not match', type: 'danger' });
    }

    setLoading(true);
    try {
      await signUp({ email, password });
      showMessage({ message: 'Registration successful', type: 'success' });
      navigation.replace(ROUTES.Main);
    } catch (err) {
      const msg = err.response?.data?.error || 'Signup failed';
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
          <Text style={authStyles.title}>Sign up</Text>
          <Text style={authStyles.subtitle}>Enter your details to Sign up</Text>

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

            {/* CONFIRM PASSWORD INPUT */}
            <View style={authStyles.inputContainer}>
              {/* <View style={authStyles.leaderIconInput}> */}
              <Icon name="lock-outline" size={20} color={COLORS.textLight} />
              {/* </View> */}
              <TextInput
                style={[authStyles.textInput]}
                placeholder="Confirm password"
                placeholderTextColor={COLORS.textLight}
                value={confirmPass}
                onChangeText={setConfirmPass}
                secureTextEntry={!showConfirmPassword}
                autoCapitalize="none"
              />

              <TouchableOpacity
                style={authStyles.eyeButton}
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
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
              onPress={handleSignUp}
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
                  {loading ? 'Signing up...' : 'Sign up'}
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* Sign Up Link */}
            <TouchableOpacity
              style={authStyles.linkContainer}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Text style={authStyles.linkText}>
                Joined us before ? <Text style={authStyles.link}>Sign In</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignUpScreen;
