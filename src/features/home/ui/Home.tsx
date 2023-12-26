import React from 'react';
import {Post} from "@/features/post/ui/Post";
import {HomeScreenNavigationProp} from "@/common/type/RootStackParamList";

type HomeProps = {
  navigation: HomeScreenNavigationProp;
};
export const Home = ({navigation}:HomeProps) => {
  return (
    <Post navigation={navigation}/>
  );
};
