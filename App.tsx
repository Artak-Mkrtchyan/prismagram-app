import { AsyncStorageWrapper, persistCache, PersistentStorage } from 'apollo3-cache-persist';
import { PersistedData } from 'apollo3-cache-persist/lib/types';
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { ApolloClient, ApolloProvider, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { apolloClientOptions } from './apollo';
import { AuthProvider } from './AuthContext';
import { NavController } from './components/NavController';
import { theme } from './styles';

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
