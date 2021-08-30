import React, { useState } from 'react';
import { RefreshControl, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Loader } from 'src/components/Loader';
import { SquarePhoto } from 'src/components/SquarePhoto';
import { BottomTabNavigationRoutes, BottomTabStackParamList } from 'src/navigation/config';
import styled from 'styled-components/native';

import { gql, useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { SEARCH } from './queries';
import { Props, SearchScreenProp } from './types';

export const SearchScreen = ({ term, shouldFetch }: Props) => {
	const navigation = useNavigation<SearchScreenProp>();
	const [refreshing, setRefreshing] = useState(false);

	const { data, loading, refetch } = useQuery(SEARCH, {
		skip: !shouldFetch,
		variables: {
			term,
		},
	});

	const onRefresh = async () => {
		try {
			setRefreshing(true);

			console.log('term data', term);
			await refetch({
				term,
			});
		} catch (e) {
		} finally {
			setRefreshing(false);
		}
	};
	console.log('term', data);
	return (
		<ScrollView
			refreshControl={
				<RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
			}
		>
			{loading ? (
				<Loader />
			) : (
				data &&
        data.searchPost &&
        data.searchPost.map((post: any) => (
        	<SquarePhoto navigation={navigation} key={post.id} {...post} />
        ))
			)}
		</ScrollView>
	);
};
