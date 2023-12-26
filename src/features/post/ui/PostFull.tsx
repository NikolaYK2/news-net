import {Image, StyleSheet, Text, View} from "react-native";
import {FONT} from "@/assets/styles/typography";
import {PostFullScreenNavigationProp, PostFullScreenRouteProp} from "@/common/type/RootStackParamList";


type Props = {
  route: PostFullScreenRouteProp;
  navigation: PostFullScreenNavigationProp;
};
export const PostFull = ({route, navigation}: Props) => {
  const {image, text, title} = route.params

  navigation.setOptions({title})

  return (
    <View style={styles.container}>
      <View style={styles.blockImg}>
        <Image style={styles.img} source={{uri: image}}/>
      </View>
      <View style={styles.blockText}>
        <Text style={styles.text}>
          {text}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10
  },
  blockImg: {
    width: 350,
    height: 300,
    marginBottom: 10
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 10,
  },
  blockText: {
    paddingHorizontal: 5
  },
  text: {
    fontSize: FONT.size16,
    fontWeight:'bold'
  }
})