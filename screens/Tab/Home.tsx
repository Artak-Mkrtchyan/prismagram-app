import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const StyledView = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Home = () => (
  <StyledView>
    <Text>Home</Text>
    <TouchableOpacity>
      <Text>Go to Login</Text>
    </TouchableOpacity>
  </StyledView>
);
