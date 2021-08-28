import React, { useState } from 'react';
import { RefreshControl, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Loader } from 'src/components/Loader';
import { SquarePhoto } from 'src/components/SquarePhoto';
import styled from 'styled-components/native';

import { gql, useQuery } from '@apollo/client';
import { StackNavigationProp } from '@react-navigation/stack';

export const SEARCH = gql`
  query search($term: String!) {
    searchPost(term: $term) {
      id
      files {
        id
        url
      }
      likeCount
      commentCount
    }
  }
`;

export const Search = ({
  term,
  shouldFetch,
}: {
  term: string;
  shouldFetch: boolean;
}) => {
  const [refreshing, setRefreshing] = useState(false);

  const { data, loading, refetch } = useQuery(SEARCH, {
    skip: !shouldFetch,
    variables: {
      term,
    },
  });

  const onRefresh = async () => {
    try {
      setRefreshing(true);

      console.log("term data", term);
      await refetch({
        term,
      });
    } catch (e) {
    } finally {
      setRefreshing(false);
    }
  };
  console.log("term", data);
  return (
    <ScrollView
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
      }
    >
      {loading ? (
        <Loader />
      ) : (
        data &&
        data.searchPost &&
        data.searchPost.map((post: any) => (
          <SquarePhoto key={post.id} {...post} />
        ))
      )}
    </ScrollView>
  );
};
