import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import ChatScreen from '../screen/chat/chatScreen';
import MainTabNavigator from './bottomTabs';
import ContactsScreen from '../screen/chat/contactsScreen';


const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'whitesmoke' } }}>
      <Stack.Screen name="Home" component={MainTabNavigator} options={{ headerShown: false }} />

      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Contacts" component={ContactsScreen} />
    </Stack.Navigator>
  )
}

export default Navigator