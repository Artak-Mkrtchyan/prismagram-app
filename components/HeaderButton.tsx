import React from "react";
import styled from "styled-components/native";

const Container = styled.TouchableOpacity``;

const Text = styled.Text``;

export const HeaderButton = (props: any) => {
  const { text, navigation } = props;
  return (
    <Container
      onPress={() => {
        navigation.navigate("Messages");
      }}
    >
      <Text>{text}</Text>
    </Container>
  );
};