import React from 'react';
import {ActivityIndicator, FlatList, RefreshControl, StyleSheet} from "react-native";
import {useFetch} from "@/common/hooks/useFetch";
import {PostData} from "@/features/post/ui/PostData";


export const PostDetails = () => {
  const {data, isLoading, reFetch} = useFetch()

  if (isLoading){
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
                  createdAt={item.createdAt}/>
      )}/>
  );
};

const styles = StyleSheet.create({
  indicator: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
})




