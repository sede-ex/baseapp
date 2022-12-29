import React from 'react';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  Text
} from "react-native";
import { FocusAwareStatusBar } from '../components/FocusStatusBar';

export default function Notifications() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={{
        // paddingTop: insets.top,
        paddingBottom: insets.bottom,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#6a51ae" style="auto" />
      <Text>Notifications Screen</Text>
      <Text>This is bottom text.</Text>
    </SafeAreaView>
  );
}
