import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { AuthButton } from 'src/components/AuthButton';
import { constants } from 'src/constants/constants';
import styled from 'styled-components/native';

import { StackNavigationProp } from '@react-navigation/stack';

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Image = styled.Image`
  width: ${constants.width / 2.5}px;
  margin-bottom: 0px;
`;

const Touchable = styled.TouchableOpacity``;

const LoginLink = styled.View``;
const LoginLinkText = styled.Text`
  color: ${(props) => props.theme.blueColor};
  margin-top: 20px;
`;

export const AuthHome = ({
  navigation,
}: {
  navigation: StackNavigationProp<{}>;
}) => (
  <View>
    <Image resizeMode="contain" source={require("../../assets/logo.png")} />
    <AuthButton
      text="Create New Account"
      onPress={() => navigation.navigate("SignUp")}
    />
    <Touchable onPress={() => navigation.navigate("Login")}>
      <LoginLink>
        <LoginLinkText>Login</LoginLinkText>
      </LoginLink>
    </Touchable>
  </View>
);
