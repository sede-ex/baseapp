// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import NotImplementedScreen from '../screen/chat/notImplementedScreen';
import ChatStacktNavigator from './ChatStacktNavigator';
import FavChatStacktNavigator from './FavChatStacktNavigator';
import LatestStacktNavigator from './LatestStacktNavigator';
// import ChatsScreen from '../screen/chat/chatsScreen';
import { Ionicons, Entypo } from "@expo/vector-icons"

import HomeScreen from '../screen/home/homeScreen';
// import SecondScreen from '../screen/home/pdf';
// import SecondScreen from '../screen/home/secondScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import Ionicons from "@expo/vector-icons/Ionicons";
// import { useColorScheme } from "react-native";

export default function BottomTabNavigator() {
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
      <Screen name="My Favourites" component={FavChatStacktNavigator}
        options={({ navigation }) => ({
          tabBarIcon: ({ color, size }) => (<Ionicons name="ios-chatbubbles-sharp" size={size} color={color} />),
          headerRight: () => (
            <Entypo
              onPress={() => navigation.navigate('Contacts')}
              name="new-message"
              size={18}
              color={"royalblue"}
              style={{ marginRight: 15 }}
            />)
        })} />
      <Screen name="Explore" component={ChatStacktNavigator}
        options={({ navigation }) => ({
          tabBarIcon: makeIconRender("home"),
          headerRight: () => (
            <Entypo
              onPress={() => navigation.navigate('Contacts')}
              name="new-message"
              size={18}
              color={"royalblue"}
              style={{ marginRight: 15 }}
            />)
        })} />
      <Screen name="Latest Posts" component={LatestStacktNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (<Ionicons name="ios-chatbubbles-sharp" size={size} color={color} />)
        }}
      />
      {/* <Screen name="Status" component={NotImplementedScreen}
        options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="logo-whatsapp" size={size} color={color} />) }} /> */}
      {/* <Screen name="Calls" component={NotImplementedScreen}
        options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="call-outline" size={size} color={color} />) }} /> */}
      {/* <Screen name="Camera" component={NotImplementedScreen}
        options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="camera-outline" size={size} color={color} />) }} /> */}
      {/* <Screen name="Settings1" component={SecondScreen} options={{ tabBarIcon: makeIconRender("cog") }} /> */}
      {/* <Screen name="Settings" component={SecondScreen}
        options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="settings-outline" size={size} color={color} />) }} /> */}
    </Navigator>
  );
}


function makeIconRender(name) {
  return ({ color, size }) => (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  );
}