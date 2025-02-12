/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Dimensions } from "react-native";

const tintColorLight = '#000000ff';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#000000ff',
    background: '#dccebeff',
    tint: tintColorLight,
    icon: '#bf2e0eff',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#bf2e0eff',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
export const ScreenHeight = Dimensions.get("window").height;
export const ScreenWidth = Dimensions.get("window").width;
