import React, {useEffect, useRef} from 'react'
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native'

import { Form } from '@unform/mobile';
import {deactivateSearchAction } from '../../store/fetchActions'
import Input from '../../components/Input';
import { useDispatch, useSelector } from 'react-redux'
import { editarCompraAction, adicionarProdutoSelecionadoEdicaoAction, resetProdutoSelecionadoAction } from '../../store/fetchActions'
import ProdutoInfoImage from '../../components/ProdutoInfoImage'

export default function EditarCompra({route, navigation}){
	const formRef = useRef(null);
	const {barqueiro, id, nome, pago, produtos} = route.params

	const dispatch = useDispatch()
	const nova_compra = useSelector(({produtos}) => produtos.compra_selecionada)
	const categorias = useSelector(({produtos}) => produtos.estoque.map(({produtos}) => {
		return produtos
	}))

	useEffect(()=>{
		dispatch(resetProdutoSelecionadoAction())
		produtos.map((categoria_produtos, index, arr) => {
			const {produtos, categoria} = categoria_produtos
			produtos.map(({dados}) =>{
				dados.map(dado => {
					const {produto_id, quantidade} = dado
					dispatch(adicionarProdutoSelecionadoEdicaoAction({produto_id, quantidade}, index, categoria))
				})
			})
		})
	},[])

	useEffect(()=>
        navigation.addListener('focus', () => {dispatch(deactivateSearchAction())})
	,[navigation])

    async function handleSubmit({turma, barqueiro}) {
		dispatch(editarCompraAction(turma, barqueiro, nova_compra, id))
		navigation.goBack()
		navigation.goBack()
    }

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
								return (<ProdutoInfoImage produto={produtoSelecionado} edicao={true}/>)
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
					onPress={() => navigation.navigate('Selecionar Produtos', true)}>
						<Text style={{fontWeight:'bold',textAlign:'center', color:'black', fontSize:20, margin:10}}>
							Inserir Produtos</Text>
				</TouchableOpacity>

				<Form ref={formRef} onSubmit={handleSubmit}>
					<Input label="Barqueiro" name="barqueiro" defaultValue={barqueiro}/>
					<Input label="Turma" name="turma" defaultValue={nome}/>
				</Form>
				<TouchableOpacity
					style={{borderColor:'black', borderWidth:2, backgroundColor: 'yellow'}}
					onPress={() => formRef.current.submitForm()}>
						<Text style={{fontWeight:'bold',textAlign:'center', color:'black', fontSize:20, margin:10}}>Editar</Text>
				</TouchableOpacity>
			</View>

		</View>
	)
}