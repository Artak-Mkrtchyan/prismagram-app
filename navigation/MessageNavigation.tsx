import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TabNavigation } from "./TabNavigation";
import { PhotoNavigation } from "./PhotoNavigation";
import { Message } from "../screens/Message/Message";
import { Messages } from "../screens/Message/Messages";

const StackNavigation = createStackNavigator();

export const MessageNavigation = () => {
  return (
    <StackNavigation.Navigator  screenOptions={{
      headerShown: false,
      presentation: 'modal'
    }}>
      <StackNavigation.Screen name="Message" component={Message} />
      <StackNavigation.Screen name="Messages" component={Messages} />
    </StackNavigation.Navigator>
  );
};
