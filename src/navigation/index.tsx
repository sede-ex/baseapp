// import { useSelector } from 'react-redux';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import {
  createDrawerNavigator
} from '@react-navigation/drawer';
// import MainDrawerTabs from './MainDrawerTabs';
import BottomTabNavigator from './bottomTabs';
// import MainTabs from './topTabs';
import Notifications from './notification';
import LinkingConfiguration from "./LinkingConfiguration";
import { CustomDrawerContent } from "./customDrawerContent";
import SecondScreen from '../screen/home/secondScreen';

const RootNavigator = () => {
  const { Navigator, Screen } = createDrawerNavigator();

  const loggedin = true;
  // const loggedin = useSelector(state => state?.user?.loggedin ?? false);

  if (loggedin) {
    const drawerNavProps = {
      initialRouteName: 'Main Drawer',
      screenOptions: {
        headerShown: false,
        swipeEnabled: false,
        swipeEdgeWidth: 0,
      },
    };

    return (
      <Navigator
        {...drawerNavProps}
        useLegacyImplementation
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Screen name="Main Drawer" component={BottomTabNavigator} />
        {/* <Screen name="Main" component={MyTopTabs} /> */}
        <Screen name="Notifications" component={Notifications} />
        <Screen name="Settings" component={SecondScreen} />
      </Navigator>
    );
  } else {
    return <BottomTabNavigator />;
    // return <LoginStack />;
  }
};

export default ({ colorScheme }) => {
  const { Navigator, Screen } = createDrawerNavigator();

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
      {/* <MainTabs /> */}
    </NavigationContainer>
  );
};