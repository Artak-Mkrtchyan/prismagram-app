import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { AuthNavigation } from 'src/navigation/AuthNavigation';
import { MainNavigation } from 'src/navigation/MainNavigation';
import { TabNavigation } from 'src/navigation/TabNavigation';

import { AuthContext, useIsLoggedIn, useLogUserIn, useLogUserOut } from '../AuthContext';

export const NavController = () => {
  const isLoggedIn = useIsLoggedIn();
  const logUserIn = useLogUserIn();
  const logUserOut = useLogUserOut();

  return isLoggedIn ? <MainNavigation /> : <AuthNavigation />;
};
