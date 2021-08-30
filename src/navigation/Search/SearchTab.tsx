import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { ProfileComponent } from 'src/components/Profile';
import { SearchBar } from 'src/components/SearchBar';
import { stackStyles } from 'src/navigation/config';
import { SEARCH } from 'src/navigation/TabNavigation';
import { SearchScreen } from 'src/screens/BottomTabs/Search';
import { DetailScreen } from 'src/screens/Detail';
import { theme } from 'src/styles';

import { createStackNavigator } from '@react-navigation/stack';

const StackNavigation = createStackNavigator();

export const SearchStackNavigator = ({ navigation }: { navigation: any }) => {
	const [searchInput, setSearchInput] = useState<string>('');
	const [refreshing, setRefreshing] = useState(false);
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

	const SearchComponent = () => (
		<SearchScreen term={searchInput} shouldFetch={fetchTrigger} />
	);

	return (
		<StackNavigation.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: stackStyles.backgroundColor },
			}}
		>
			<StackNavigation.Screen
				options={({ navigation }) => ({
					headerTitle: () => (
						<SearchBar
							onChange={onChange}
							onSubmit={onSubmit}
							value={searchInput}
						/>
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
					headerTintColor: theme.blackColor,
				}}
			></StackNavigation.Screen>
			<StackNavigation.Screen name="Profile" component={ProfileComponent} />
		</StackNavigation.Navigator>
	);
};
