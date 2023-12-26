import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from "@react-navigation/core";

export type RootStackParamList = {
  Home: undefined;
  Postfull: { id: string, image: string, text: string, title: string };
};

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type PostFullScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Postfull'
>;

export type PostFullScreenRouteProp = RouteProp<RootStackParamList, 'Postfull'>;
