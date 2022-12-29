import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Pressable } from 'react-native';
import React from 'react';

const DrawerButton = () => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.toggleDrawer()}>
      <Icon name="menu" size={24} />
    </Pressable>
  );
};