import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import homeScreen from '../screen/home/homeScreen';
import secondScreen from '../screen/home/secondScreen';
// import Ionicons from "@expo/vector-icons/Ionicons";
// import { useColorScheme } from "react-native";

export function HomeTab() {
  const { Navigator, Screen } = createBottomTabNavigator();

  const tabNavProps = {
    screenOptions: ({ route }) => ({
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
      tabBarHideOnKeyboard: true,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        switch (route.name) {
          case 'Tab A':
            iconName = focused ? 'home-circle' : 'home-circle-outline';
            break;
          case 'Tab B':
            iconName = focused ? 'account-circle' : 'account-circle-outline';
            break;
          default:
            break;
        }
        return <Icon name={iconName} size={size} color={color} />;
      },
    }),
  };

  return (
    <Navigator {...tabNavProps}>
      <Screen name="Tab A" component={homeScreen} />
      <Screen name="Tab B" component={secondScreen} />
    </Navigator>
  );
}
