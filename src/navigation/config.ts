export const stackStyles = {
  backgroundColor: "#FAFAFA",
};

export type BottomTabStackParamList = {
  Home: undefined;
  Search: undefined;
  Add: undefined;
  Notification: undefined;
  Profile: undefined;
};

export enum BottomTabNavigationRoutes {
  HOME = "Home",
  SEARCH = "Search",
  ADD = "Add",
  NOTIFICATION = "Notification",
  PROFILE = "Profile",
}

export enum CommonNavigationRoutes {
  DETAIL = "Detail",
}

export enum MainNavigationRoutes {
  BOTTOM_TABS = "Bottom_tabs",
  PHOTO = "Photo",
  MESSAGES_PAGE = "Messages_page",
}

export enum AuthNavigationRoutes {
  HOME = "Home",
  SIGNUP = "Signup",
  LOGIN = "Login",
  CONFIRM = "Confirm",
}

export enum MessageNavigationRoutes {
  MESSAGE = "Message",
  MESSAGES = "Messages",
}

export enum PhotoNavigationRoutes {
  PHOTO_TAB = "Photo_tab",
  UPLOAD_PHOTO = "Upload_photo",
}

export enum PhotoTabNavigationRoutes {
  SELECT_PHOTO = "Select_photo",
  TAKE_PHOTO = "Take_photo",
}
