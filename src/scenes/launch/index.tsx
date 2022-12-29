import Constants from "expo-constants";
import * as Updates from "expo-updates";
import { useCallback, useEffect, useMemo, useState } from "react";
// import AnimatedAppLoader from './splashscreen';
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

  console.log('Constants.manifest.splash.image: ', Constants)
  return (
    // <AnimatedAppLoader image={{ uri: Constants.manifest.splash.image }}>
    <View style={styles.container}>
      <Text
        style={{
          color: "black",
          fontSize: 30,
          marginBottom: 15,
          fontWeight: "bold",
        }}
      >
        Pretty Cool!
      </Text>
      <Button title="Run Again" onPress={onReloadPress} />
    </View>
    // </AnimatedAppLoader>
  );
}