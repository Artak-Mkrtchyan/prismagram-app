import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { StackNavigationProp } from '@react-navigation/stack';

import { Loader } from '../../components/Loader';

const StyledView = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Home = () => (
  <StyledView>
    <Loader />
  </StyledView>
);
