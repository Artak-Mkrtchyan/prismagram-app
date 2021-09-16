export const stackStyles = {
  backgroundColor: '#FAFAFA',
};

export enum BottomTabNavigationRoutes {
  HOME = 'Home',
  SEARCH = 'Search',
  ADD = 'Add',
  NOTIFICATION = 'Notification',
  PROFILE = 'Profile',
}

export type BottomTabStackParamList = {
  [BottomTabNavigationRoutes.HOME]: {};
  [BottomTabNavigationRoutes.SEARCH]: { term: string };
  [BottomTabNavigationRoutes.ADD]: {};
  [BottomTabNavigationRoutes.NOTIFICATION]: {};
  [BottomTabNavigationRoutes.PROFILE]: { username: string };
};

export enum CommonNavigationRoutes {
  DETAIL = 'Detail',
  USER_DETAIL = 'UserDetail',
}

export type CommonStackParamList = {
  [CommonNavigationRoutes.DETAIL]: {};
  [CommonNavigationRoutes.USER_DETAIL]: { username: string };
};

export enum MainNavigationRoutes {
  BOTTOM_TABS = 'Bottom_tabs',
  PHOTO = 'Photo',
  MESSAGES_PAGE = 'Messages_page',
}

export type MainNavigationParamList = {
  [MainNavigationRoutes.BOTTOM_TABS]: {};
  [MainNavigationRoutes.PHOTO]: {};
  [MainNavigationRoutes.MESSAGES_PAGE]: {};
};

export enum AuthNavigationRoutes {
  HOME = 'Home',
  SIGNUP = 'Signup',
  LOGIN = 'Login',
  CONFIRM = 'Confirm',
}

export type AuthNavigationParamList = {
  [AuthNavigationRoutes.HOME]: {};
  [AuthNavigationRoutes.SIGNUP]: {};
  [AuthNavigationRoutes.LOGIN]: {
    email?: string;
  };
  [AuthNavigationRoutes.CONFIRM]: {
    email: string;
  };
};

export enum MessageNavigationRoutes {
  MESSAGE = 'Message',
  MESSAGES = 'Messages',
}

export enum PhotoNavigationRoutes {
  PHOTO_TAB = 'Photo_tab',
  UPLOAD_PHOTO = 'Upload_photo',
}

export enum PhotoTabNavigationRoutes {
  SELECT_PHOTO = 'Select_photo',
  TAKE_PHOTO = 'Take_photo',
}
