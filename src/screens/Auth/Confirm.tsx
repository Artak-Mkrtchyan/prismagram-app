import React, { useState } from 'react';
import { Alert, Keyboard, Text, TouchableWithoutFeedback } from 'react-native';
import { AuthButton } from 'src/components/AuthButton';
import { AuthInput } from 'src/components/AuthInput';
import { useInput } from 'src/hooks/useInput';
import { AuthNavigationRoutes } from 'src/navigation/config';
import styled from 'styled-components/native';

import { useMutation } from '@apollo/client';
import { Route, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { useLogUserIn } from '../../AuthContext';
import { CONFIRM_SECRET, LOG_IN } from './AuthQueries';

const StyledView = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

type ParamList = {
  [AuthNavigationRoutes.CONFIRM]: {
    email: string;
  };
};

export const Confirm = ({
  navigation,
  route,
}: {
  route: RouteProp<ParamList, AuthNavigationRoutes.CONFIRM>;
  navigation: StackNavigationProp<{}>;
}) => {
  const confirmInput = useInput("");
  const logIn = useLogUserIn();
  const [loading, setLoading] = useState<boolean>(false);
  const [confirmSecretMutation] = useMutation(CONFIRM_SECRET, {
    variables: {
      secret: confirmInput.value,
      email: route.params.email,
    },
  });

  const handleConfirm = async () => {
    const { value } = confirmInput;
    if (value === "" || !value.includes(" ")) {
      return Alert.alert("Invalid secret");
    }
    try {
      setLoading(true);
      const {
        data: { confirmSecret },
      } = await confirmSecretMutation();
      if (confirmSecret !== "" || confirmSecret !== false) {
        logIn(confirmSecret);
      } else {
        Alert.alert("Wrong secret");
      }
    } catch (e) {
      Alert.alert("Can't confirm secret");
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
          {...confirmInput}
          returnKeyType={"send"}
          placeholder="Secret"
          onSubmitEditing={handleConfirm}
          autoCorrect={false}
        />
        <AuthButton loading={loading} text="Confirm" onPress={handleConfirm} />
      </StyledView>
    </TouchableWithoutFeedback>
  );
};
