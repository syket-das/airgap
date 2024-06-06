import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import '../global.css';
import * as ScreenOrientation from 'expo-screen-orientation';

import { PaperProvider } from 'react-native-paper';

// import '../tamagui-web.css';

import { TamaguiProvider } from 'tamagui';

import { tamaguiConfig } from '../tamagui.config';

import { useColorScheme } from '@/hooks/useColorScheme';
import {
  useFonts,
  Inter_400Regular,
  Inter_900Black,
} from '@expo-google-fonts/inter';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      changeScreenOrientation();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE
    );
  }

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <PaperProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </PaperProvider>
      </ThemeProvider>
    </TamaguiProvider>
  );
}
