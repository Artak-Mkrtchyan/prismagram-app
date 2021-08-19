import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Message } from '../screens/Message/Message';
import { Messages } from '../screens/Message/Messages';
import { MessageNavigationRoutes } from './config';
import { PhotoNavigation } from './PhotoNavigation';
import { TabNavigation } from './TabNavigation';

const StackNavigation = createStackNavigator();

export const MessageNavigation = () => {
  return (
    <StackNavigation.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <StackNavigation.Screen
        name={MessageNavigationRoutes.MESSAGE}
        component={Message}
      />
      <StackNavigation.Screen
        name={MessageNavigationRoutes.MESSAGES}
        component={Messages}
      />
    </StackNavigation.Navigator>
  );
};
