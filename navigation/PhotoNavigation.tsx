import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { SelectPhoto } from '../screens/Photo/SelectPhoto';
import { TakePhoto } from '../screens/Photo/TakePhoto';
import { UploadPhoto } from '../screens/Photo/UploadPhoto';
import { PhotoNavigationRoutes, PhotoTabNavigationRoutes } from './config';

const MaterialTopTabNavigator = createMaterialTopTabNavigator();

const PhotoTab = () => {
  return (
    <MaterialTopTabNavigator.Navigator tabBarPosition="bottom">
      <MaterialTopTabNavigator.Screen
        name={PhotoTabNavigationRoutes.SELECT_PHOTO}
        component={SelectPhoto}
      />
      <MaterialTopTabNavigator.Screen
        name={PhotoTabNavigationRoutes.TAKE_PHOTO}
        component={TakePhoto}
      />
    </MaterialTopTabNavigator.Navigator>
  );
};

const StackNavigation = createStackNavigator();

export const PhotoNavigation = () => {
  return (
    <StackNavigation.Navigator
      screenOptions={{ presentation: "modal", headerShown: false }}
    >
      <StackNavigation.Screen
        name={PhotoNavigationRoutes.PHOTO_TAB}
        component={PhotoTab}
      />
      <StackNavigation.Screen
        name={PhotoNavigationRoutes.UPLOAD_PHOTO}
        component={UploadPhoto}
      />
    </StackNavigation.Navigator>
  );
};
