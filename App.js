import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './MainPage';
import Single from './Single';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Home">
         <Stack.Screen name="Home" component={MainPage} options={{ headerShown: false }} />
         <Stack.Screen name="Single" component={Single} options={{ headerShown: false }} />
       </Stack.Navigator>
    </NavigationContainer>
  );
}