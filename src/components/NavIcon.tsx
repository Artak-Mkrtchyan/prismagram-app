import React from 'react';

import { Ionicons } from '@expo/vector-icons';

import { theme } from '../styles';

export const NavIcon = ({
	focused = true,
	name,
	color = theme.blackColor,
	size = 30,
}: {
  focused?: boolean;
  name:
    | 'ios-paper-plane'
    | 'md-paper-plane'
    | 'ios-home'
    | 'md-home'
    | 'ios-search'
    | 'md-search'
    | 'ios-add-circle-outline'
    | 'md-add-circle-outline'
    | 'ios-heart'
    | 'md-heart'
    | 'ios-person'
    | 'md-person';
  color?: string;
  size?: number;
}) => (
	<Ionicons
		name={name}
		color={focused ? color : theme.darkGreyColor}
		size={size}
	/>
);
