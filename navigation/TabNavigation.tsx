import React, { ComponentType, ReactElement } from "react";
import {
  createNavigatorFactory,
  NavigationContainer,
  Route,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Tab/Home";
import { Notification } from "../screens/Tab/Notification";
import { Profile } from "../screens/Tab/Profile";
import { Search } from "../screens/Tab/Search";
import { View, Text } from "react-native";
import { Add } from "../screens/Tab/Add";
import { PhotoNavigation } from "./PhotoNavigation";
import { UploadPhoto } from "../screens/Photo/UploadPhoto";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButton } from "../components/HeaderButton";

const BottomTabNavigator = createBottomTabNavigator();
const StackNavigation = createStackNavigator();

export const TabNavigation = ({ route }: { route: Route }) => {
  return (
    <BottomTabNavigator.Navigator>
      <BottomTabNavigator.Screen
        name="HomeTab"
        options={{ headerShown: false }}
      >
        {(props) => (
          <StackNavigation.Navigator {...props}>
            <StackNavigation.Screen
              options={({ navigation }) => ({
                title: "Awesome app",
                headerRight: () => (
                  <HeaderButton navigation={navigation} text={"Messages"} />
                ),
              })}
              name="HomeStack"
              component={Home}
            />
          </StackNavigation.Navigator>
        )}
      </BottomTabNavigator.Screen>
      <BottomTabNavigator.Screen
        name="NotificationTab"
        options={{ headerShown: false }}
      >
        {(props) => (
          <StackNavigation.Navigator {...props}>
            <StackNavigation.Screen
              options={({ navigation }) => ({
                title: "Awesome app",
                headerRight: () => (
                  <HeaderButton navigation={navigation} text={"Messages"} />
                ),
              })}
              name="NotificationStack"
              component={Notification}
            />
          </StackNavigation.Navigator>
        )}
      </BottomTabNavigator.Screen>
      <BottomTabNavigator.Screen
        options={({ navigation }) => ({
          title: "Awesome app",
          headerRight: () => (
            <HeaderButton navigation={navigation} text={"Messages"} />
          ),
        })}
        name="Add"
        component={Add}
      />
      <BottomTabNavigator.Screen
        name="ProfileTab"
        options={{ headerShown: false }}
      >
        {(props) => (
          <StackNavigation.Navigator {...props}>
            <StackNavigation.Screen
              options={({ navigation }) => ({
                title: "Awesome app",
                headerRight: () => (
                  <HeaderButton navigation={navigation} text={"Messages"} />
                ),
              })}
              name="ProfileStack"
              component={Profile}
            />
          </StackNavigation.Navigator>
        )}
      </BottomTabNavigator.Screen>
      <BottomTabNavigator.Screen
        name="SearchTab"
        options={{ headerShown: false }}
      >
        {(props) => (
          <StackNavigation.Navigator {...props}>
            <StackNavigation.Screen
              options={({ navigation }) => ({
                title: "Awesome app",
                headerRight: () => (
                  <HeaderButton navigation={navigation} text={"Messages"} />
                ),
              })}
              name="SearchStack"
              component={Search}
            />
          </StackNavigation.Navigator>
        )}
      </BottomTabNavigator.Screen>
    </BottomTabNavigator.Navigator>
  );
};
