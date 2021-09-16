import React, { useState } from 'react';
import { Platform } from 'react-native';
import { SearchBar } from 'src/components/SearchBar';
import {
    BottomTabNavigationRoutes, BottomTabStackParamList, stackStyles
} from 'src/navigation/config';
import { SearchScreen } from 'src/screens/BottomTabs/Search';
import { DetailScreen } from 'src/screens/Detail';
import { colors } from 'src/styles';

import { useNavigation } from '@react-navigation/core';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

import { UserDetail } from '../UserDetail';

const StackNavigation = createStackNavigator();

export type SearchStackProp = StackNavigationProp<
  BottomTabStackParamList,
  BottomTabNavigationRoutes.SEARCH
>;

export const SearchStackNavigator = () => {
  const navigation = useNavigation<SearchStackProp>();
  const [searchInput, setSearchInput] = useState<string>('');
  const [fetchTrigger, setFetchTrigger] = useState(false);

  const onChange = (text: string) => {
    setSearchInput(text), setFetchTrigger(false);
    navigation.setParams({
      term: text,
    });
  };

  const onSubmit = () => {
    setFetchTrigger(true);
  };

  const SearchComponent = () => <SearchScreen term={searchInput} shouldFetch={fetchTrigger} />;

  return (
    <StackNavigation.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: stackStyles.backgroundColor },
      }}>
      <StackNavigation.Screen
        options={() => ({
          headerTitle: () => (
            <SearchBar onChange={onChange} onSubmit={onSubmit} value={searchInput} />
          ),
          headerTitleContainerStyle: {
            width: Platform.OS === 'ios' ? '60%' : '75%',
            alignItems: Platform.OS === 'ios' ? 'center' : 'flex-start',
          },
        })}
        name="SearchStack"
        component={SearchComponent}
      />
      <StackNavigation.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: colors.blackColor,
        }}></StackNavigation.Screen>
      <StackNavigation.Screen name="UserDetail" component={UserDetail} />
    </StackNavigation.Navigator>
  );
};
