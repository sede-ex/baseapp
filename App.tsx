import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import LaunchScreen from './src/screen/launch';
import RootNavigator from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';
import { useLoadedAssets } from "./src/hooks/useLoadedAssets";
import { useColorScheme } from "react-native";

export default function App() {
  const isLoadingComplete = useLoadedAssets();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>

          {/* <Text>Welcome to bizz app</Text> */}
          {/* <LaunchScreen /> */}
          <FlashMessage
            style={{
              paddingTop: 30,
            }}
            position="top"
            duration={2500}
          />
          <RootNavigator colorScheme={colorScheme} />
          <StatusBar style="auto" />
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
