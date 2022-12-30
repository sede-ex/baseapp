import { Animated, View, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../screen/home/homeScreen';
import SettingsScreen from '../screen/home/secondScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function MyTopTabs() {
  const { Navigator, Screen } = createMaterialTopTabNavigator();
  const insets = useSafeAreaInsets();

  return (
    <Navigator
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        // tabBarItemStyle: { width: 100 },
        // tabBarStyle: { backgroundColor: 'powderblue' },
      }}
    >
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Settings" component={SettingsScreen} />
    </Navigator>
  );
}


