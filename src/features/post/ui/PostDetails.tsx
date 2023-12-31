import React from 'react';
import {ActivityIndicator, FlatList, RefreshControl, StyleSheet} from "react-native";
import {useFetch} from "@/common/hooks/useFetch";
import {PostData} from "@/features/post/ui/PostData";
import {postApi} from "@/features/post/api/postApi";
import {HomeScreenNavigationProp} from "@/common/type/RootStackParamList";

type Props={
  navigation:HomeScreenNavigationProp
}
export const PostDetails = ({navigation}:Props) => {
  const {data, isLoading, reFetch} = useFetch(postApi.getPosts)

  if (isLoading) {
    return <ActivityIndicator style={styles.indicator} size={'large'} color={'red'}/>
  }
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      refreshControl={<RefreshControl refreshing={isLoading} onRefresh={reFetch}/>}
      renderItem={({item}) => (
        <PostData id={item.id}
                  title={item.title}
                  imageUrl={item.imageUrl}
                  text={item.text}
                  createdAt={item.createdAt}
                  navigation={navigation}

        />
      )}/>
  );
};

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
})




