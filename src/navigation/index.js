import * as React from 'react';
import HomeScreen from '../screen/homeScreen';
import ProfileScreen from '../screen/profileScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Notification from '../screen/notification';
import BlockUser from '../screen/blockUser';
import tabnavigation from './tabNavigation';
import SettingScreen from '../screen/settingScreen';
import MarketPlace from '../screen/marketPlace';
import FriendRequest from '../screen/friendRequest';
import AddMarketPlace from '../screen/addMarketPlaces';
import EditWork from '../screen/editWorkScreen';
import DeleteConfirmation from '../screen/deleteConfirmation';
import GeneralSetting from '../screen/generalSetting';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="profile" component={ProfileScreen} />
        <Stack.Screen name="dashboard" component={tabnavigation} />
        <Stack.Screen name="notification" component={Notification} />
        <Stack.Screen name="blockUser" component={BlockUser} />
        <Stack.Screen name="settingScreen" component={SettingScreen} />
        <Stack.Screen name="marketPlaceScreen" component={MarketPlace} />
        <Stack.Screen name="friendRequest" component={FriendRequest} />
        <Stack.Screen name="addMarketPlaces" component={AddMarketPlace} />
        <Stack.Screen name="editWork" component={EditWork} />
        <Stack.Screen
          name="deleteConfirmation"
          component={DeleteConfirmation}
        />
        <Stack.Screen name="generalSetting" component={GeneralSetting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
