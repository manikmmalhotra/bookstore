import React from 'react';
import { createStackNavigator, DefaultTheme, NavigationContainer } from "@react-navigation/native";

import {BookDetail} from "./screens/";
import tabs from "./navigation/tabs";

const theme = {
    ...DefaultTheme,
    colors:{
      ...DefaultTheme.colors,
      border: "transparent"
    } 
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={theme}>
    <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName={'Home'}
          >
          {/* Tabs */}
          <Stack.Screen name="Home" component={Tabs} />
          
          {/* Screens */}
          <Stack.Screen name="BookDetail" component={BookDetail} options={{ headerShown: false }} />
          </Stack.Navigator>
          </NavigationContainer>
  )
}
