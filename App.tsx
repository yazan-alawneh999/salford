import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootStack from './app/_layout';
import SafeScreen from './components/SafeScreen';
import { StatusBar } from 'react-native';
import { COLORS } from './constants/color';
import { NavigationContainer } from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import { AuthProvider } from './hooks/useAuth';

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthProvider>
          <SafeScreen>
            <StatusBar
              barStyle="dark-content"
              backgroundColor={COLORS.background}
            />
            <RootStack />
          </SafeScreen>
          <FlashMessage position="top" />
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
