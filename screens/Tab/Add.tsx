import React, { useEffect } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

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
    const unsubscribe = navigation.addListener("tabPress", e => {
      e.preventDefault();
      navigate("Photo");
    });
    return unsubscribe;
  }, [navigation]);

 return  <StyledView>
    <Text>Add</Text>
  </StyledView>
};
