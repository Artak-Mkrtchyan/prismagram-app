import React, { useContext } from "react";

import { Text, TouchableOpacity, View } from "react-native";

import {
  AuthContext,
  useIsLoggedIn,
  useLogUserIn,
  useLogUserOut,
} from "../AuthContext";
import { AuthNavigation } from "../navigation/AuthNavigation";
import { MainNavigation } from "../navigation/MainNavigation";
import { TabNavigation } from "../navigation/TabNavigation";

export const NavController = () => {
  const isLoggedIn = useIsLoggedIn();
  const logUserIn = useLogUserIn();
  const logUserOut = useLogUserOut();

  return isLoggedIn ? <MainNavigation /> : <AuthNavigation />;
};
