import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { SearchBar } from 'src/components/SearchBar';
import { stackStyles } from 'src/navigation/config';
import { SEARCH } from 'src/navigation/TabNavigation';
import { Search } from 'src/screens/Tab/Search';

import { useQuery } from '@apollo/client';
import { createStackNavigator } from '@react-navigation/stack';

const StackNavigation = createStackNavigator();

export const SearchStackNavigator = ({ navigation }: { navigation: any }) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [refreshing, setRefreshing] = useState(false);
  const [fetchTrigger, setFetchTrigger] = useState(false);

  const onChange = (text: string) => {
    console.log("searchInput", searchInput);
    setSearchInput(text), setFetchTrigger(false);
    navigation.setParams({
      term: text,
    });
  };

  const onSubmit = () => {
    setFetchTrigger(true);
  };

  const SearchComponent = () => (
    <Search term={searchInput} shouldFetch={fetchTrigger} />
  );

  return (
    <StackNavigation.Navigator>
      <StackNavigation.Screen
        options={({ navigation }) => ({
          headerStyle: { backgroundColor: stackStyles.backgroundColor },
          headerTitle: () => (
            <SearchBar
              onChange={onChange}
              onSubmit={onSubmit}
              value={searchInput}
            />
          ),
          headerTitleContainerStyle: {
            width: Platform.OS === "ios" ? "60%" : "75%",
            alignItems: Platform.OS === "ios" ? "center" : "flex-start",
          },
        })}
        name="SearchStack"
        component={SearchComponent}
      />
    </StackNavigation.Navigator>
  );
};
