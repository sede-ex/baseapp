import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import LaunchScreen, { LoadScreenGracefully } from './src/screen/launch';
import RootNavigator from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';
import { useLoadedAssets } from "./src/hooks/useLoadedAssets";
import { useColorScheme, LogBox } from "react-native";
import * as SplashScreen from 'expo-splash-screen';

// LogBox.ignoreLogs([
//   'The new TextField implementation does not support the',
//   'Warning: Function components cannot be given refs.',
// ]);


export default function App() {
  const isLoadingComplete = useLoadedAssets();
  const colorScheme = useColorScheme();

  const onLayoutRootView = useCallback(async () => {
    if (isLoadingComplete) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }

  }, [isLoadingComplete]);

  if (!isLoadingComplete) {
    return <LaunchScreen />;
  }

  return (
    <SafeAreaProvider>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <FlashMessage
          style={{
            paddingTop: 30,
          }}
          position="top"
          duration={2500}
        />
        <LoadScreenGracefully>
          <RootNavigator colorScheme={colorScheme} />
        </LoadScreenGracefully>
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
