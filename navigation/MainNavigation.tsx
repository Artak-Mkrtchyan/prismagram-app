import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TabNavigation } from "./TabNavigation";
import { PhotoNavigation } from "./PhotoNavigation";
import { MessageNavigation } from "./MessageNavigation";

const StackNavigation = createStackNavigator();

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator
        screenOptions={{
          headerShown: false,
          presentation: 'modal'
        }}
        initialRouteName="Tab"
      >
        <StackNavigation.Screen name="Photo" component={PhotoNavigation} />
        <StackNavigation.Screen name="Tab" component={TabNavigation} />
        <StackNavigation.Screen name="Messages" component={MessageNavigation} />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
};
