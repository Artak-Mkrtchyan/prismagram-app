import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Alert, Keyboard, Text, TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";
import * as Facebook from "expo-facebook";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthButton } from "../../components/AuthButton";
import { AuthInput } from "../../components/AuthInput";
import { useInput } from "../../hooks/useInput";
import { CREATE_ACCOUNT, LOG_IN } from "./AuthQueries";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const FBContainer = styled.View`
  margin-top: 25px;
  padding-top: 25px;
  border-top-width: 1px;
  border-color: ${(props) => props.theme.lightGreyColor};
  border-style: solid;
`;

export const SignUp = ({
  navigation,
}: {
  navigation: StackNavigationProp<{}>;
}) => {
  const emailInput = useInput("");
  const usernameInput = useInput("");
  const firstNameInput = useInput("");
  const lastNameInput = useInput("");

  const [loading, setLoading] = useState<boolean>(false);
  const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
    variables: {
      email: emailInput.value,
      username: usernameInput.value,
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
    },
  });

  const handleSignUp = async () => {
    const { value: email } = emailInput;
    const { value: username } = usernameInput;
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
      return Alert.alert("That email is invalid");
    }
    if (username === "") {
      return Alert.alert("Invalid username");
    }
    try {
      setLoading(true);
      const {
        data: { createAccount },
      } = await createAccountMutation();
      if (createAccount) {
        Alert.alert("Account created", "Log in now!");
        navigation.navigate("Login", { email });
      }
    } catch (e) {
      console.log(e);
      Alert.alert("Username taken.", "Log in instead");
      navigation.navigate("Login", { email });
    } finally {
      setLoading(false);
    }
  };

  const updateFormData = (
    email: string,
    firstName: string,
    lastName: string
  ) => {
    emailInput.setValue(email);
    firstNameInput.setValue(firstName);
    lastNameInput.setValue(lastName);
    const [username] = email.split("@");
    usernameInput.setValue(username);
  };

  const fbLogin = async () => {
    try {
      setLoading(true);
      await Facebook.initializeAsync({
        appId: "1486713441721691",
      });
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile", "email"],
      });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}&fields=id,last_name,first_name,email`
        );
        const { email, first_name, last_name } = await response.json();
        updateFormData(email, first_name, last_name)
        Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
        setLoading(false);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <AuthInput
          {...emailInput}
          returnKeyType={"send"}
          keyboardType="email-address"
          placeholder="Email"
          autoCorrect={false}
        />
        <AuthInput
          {...usernameInput}
          returnKeyType={"send"}
          placeholder="Username"
          autoCorrect={false}
          autoCapitalize="words"
        />
        <AuthInput
          {...firstNameInput}
          returnKeyType={"send"}
          placeholder="First Name"
          autoCorrect={false}
          autoCapitalize="words"
        />
        <AuthInput
          {...lastNameInput}
          returnKeyType={"send"}
          placeholder="Last Name"
          autoCorrect={false}
          autoCapitalize="words"
        />
        <AuthButton
          bgColor={"#2D4DA7"}
          loading={loading}
          text="Sign Up"
          onPress={handleSignUp}
        />
        <FBContainer>
          <AuthButton
            bgColor={"#2D4DA7"}
            loading={false}
            onPress={fbLogin}
            text="Connect Facebook"
          />
        </FBContainer>
      </View>
    </TouchableWithoutFeedback>
  );
};
