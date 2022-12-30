import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import homeScreen from '../screen/home/homeScreen';
import secondScreen from '../screen/home/secondScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import Ionicons from "@expo/vector-icons/Ionicons";
// import { useColorScheme } from "react-native";

export default function ButtomTab() {
  const { Navigator, Screen } = createBottomTabNavigator();

  const tabNavProps = {
    screenOptions: ({ route }) => ({
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
      tabBarHideOnKeyboard: true,
      // tabBarIcon: ({ focused, color, size }) => {
      //   let iconName;
      //   switch (route.name) {
      //     case 'Home':
      //       iconName = focused ? 'home-circle' : 'home-circle-outline';
      //       break;
      //     case 'Settings':
      //       iconName = focused ? 'account-circle' : 'account-circle-outline';
      //       break;
      //     default:
      //       break;
      //   }
      //   return <Icon name={iconName} size={size} color={color} />;
      // },
    }),
  };

  return (
    <Navigator
      {...tabNavProps}
    >
      <Screen name="Home" component={homeScreen} options={{ tabBarIcon: makeIconRender("home") }} />
      <Screen name="Settings" component={secondScreen} options={{ tabBarIcon: makeIconRender("cog") }} />
    </Navigator>
  );
}


function makeIconRender(name) {
  return ({ color, size }) => (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  );
}