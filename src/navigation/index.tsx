import { NavigationContainer } from '@react-navigation/native';
// import { useSelector } from 'react-redux';
import { HomeTab } from './homeTab';
import Notifications from './notification';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}


export default () => {
  const { Navigator, Screen } = createDrawerNavigator();

  const loggedin = true;
  // const loggedin = useSelector(state => state?.user?.loggedin ?? false);

  const CurrentNavigator = () => {
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
          <Screen name="Home" component={HomeTab} />
          <Screen name="Notifications" component={Notifications} />
        </Navigator>
      );
    } else {
      return <HomeTab />;
      // return <LoginStack />;
    }
  };

  return (
    <NavigationContainer>
      <CurrentNavigator />
    </NavigationContainer>
  );
};