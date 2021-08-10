import { StatusBar } from "expo-status-bar";
import React from "react";
import AppLoading from "expo-app-loading";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useEffect } from "react";
import * as Font from "expo-font";

import { Asset } from "expo-asset";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  persistCache,
  AsyncStorageWrapper,
  PersistentStorage,
} from "apollo3-cache-persist";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  NormalizedCacheObject,
} from "@apollo/client";
import { apolloClientOptions } from "./apollo";
import { theme } from "./styles";
import { PersistedData } from "apollo3-cache-persist/lib/types";
import { ThemeProvider } from "styled-components";
import { NavController } from "./components/NavController";
import { AuthProvider } from "./AuthContext";

export default function App() {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const preload = async () => {
    try {
      await Font.loadAsync({
        ...Ionicons.font,
      });
      await Asset.loadAsync([require("./assets/logo.png")]);

      const cache = new InMemoryCache({});

      await persistCache({
        cache,
        storage: new AsyncStorageWrapper(AsyncStorage) as PersistentStorage<
          PersistedData<NormalizedCacheObject>
        >,
      });

      const client = new ApolloClient({
        ...apolloClientOptions,
        cache: new InMemoryCache(),
      });

      const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
      console.log('isLoggedIn',Boolean(isLoggedIn));
      setIsLoggedIn(Boolean(isLoggedIn));

      setClient(client);

      setLoaded(true);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    preload();
  }, []);

  return loaded && client ? (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <AuthProvider isLoggedIn={isLoggedIn} >
          <NavController />
        </AuthProvider>
      </ThemeProvider>
    </ApolloProvider>
  ) : (
    <AppLoading />
  );
}
