import { StatusBar } from "expo-status-bar";
import React from "react";
import AppLoading from "expo-app-loading";
import { Text, View } from "react-native";
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

export default function App() {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();
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

      // Initialize Apollo Client
      const client = new ApolloClient({
        ...apolloClientOptions,
        cache: new InMemoryCache(),
      });

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
        <View>
          <Text>Open up App.tsx to start working on your app!</Text>
          <StatusBar style="auto" />
        </View>
      </ThemeProvider>
    </ApolloProvider>
  ) : (
    <AppLoading /> 
  );
}
