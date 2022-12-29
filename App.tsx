import { StyleSheet, Text, View } from 'react-native';
import LaunchScreen from './src/screen/launch';
import RootNavigator from './src/navigation';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Welcome to bizz app</Text> */}
      {/* <LaunchScreen /> */}
      <RootNavigator />
    </View>
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
