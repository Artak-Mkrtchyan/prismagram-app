import React, { useCallback, useEffect, useState } from 'react';
import { Image, ScrollView, TouchableOpacity } from 'react-native';
import { Asset, launchImageLibrary } from 'react-native-image-picker';
import { PERMISSIONS, request } from 'react-native-permissions';
import { Loader } from 'src/components/Loader';
import { constants } from 'src/constants/constants';
import {
    PhotoTabNavigationRoutes, UploadPhotoNavigationRoutes, UploadPhotoParamList
} from 'src/navigation/config';
import { colors } from 'src/styles';
import styled from 'styled-components/native';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const View = styled.View`
  flex: 1;
`;

const Button = styled.TouchableOpacity`
  width: 100px;
  height: 30px;
  position: absolute;
  right: 5px;
  top: 15px;
  background-color: ${colors.blueColor};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const Text = styled.Text`
  color: white;
  font-weight: 600;
`;

export type PhotoStackProp = StackNavigationProp<
  UploadPhotoParamList,
  PhotoTabNavigationRoutes.SELECT_PHOTO
>;

export const SelectPhoto = () => {
  const [loading, setLoading] = useState(true);
  const [hasPermission, setHasPermission] = useState(false);
  const [selected, setSelected] = useState<Asset>();
  const [allPhotos, setAllPhotos] = useState<Asset[]>();
  const navigation = useNavigation<PhotoStackProp>();

  const changeSelected = (photo) => {
    setSelected(photo);
  };

  const onButtonPress = useCallback(() => {
    launchImageLibrary({ selectionLimit: 10 }, ({ assets }) => {
      console.log(assets);
      if (assets) {
        const [firstPhoto] = assets;
        setSelected(firstPhoto);
        setAllPhotos(assets);
      }
    });
  }, []);

  const getPhotos = () => {
    try {
      onButtonPress();
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const askPermission = async () => {
    try {
      const status = await request(PERMISSIONS.IOS.CAMERA);
      console.log('status', status);
      if (status === 'granted') {
        setHasPermission(true);
        getPhotos();
      }
    } catch (e) {
      console.log(e);
      setHasPermission(false);
    }
  };

  const handleSelected = () => {
    navigation.navigate(UploadPhotoNavigationRoutes.UPLOAD_PHOTO, { photo: selected });
  };

  useEffect(() => {
    askPermission();
  }, []);
  console.log('loading', loading);
  return (
    <View>
      {loading ? (
        <Loader />
      ) : (
        <View>
          {hasPermission ? (
            <>
              <Image
                style={{ width: constants.width, height: constants.height / 2 }}
                source={{ uri: selected?.uri }}
              />

              <Button onPress={handleSelected}>
                <Text>Select Photo</Text>
              </Button>

              <ScrollView
                contentContainerStyle={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                {allPhotos?.map((photo) => (
                  <TouchableOpacity key={photo.fileName} onPress={() => changeSelected(photo)}>
                    <Image
                      source={{ uri: photo.uri }}
                      style={{
                        width: constants.width / 3,
                        height: constants.height / 6,
                        opacity: photo.fileName === selected?.fileName ? 0.5 : 1,
                      }}
                    />
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </>
          ) : null}
        </View>
      )}
    </View>
  );
};
