import React, { useContext } from "react";

import { Text, TouchableOpacity, View } from "react-native";

import {
  AuthContext,
  useIsLoggedIn,
  useLogUserIn,
  useLogUserOut,
} from "../AuthContext";

export const NavController = () => {
  const isLoggedIn = useIsLoggedIn();
  const logUserIn = useLogUserIn();
  const logUserOut = useLogUserOut();

  return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    {isLoggedIn ? (
      <TouchableOpacity onPress={() => logUserOut()}>
        <Text>Log out</Text>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity onPress={() => logUserIn()}>
        <Text>Log in</Text>
      </TouchableOpacity>
    )}
  </View>;
};
