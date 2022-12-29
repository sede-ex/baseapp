import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { useSelector } from 'react-redux';
import { HomeTab } from './homeTab';

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
        <Navigator {...drawerNavProps}>
          <Screen name="Home" component={HomeTab} />
          {/* <Screen name="Notifications" component={NotificationsStack} /> */}
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