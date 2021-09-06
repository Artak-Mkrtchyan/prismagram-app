import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { StackNavigationProp } from '@react-navigation/stack';

const StyledView = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const TakePhoto = ({ navigation }: { navigation: StackNavigationProp<{}> }) => (
  <StyledView>
    <Text>TakePhoto</Text>
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('UploadPhoto');
      }}>
      <Text>Go to Upload Photo</Text>
    </TouchableOpacity>
  </StyledView>
);
