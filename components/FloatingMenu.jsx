import React, { useState, useRef } from 'react';
import { View, StyleSheet, Dimensions, Platform } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-circular-action-menu';
import { COLORS } from '../constants/color';
import { useRoute } from '@react-navigation/native';

import { ROUTES } from '../constants/routes';

const { width, height } = Dimensions.get('window');

export default function FloatingMenu({ navigation }) {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const route = useRoute();
  const currentRoute = route.name;

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
          {/* Grid */}
          <ActionButton.Item
            buttonColor={
              currentRoute === ROUTES.SEARCH ? COLORS.primary : COLORS.white
            }
            title="Grid"
            onPress={() => {
              if (currentRoute !== ROUTES.SEARCH) {
                navigation.navigate(ROUTES.SEARCH);
              }
              handleMenuToggle(false);
            }}
          >
            <Icon
              name="grid-outline"
              style={[
                styles.icon,
                currentRoute === ROUTES.SEARCH
                  ? styles.iconLight
                  : styles.iconDark,
              ]}
            />
          </ActionButton.Item>

          {/* Bookmark */}
          <ActionButton.Item
            buttonColor={
              currentRoute === ROUTES.BOOKMARK ? COLORS.primary : COLORS.white
            }
            title="Bookmark"
            onPress={() => {
              if (currentRoute !== ROUTES.BOOKMARK) {
                navigation.navigate(ROUTES.SUBSCRIPTIONS_PLAN);
              }
              handleMenuToggle(false);
            }}
          >
            <Icon
              name="bookmark-outline"
              style={[
                styles.icon,
                currentRoute === ROUTES.BOOKMARK
                  ? styles.iconLight
                  : styles.iconDark,
              ]}
            />
          </ActionButton.Item>

          {/* User */}
          <ActionButton.Item
            buttonColor={
              currentRoute === ROUTES.PROFILE ? COLORS.primary : COLORS.white
            }
            title="User"
            onPress={() => {
              if (currentRoute !== ROUTES.PROFILE) {
                navigation.navigate(ROUTES.PROFILE);
              }
              handleMenuToggle(false);
            }}
          >
            <Icon
              name="person-outline"
              style={[
                styles.icon,
                currentRoute === ROUTES.PROFILE
                  ? styles.iconLight
                  : styles.iconDark,
              ]}
            />
          </ActionButton.Item>

          {/* Settings */}
          <ActionButton.Item
            buttonColor={
              currentRoute === ROUTES.SETTINGS ? COLORS.primary : COLORS.white
            }
            title="Settings"
            onPress={() => {
              // if (currentRoute !== ROUTES.SETTINGS) {
              //   navigation.navigate(ROUTES.SETTINGS);
              // }
              handleMenuToggle(false);
            }}
          >
            <Icon
              name="settings-outline"
              style={[
                styles.icon,
                currentRoute === ROUTES.SETTINGS
                  ? styles.iconLight
                  : styles.iconDark,
              ]}
            />
          </ActionButton.Item>

          {/* Home */}
          <ActionButton.Item
            buttonColor={
              currentRoute === ROUTES.HOME ? COLORS.primary : COLORS.white
            }
            title="Home"
            onPress={() => {
              if (currentRoute !== ROUTES.HOME) {
                navigation.navigate(ROUTES.HOME);
              }
              handleMenuToggle(false);
            }}
          >
            <Icon
              name="home-outline"
              style={[
                styles.icon,
                currentRoute === ROUTES.HOME
                  ? styles.iconLight
                  : styles.iconDark,
              ]}
            />
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
