import React from 'react';
import {Text, View, StyleSheet, Image, ImageProps, FlatList, ScrollView} from "react-native";
import {FONT} from "@/assets/styles/typography";
import {COLOR} from "@/assets/styles/color";
import {useFetch} from "@/common/hooks/useFetch";
import {PostData} from "@/features/post/ui/PostData";


export const PostDetails = () => {
  const {data} = useFetch()

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
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
  container: {},

})




