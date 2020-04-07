import React from 'react';
import { Text, View, Dimensions } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {getProductsByCategory, setSearch, activateSearchAction, deactivateSearchAction } from '../../store/fetchActions'

import DrawerTab from '../../components/DrawerTab'
import SearchBar from '../../components/SearchBar'
import IconImage from '../../components/IconImage'

import EstoqueScreen from '../../screens/Estoque'
import Camera from '../../components/Camera'
import HistoricoEstoqueScreen from '../../screens/HistoricoEstoque'
import AddNewProductScreen from '../../screens/AddNewProduct'
import VisualizarProduto from '../../screens/VisualizarProduto'
import AlterarEstoque from '../../screens/AlterarEstoque'
import RegistrosProduto from '../../screens/RegistrosProduto'
import { useSelector, useDispatch } from 'react-redux';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const INITIAL_ROUTE_NAME = 'Estoque';

function EstoqueNavigator({navigation, route}){
    const dispatch = useDispatch()
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
            <RootStack.Screen name="HistoricoEstoque" component={HistoricoEstoqueScreen}/>
            <RootStack.Screen name="RegistrosProduto" component={RegistrosProduto}/>
            <RootStack.Screen name="Camera" component={Camera}/>
        </RootStack.Navigator>
      );
}
