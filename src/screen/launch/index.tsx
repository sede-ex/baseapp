import Constants from "expo-constants";
import * as Updates from "expo-updates";
import { useCallback, useEffect, useMemo, useState } from "react";
import AnimatedAppLoader from './splashscreen';
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: "plum",
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export function LoadScreenGracefully({ children }) {
  const onReloadPress = useCallback(() => {
    if (Platform.OS === "web") {
      location.reload();
    } else {
      Updates.reloadAsync();
    }
  }, []);

  console.log('Constants.manifest.splash.image: ', Constants.manifest.splash.image)
  return (
    <AnimatedAppLoader image={{ uri: Constants.manifest.splash.image }}>
      {/**/}
      {children}
      {/* <Button title="Run Again" onPress={onReloadPress} /> */}
    </AnimatedAppLoader>
  );
}

export default function LaunchScreen() {
  const onReloadPress = useCallback(() => {
    if (Platform.OS === "web") {
      location.reload();
    } else {
      Updates.reloadAsync();
    }
  }, []);

  console.log('Constants.manifest.splash.image: ', Constants.manifest)
  return (
    <LoadScreenGracefully>
      <View style={styles.container}>
        <Text
          style={{
            color: "black",
            fontSize: 30,
            marginBottom: 15,
            fontWeight: "bold",
          }}
        >
          Welcome to Bizz!
        </Text>
        <Button title="Run Again" onPress={onReloadPress} />
      </View>
    </LoadScreenGracefully>
  );
}