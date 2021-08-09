import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { constants } from "../constants";

const Touchable = styled.TouchableOpacity``;
const Container = styled.View`
  background-color: ${(props) => props.theme.blueColor};
  padding: 10px;
  margin: 0px 50px;
  border-radius: 4px;
  width: ${constants.width / 2}px;
`;
const Text = styled.Text`
  color: white;
  text-align: center;
  font-weight: 600;
`;

export const AuthButton = ({
  text,
  onPress,
  loading = false,
}: {
  text: string;
  onPress: Function;
  loading?: boolean;
}) => {
  return (
    <Touchable disabled={loading} onPress={() => onPress()}>
      <Container>
        {loading ? <ActivityIndicator color={"white"} /> : <Text>{text}</Text>}
      </Container>
    </Touchable>
  );
};