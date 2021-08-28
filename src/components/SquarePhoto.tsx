import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { constants } from 'src/constants/constants';

export const SquarePhoto = ({
  navigation,
  files = [],
  id,
}: {
  navigation: any;
  files: {
    id: string;
    url: string;
  }[];
  id: string;
}) => (
  <TouchableOpacity onPress={() => {}}>
    <Image
      source={{ uri: files[0].url }}
      style={{ width: constants.width / 3, height: constants.height / 6 }}
    />
  </TouchableOpacity>
);
