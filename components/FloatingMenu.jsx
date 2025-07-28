// FloatingMenu.js
import React, { useState, useRef } from 'react';
import { View, StyleSheet, Dimensions, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-circular-action-menu';
import { COLORS } from '../constants/color';

const { width, height } = Dimensions.get('window');

export default function FloatingMenu() {
  const [open, setOpen] = useState(false);
  const actionButtonRef = useRef(null);
  const [menuPosition, setMenuPosition] = useState({
    x: width / 2,
    y: height - 80,
    radius: 120,
  });

  const handleMenuToggle = isOpen => {
    setOpen(isOpen);
  };

  return (
    <>
      {/* Blur Background - Only visible when menu is open */}
      {/* {open && (
        <TouchableWithoutFeedback onPress={() => handleMenuToggle(false)}>
          <View style={styles.blurContainer}>
            <BlurView
              style={[
                styles.blurBackground,
                {
                  width: menuPosition.radius * 2,
                  height: menuPosition.radius * 2,
                  borderRadius: menuPosition.radius,
                  left: menuPosition.x - menuPosition.radius,
                  top: menuPosition.y - menuPosition.radius,
                },
              ]}
              blurType="light"
              blurAmount={15}
              reducedTransparencyFallbackColor="white"
            />
          </View>
        </TouchableWithoutFeedback>
      )} */}

      {/* Floating Action Button */}
      <View style={styles.menuContainer}>
        <ActionButton
          ref={actionButtonRef}
          position="center"
          buttonColor={COLORS.primary}
          offsetY={30}
          spacing={10}
          outRangeScale={1}
          degrees={160}
          onPress={() => handleMenuToggle(!open)}
          onOpen={() => handleMenuToggle(true)}
          onClose={() => handleMenuToggle(false)}
          backdrop={<></>}
        >
          <ActionButton.Item
            buttonColor={COLORS.white}
            title="Grid"
            onPress={() => console.log('Grid tapped')}
          >
            <Icon
              name="grid-outline"
              style={[styles.icon, open ? styles.iconActive : styles.iconDark]}
            />
          </ActionButton.Item>

          <ActionButton.Item
            buttonColor={COLORS.white}
            title="Bookmark"
            onPress={() => console.log('Bookmark tapped')}
          >
            <Icon
              name="bookmark-outline"
              style={[styles.icon, open ? styles.iconActive : styles.iconDark]}
            />
          </ActionButton.Item>

          <ActionButton.Item
            buttonColor={COLORS.white}
            title="User"
            onPress={() => console.log('User tapped')}
          >
            <Icon
              name="person-outline"
              style={[styles.icon, open ? styles.iconActive : styles.iconDark]}
            />
          </ActionButton.Item>

          <ActionButton.Item
            buttonColor={COLORS.white}
            title="Settings"
            onPress={() => console.log('Settings tapped')}
          >
            <Icon
              name="settings-outline"
              style={[styles.icon, open ? styles.iconActive : styles.iconDark]}
            />
          </ActionButton.Item>

          <ActionButton.Item
            buttonColor={COLORS.primary}
            title="Home"
            onPress={() => console.log('Home tapped')}
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
  iconActive: {
    color: COLORS.primary,
  },
  iconLight: {
    color: COLORS.white,
  },
  blurContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurBackground: {
    position: 'absolute',
    backgroundColor: Platform.OS === 'android' ? '#ffffffcc' : 'transparent',
  },
  menuContainer: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
});
