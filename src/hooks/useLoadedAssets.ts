import { Image } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Font from "expo-font";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as SplashScreen from "expo-splash-screen";
import { Asset } from 'expo-asset';
import React from "react";

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

export function useLoadedAssets() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        const imageAssets = cacheImages([
          'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
          // require('../assets/images/icon.png'),
        ]);

        // Load fonts
        const fontAssets = cacheFonts([Ionicons.font, FontAwesome.font]);

        await Promise.all([...imageAssets, ...fontAssets]);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
