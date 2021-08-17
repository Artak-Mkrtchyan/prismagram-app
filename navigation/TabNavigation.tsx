import React from 'react';
import { Image, Platform } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Route, RouteProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MessagesLink } from '../components/MessagesLink';
import { NavIcon } from '../components/NavIcon';
import { Add } from '../screens/Tab/Add';
import { Home } from '../screens/Tab/Home';
import { Notification } from '../screens/Tab/Notification';
import { Profile } from '../screens/Tab/Profile';
import { Search } from '../screens/Tab/Search';

const BottomTabNavigator = createBottomTabNavigator();
const StackNavigation = createStackNavigator();

export const TabNavigation = ({ route }: { route: RouteProp<{}, "Tab"> }) => {
  return (
    <BottomTabNavigator.Navigator>
      <BottomTabNavigator.Screen
        name="HomeTab"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <NavIcon
              focused={focused}
              name={Platform.OS === "ios" ? "ios-home" : "md-home"}
            />
          ),
        }}
      >
        {(props) => (
          <StackNavigation.Navigator {...props}>
            <StackNavigation.Screen
              options={({ navigation }) => ({
                headerRight: () => <MessagesLink navigation={navigation} />,
                headerTitle: () => (
                  <Image
                    style={{ height: 35 }}
                    resizeMode="contain"
                    source={require("../assets/logo.png")}
                  />
                ),
                headerTitleContainerStyle: {
                  width: Platform.OS === "ios" ? "60%" : "75%",
                  alignItems: Platform.OS === "ios" ? "center" : "flex-start",
                },
              })}
              name="HomeStack"
              component={Home}
            />
          </StackNavigation.Navigator>
        )}
      </BottomTabNavigator.Screen>
      <BottomTabNavigator.Screen
        name="SearchTab"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <NavIcon
              focused={focused}
              name={Platform.OS === "ios" ? "ios-search" : "md-search"}
            />
          ),
        }}
      >
        {(props) => (
          <StackNavigation.Navigator {...props}>
            <StackNavigation.Screen
              options={({ navigation }) => ({
                headerTitle: () => (
                  <Image
                    style={{ height: 35 }}
                    resizeMode="contain"
                    source={require("../assets/logo.png")}
                  />
                ),
                headerRight: () => <MessagesLink navigation={navigation} />,
              })}
              name="SearchStack"
              component={Search}
            />
          </StackNavigation.Navigator>
        )}
      </BottomTabNavigator.Screen>

      <BottomTabNavigator.Screen
        options={({ navigation }) => ({
          headerTitle: () => (
            <Image
              style={{ height: 35 }}
              resizeMode="contain"
              source={require("../assets/logo.png")}
            />
          ),
          headerRight: () => <MessagesLink navigation={navigation} />,
          headerTitleContainerStyle: {
            width: Platform.OS === "ios" ? "60%" : "75%",
            alignItems: Platform.OS === "ios" ? "center" : "flex-start",
          },
          tabBarIcon: ({ focused }) => (
            <NavIcon
              focused={focused}
              size={32}
              name={
                Platform.OS === "ios"
                  ? "ios-add-circle-outline"
                  : "md-add-circle-outline"
              }
            />
          ),
        })}
        name="Add"
        component={Add}
      />
      <BottomTabNavigator.Screen
        name="NotificationTab"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <NavIcon
              focused={focused}
              name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
            />
          ),
        }}
      >
        {(props) => (
          <StackNavigation.Navigator {...props}>
            <StackNavigation.Screen
              options={({ navigation }) => ({
                headerTitle: () => (
                  <Image
                    style={{ height: 35 }}
                    resizeMode="contain"
                    source={require("../assets/logo.png")}
                  />
                ),
                headerRight: () => <MessagesLink navigation={navigation} />,
                headerTitleContainerStyle: {
                  width: Platform.OS === "ios" ? "60%" : "75%",
                  alignItems: Platform.OS === "ios" ? "center" : "flex-start",
                },
              })}
              name="NotificationStack"
              component={Notification}
            />
          </StackNavigation.Navigator>
        )}
      </BottomTabNavigator.Screen>

      <BottomTabNavigator.Screen
        name="ProfileTab"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <NavIcon
              focused={focused}
              name={Platform.OS === "ios" ? "ios-person" : "md-person"}
            />
          ),
        }}
      >
        {(props) => (
          <StackNavigation.Navigator {...props}>
            <StackNavigation.Screen
              options={({ navigation }) => ({
                headerTitle: () => (
                  <Image
                    style={{ height: 35 }}
                    resizeMode="contain"
                    source={require("../assets/logo.png")}
                  />
                ),
                headerRight: () => <MessagesLink navigation={navigation} />,
                headerTitleContainerStyle: {
                  width: Platform.OS === "ios" ? "60%" : "75%",
                  alignItems: Platform.OS === "ios" ? "center" : "flex-start",
                },
              })}
              name="ProfileStack"
              component={Profile}
            />
          </StackNavigation.Navigator>
        )}
      </BottomTabNavigator.Screen>
    </BottomTabNavigator.Navigator>
  );
};
