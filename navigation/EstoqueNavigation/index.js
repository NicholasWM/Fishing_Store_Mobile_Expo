import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DrawerTab from '../../components/DrawerTab'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import IconImage from '../../components/IconImage'

import EstoqueScreen from '../../screens/Estoque'
import AdicionarEstoqueScreen from '../../screens/AdicionarEstoque'

import HistoricoEstoqueScreen from '../../screens/HistoricoEstoque'
const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const INITIAL_ROUTE_NAME = 'Estoque';


function EstoqueNavigator({navigation, route}){
    navigation.setOptions({ headerTitle: () => (
        <DrawerTab 
          route={route}
          navigation={navigation}
          INITIAL_ROUTE_NAME={INITIAL_ROUTE_NAME}
          />
        ) 
    });
    return (
        <BottomTab.Navigator 
            initialRouteName={INITIAL_ROUTE_NAME}
            tabBarOptions={{
                activeTintColor: 'orange',
                // inactiveTintColor: ''
              }}>
            <BottomTab.Screen
                name="Adicionar"
                component={AdicionarEstoqueScreen}
                options={{
                    title: 'Adicionar Produto',
                    tabBarIcon: ({focused}) => (
                        <IconImage 
                            focused={focused}
                            source={require('../../assets/images/activity-history.png')}
                        />
                    ),
            }}/>
            <BottomTab.Screen
                name="Estoque"
                component={EstoqueScreen}
                options={{
                    title: 'Estoque',
                    tabBarIcon: ({focused}) => (
                        <IconImage 
                            focused={focused}
                            source={require('../../assets/images/stack.png')}
                        />
                    ),
                }}
            />
            <BottomTab.Screen
            name="HistoricoP"
            component={HistoricoEstoqueScreen}
            options={{
                title: 'Historico',
                tabBarIcon: ({focused}) => (
                    <IconImage 
                        focused={focused}
                        source={require('../../assets/images/activity-history.png')}
                    />
                ),
            }}/>
            
        </BottomTab.Navigator>
    )
}

export default function StackEstoque(props) {
    return (
      <Stack.Navigator>
         <Stack.Screen name="Root" component={EstoqueNavigator} />
       </Stack.Navigator>
      );
}
