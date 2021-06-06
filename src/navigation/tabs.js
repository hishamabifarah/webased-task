import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, NewsSourcesScreen, NewsHistoryScreen } from '../screens';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../constants';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
    showLabel: false,
    activeTintColor: COLORS.primary,
    style: {
        borderTopWidth: 0,
        backgroundColor: COLORS.transparent,
        elevation: 0,
    },
};

const Tabs = () => {
    return (
        <Tab.Navigator tabBarOptions={tabBarOptions}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Sources"
                component={NewsSourcesScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="th-large" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="History"
                component={NewsHistoryScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="search" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;