import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';

import { createStackNavigator } from '@react-navigation/stack';

import DrawerTab from '../components/DrawerTab'

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Home';

function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({
     headerTitle: () => (
            <DrawerTab 
              route={route}
              navigation={navigation}
              // INITIAL_ROUTE_NAME={INITIAL_ROUTE_NAME}
            />
          ),
  });

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
    >
      <BottomTab.Screen
        name="Home"
        key={0}
        component={HomeScreen}
        options={{
          title: 'Get Started',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
      <BottomTab.Screen
        name="Links"
        key={1}
        component={HomeScreen}
        options={{
          title: 'Resources',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
      <BottomTab.Screen
        name="Links1"
        key={2}
        component={HomeScreen}
        options={{
          title: 'Resources1',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
      
    </BottomTab.Navigator>
  );
}

export default function StackButtomTabNavigator(props) {
  return (
    <Stack.Navigator>
       <Stack.Screen name="Root" component={BottomTabNavigator} />
     </Stack.Navigator>
    );
}
