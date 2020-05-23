import React from 'react';
import { Text,
	View, FlatList, Image, StyleSheet,TouchableOpacity, ImageBackground
} from 'react-native';

import ProdutoInfoImage from '../../components/ProdutoInfoImage'

import {useDispatch, useSelector} from 'react-redux'

import {adicionarProdutoNovaCompraAction, removerProdutoNovaCompraAction} from '../../store/fetchActions'

import {getImage} from '../../helpers/Image'
import {testeStyle} from '../../helpers/Style'

const plusImage = require('../../assets/images/add.png')
const minusImage = require('../../assets/images/minus.png')

export default function AdicionarProdutosCompra({route, navigation}){
	const {produtos} = route.params
	const nova_compra = useSelector(({produtos})=> produtos.nova_compra)
	const dispatch = useDispatch()
	const handleAddProdutoCompra = (produtos) => {
		dispatch(adicionarProdutoNovaCompraAction(produtos))
	}
	const handleRemoveProdutoCompra = (produtos) => {
		dispatch(removerProdutoNovaCompraAction(produtos))
	}

	const renderProduto = (produto) => {
		const selecionadoID = nova_compra.findIndex(compraProd => compraProd.produto_id == produto.id)
		const selecionado = selecionadoID >= 0
		const styles = StyleSheet.create({
			container:{
				flexDirection:'row',
				borderWidth:3, borderColor:selecionado?'#10FF0B':'#FE0404', borderRadius:25,
				margin:5, padding: 1, marginBottom:15,
				justifyContent:'space-between',
				alignItems:'center'
			},
			imagemProduto:{
				width:120, height:selecionado?150:100,
				borderWidth:3, borderColor:'black', borderRadius:25,
			},
			imagemIcone:{
				width:45, height:45,
			},
			btnIcones:{
				...testeStyle,
				justifyContent:'space-between'
			},
			produto:{
				...testeStyle,
				flexDirection:'row',
				justifyContent:'space-between',
				margin:5, padding:5
			},
			infoProduto:{
				...testeStyle,
				padding:3,
				justifyContent:'space-between'
			},
			infoTXT:{
				...testeStyle,
				textAlign:'center',
				textAlignVertical:'center',
				width:150,
			},

		})
		return (
			<View style={styles.container}>
				<Image style={styles.imagemProduto} source={getImage(produto.imagem)}/>
				<View style={styles.produto}>
					<View style={styles.infoProduto}>
						<Text style={styles.infoTXT}>{produto.nome}</Text>
						<Text style={styles.infoTXT}>{produto.quantidade} unidades disponiveis</Text>
						<Text style={styles.infoTXT}>{produto.preco} reais p/ unidade</Text>
					</View>
					<View style={styles.btnIcones}>
						<TouchableOpacity
							onPress={() => handleAddProdutoCompra({produto_id:produto.id, quantidade:1})}
							>
							<Image style={styles.imagemIcone} source={plusImage}/>
						</TouchableOpacity>

						<TouchableOpacity
							onPress={() => handleRemoveProdutoCompra({produto_id:produto.id, quantidade:1})}
						>
							<Image style={styles.imagemIcone} source={minusImage}/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		)
	}

	const renderProdutoSelecionado = (produto) => {
		const {imagem, preco} = produtos.find(prod => produto.produto_id == prod.id)
		console.log('imagem', produto)
		const styles = StyleSheet.create({
			imagem:{
				borderColor:'black', borderRadius:35, borderWidth:2,
				width:90, height:80, margin:10, marginLeft:15
			}
		})
		return (
			<View style={{...testeStyle, justifyContent:'center', alignItems:'center'}}>
				<ImageBackground borderRadius={35} style={styles.imagem} source={getImage(imagem)}/>
				<Text style={{textAlign:'center'}}>{produto.quantidade} unidades</Text>
				<Text style={{textAlign:'center'}}>{preco*produto.quantidade} reais</Text>
			</View>
		)
	}
	return (
		<View style={{flex:1}}>
			<FlatList
				data={produtos}
				renderItem={({item})=> renderProduto(item)}
				keyExtractor={(item, index)=> String(index)}
			/>

			<View style={styles.produtosSelecionados}>
				{nova_compra.length ? (
					<FlatList
						data={nova_compra}
						renderItem={({item})=> {
							const produtoSelecionado = produtos.findIndex(prod => item.produto_id == prod.id) >= 0
							if(produtoSelecionado){
								return renderProdutoSelecionado(item)
							}
						}}
						keyExtractor={(item, index)=> String(index)}
						horizontal={true}
					/>
				):(
					<Text style={{textAlign:'center', margin:5}}>Nenhum Produto Selecionado</Text>
				)}
				<TouchableOpacity style={styles.btnConcluir} onPress={() => navigation.goBack()}>
					<Text style={styles.txtBtnConcluir}>Concluir</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	txtBtnConcluir: {
		// ...testeStyle,
		textAlign:'center', textAlignVertical:'center',
		borderRadius: 25, borderWidth: 2, borderColor:'#F92424',
		backgroundColor:'#2F2F2F',
		color: '#fff', fontWeight:'bold', fontSize:15,
		padding:10
	},
	btnConcluir:{
		width:'96%'
	},
	produtosSelecionados:{
		justifyContent:'space-between', alignItems:'center',
		borderColor:'black', borderWidth:2, height:'30%'
	}
})