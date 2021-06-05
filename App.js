import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, StackActions } from '@react-navigation/native'

import { HomeScreen, NewsHistoryScreen, NewsSourcesScreen } from './src/screens';
import Tabs from './src/navigation/tabs';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
          initialRouteName={"HomeScreen"}
        >
        <Stack.Screen name={"HomeScreen"} component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;