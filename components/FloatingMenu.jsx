import React, { useState, useRef } from 'react';
import { View, StyleSheet, Dimensions, Platform } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-circular-action-menu';
import { COLORS } from '../constants/color';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../constants/routes';

const { width, height } = Dimensions.get('window');

export default function FloatingMenu({ navigation }) {
  const [open, setOpen] = useState(false);

  const actionButtonRef = useRef(null);
  const radius = 120;

  const centerX = width / 2;
  const centerY = height - 100;

  const handleMenuToggle = isOpen => {
    setOpen(isOpen);
  };

  return (
    <>
      {/* Circular blur background */}
      {open && (
        <View style={styles.blurContainer}>
          <View
            style={[
              styles.blurWrapper,
              {
                width: radius * 2,
                height: radius * 2,
                borderRadius: radius,
                left: centerX - radius,
                top: centerY + radius - 175,
              },
            ]}
          >
            <BlurView
              style={StyleSheet.absoluteFill}
              blurType="light"
              blurAmount={40}
              reducedTransparencyFallbackColor="white"
            />
          </View>
        </View>
      )}

      {/* FAB centered at bottom of blur */}
      <View
        style={[
          styles.menuContainer,
          {
            width: 56,
            height: 56,
            left: centerX - 28,
            top: centerY + radius - 74,
          },
        ]}
      >
        <ActionButton
          ref={actionButtonRef}
          position="center"
          buttonColor={COLORS.primary}
          offsetY={0}
          spacing={10}
          outRangeScale={1}
          onPress={() => handleMenuToggle(!open)}
          onOpen={() => handleMenuToggle(true)}
          onClose={() => handleMenuToggle(false)}
          backdrop={<></>}
        >
          <ActionButton.Item
            buttonColor={COLORS.white}
            title="Grid"
            onPress={() => {
              console.log('Grid tapped');
              navigation.navigate(ROUTES.SEARCH);
              handleMenuToggle(false);
            }}
          >
            <Icon name="grid-outline" style={[styles.icon, styles.iconDark]} />
          </ActionButton.Item>

          <ActionButton.Item
            buttonColor={COLORS.white}
            title="Bookmark"
            onPress={() => {
              console.log('Bookmark tapped');
              handleMenuToggle(false);
            }}
          >
            <Icon
              name="bookmark-outline"
              style={[styles.icon, styles.iconDark]}
            />
          </ActionButton.Item>

          <ActionButton.Item
            buttonColor={COLORS.white}
            title="User"
            onPress={() => {
              console.log('User tapped');
              navigation.navigate(ROUTES.PROFILE);
              handleMenuToggle(false);
            }}
          >
            <Icon
              name="person-outline"
              style={[styles.icon, styles.iconDark]}
            />
          </ActionButton.Item>

          <ActionButton.Item
            buttonColor={COLORS.white}
            title="Settings"
            onPress={() => {
              console.log('Settings tapped');
              handleMenuToggle(false);
            }}
          >
            <Icon
              name="settings-outline"
              style={[styles.icon, styles.iconDark]}
            />
          </ActionButton.Item>

          <ActionButton.Item
            buttonColor={COLORS.primary}
            title="Home"
            onPress={() => {
              console.log('Home tapped');
              navigation.navigate(ROUTES.HOME);
              handleMenuToggle(false);
            }}
          >
            <Icon name="home-outline" style={[styles.icon, styles.iconLight]} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 22,
  },
  iconDark: {
    color: COLORS.primary,
  },
  iconLight: {
    color: COLORS.white,
  },
  closeIconWrapper: {
    backgroundColor: COLORS.white,
    borderRadius: 30,
    padding: 6,
  },
  blurContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurWrapper: {
    position: 'absolute',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Platform.OS === 'android' ? '#ffffffcc' : 'transparent',
  },
  menuContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
