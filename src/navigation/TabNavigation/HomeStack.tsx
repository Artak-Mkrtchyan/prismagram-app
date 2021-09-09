import React from 'react';
import { Platform } from 'react-native';
import { Logo } from 'src/components/Logo';
import { MessagesLink } from 'src/components/MessagesLink';
import { ProfileComponent } from 'src/components/Profile';
import { Home } from 'src/screens/BottomTabs/Home';

import { createStackNavigator } from '@react-navigation/stack';

import { stackStyles } from '../config';

const StackNavigation = createStackNavigator();

export const HomeStackNavigator = () => {
  return (
    <StackNavigation.Navigator>
      <StackNavigation.Screen
        options={({ navigation }) => ({
          headerRight: () => <MessagesLink navigation={navigation} />,
          headerStyle: { backgroundColor: stackStyles.backgroundColor },
          headerTitle: () => <Logo />,
          headerTitleContainerStyle: {
            width: Platform.OS === 'ios' ? '60%' : '75%',
            alignItems: Platform.OS === 'ios' ? 'center' : 'flex-start',
          },
        })}
        name="HomeStack"
        component={Home}
      />
      <StackNavigation.Screen name="Profile" component={ProfileComponent} />
    </StackNavigation.Navigator>
  );
};
