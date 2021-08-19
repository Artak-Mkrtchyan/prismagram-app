import React from 'react';
import { Platform, View } from 'react-native';
import styled from 'styled-components/native';

import { NavIcon } from './NavIcon';

const Container = styled.TouchableOpacity`
  padding-right: 20px;
`;

export const MessagesLink = (props: any) => {
  const { navigation } = props;
  return (
    <View>
      <Container
        onPress={() => {
          navigation.navigate("MessagesPage");
        }}
      >
        <NavIcon
          name={Platform.OS === "ios" ? "ios-paper-plane" : "md-paper-plane"}
        />
      </Container>
    </View>
  );
};
