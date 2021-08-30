import React from 'react';
import { NativeSyntheticEvent, TextInput, TextInputEndEditingEventData } from 'react-native';
import { constants } from 'src/constants/constants';
import { theme } from 'src/styles';

export const SearchBar = ({
	onChange,
	value,
	onSubmit,
}: {
  onChange: (text: string) => void;
  value: string;
  onSubmit: (e: NativeSyntheticEvent<TextInputEndEditingEventData>) => void;
}): JSX.Element => (
	<TextInput
		style={{
			width: constants.width - 40,
			height: 35,
			backgroundColor: theme.lightGreyColor,
			padding: 10,
			borderRadius: 5,
			textAlign: 'center',
		}}
		returnKeyType="search"
		onChangeText={onChange}
		onEndEditing={onSubmit}
		value={value}
		placeholder={'Search'}
		placeholderTextColor={theme.darkGreyColor}
	/>
);
