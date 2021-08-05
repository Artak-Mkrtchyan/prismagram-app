import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SelectPhoto } from '../screens/Photo/SelectPhoto';
import { TakePhoto } from '../screens/Photo/TakePhoto';
import { UploadPhoto } from '../screens/Photo/UploadPhoto';
import { createStackNavigator } from '@react-navigation/stack';

const MaterialTopTabNavigator = createMaterialTopTabNavigator();

const PhotoTab = () => {
  return (
    <MaterialTopTabNavigator.Navigator tabBarPosition="bottom" >
      <MaterialTopTabNavigator.Screen name="SelectPhoto" component={SelectPhoto} />
      <MaterialTopTabNavigator.Screen name="TakePhoto" component={TakePhoto} />
    </MaterialTopTabNavigator.Navigator>
  );
}

const StackNavigation = createStackNavigator();

export const PhotoNavigation = () => {
  return (
  <StackNavigation.Navigator screenOptions={{presentation: "modal", headerShown: false,}}>
    <StackNavigation.Screen name="PhotoTab" component={PhotoTab} />
    <StackNavigation.Screen name="UploadPhoto" component={UploadPhoto} />
  </StackNavigation.Navigator>
  )
}
