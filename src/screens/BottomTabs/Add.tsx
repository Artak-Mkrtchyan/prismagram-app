import React, { useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { MainNavigationRoutes } from 'src/navigation/config';
import styled from 'styled-components/native';

import { StackNavigationProp } from '@react-navigation/stack';

const StyledView = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Add = ({
	navigation,
}: {
  navigation: StackNavigationProp<{}>;
}) => {
	const { navigate } = navigation;
	useEffect(() => {
		const unsubscribe = navigation.addListener('tabPress', (e) => {
			e.preventDefault();
			navigate(MainNavigationRoutes.PHOTO);
		});
		return unsubscribe;
	}, [navigation]);

	return (
		<StyledView>
			<Text>Add</Text>
		</StyledView>
	);
};
