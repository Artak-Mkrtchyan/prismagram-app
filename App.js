import React, { useState, useEffect } from "react";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { ThemeProvider } from "styled-components";
import { AsyncStorage } from "react-native";
import { ApolloProvider } from "react-apollo";

import makeApolloClient from "./apollo";
import styles from "./styles";
import NavController from "./components/NavController";
import { AuthProvider } from "./AuthContext";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [client, setClient] = useState(null);

  const preLoad = async () => {
    try {
      await Font.loadAsync({
        ...Ionicons.font,
      });
      await Asset.loadAsync([require("./assets/logo.png")]);

      const client = makeApolloClient("token");

      setLoaded(true);
      setClient(client);
    } catch (e) {
      console.log("err", e);
    }
  };

  useEffect(() => {
    preLoad();
  }, []);



  return loaded && client ? (
    <ApolloProvider client={client}>
      <ThemeProvider theme={styles}>
        <AuthProvider>
          <NavController />
        </AuthProvider>
      </ThemeProvider>
    </ApolloProvider>
  ) : (
      <AppLoading />
    );
}
