import React from 'react';
import { View, Dimensions } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DrawerTab from '../../components/DrawerTab'
import SearchBar from '../../components/SearchBar'
import IconImage from '../../components/IconImage'

import EstoqueScreen from '../../screens/Estoque'
import Camera from '../../components/Camera'
import HistoricoEstoqueScreen from '../../screens/HistoricoEstoque'
import AddNewProductScreen from '../../screens/AddNewProduct'
import VisualizarProduto from '../../screens/VisualizarProduto'
import AlterarEstoque from '../../screens/AlterarEstoque'
import EditarProduto from '../../screens/EditarProduto'

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const INITIAL_ROUTE_NAME = 'Estoque';

function EstoqueNavigator({navigation, route}){
    navigation.setOptions({ headerTitle: () => (
        <View style={{marginTop:2, height:"100%", width:Dimensions.get('window').width - Dimensions.get('window').width/11, borderColor:'green', padding: 5,borderWidth:2, flexDirection: 'row', justifyContent: 'space-between',alignItems:'center'}}>
            <DrawerTab 
                route={route}
                navigation={navigation}
                INITIAL_ROUTE_NAME={INITIAL_ROUTE_NAME}
            />
            <SearchBar/>
        </View>
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
            name="Historico"
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
                options={{
                    headerShown:false,
                }}
                name='EstoqueNavigation'
                component={MainStackScreen}
            />
            <RootStack.Screen name="AlterarEstoque" 
                options={{
                    title: "Alterar Estoque"
                }}
                component={AlterarEstoque}
            />
            <RootStack.Screen name="VisualizarProduto" 
                options={{
                    title: "Visualizar Produto"
                }}
                component={VisualizarProduto}
            />
            <RootStack.Screen name="HistoricoEstoque" 
                options={{
                    title: "Historico Estoque"
                }}
                component={HistoricoEstoqueScreen}
            />
            <RootStack.Screen name="EditarProduto" 
                options={{
                    title: "Editar Produto"
                }}
                component={EditarProduto}
            />
            <RootStack.Screen name="Camera" 
                options={{
                    title: "Camera"
                }}
                component={Camera}
            />
        </RootStack.Navigator>
      );
}
