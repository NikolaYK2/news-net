import {StatusBar} from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Post} from "@/features/post/ui/Post";

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <Post/>
      <StatusBar style="auto"/>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
