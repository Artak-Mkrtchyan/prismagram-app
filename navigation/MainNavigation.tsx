import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MessageNavigation } from './MessageNavigation';
import { PhotoNavigation } from './PhotoNavigation';
import { TabNavigation } from './TabNavigation';

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
        <StackNavigation.Screen name="Tab" component={TabNavigation} />
        <StackNavigation.Screen name="Photo" component={PhotoNavigation} />
        <StackNavigation.Screen name="Messages" component={MessageNavigation} />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
};
