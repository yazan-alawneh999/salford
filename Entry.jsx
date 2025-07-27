import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootStack from './app/_layout';
import SafeScreen from './components/SafeScreen';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { COLORS } from './constants/color';
import { NavigationContainer } from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import React from 'react';

function Entry({ isAuthenticated, loading }) {
  if (loading)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeScreen>
          <StatusBar
            barStyle="dark-content"
            backgroundColor={COLORS.background}
          />
          <RootStack isAuthenticated={isAuthenticated} isLoading={loading} />
        </SafeScreen>
        <FlashMessage position="top" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default Entry;
