import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthHome } from '../screens/Auth/AuthHome';
import { Confirm } from '../screens/Auth/Confirm';
import { Login } from '../screens/Auth/Login';
import { SignUp } from '../screens/Auth/SignUp';
import { AuthNavigationRoutes } from './config';

const StackNavigation = createStackNavigator();

export const AuthNavigation = () => {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator screenOptions={{ headerShown: false }}>
        <StackNavigation.Screen
          name={AuthNavigationRoutes.HOME}
          component={AuthHome}
        />
        <StackNavigation.Screen
          name={AuthNavigationRoutes.SIGNUP}
          component={SignUp}
        />
        <StackNavigation.Screen
          name={AuthNavigationRoutes.LOGIN}
          component={Login}
        />
        <StackNavigation.Screen
          name={AuthNavigationRoutes.CONFIRM}
          component={Confirm}
        />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
};
