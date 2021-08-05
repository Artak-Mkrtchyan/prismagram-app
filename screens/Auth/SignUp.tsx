import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const StyledView = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const SignUp = () => (
    <StyledView style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
    <Text>Sign Up </Text>
  </StyledView>
);
