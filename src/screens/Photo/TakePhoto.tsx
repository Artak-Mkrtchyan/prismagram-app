import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { UploadPhotoNavigationRoutes } from 'src/navigation/config';
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
        navigation.navigate(UploadPhotoNavigationRoutes.UPLOAD_PHOTO);
      }}>
      <Text>Go to Upload Photo</Text>
    </TouchableOpacity>
  </StyledView>
);
