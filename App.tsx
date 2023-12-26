import {StatusBar} from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Home} from "@/features/home/ui/Home";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {PostFull} from "@/features/post/ui/PostFull";
import {RootStackParamList} from "@/common/type/RootStackParamList";


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen name={'Home'} component={Home} options={{title: 'News'}}/>
          <Stack.Screen name={'Postfull'} component={PostFull} options={{title:'Article'}}/>
        </Stack.Navigator>
        <StatusBar style="auto"/>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

