import React from 'react';
import { ScrollView } from 'react-native';
import { Loader } from 'src/components/Loader';
import { ProfileComponent } from 'src/components/Profile';
import { USER_FRAGMENT } from 'src/fragments/user';
import { GET_USER } from 'src/screens/BottomTabs/Profile/queries';
import {
    ProfileScreenProp, ProfileScreenRouteParamList
} from 'src/screens/BottomTabs/Profile/types';
import styled from 'styled-components/native';

import { useQuery } from '@apollo/client';
import { useNavigation, useRoute } from '@react-navigation/native';

export const ProfileScreen = () => {
  const navigation = useNavigation<ProfileScreenProp>();
  const route = useRoute<ProfileScreenRouteParamList>();

  const { loading, data } = useQuery(GET_USER, {
    variables: { username: route.params.username },
  });
  return (
    <ScrollView>
      {loading ? (
        <Loader />
      ) : (
        data && data.seeUser && <ProfileComponent {...data.seeUser} />
      )}
    </ScrollView>
  );
};
