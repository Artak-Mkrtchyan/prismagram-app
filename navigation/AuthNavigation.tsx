import React from "react";
import {
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthHome } from "../screens/Auth/AuthHome";
import { SignUp } from "../screens/Auth/SignUp";
import { Login } from "../screens/Auth/Login";
import { Confirm } from "../screens/Auth/Confirm";

const StackNavigation = createStackNavigator();

export const AuthNavigation = () => {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator screenOptions={{headerShown: false}}>
        <StackNavigation.Screen name="Login" component={Login} />
        <StackNavigation.Screen name="Confirm" component={Confirm} />
        <StackNavigation.Screen name="AuthHome" component={AuthHome} />
        <StackNavigation.Screen name="SignUp" component={SignUp} />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
};
