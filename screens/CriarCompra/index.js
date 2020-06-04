import React, {useEffect, useRef} from 'react'
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native'

import { Form } from '@unform/mobile';
import {deactivateSearchAction } from '../../store/fetchActions'
import Input from '../../components/Input';
import { useDispatch, useSelector } from 'react-redux'
import { adicionarNovaCompraAction } from '../../store/fetchActions'
import ProdutoInfoImage from '../../components/ProdutoInfoImage'

export default function CriarCompra({navigation}){
    const formRef = useRef(null);
	const dispatch = useDispatch()
	const nova_compra = useSelector(({produtos}) => produtos.nova_compra)
	const categorias = useSelector(({produtos}) => produtos.estoque.map(({produtos}) => {
		return produtos
	}))

	useEffect(()=>
        navigation.addListener('focus', () => {dispatch(deactivateSearchAction())})
	,[navigation])

    async function handleSubmit({turma, barqueiro}) {
		dispatch(adicionarNovaCompraAction(turma, barqueiro, nova_compra))
		formRef.current.clearField('turma');
		formRef.current.clearField('barqueiro');
		navigation.navigate('Compras')
    }

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
		<View style={{flex: 1}}>
			<View style={{flex: 0.3, borderWidth:1}}>
				{nova_compra.length > 0 && (
					<FlatList
						data={nova_compra}
						renderItem={({item}) => {
							const allProducts = categorias.flat()
							const produtoSelecionado = allProducts.find(produto => produto.id == item.produto_id)
							if(produtoSelecionado != undefined){
								return (<ProdutoInfoImage produto={produtoSelecionado}/>)
							}
						}}
						horizontal={true}
						keyExtractor={(item, index) => String(index)}
					/>
				)}
			</View>
			<View style={{flex: 0.7, justifyContent:'space-around'}}>
				<TouchableOpacity
					style={{borderColor:'black', borderWidth:2, backgroundColor: 'yellow'}}
					onPress={() => navigation.navigate('Selecionar Produtos')}>
						<Text style={{fontWeight:'bold',textAlign:'center', color:'black', fontSize:20, margin:10}}>
							Inserir Produtos</Text>
				</TouchableOpacity>

				<Form ref={formRef} onSubmit={handleSubmit}>
					<Input label="Barqueiro" name="barqueiro"/>
					<Input label="Turma" name="turma"/>
				</Form>
				<TouchableOpacity
					style={{borderColor:'black', borderWidth:2, backgroundColor: 'yellow'}}
					onPress={() => formRef.current.submitForm()}>
						<Text style={{fontWeight:'bold',textAlign:'center', color:'black', fontSize:20, margin:10}}>Adicionar</Text>
				</TouchableOpacity>
			</View>

		</View>
	)
}