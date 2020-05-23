import React from 'react';
import { Text,
		FlatList,
		View,
		StyleSheet,
		TouchableOpacity,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux'

import ProdutoInfoImage from '../../components/ProdutoInfoImage'

export default function SelecionarProdutos({navigation}){
	const produtos = useSelector(({produtos}) => produtos.estoque)
	const nova_compra = useSelector(({produtos}) => produtos.nova_compra)

	const lojaCategorias = (item) =>{

		const styles = StyleSheet.create({
			container: {padding:10, margin:5},
			categoriaTxt: {textAlign: 'center', fontWeight:'bold', fontSize: 20},
			msgNenhumSelecionado: {textAlign:'center'},
			produtosSelecionados: {
				borderRadius: 25, borderWidth: 2, borderColor:'black',
				height:200,
				justifyContent:'space-between'
			},
			btnAdicionarProdutos: {
				textAlign:'center',
				borderRadius: 25, borderWidth: 2, borderColor:'#F92424',
				backgroundColor:'#2F2F2F',
				color: '#fff', fontWeight:'bold', fontSize:15,
				padding:7, width: '80%',
				marginBottom:2,
				alignSelf:'center'
			}
		})

		return (
			<View style={styles.container}>
				<Text style={styles.categoriaTxt}>{item.categoria}</Text>
				<View style={styles.produtosSelecionados}>
					{nova_compra.length ? (
							<FlatList
								data={item.produtos}
								renderItem={({item}) => {
									const produtoCategoria = nova_compra.findIndex(prod => item.id == prod.produto_id) >= 0
									if(produtoCategoria){
										return (<ProdutoInfoImage produto={item}/>)
									}
								}}
								horizontal={true}
								keyExtractor={(item, index) => String(index)}
							/>
						):(
							<Text style={styles.msgNenhumSelecionado}>Nenhum Produto Selecionado</Text>
						)
					}
					<TouchableOpacity onPress={()=> navigation.navigate('Adicionar Produtos a Compra', item)}
					>
						<Text style={styles.btnAdicionarProdutos}>Adicionar Produtos</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
	return (
		<View>
			<FlatList
				data={produtos}
				renderItem={({item})=> lojaCategorias(item)}
				keyExtractor={(item, index) => String(index)}
			/>
			<Text>Selecionar Produtos</Text>
		</View>
	)
}