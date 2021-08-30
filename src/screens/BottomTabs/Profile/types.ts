import { BottomTabNavigationRoutes, BottomTabStackParamList } from 'src/navigation/config';

import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type ParamList = {
  [BottomTabNavigationRoutes.PROFILE]: { username: string };
};

export type ProfileScreenRouteParamList = RouteProp<
  ParamList,
  BottomTabNavigationRoutes.PROFILE
>;

export type ProfileScreenStackParamList = {
  [BottomTabNavigationRoutes.PROFILE]: undefined;
};

export type ProfileScreenProp = StackNavigationProp<
  ProfileScreenStackParamList,
  BottomTabNavigationRoutes.PROFILE
>;

export type Props = {
  term: string;
  shouldFetch: boolean;
};
