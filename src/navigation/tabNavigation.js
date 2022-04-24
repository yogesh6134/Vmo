import 'react-native-gesture-handler';
import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatScreen from '../screen/chatScreen'
import Images from '../assets/index';
import Dashboard from '../screen/Dashboard';
import PeopleScreen from '../screen/peopleScreen';
import Profile from '../screen/profile';
import Color from '../themes/Colors';


const Tab = createBottomTabNavigator();

const tabnavigation = () => {
  return (
    <Tab.Navigator initialRouteName="dashboard">
      <Tab.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Image source={Images.home} style={focused ? { width: 24, height: 24, tintColor: "blue" } : { width: 24, height: 24 }} />
          ),
          tabBarActiveTintColor: "blue",
          tabBarLabel: 'Home',
        }}
      />

      <Tab.Screen
        name="peopleScreen"
        component={PeopleScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Image source={Images.people} style={focused ? { width: 24, height: 24, tintColor: "blue" } : { width: 24, height: 24 }} />
          ),
          tabBarActiveTintColor: "blue",
          tabBarLabel: 'People',
        }}
      />

      <Tab.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Image source={Images.chat} style={focused ? { width: 24, height: 24, tintColor: "blue" } : { width: 24, height: 24 }} />
          ),
          tabBarActiveTintColor: "blue",
          tabBarLabel: 'Chat',
        }}
      />

      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Image source={Images.profile} style={focused ? { width: 24, height: 24, tintColor: "blue" } : { width: 24, height: 24 }} />
          ),
          tabBarActiveTintColor: "blue",
          tabBarLabel: 'Profile',
        }}
      />

    </Tab.Navigator>
  );
}
export default tabnavigation