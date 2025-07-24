import { View, Text } from 'react-native';
import React, { use } from 'react';
import { COLORS } from '../constants/color';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SafeScreen = ({ children }) => {
  const instes = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
        paddingTop: instes.top,
      }}
    >
      {children}
    </View>
  );
};

export default SafeScreen;
