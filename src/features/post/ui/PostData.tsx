import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from "react-native";
import {FONT} from "@/assets/styles/typography";
import {COLOR} from "@/assets/styles/color";
import {GetPostsType} from "@/features/post/api/postApi";


const avatarImage = require('@/assets/profile/ava.png');

export const PostData = ({imageUrl, title, createdAt}:GetPostsType) => {

  const imagePost = imageUrl ? {uri: imageUrl} : avatarImage

  return (
    <TouchableOpacity style={styles.containerData}>
      <View style={styles.containerImg}>
        <Image style={styles.img} source={imagePost}/>
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <Text style={styles.data}>{createdAt}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerData: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: COLOR.grey500,
    padding:15
  },
  containerImg: {
    width: 60,
    height: 60,
    marginRight: 12
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 12,
  },
  title: {
    fontSize: FONT.size16,
    fontWeight: '700',
  },
  data: {
    fontSize: FONT.size12,
    color: COLOR.grey100
  }
})
