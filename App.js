import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { NewsHistoryScreen, NewsSourcesScreen , NewsDetailScreen , NewsSourceScreen } from './src/screens';
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
          initialRouteName={"HomeScreen"}
        >
          <Stack.Screen name={"HomeScreen"} component={Tabs} options={{ headerShown: false }} />
          <Stack.Screen name={"SourcesScreen"} component={NewsSourcesScreen} />
          <Stack.Screen name={"HistoryScreen"} component={NewsHistoryScreen} />
          <Stack.Screen name={"SourceScreen"} component={NewsSourceScreen} options={{ title: '' }}  />
          <Stack.Screen name={"DetailsScreen"} component={NewsDetailScreen} options={{ title: '' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;