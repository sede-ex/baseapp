import { Asset } from "expo-asset";
import Constants from "expo-constants";
import * as SplashScreen from "expo-splash-screen";
import * as Updates from "expo-updates";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Animated,
  Button,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";


const styles = StyleSheet.create({
  container: {
    // backgroundColor: "plum",
  },
});


export default function LaunchScreen() {
  const onReloadPress = useCallback(() => {
    if (Platform.OS === "web") {
      location.reload();
    } else {
      Updates.reloadAsync();
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "black",
          fontSize: 30,
          marginBottom: 15,
          fontWeight: "bold",
        }}
      >
        Pretty Cool!!!
      </Text>
      <Button title="Run Again" onPress={onReloadPress} />
    </View>
  );
}