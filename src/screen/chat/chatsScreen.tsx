import { FlatList } from 'react-native';

import chats from '../../../assets/data/chats.json';
import ChatListItem from './components/chatListItem';

import {
  SafeAreaView,
  // useSafeAreaInsets 
} from 'react-native-safe-area-context';
import {
  Text
} from "react-native";
import { FocusAwareStatusBar } from '../../components/FocusStatusBar';


export function ChatsScreen() {
  // const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
    // style={{
    //   paddingTop: insets.top,
    //   paddingBottom: insets.bottom,
    //   flex: 1,
    //     justifyContent: 'space-between',
    //     alignItems: 'center'
    // }}
    >
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#6a51ae" style="auto" />
      <FlatList data={chats} renderItem={({ item }) => <ChatListItem chat={item} />}
        style={{ backgroundColor: 'white' }}

      />

    </SafeAreaView>
  );
}


const ChatsScreen1 = () => {
  return <FlatList data={chats} renderItem={({ item }) => <ChatListItem chat={item} />}
    style={{ backgroundColor: 'white' }}

  />;


}


export default ChatsScreen;