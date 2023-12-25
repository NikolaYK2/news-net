import React from 'react';
import {StyleSheet, View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {COLOR} from "@/assets/styles/color";
import {PostDetails} from "@/features/post/ui/PostDetails";


export const Post = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <PostDetails/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: COLOR.grey500,
    padding: 10,
  },
})