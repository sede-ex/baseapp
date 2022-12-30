// import { useSelector } from 'react-redux';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import {
  createDrawerNavigator
} from '@react-navigation/drawer';
import MainTabs from './bottomTabs';
// import MainTabs from './topTabs';
import Notifications from './notification';
import LinkingConfiguration from "./LinkingConfiguration";
import { CustomDrawerContent } from "./customDrawerContent"

const RootNavigator = () => {
  const { Navigator, Screen } = createDrawerNavigator();

  const loggedin = true;
  // const loggedin = useSelector(state => state?.user?.loggedin ?? false);

  if (loggedin) {
    const drawerNavProps = {
      initialRouteName: 'Home',
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
        <Screen name="Main" component={MainTabs} />
        {/* <Screen name="Main" component={MyTopTabs} /> */}
        <Screen name="Notifications" component={Notifications} />
      </Navigator>
    );
  } else {
    return <MainTabs />;
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
    </NavigationContainer>
  );
};