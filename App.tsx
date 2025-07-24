import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootStack from './app/_layout';
import SafeScreen from './components/safeScreen';
import { StatusBar } from 'react-native';
import { COLORS } from './constants/color';

function App() {
  return (
    <SafeAreaProvider>
      <SafeScreen>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={COLORS.background}
        />
        <RootStack />
      </SafeScreen>
    </SafeAreaProvider>
  );
}

export default App;
