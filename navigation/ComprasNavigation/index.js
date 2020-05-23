import * as React from 'react';
import { Image, View, Dimensions } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../../components/TabBarIcon';

import ComprasScreen from '../../screens/Compras';
import LivroCaixaScreen from '../../screens/LivroCaixa';
import CriarCompraScreen from '../../screens/CriarCompra';
import VisualizarCompraScreen from '../../screens/VisualizarCompra';
import EditarCompraScreen from '../../screens/EditarCompra';
import PagarCompraScreen from '../../screens/PagarCompra';
import SelecionarProdutosScreen from '../../screens/SelecionarProdutos';
import AdicionarProdutosCompraScreen from '../../screens/AdicionarProdutosCompra';

import { createStackNavigator } from '@react-navigation/stack';

import DrawerTab from '../../components/DrawerTab'
import SearchBar from '../../components/SearchBar'


const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Compras';

function ComprasTabNavigator({ navigation, route }) {
  navigation.setOptions({
     headerTitle: () => (
			<View style={{marginTop:2, height:"100%", width:Dimensions.get('window').width - Dimensions.get('window').width/11, borderColor:'green', padding: 5,borderWidth:2, flexDirection: 'row', justifyContent: 'space-between',alignItems:'center'}}>
				<DrawerTab
				route={route}
				navigation={navigation}
				INITIAL_ROUTE_NAME={INITIAL_ROUTE_NAME}
				/>
				<SearchBar/>
			</View>
		),
  });

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
    >
      <BottomTab.Screen
        name="Compras"
        key={0}
        component={ComprasScreen}
        options={{
          title: 'Compras',
          tabBarIcon: ({ focused }) => <Image
		  source={require('../../assets/images/stack.png')}
		  fadeDuration={0}
		  style={{width: 20, height: 20}}
		/>,
        }}
      />
      <BottomTab.Screen
        name="Livro Caixa"
        key={1}
        component={LivroCaixaScreen}
        options={{
          title: 'Livro Caixa',
          tabBarIcon: ({ focused }) => <Image
		  source={require('../../assets/images/livro_caixa.png')}
		  fadeDuration={0}
		  style={{width: 20, height: 20}}
		/>,
        }}
      />
      <BottomTab.Screen
        name="Adicionar"
        key={2}
        component={CriarCompraScreen}
        options={{
          title: 'Adicionar',
          tabBarIcon: ({ focused }) => <Image
		  source={require('../../assets/images/add.png')}
		  fadeDuration={0}
		  style={{width: 20, height: 20}}
		/>,
        }}
      />

    </BottomTab.Navigator>
  );
}

export default function ComprasNavigation(props) {
  return (
    <Stack.Navigator>
       <Stack.Screen name="Root" component={ComprasTabNavigator} />
	   <Stack.Screen
			name="Visualizar Compra"
			options={{
				title:"Visualizar Compra"
			}}
			component={VisualizarCompraScreen} />
	   <Stack.Screen
			name="Editar Compra"
			options={{
				title:"Editar Compra"
			}}
			component={EditarCompraScreen} />
	   <Stack.Screen
			name="Pagar Compra"
			options={{
				title:"Pagar Compra"
			}}
			component={PagarCompraScreen} />
	   <Stack.Screen
			name="Selecionar Produtos"
			options={{
				title:"Selecionar Produtos"
			}}
			component={SelecionarProdutosScreen} />
	   <Stack.Screen
			name="Adicionar Produtos a Compra"
			options={{
				title:"Adicionar Produtos a Compra"
			}}
			component={AdicionarProdutosCompraScreen} />
     </Stack.Navigator>
    );
}
