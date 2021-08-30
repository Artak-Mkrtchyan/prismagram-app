import React, { useEffect, useState } from 'react';
import { Image, Platform } from 'react-native';
import { MessagesLink } from 'src/components/MessagesLink';
import { NavIcon } from 'src/components/NavIcon';
import { ProfileComponent } from 'src/components/Profile';
import { SearchBar } from 'src/components/SearchBar';
import { SearchStackNavigator } from 'src/navigation/Search/SearchTab';
import { Add } from 'src/screens/BottomTabs/Add';
import { Home } from 'src/screens/BottomTabs/Home';
import { Notification } from 'src/screens/BottomTabs/Notification';
import { ProfileScreen } from 'src/screens/BottomTabs/Profile/Profile';
import { ProfileScreenProp } from 'src/screens/BottomTabs/Profile/types';
import { SearchScreen } from 'src/screens/BottomTabs/Search/Search';

import { gql, useQuery } from '@apollo/client';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Route, RouteProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { BottomTabNavigationRoutes, MainNavigationRoutes, stackStyles } from './config';

const BottomTabNavigator = createBottomTabNavigator();
const StackNavigation = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <StackNavigation.Navigator>
      <StackNavigation.Screen
        options={({ navigation }) => ({
          headerRight: () => <MessagesLink navigation={navigation} />,
          headerStyle: { backgroundColor: stackStyles.backgroundColor },
          headerTitle: () => (
            <Image
              style={{ height: 35 }}
              resizeMode="contain"
              source={require("../assets/logo.png")}
            />
          ),
          headerTitleContainerStyle: {
            width: Platform.OS === "ios" ? "60%" : "75%",
            alignItems: Platform.OS === "ios" ? "center" : "flex-start",
          },
        })}
        name="HomeStack"
        component={Home}
      />
      <StackNavigation.Screen name="Profile" component={ProfileComponent} />
    </StackNavigation.Navigator>
  );
};

export const SEARCH = gql`
  query search($term: String!) {
    searchPost(term: $term) {
      id
      files {
        id
        url
      }
      likeCount
      commentCount
    }
  }
`;

const NotificationStackNavigator = () => {
  return (
    <StackNavigation.Navigator>
      <StackNavigation.Screen
        options={({ navigation }) => ({
          headerRight: () => <MessagesLink navigation={navigation} />,
          headerStyle: { backgroundColor: stackStyles.backgroundColor },
          headerTitle: () => (
            <Image
              style={{ height: 35 }}
              resizeMode="contain"
              source={require("../assets/logo.png")}
            />
          ),
          headerTitleContainerStyle: {
            width: Platform.OS === "ios" ? "60%" : "75%",
            alignItems: Platform.OS === "ios" ? "center" : "flex-start",
          },
        })}
        name="NotificationStack"
        component={Notification}
      />
    </StackNavigation.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <StackNavigation.Navigator>
      <StackNavigation.Screen
        options={({ navigation }) => ({
          headerRight: () => <MessagesLink navigation={navigation} />,
          headerStyle: { backgroundColor: stackStyles.backgroundColor },
          headerTitle: () => (
            <Image
              style={{ height: 35 }}
              resizeMode="contain"
              source={require("../assets/logo.png")}
            />
          ),
          headerTitleContainerStyle: {
            width: Platform.OS === "ios" ? "60%" : "75%",
            alignItems: Platform.OS === "ios" ? "center" : "flex-start",
          },
        })}
        name="Profiletack"
        component={ProfileScreen}
      />
    </StackNavigation.Navigator>
  );
};

export const TabNavigation = ({
  route,
}: {
  route: RouteProp<{}, MainNavigationRoutes.BOTTOM_TABS>;
}) => {
  return (
    <BottomTabNavigator.Navigator>
      <BottomTabNavigator.Screen
        name={BottomTabNavigationRoutes.HOME}
        options={{
          tabBarStyle: {
            backgroundColor: "#FAFAFA",
          },
          tabBarLabel: () => {
            return null;
          },
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <NavIcon
              focused={focused}
              name={Platform.OS === "ios" ? "ios-home" : "md-home"}
            />
          ),
        }}
        component={HomeStackNavigator}
      />
      <BottomTabNavigator.Screen
        name={BottomTabNavigationRoutes.SEARCH}
        options={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#FAFAFA",
          },
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ focused }) => (
            <NavIcon
              focused={focused}
              name={Platform.OS === "ios" ? "ios-search" : "md-search"}
            />
          ),
        }}
        component={SearchStackNavigator}
      />

      <BottomTabNavigator.Screen
        options={({ navigation }) => ({
          tabBarStyle: {
            backgroundColor: "#FAFAFA",
          },
          tabBarLabel: () => {
            return null;
          },
          headerTitle: () => (
            <Image
              style={{ height: 35 }}
              resizeMode="contain"
              source={require("../assets/logo.png")}
            />
          ),
          headerRight: () => <MessagesLink navigation={navigation} />,
          headerStyle: { backgroundColor: stackStyles.backgroundColor },
          headerTitleContainerStyle: {
            width: Platform.OS === "ios" ? "60%" : "75%",
            alignItems: Platform.OS === "ios" ? "center" : "flex-start",
          },
          tabBarIcon: ({ focused }) => (
            <NavIcon
              focused={focused}
              size={32}
              name={
                Platform.OS === "ios"
                  ? "ios-add-circle-outline"
                  : "md-add-circle-outline"
              }
            />
          ),
        })}
        name="Add"
        component={Add}
      />
      <BottomTabNavigator.Screen
        name={BottomTabNavigationRoutes.NOTIFICATION}
        options={{
          tabBarStyle: {
            backgroundColor: "#FAFAFA",
          },
          tabBarLabel: () => {
            return null;
          },
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <NavIcon
              focused={focused}
              name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
            />
          ),
          headerTitleContainerStyle: {
            width: Platform.OS === "ios" ? "60%" : "75%",
            alignItems: Platform.OS === "ios" ? "center" : "flex-start",
          },
        }}
        component={NotificationStackNavigator}
      />

      <BottomTabNavigator.Screen
        name={BottomTabNavigationRoutes.PROFILE}
        options={{
          tabBarStyle: {
            backgroundColor: "#FAFAFA",
          },
          tabBarLabel: () => {
            return null;
          },
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <NavIcon
              focused={focused}
              name={Platform.OS === "ios" ? "ios-person" : "md-person"}
            />
          ),
          headerTitleContainerStyle: {
            width: Platform.OS === "ios" ? "60%" : "75%",
            alignItems: Platform.OS === "ios" ? "center" : "flex-start",
          },
        }}
        component={ProfileStackNavigator}
      />
    </BottomTabNavigator.Navigator>
  );
};
