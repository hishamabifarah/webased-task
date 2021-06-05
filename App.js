import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { HomeScreen, NewsHistoryScreen, NewsSourcesScreen } from './src/screens';
import Tabs from './src/navigation/tabs';

// redux
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName={"HomeScreen"}
        >
          <Stack.Screen name={"HomeScreen"} component={Tabs} />
          <Stack.Screen name={"SourcesScreen"} component={NewsSourcesScreen} />
          <Stack.Screen name={"HistoryScreen"} component={NewsHistoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;