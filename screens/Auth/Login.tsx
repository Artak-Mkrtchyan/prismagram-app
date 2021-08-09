import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Alert, Keyboard, Text, TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthButton } from "../../components/AuthButton";
import { AuthInput } from "../../components/AuthInput";
import { useInput } from "../../hooks/useInput";
import { LOG_IN } from "./AuthQueries";

const StyledView = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Login = ({
  navigation,
}: {
  navigation: StackNavigationProp<{}>;
}) => {
  const emailInput = useInput("");
  const [loading, setLoading] = useState<boolean>(false);
  const [requestSecretMutation] = useMutation(LOG_IN, {
    variables: {
      email: emailInput.value,
    },
  });

  const handleLogin = async () => {
    const { value } = emailInput;
    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (value === "") {
      return Alert.alert("Email can't be empty");
    } else if (!value.includes("@") || !value.includes(".")) {
      return Alert.alert("Please write an email");
    } else if (!emailRegex.test(value)) {
      return Alert.alert("That email is invalid");
    }
    try {
      setLoading(true);
      const {
        data: { requestSecret },
      } = await requestSecretMutation();
      if (requestSecret) {
        Alert.alert("Check your email");
        navigation.navigate("Confirm");
      } else { 
        Alert.alert('Account not found');
        navigation.navigate("SignUp")
      }
    } catch (e) {
      Alert.alert("Can't login now");
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <StyledView
        style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
      >
        <AuthInput
          {...emailInput}
          returnKeyType={"send"}
          keyboardType="email-address"
          placeholder="Email"
          onSubmitEditing={handleLogin}
          autoCorrect={false}
        />
        <AuthButton loading={loading} text="Log In" onPress={handleLogin} />
      </StyledView>
    </TouchableWithoutFeedback>
  );
};
