import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DrawerTab from '../../components/DrawerTab'
import IconImage from '../../components/IconImage'

import EstoqueScreen from '../../screens/Estoque'
// import AdicionarEstoqueScreen from '../../screens/AdicionarEstoque'
// import HistoricoEstoqueScreen from '../../screens/HistoricoEstoque'
import HistoricoEstoqueScreen from '../../components/Camera'
import AddNewProductScreen from '../../screens/AddNewProduct'
import VisualizarProduto from '../../screens/VisualizarProduto'
import AlterarEstoque from '../../screens/AlterarEstoque'


const MainStack = createStackNavigator();
const RootStack = createStackNavigator();
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
            {/* <BottomTab.Screen
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
            }}/> */}
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
            <BottomTab.Screen
            name="Add_New_Product"
            component={AddNewProductScreen}
            options={{
                title: 'Novo Produto',
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

function MainStackScreen(){
    return (
        <MainStack.Navigator>
         <MainStack.Screen name="Root" component={EstoqueNavigator} />
       </MainStack.Navigator>
    )
}
export default function StackEstoque(props) {
    return (
        <RootStack.Navigator mode='modal'>
            <RootStack.Screen 
                options={{headerShown:false}}
                name='EstoqueNavigation'
                component={MainStackScreen}/>
            <RootStack.Screen name="AlterarEstoque" component={AlterarEstoque}/>
            <RootStack.Screen name="VisualizarProduto" component={VisualizarProduto}/>
            <RootStack.Screen name="Camera" component={HistoricoEstoqueScreen}/>
        </RootStack.Navigator>
      );
}
