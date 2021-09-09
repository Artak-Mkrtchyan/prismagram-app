import React from 'react';
import { Image, Platform } from 'react-native';
import { MessagesLink } from 'src/components/MessagesLink';
import { ProfileScreen } from 'src/screens/BottomTabs/Profile/Profile';
import { ProfileScreenStackProp } from 'src/screens/BottomTabs/Profile/types';

import { createStackNavigator } from '@react-navigation/stack';

import { stackStyles } from '../config';

const StackNavigation = createStackNavigator();

export const ProfileStackNavigator = () => {
  return (
    <StackNavigation.Navigator>
      <StackNavigation.Screen
        options={({ navigation }: { navigation: ProfileScreenStackProp }) => ({
          headerRight: () => <MessagesLink navigation={navigation} />,
          headerStyle: { backgroundColor: stackStyles.backgroundColor },
          headerTitle: () => (
            <Image
              style={{ height: 35 }}
              resizeMode="contain"
              source={require('../assets/logo.png')}
            />
          ),
          headerTitleContainerStyle: {
            width: Platform.OS === 'ios' ? '60%' : '75%',
            alignItems: Platform.OS === 'ios' ? 'center' : 'flex-start',
          },
        })}
        name="Profiletack"
        component={ProfileScreen}
      />
    </StackNavigation.Navigator>
  );
};
