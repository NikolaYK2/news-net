import React from 'react';
import {StyleSheet, View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {PostDetails} from "@/features/post/ui/PostDetails";
import {HomeScreenNavigationProp} from "@/common/type/RootStackParamList";

type Props={
  navigation:HomeScreenNavigationProp
}
export const Post = ({navigation}:Props) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <PostDetails navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
})