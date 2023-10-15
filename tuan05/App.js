import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screen1 from './component/screen1';
import screen2 from './component/screen2';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown :false}}>
        <Stack.Screen name="screen1" component={screen1} />
        <Stack.Screen name="screen2" component={screen2} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}