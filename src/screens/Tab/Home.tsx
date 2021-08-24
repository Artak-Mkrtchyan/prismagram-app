import React, { useState } from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import { Loader } from 'src/components/Loader';
import { Post } from 'src/components/Post';
import styled from 'styled-components/native';

import { gql, useQuery } from '@apollo/client';

export const POST_FRAGMENT = gql`
  fragment PostParts on Post {
    id
    location
    caption
    user {
      id
      avatar
      username
    }
    files {
      id
      url
    }
    likeCount
    isLiked
    comments {
      id
      text
      user {
        id
        username
      }
    }
    createdAt
  }
`;

export const FEED_QUERY = gql`
  {
    seeFeed {
      ...PostParts
    }
  }
  ${POST_FRAGMENT}
`;

export const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { loading, data, refetch } = useQuery(FEED_QUERY);

  const refresh = async () => {
    try {
      setRefreshing(true);
      await refetch();
    } catch (e) {
      console.log(e);
    } finally {
      setRefreshing(false);
    }
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={refresh} />
      }
    >
      {loading ? (
        <Loader />
      ) : (
        data &&
        data.seeFeed &&
        data.seeFeed.map((post: any) => <Post key={post.id} {...post} />)
      )}
    </ScrollView>
  );
};
